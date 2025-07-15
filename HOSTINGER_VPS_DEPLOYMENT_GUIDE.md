# Complete Deployment Guide: Hostinger VPS + GoDaddy Domain

This guide provides step-by-step instructions to deploy your Brain Logic Info Solutions website (React frontend + Node.js backend) on Hostinger VPS with a GoDaddy domain.

## 📋 Prerequisites

- ✅ Hostinger VPS account with root access
- ✅ GoDaddy domain name
- ✅ Brain Logic website code (React + Node.js)
- ✅ Basic terminal/SSH knowledge

## 🎯 Deployment Overview

We'll set up:
1. **Frontend (React)** - Static files served by Nginx
2. **Backend (Node.js)** - API server with PM2 process manager
3. **Nginx** - Web server and reverse proxy
4. **SSL Certificate** - Free Let's Encrypt SSL
5. **Domain Configuration** - GoDaddy DNS pointing to Hostinger VPS

---

## 🚀 STEP 1: Initial VPS Setup

### 1.1 Connect to Your Hostinger VPS

```bash
# SSH into your VPS (replace with your VPS IP)
ssh root@your-vps-ip-address

# Update system packages
apt update && apt upgrade -y
```

### 1.2 Create Non-Root User (Security Best Practice)

```bash
# Create new user
adduser brainlogic

# Add user to sudo group
usermod -aG sudo brainlogic

# Switch to new user
su - brainlogic
```

### 1.3 Install Required Software

```bash
# Install Node.js (using NodeSource repository)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install Nginx
sudo apt install nginx -y

# Install PM2 (Process Manager for Node.js)
sudo npm install -g pm2

# Install Git
sudo apt install git -y

# Verify installations
node --version
npm --version
nginx -v
pm2 --version
```

---

## 🌐 STEP 2: Domain Configuration (GoDaddy)

### 2.1 Configure DNS Records in GoDaddy

