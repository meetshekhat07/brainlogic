# Email & WhatsApp Notification Setup Guide

This guide will help you set up email and WhatsApp notifications for the contact form submissions.

## 🚀 Quick Start

### 1. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies (already done if you followed the main setup)
npm install

# Copy environment template
cp .env.example .env

# Edit .env file with your credentials (see configuration sections below)
```

### 2. Start the Backend Server

```bash
# Development mode (with auto-restart)
npm run dev

# Production mode
npm start
```

The backend API will run on `http://localhost:3001`

## 📧 Email Configuration (Gmail)

### Step 1: Enable 2-Factor Authentication
1. Go to your Google Account settings
2. Enable 2-Factor Authentication if not already enabled

### Step 2: Generate App Password
1. Go to Google Account → Security → 2-Step Verification
2. Scroll down to "App passwords"
3. Generate a new app password for "Mail"
4. Copy the 16-character password

### Step 3: Update .env File
```env
EMAIL_USER=brain.logic08@gmail.com
EMAIL_PASS=your-16-character-app-password
NOTIFICATION_EMAIL=brain.logic08@gmail.com
```

### Alternative Email Providers

#### Outlook/Hotmail
```env
# In server.js, change the transporter configuration:
service: 'hotmail'
```

#### Custom SMTP
```env
# In server.js, replace service with host/port:
host: 'smtp.yourdomain.com'
port: 587
secure: false
```

## 📱 WhatsApp Configuration (Twilio)

### Step 1: Create Twilio Account
1. Sign up at [twilio.com](https://www.twilio.com)
2. Verify your phone number
3. Get $15 free trial credit

### Step 2: Set Up WhatsApp Sandbox
1. Go to Console → Messaging → Try it out → Send a WhatsApp message
2. Follow the instructions to join the sandbox
3. Send the join code to the Twilio WhatsApp number

### Step 3: Get Credentials
1. Go to Console → Account → Account Info
2. Copy Account SID and Auth Token
3. Note the WhatsApp sandbox number (usually +1 415 523 8886)

### Step 4: Update .env File
```env
TWILIO_ACCOUNT_SID=your-account-sid
TWILIO_AUTH_TOKEN=your-auth-token
TWILIO_WHATSAPP_FROM=+14155238886
WHATSAPP_TO=+917575011974
```

**Important:** 
- `WHATSAPP_TO` should be your phone number in E.164 format (+country code + number)
- This number must be verified in your Twilio account

## 🔧 Complete .env Configuration

Create a `.env` file in the `backend` directory:

```env
# Server Configuration
PORT=3001

# Email Configuration
EMAIL_USER=brain.logic08@gmail.com
EMAIL_PASS=your-app-password
NOTIFICATION_EMAIL=brain.logic08@gmail.com

# Twilio WhatsApp Configuration
TWILIO_ACCOUNT_SID=your-twilio-account-sid
TWILIO_AUTH_TOKEN=your-twilio-auth-token
TWILIO_WHATSAPP_FROM=+14155238886
WHATSAPP_TO=+917575011974
```

## 🧪 Testing the Setup

### 1. Test Backend API
```bash
# Check if backend is running
curl http://localhost:3001/api/health
```

### 2. Test Contact Form
1. Start both frontend and backend servers
2. Fill out the contact form on the website
3. Submit the form
4. Check for:
   - Success message on the website
   - Email in your inbox
   - WhatsApp message on your phone

### 3. Test Individual Components

#### Test Email Only
```bash
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test message"
  }'
```

## 🚨 Troubleshooting

### Email Issues

**"Invalid login" error:**
- Make sure 2FA is enabled on your Google account
- Use App Password, not your regular password
- Check that EMAIL_USER and EMAIL_PASS are correct

**"Less secure app access" error:**
- This is outdated - use App Passwords instead
- Enable 2FA and generate an App Password

### WhatsApp Issues

**"Not a valid phone number" error:**
- Ensure phone numbers are in E.164 format (+1234567890)
- Verify the number in your Twilio console

**"Sandbox restrictions" error:**
- Make sure you've joined the WhatsApp sandbox
- Send the join code to the Twilio number first

**"Insufficient funds" error:**
- Add credits to your Twilio account
- Each WhatsApp message costs ~$0.005

### General Issues

**CORS errors:**
- Make sure backend is running on port 3001
- Check that frontend is making requests to the correct URL

**Network errors:**
- Verify both servers are running
- Check firewall settings
- Ensure ports 3000 (frontend) and 3001 (backend) are available

## 🔒 Security Considerations

### Environment Variables
- Never commit `.env` file to version control
- Use different credentials for development and production
- Regularly rotate API keys and passwords

### Rate Limiting (Recommended)
Add rate limiting to prevent spam:

```bash
npm install express-rate-limit
```

### Input Validation
The backend includes basic validation, but consider adding:
- HTML sanitization
- Advanced email validation
- Phone number validation

## 🚀 Production Deployment

### Environment Variables
Set these in your production environment:
- All variables from `.env`
- Update `TWILIO_WHATSAPP_FROM` to your production WhatsApp number
- Use production email credentials

### WhatsApp Production
1. Apply for WhatsApp Business API approval
2. Get your own WhatsApp Business number
3. Update `TWILIO_WHATSAPP_FROM` with your approved number

### Scaling Considerations
- Use a message queue (Redis/RabbitMQ) for high volume
- Implement retry logic for failed notifications
- Add logging and monitoring
- Consider using dedicated email services (SendGrid, Mailgun)

## 📞 Support

If you encounter issues:
1. Check the console logs in both frontend and backend
2. Verify all environment variables are set correctly
3. Test email and WhatsApp services individually
4. Check Twilio and email provider documentation

The notification system is now ready to handle contact form submissions with both email and WhatsApp alerts! 🎉
