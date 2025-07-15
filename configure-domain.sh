#!/bin/bash

# Brain Logic Info Solutions - Domain Configuration Helper
# This script helps configure Nginx and SSL for your domain

echo "🌐 Brain Logic Info Solutions - Domain Configuration"
echo "===================================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_step() {
    echo -e "\n${BLUE}[STEP]${NC} $1"
    echo "----------------------------------------"
}

# Get domain name from user
echo -e "${BLUE}Enter your domain name (e.g., brainlogicinfosolutions.com):${NC}"
read -p "Domain: " DOMAIN

if [[ -z "$DOMAIN" ]]; then
    print_error "Domain name is required!"
    exit 1
fi

print_status "Configuring for domain: $DOMAIN"

print_step "1. Creating Nginx Configuration"

# Create Nginx configuration
sudo tee /etc/nginx/sites-available/brainlogic > /dev/null <<EOF
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;
    
    # Frontend (React build files)
    location / {
        root /var/www/brainlogic/dist;
        index index.html;
        try_files \$uri \$uri/ /index.html;
        
        # Cache static assets
        location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }
    }
    
    # Backend API
    location /api/ {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
}
EOF

print_status "Nginx configuration created"

print_step "2. Enabling Site"
sudo ln -sf /etc/nginx/sites-available/brainlogic /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Test Nginx configuration
if sudo nginx -t; then
    print_status "Nginx configuration is valid"
    sudo systemctl reload nginx
    print_status "Nginx reloaded"
else
    print_error "Nginx configuration has errors!"
    exit 1
fi

print_step "3. DNS Check"
print_status "Checking if domain points to this server..."

# Get server IP
SERVER_IP=$(curl -s ifconfig.me)
print_status "Server IP: $SERVER_IP"

# Check DNS resolution
DOMAIN_IP=$(dig +short $DOMAIN | tail -n1)
if [[ "$DOMAIN_IP" == "$SERVER_IP" ]]; then
    print_status "✅ DNS is correctly configured!"
    
    print_step "4. Setting up SSL Certificate"
    print_warning "Make sure your domain is accessible via HTTP first"
    echo -e "${YELLOW}Do you want to set up SSL certificate now? (y/n):${NC}"
    read -p "Setup SSL: " SETUP_SSL
    
    if [[ "$SETUP_SSL" =~ ^[Yy]$ ]]; then
        print_status "Setting up SSL certificate..."
        sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN --non-interactive --agree-tos --email admin@$DOMAIN
        
        if [[ $? -eq 0 ]]; then
            print_status "✅ SSL certificate installed successfully!"
        else
            print_warning "SSL setup failed. You can run it manually later:"
            echo "sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN"
        fi
    fi
    
else
    print_warning "⚠️  DNS not configured correctly"
    print_status "Domain $DOMAIN points to: $DOMAIN_IP"
    print_status "Server IP is: $SERVER_IP"
    echo ""
    print_status "Please configure your GoDaddy DNS with these A records:"
    echo "Type: A, Name: @, Value: $SERVER_IP"
    echo "Type: A, Name: www, Value: $SERVER_IP"
    echo ""
    print_status "Wait for DNS propagation (up to 24 hours) then run this script again"
fi

print_step "5. Final Status"
echo "Domain: $DOMAIN"
echo "Server IP: $SERVER_IP"
echo "Nginx Status: $(sudo systemctl is-active nginx)"
echo "PM2 Status: $(pm2 list | grep -c online) processes online"

print_status "Domain configuration completed!"
echo ""
echo "🎉 Your website should now be accessible at:"
echo "   http://$DOMAIN"
if [[ "$SETUP_SSL" =~ ^[Yy]$ ]]; then
    echo "   https://$DOMAIN"
fi
echo ""
echo "📋 Next steps:"
echo "1. Test your website: http://$DOMAIN"
echo "2. Test contact form functionality"
echo "3. Verify email and WhatsApp notifications"
echo "4. Run performance and security tests"