1. **Log into GoDaddy Account**
   - Go to [godaddy.com](https://godaddy.com)
   - Sign in to your account
   - Go to "My Products" → "DNS"

2. **Add/Update DNS Records**
   ```
   Type: A
   Name: @
   Value: YOUR_VPS_IP_ADDRESS
   TTL: 1 Hour
   
   Type: A
   Name: www
   Value: YOUR_VPS_IP_ADDRESS
   TTL: 1 Hour
   ```

3. **Wait for DNS Propagation** (can take up to 24 hours, usually 1-2 hours)

### 2.2 Verify DNS Configuration

```bash
# Check if domain points to your VPS
nslookup yourdomain.com
dig yourdomain.com
```

---

## 📁 STEP 3: Upload Website Code

### 3.1 Create Project Directory

```bash
# Create directory for the website
sudo mkdir -p /var/www/brainlogic
sudo chown brainlogic:brainlogic /var/www/brainlogic
cd /var/www/brainlogic
```

### 3.2 Upload Code (Choose One Method)

#### Method A: Using Git (Recommended)
```bash
# Clone your repository
git clone https://github.com/yourusername/brainlogic-website.git .

# Or if you don't have a repository, create one and push your code first
```

#### Method B: Using SCP/SFTP
```bash
# From your local machine, upload the files
scp -r /path/to/brainlogic-website/* brainlogic@your-vps-ip:/var/www/brainlogic/
```

#### Method C: Manual Upload via File Manager
- Use Hostinger's File Manager in hPanel
- Upload the entire `brainlogic-website` folder to `/var/www/brainlogic/`

---

## ⚙️ STEP 4: Backend Setup (Node.js API)

### 4.1 Install Backend Dependencies

```bash
cd /var/www/brainlogic/backend
npm install
```

### 4.2 Configure Environment Variables

```bash
# Create production environment file
cp .env.example .env
nano .env
```

**Update .env with your production values:**
```env
# Server Configuration
PORT=3001
NODE_ENV=production

# Email Configuration (Gmail)
EMAIL_USER=brain.logic08@gmail.com
EMAIL_PASS=your-gmail-app-password
NOTIFICATION_EMAIL=brain.logic08@gmail.com

# Twilio WhatsApp Configuration
TWILIO_ACCOUNT_SID=your-twilio-account-sid
TWILIO_AUTH_TOKEN=your-twilio-auth-token
TWILIO_WHATSAPP_FROM=+14155238886
WHATSAPP_TO=+917575011974
```

### 4.3 Test Backend Locally

```bash
# Test the backend
npm start

# In another terminal, test the API
curl http://localhost:3001/api/health
```

### 4.4 Set Up PM2 Process Manager

```bash
# Create PM2 ecosystem file
nano ecosystem.config.js
```

**Add this content:**
```javascript
module.exports = {
  apps: [{
    name: 'brainlogic-api',
    script: 'server.js',
    cwd: '/var/www/brainlogic/backend',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3001
    }
  }]
};
```

```bash
# Start the application with PM2
pm2 start ecosystem.config.js

# Save PM2 configuration
pm2 save

# Set up PM2 to start on system boot
pm2 startup
# Follow the instructions provided by the command above

# Check PM2 status
pm2 status
pm2 logs brainlogic-api
```

---

## 🎨 STEP 5: Frontend Setup (React)

### 5.1 Build React Application

```bash
cd /var/www/brainlogic

# Install frontend dependencies
npm install

# Update API URL for production
nano src/pages/Contact.jsx
```

**Update the API URL in Contact.jsx:**
```javascript
// Change this line:
const response = await fetch('http://localhost:3001/api/contact', {

// To this (replace with your domain):
const response = await fetch('https://yourdomain.com/api/contact', {
```

```bash
# Build the React application
npm run build

# The built files will be in the 'dist' directory
ls -la dist/
```

---

## 🌐 STEP 6: Nginx Configuration

### 6.1 Create Nginx Configuration

```bash
# Create Nginx site configuration
sudo nano /etc/nginx/sites-available/brainlogic
```

**Add this configuration (replace `yourdomain.com`):**
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    
    # Frontend (React build files)
    location / {
        root /var/www/brainlogic/dist;
        index index.html;
        try_files $uri $uri/ /index.html;
        
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
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
}
```

### 6.2 Enable the Site

```bash
# Enable the site
sudo ln -s /etc/nginx/sites-available/brainlogic /etc/nginx/sites-enabled/

# Remove default site
sudo rm /etc/nginx/sites-enabled/default

# Test Nginx configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
sudo systemctl enable nginx
```

---

## 🔒 STEP 7: SSL Certificate (Let's Encrypt)

### 7.1 Install Certbot

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y
```

### 7.2 Obtain SSL Certificate

```bash
# Get SSL certificate (replace with your domain)
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Follow the prompts:
# - Enter your email address
# - Agree to terms of service
# - Choose whether to share email with EFF
# - Certbot will automatically configure Nginx for HTTPS
```

### 7.3 Test SSL Auto-Renewal

```bash
# Test automatic renewal
sudo certbot renew --dry-run

# Check renewal timer
sudo systemctl status certbot.timer
```

---

## 🔥 STEP 8: Firewall Configuration

### 8.1 Configure UFW Firewall

```bash
# Enable UFW
sudo ufw enable

# Allow SSH (important!)
sudo ufw allow ssh

# Allow HTTP and HTTPS
sudo ufw allow 'Nginx Full'

# Check firewall status
sudo ufw status
```

---

## ✅ STEP 9: Final Testing & Verification

### 9.1 Test Website Functionality

1. **Visit your domain:** `https://yourdomain.com`
2. **Check all pages:** Home, About, Services, Portfolio, Careers, Blog, Contact
3. **Test contact form:** Fill out and submit the contact form
4. **Verify notifications:** Check email and WhatsApp for notifications

### 9.2 Performance & Security Checks

```bash
# Check PM2 status
pm2 status

# Check Nginx status
sudo systemctl status nginx

# Check SSL certificate
sudo certbot certificates

# View backend logs
pm2 logs brainlogic-api

# View Nginx logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

### 9.3 Online Testing Tools

- **SSL Test:** [SSL Labs](https://www.ssllabs.com/ssltest/)
- **Speed Test:** [GTmetrix](https://gtmetrix.com/)
- **Security Test:** [Security Headers](https://securityheaders.com/)

---

## 🔧 STEP 10: Maintenance & Monitoring

### 10.1 Regular Maintenance Commands

```bash
# Update system packages
sudo apt update && sudo apt upgrade -y

# Restart services if needed
sudo systemctl restart nginx
pm2 restart brainlogic-api

# Check disk space
df -h

# Check memory usage
free -h

# Monitor PM2 processes
pm2 monit
```

### 10.2 Backup Strategy

```bash
# Create backup script
nano ~/backup.sh
```

**Backup script content:**
```bash
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/home/brainlogic/backups"
mkdir -p $BACKUP_DIR

# Backup website files
tar -czf $BACKUP_DIR/website_$DATE.tar.gz /var/www/brainlogic

# Backup Nginx configuration
tar -czf $BACKUP_DIR/nginx_$DATE.tar.gz /etc/nginx/sites-available/brainlogic

# Keep only last 7 backups
find $BACKUP_DIR -name "*.tar.gz" -mtime +7 -delete

echo "Backup completed: $DATE"
```

```bash
# Make script executable
chmod +x ~/backup.sh

# Add to crontab for daily backups
crontab -e
# Add this line for daily backup at 2 AM:
# 0 2 * * * /home/brainlogic/backup.sh
```

---

## 🚨 Troubleshooting Common Issues

### Issue 1: Website Not Loading
```bash
# Check Nginx status
sudo systemctl status nginx

# Check Nginx configuration
sudo nginx -t

# Check DNS propagation
nslookup yourdomain.com
```

### Issue 2: API Not Working
```bash
# Check PM2 status
pm2 status

# Check backend logs
pm2 logs brainlogic-api

# Restart backend
pm2 restart brainlogic-api
```

### Issue 3: SSL Certificate Issues
```bash
# Check certificate status
sudo certbot certificates

# Renew certificate manually
sudo certbot renew

# Check Nginx SSL configuration
sudo nginx -t
```

### Issue 4: Contact Form Not Sending Notifications
```bash
# Check backend logs
pm2 logs brainlogic-api

# Test API directly
curl -X POST https://yourdomain.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Test message"}'

# Check environment variables
cd /var/www/brainlogic/backend
cat .env
```

---

## 🎉 Deployment Complete!

Your Brain Logic Info Solutions website is now live at:
- **Website:** `https://yourdomain.com`
- **API Health Check:** `https://yourdomain.com/api/health`

### Next Steps:
1. ✅ Test all website functionality
2. ✅ Verify email and WhatsApp notifications
3. ✅ Set up monitoring and backups
4. ✅ Update DNS records if needed
5. ✅ Configure analytics (Google Analytics)

### Support Resources:
- **Hostinger VPS Documentation:** [Hostinger Help Center](https://support.hostinger.com/)
- **GoDaddy DNS Help:** [GoDaddy DNS Management](https://godaddy.com/help/dns)
- **Let's Encrypt Documentation:** [Certbot Instructions](https://certbot.eff.org/)

**Your professional IT company website is now live and ready to receive client inquiries! 🚀**

---

## 📋 Quick Deployment Checklist

### Pre-Deployment
- [ ] Hostinger VPS access confirmed
- [ ] GoDaddy domain access confirmed
- [ ] Website code ready locally
- [ ] Email credentials (Gmail App Password)
- [ ] Twilio credentials (if using WhatsApp)

### VPS Setup
- [ ] SSH into VPS
- [ ] Update system packages
- [ ] Create non-root user
- [ ] Install Node.js, Nginx, PM2, Git

### Domain Configuration
- [ ] Configure GoDaddy DNS A records
- [ ] Wait for DNS propagation
- [ ] Verify domain points to VPS

### Code Deployment
- [ ] Upload website code to VPS
- [ ] Install backend dependencies
- [ ] Configure production .env file
- [ ] Test backend locally

### Process Management
- [ ] Create PM2 ecosystem config
- [ ] Start backend with PM2
- [ ] Configure PM2 startup

### Frontend Build
- [ ] Update API URL in frontend
- [ ] Build React application
- [ ] Verify dist folder created

### Web Server Setup
- [ ] Create Nginx configuration
- [ ] Enable site in Nginx
- [ ] Test Nginx configuration
- [ ] Restart Nginx

### SSL & Security
- [ ] Install Certbot
- [ ] Obtain SSL certificate
- [ ] Test SSL auto-renewal
- [ ] Configure firewall

### Final Testing
- [ ] Test website loading
- [ ] Test all pages navigation
- [ ] Test contact form submission
- [ ] Verify email notifications
- [ ] Verify WhatsApp notifications
- [ ] Check SSL certificate
- [ ] Run performance tests

### Post-Deployment
- [ ] Set up monitoring
- [ ] Configure backups
- [ ] Document credentials
- [ ] Update team on new website

---

## 🆘 Emergency Contacts & Commands

### Quick Service Restart
```bash
# Restart everything
sudo systemctl restart nginx
pm2 restart brainlogic-api

# Check status
sudo systemctl status nginx
pm2 status
```

### View Logs
```bash
# Backend logs
pm2 logs brainlogic-api

# Nginx logs
sudo tail -f /var/log/nginx/error.log
```

### Emergency Rollback
```bash
# Stop services
pm2 stop brainlogic-api
sudo systemctl stop nginx

# Restore from backup
cd /home/brainlogic/backups
tar -xzf website_YYYYMMDD_HHMMSS.tar.gz -C /

# Restart services
sudo systemctl start nginx
pm2 start brainlogic-api
```

**Need help? Check the troubleshooting section above or contact your hosting provider! 📞**
