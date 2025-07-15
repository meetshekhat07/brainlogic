#!/bin/bash

# Brain Logic Info Solutions - VPS Setup Script
# This script automates the initial setup of your Hostinger VPS

echo "🚀 Brain Logic Info Solutions - VPS Setup Script"
echo "=================================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
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

# Check if running as root
if [[ $EUID -eq 0 ]]; then
   print_error "This script should not be run as root for security reasons."
   print_status "Please run as a regular user with sudo privileges."
   exit 1
fi

print_step "1. Updating System Packages"
sudo apt update && sudo apt upgrade -y
print_status "System packages updated successfully"

print_step "2. Installing Node.js 18.x"
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
print_status "Node.js installed: $(node --version)"
print_status "NPM installed: $(npm --version)"

print_step "3. Installing Nginx"
sudo apt install nginx -y
sudo systemctl enable nginx
print_status "Nginx installed: $(nginx -v 2>&1)"

print_step "4. Installing PM2 Process Manager"
sudo npm install -g pm2
print_status "PM2 installed: $(pm2 --version)"

print_step "5. Installing Additional Tools"
sudo apt install git curl wget unzip -y
print_status "Additional tools installed"

print_step "6. Installing Certbot for SSL"
sudo apt install certbot python3-certbot-nginx -y
print_status "Certbot installed for SSL certificates"

print_step "7. Configuring Firewall (UFW)"
sudo ufw --force enable
sudo ufw allow ssh
sudo ufw allow 'Nginx Full'
print_status "Firewall configured"

print_step "8. Creating Project Directory"
sudo mkdir -p /var/www/brainlogic
sudo chown $USER:$USER /var/www/brainlogic
print_status "Project directory created: /var/www/brainlogic"

print_step "9. Setting up PM2 Startup"
pm2 startup | grep "sudo env" | bash
print_status "PM2 startup configured"

print_step "10. Final System Status Check"
echo "Node.js: $(node --version)"
echo "NPM: $(npm --version)"
echo "Nginx: $(nginx -v 2>&1)"
echo "PM2: $(pm2 --version)"
echo "Git: $(git --version)"
echo "Certbot: $(certbot --version)"

print_status "VPS setup completed successfully!"
echo ""
echo "🎉 Your VPS is now ready for deployment!"
echo ""
echo "Next steps:"
echo "1. Upload your website code to /var/www/brainlogic/"
echo "2. Configure your domain DNS in GoDaddy"
echo "3. Follow the deployment guide to complete setup"
echo ""
echo "📚 See HOSTINGER_VPS_DEPLOYMENT_GUIDE.md for detailed instructions"
