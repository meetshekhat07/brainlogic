# Brain Logic Contact Form Backend

Backend API service for handling contact form submissions with email and WhatsApp notifications.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
```bash
# Copy environment template
cp .env.example .env

# Edit .env with your credentials
# See NOTIFICATION_SETUP_GUIDE.md for detailed instructions
```

### 3. Start Server
```bash
# Development mode (auto-restart on changes)
npm run dev

# Production mode
npm start
```

Server runs on `http://localhost:3001`

## 📋 API Endpoints

### POST /api/contact
Submit contact form data

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "company": "Company Name",
  "service": "ReactJS Development",
  "message": "Your message here"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Contact form submitted successfully",
  "notifications": {
    "email": {
      "success": true,
      "message": "Email sent successfully"
    },
    "whatsapp": {
      "success": true,
      "message": "WhatsApp message sent successfully"
    }
  }
}
```

### GET /api/health
Health check endpoint

**Response:**
```json
{
  "status": "OK",
  "message": "Brain Logic Contact API is running",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

## 🧪 Testing

### Test Notifications
```bash
# Run test script
npm test

# Or specifically test notifications
npm run test:notifications
```

### Manual Testing
```bash
# Test health endpoint
curl http://localhost:3001/api/health

# Test contact form
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "Test message"
  }'
```

## 🔧 Configuration

### Required Environment Variables
```env
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
NOTIFICATION_EMAIL=notifications@company.com

# WhatsApp Configuration
TWILIO_ACCOUNT_SID=your-twilio-sid
TWILIO_AUTH_TOKEN=your-twilio-token
TWILIO_WHATSAPP_FROM=+14155238886
WHATSAPP_TO=+1234567890
```

### Optional Environment Variables
```env
PORT=3001  # Server port (default: 3001)
```

## 📧 Email Setup

1. **Gmail (Recommended):**
   - Enable 2-Factor Authentication
   - Generate App Password
   - Use App Password in EMAIL_PASS

2. **Other Providers:**
   - Update transporter configuration in server.js
   - Use appropriate SMTP settings

## 📱 WhatsApp Setup

1. **Twilio Account:**
   - Sign up at twilio.com
   - Get Account SID and Auth Token
   - Join WhatsApp Sandbox

2. **Phone Numbers:**
   - Use E.164 format (+country code + number)
   - Verify receiving number in Twilio console

## 🔒 Security Features

- Input validation for required fields
- Email format validation
- CORS enabled for frontend integration
- Error handling and logging
- Environment variable protection

## 📁 Project Structure

```
backend/
├── server.js              # Main server file
├── test-notifications.js  # Test script
├── package.json           # Dependencies and scripts
├── .env.example           # Environment template
└── README.md              # This file
```

## 🚀 Deployment

### Production Checklist
- [ ] Set production environment variables
- [ ] Use production email credentials
- [ ] Configure production WhatsApp number
- [ ] Set up process manager (PM2)
- [ ] Configure reverse proxy (Nginx)
- [ ] Enable HTTPS
- [ ] Set up monitoring and logging

### PM2 Deployment
```bash
# Install PM2
npm install -g pm2

# Start application
pm2 start server.js --name "brainlogic-api"

# Save PM2 configuration
pm2 save
pm2 startup
```

## 🐛 Troubleshooting

### Common Issues

**Server won't start:**
- Check if port 3001 is available
- Verify all dependencies are installed
- Check .env file exists and has correct format

**Email not sending:**
- Verify EMAIL_USER and EMAIL_PASS are correct
- Check if 2FA is enabled and App Password is used
- Test with a simple email client first

**WhatsApp not sending:**
- Verify Twilio credentials are correct
- Check if phone numbers are in E.164 format
- Ensure you've joined the WhatsApp sandbox
- Check Twilio account balance

**CORS errors:**
- Verify frontend is running on expected port
- Check CORS configuration in server.js
- Ensure API URL is correct in frontend

## 📞 Support

For detailed setup instructions, see:
- `../NOTIFICATION_SETUP_GUIDE.md` - Complete setup guide
- `../TECHNICAL_DOCUMENTATION.md` - Technical details
- `../DEPLOYMENT_GUIDE.md` - Deployment instructions

## 📄 License

This backend service is part of the Brain Logic Info Solutions website project.
