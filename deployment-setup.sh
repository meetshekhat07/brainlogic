#!/bin/bash

# Brain Logic Website Deployment Script
# VPS: 46.202.163.122 (Ubuntu 24.04)
# Domain: brainlogic.in

echo "🚀 Starting Brain Logic Website Deployment..."

# Update system packages
echo "📦 Updating system packages..."
apt update && apt upgrade -y

# Install Node.js 18.x
echo "📦 Installing Node.js 18.x..."
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt-get install -y nodejs

# Install Nginx
echo "📦 Installing Nginx..."
apt install nginx -y

# Install PM2 globally
echo "📦 Installing PM2..."
npm install -g pm2

# Install Git
echo "📦 Installing Git..."
apt install git -y

# Install Certbot for SSL
echo "📦 Installing Certbot for SSL..."
apt install snapd -y
snap install core; snap refresh core
snap install --classic certbot
ln -s /snap/bin/certbot /usr/bin/certbot

# Create website directory
echo "📁 Creating website directory..."
mkdir -p /var/www/brainlogic
cd /var/www/brainlogic

# Clone repository (will be updated with actual repo URL)
echo "📥 Cloning website repository..."
git clone https://github.com/meetshekhat07/brainlogic.git .

# Install dependencies
echo "📦 Installing website dependencies..."
npm install

# Install backend dependencies
echo "📦 Installing backend dependencies..."
cd backend
npm install
cd ..

# Build React frontend
echo "🏗️ Building React frontend..."
npm run build

# Create production environment file
echo "⚙️ Creating production environment..."
cat > backend/.env << EOF
# Server Configuration
PORT=3001

# Email Configuration (placeholder - will be updated later)
EMAIL_USER=brain.logic08@gmail.com
EMAIL_PASS=placeholder-app-password
NOTIFICATION_EMAIL=brain.logic08@gmail.com

# Twilio WhatsApp Configuration (placeholder)
TWILIO_ACCOUNT_SID=placeholder-account-sid
TWILIO_AUTH_TOKEN=placeholder-auth-token
TWILIO_WHATSAPP_FROM=+14155238886
WHATSAPP_TO=+917575011974
EOF

# Configure Nginx
echo "🌐 Configuring Nginx..."
cat > /etc/nginx/sites-available/brainlogic.in << EOF
server {
    listen 80;
    server_name brainlogic.in www.brainlogic.in;

    # Serve React build files
    location / {
        root /var/www/brainlogic/dist;
        try_files \$uri \$uri/ /index.html;
        
        # Cache static assets
        location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }
    }

    # Proxy API requests to Node.js backend
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

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied expired no-cache no-store private must-revalidate auth;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/javascript;
}
EOF

# Enable the site
ln -s /etc/nginx/sites-available/brainlogic.in /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

# Test Nginx configuration
nginx -t

# Start and enable services
echo "🔄 Starting services..."
systemctl start nginx
systemctl enable nginx

# Start backend with PM2
echo "🚀 Starting backend with PM2..."
cd /var/www/brainlogic/backend
pm2 start server.js --name "brainlogic-api"
pm2 startup
pm2 save

# Configure firewall
echo "🔒 Configuring firewall..."
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw --force enable

# Set proper permissions
echo "🔐 Setting permissions..."
chown -R www-data:www-data /var/www/brainlogic
chmod -R 755 /var/www/brainlogic

echo "✅ Basic deployment completed!"
echo "🌐 Website should be accessible at http://brainlogic.in"
echo "📝 Next steps:"
echo "   1. Update DNS records in GoDaddy"
echo "   2. Install SSL certificate"
echo "   3. Test website functionality"
