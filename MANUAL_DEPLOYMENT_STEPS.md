# 🚀 MANUAL DEPLOYMENT STEPS - Brain Logic Website

## 📋 **IMMEDIATE ACTION REQUIRED**

Since we're having SSH authentication issues, here's the manual deployment process:

### **Step 1: Fix SSH Access (5 minutes)**

**Option A: Reset VPS Password**
1. Login to your Hostinger control panel
2. Go to VPS management
3. Reset the root password
4. Use the new password for SSH access

**Option B: Use Hostinger File Manager**
1. Login to Hostinger control panel
2. Use the built-in file manager
3. Upload files directly through the web interface

### **Step 2: Upload Project Files**

**Method 1: Using SSH (if password reset works)**
```bash
# Connect to VPS
ssh root@46.202.163.122

# Create project directory
mkdir -p /var/www/brainlogic
cd /var/www/brainlogic

# Upload your files (you'll need to transfer them)
```

**Method 2: Using Hostinger File Manager**
1. Zip your entire `brainlogic-website` folder
2. Upload via Hostinger file manager to `/var/www/`
3. Extract the files

### **Step 3: Run Deployment Script**

Once files are uploaded, run this command on the VPS:
```bash
cd /var/www/brainlogic
chmod +x deployment-setup.sh
./deployment-setup.sh
```

## 🔧 **ALTERNATIVE: Quick Manual Setup**

If the script doesn't work, run these commands one by one:

### **Install Required Software:**
```bash
# Update system
apt update && apt upgrade -y

# Install Node.js 18.x
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt-get install -y nodejs

# Install other tools
apt install nginx git -y
npm install -g pm2
```

### **Deploy Website:**
```bash
# Go to project directory
cd /var/www/brainlogic

# Install dependencies
npm install
cd backend && npm install && cd ..

# Build frontend
npm run build

# Start backend
cd backend
pm2 start server.js --name "brainlogic-api"
pm2 startup
pm2 save
```

### **Configure Nginx:**
```bash
# Create Nginx config
cat > /etc/nginx/sites-available/brainlogic.in << 'EOF'
server {
    listen 80;
    server_name brainlogic.in www.brainlogic.in;

    location / {
        root /var/www/brainlogic/dist;
        try_files $uri $uri/ /index.html;
    }

    location /api/ {
        proxy_pass http://localhost:3001;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
EOF

# Enable site
ln -s /etc/nginx/sites-available/brainlogic.in /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl restart nginx
```

## 🌐 **DNS Configuration (YOU MUST DO THIS)**

### **GoDaddy DNS Settings:**
1. Login to GoDaddy
2. Go to your domain `brainlogic.in`
3. Click "DNS" or "Manage DNS"
4. **Add these A records:**

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 46.202.163.122 | 600 |
| A | www | 46.202.163.122 | 600 |

5. **Delete any existing A records** that point elsewhere
6. Save changes

**DNS propagation takes 15-60 minutes**

## 🔒 **SSL Certificate (After DNS works)**

Once DNS is working, run:
```bash
# Install Certbot
apt install certbot python3-certbot-nginx -y

# Get SSL certificate
certbot --nginx -d brainlogic.in -d www.brainlogic.in
```

## ✅ **Testing Checklist**

### **After deployment:**
- [ ] Check if website loads: `curl http://46.202.163.122`
- [ ] Check backend API: `curl http://46.202.163.122:3001/api/health`
- [ ] Check PM2 status: `pm2 status`
- [ ] Check Nginx status: `systemctl status nginx`

### **After DNS update:**
- [ ] Test domain: `ping brainlogic.in`
- [ ] Website loads: `http://brainlogic.in`
- [ ] Contact form works

### **After SSL:**
- [ ] HTTPS works: `https://brainlogic.in`
- [ ] HTTP redirects to HTTPS

## 🚨 **TROUBLESHOOTING**

### **If SSH still doesn't work:**
1. Contact Hostinger support for VPS access
2. Use their web-based terminal if available
3. Upload files via FTP/SFTP

### **If website doesn't load:**
1. Check if services are running: `pm2 status`
2. Check Nginx logs: `tail -f /var/log/nginx/error.log`
3. Check if port 80 is open: `netstat -tlnp | grep :80`

### **If DNS doesn't propagate:**
1. Use online DNS checker tools
2. Try different DNS servers (8.8.8.8, 1.1.1.1)
3. Clear your local DNS cache

## 📞 **NEXT STEPS**

1. **Immediate:** Fix VPS access and upload files
2. **Deploy:** Run the deployment commands
3. **DNS:** Update GoDaddy DNS records
4. **Test:** Verify everything works
5. **SSL:** Install certificate once DNS works

**Estimated time: 1-2 hours (including DNS propagation)**

---

**Need help? I'm here to guide you through each step! 🚀**
