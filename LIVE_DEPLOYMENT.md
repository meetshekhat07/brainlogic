# Brain Logic Website - LIVE DEPLOYMENT

## 🚀 **DEPLOYMENT IN PROGRESS**

### **Server Details:**
- **VPS IP:** 46.202.163.122
- **Domain:** brainlogic.in
- **OS:** Ubuntu 24.04
- **GitHub:** https://github.com/meetshekhat07/brainlogic

### **Current Status:**
- ✅ **Repository:** Ready to create
- 🔄 **VPS Setup:** Starting now
- ⏳ **Domain DNS:** Next step
- ⏳ **SSL Certificate:** After DNS

---

## 📋 **IMMEDIATE NEXT STEPS**

### **Step 1: Create GitHub Repository** (5 minutes)
I'll create the repository and push your website code.

### **Step 2: VPS Server Setup** (15 minutes)
Connect to VPS and install all required software:
- Node.js 18.x
- Nginx web server
- PM2 process manager
- SSL tools (Certbot)

### **Step 3: Deploy Website** (10 minutes)
- Clone repository to VPS
- Build React frontend
- Start Node.js backend
- Configure Nginx

### **Step 4: DNS Configuration** (5 minutes setup + 30 minutes propagation)
**YOU NEED TO DO THIS STEP:**

**GoDaddy DNS Records:**
| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 46.202.163.122 | 600 |
| A | www | 46.202.163.122 | 600 |

### **Step 5: SSL Certificate** (5 minutes)
Install free Let's Encrypt SSL certificate.

---

## 🌐 **DNS CONFIGURATION INSTRUCTIONS**

### **What You Need to Do in GoDaddy:**

1. **Login to GoDaddy**
   - Go to godaddy.com
   - Login to your account

2. **Access DNS Management**
   - Go to "My Products"
   - Find "brainlogic.in" domain
   - Click "DNS" or "Manage DNS"

3. **Update A Records**
   - **Delete any existing A records**
   - **Add new A record:**
     - Type: A
     - Host: @
     - Points to: 46.202.163.122
     - TTL: 600 seconds
   
   - **Add www A record:**
     - Type: A
     - Host: www
     - Points to: 46.202.163.122
     - TTL: 600 seconds

4. **Save Changes**
   - Click "Save" or "Update"
   - DNS propagation takes 15-60 minutes

---

## 🔧 **TECHNICAL SETUP**

### **Server Configuration:**
```bash
# Website location: /var/www/brainlogic/
# Frontend build: /var/www/brainlogic/dist/
# Backend API: /var/www/brainlogic/backend/
# Nginx config: /etc/nginx/sites-available/brainlogic.in
```

### **Services:**
- **Frontend:** Served by Nginx (port 80/443)
- **Backend API:** Node.js on port 3001 (proxied by Nginx)
- **Process Manager:** PM2 for auto-restart
- **SSL:** Let's Encrypt (free)

---

## 🧪 **TESTING CHECKLIST**

### **After VPS Setup:**
- [ ] Server accessible via SSH
- [ ] All software installed
- [ ] Website files deployed
- [ ] Services running

### **After DNS Update:**
- [ ] brainlogic.in resolves to 46.202.163.122
- [ ] www.brainlogic.in resolves to 46.202.163.122
- [ ] Website loads (may take 15-60 minutes)

### **After SSL Installation:**
- [ ] HTTPS working
- [ ] HTTP redirects to HTTPS
- [ ] SSL certificate valid

### **Final Testing:**
- [ ] All pages load correctly
- [ ] Contact form works
- [ ] Interactive animations working
- [ ] Mobile responsive
- [ ] Fast loading times

---

## ⏰ **TIMELINE**

### **Immediate (Next 30 minutes):**
1. **0-5 min:** Create GitHub repository
2. **5-20 min:** VPS server setup
3. **20-25 min:** Deploy website
4. **25-30 min:** Configure Nginx

### **Your Action Required:**
5. **30-35 min:** Update DNS in GoDaddy
6. **35-95 min:** Wait for DNS propagation

### **Final Steps:**
7. **95-100 min:** Install SSL certificate
8. **100-110 min:** Final testing and go live

**Total Time: ~2 hours (including DNS propagation)**

---

## 🚨 **IMPORTANT NOTES**

### **DNS Propagation:**
- **Time:** 15-60 minutes typically
- **Check:** Use online DNS checker tools
- **Verify:** `ping brainlogic.in` should return 46.202.163.122

### **Backup Plan:**
- If DNS takes longer, we can test using IP address
- SSL installation requires working DNS
- All functionality will work once DNS propagates

### **Support:**
- I'll monitor the deployment process
- Real-time troubleshooting if needed
- Complete testing before declaring live

---

## 📞 **CONTACT DURING DEPLOYMENT**

If you encounter any issues:
1. **DNS Configuration:** I'll provide step-by-step guidance
2. **Technical Issues:** I'll handle all server-side problems
3. **Testing:** We'll verify everything together

**Ready to start deployment now! 🚀**

The website will be live at **https://brainlogic.in** within 2 hours.
