const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const twilio = require('twilio');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Email configuration using nodemailer
const createEmailTransporter = () => {
  return nodemailer.createTransporter({
    service: 'gmail', // You can change this to your email provider
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS  // Your email password or app password
    }
  });
};

// WhatsApp configuration using Twilio
let twilioClient = null;
try {
  if (process.env.TWILIO_ACCOUNT_SID &&
      process.env.TWILIO_AUTH_TOKEN &&
      process.env.TWILIO_ACCOUNT_SID.startsWith('AC')) {
    twilioClient = twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    );
    console.log('✅ Twilio client initialized successfully');
  }
} catch (error) {
  console.warn('⚠️  Twilio initialization failed. WhatsApp notifications will be disabled.');
  console.error('Twilio error:', error.message);
}

// Send Email function
const sendEmail = async (formData) => {
  // Check if email is configured
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS ||
      process.env.EMAIL_USER.includes('placeholder')) {
    console.warn('Email not configured - skipping email notification');
    return {
      success: false,
      message: 'Email not configured. Check email credentials in .env file.'
    };
  }

  const transporter = createEmailTransporter();
  
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.NOTIFICATION_EMAIL || process.env.EMAIL_USER,
    subject: `New Contact Form Submission - ${formData.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0066cc;">New Contact Form Submission</h2>
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1f2937; margin-top: 0;">Contact Details</h3>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
          <p><strong>Company:</strong> ${formData.company || 'Not provided'}</p>
          <p><strong>Service Interest:</strong> ${formData.service || 'Not specified'}</p>
        </div>
        <div style="background: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h3 style="color: #1f2937; margin-top: 0;">Message</h3>
          <p style="line-height: 1.6;">${formData.message}</p>
        </div>
        <div style="margin-top: 20px; padding: 15px; background: #0066cc; color: white; border-radius: 8px; text-align: center;">
          <p style="margin: 0;">Brain Logic Info Solutions - Contact Form</p>
        </div>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    return { success: true, message: 'Email sent successfully' };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, message: 'Email sending failed', error: error.message };
  }
};

// Send WhatsApp function
const sendWhatsApp = async (formData) => {
  // Check if Twilio is configured
  if (!twilioClient) {
    console.warn('WhatsApp not configured - skipping WhatsApp notification');
    return {
      success: false,
      message: 'WhatsApp not configured. Check Twilio credentials in .env file.'
    };
  }

  const message = `🔔 *New Contact Form Submission*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Phone:* ${formData.phone || 'Not provided'}
🏢 *Company:* ${formData.company || 'Not provided'}
🛠️ *Service Interest:* ${formData.service || 'Not specified'}

💬 *Message:*
${formData.message}

---
Brain Logic Info Solutions`;

  try {
    await twilioClient.messages.create({
      body: message,
      from: `whatsapp:${process.env.TWILIO_WHATSAPP_FROM}`, // Your Twilio WhatsApp number
      to: `whatsapp:${process.env.WHATSAPP_TO}` // Your WhatsApp number to receive notifications
    });

    console.log('WhatsApp message sent successfully');
    return { success: true, message: 'WhatsApp message sent successfully' };
  } catch (error) {
    console.error('WhatsApp sending failed:', error);
    return { success: false, message: 'WhatsApp sending failed', error: error.message };
  }
};

// Contact form submission endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const formData = req.body;
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required fields'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    console.log('Processing contact form submission:', formData.name);

    // Send email and WhatsApp notifications concurrently
    const [emailResult, whatsappResult] = await Promise.allSettled([
      sendEmail(formData),
      sendWhatsApp(formData)
    ]);

    // Prepare response
    const response = {
      success: true,
      message: 'Contact form submitted successfully',
      notifications: {
        email: emailResult.status === 'fulfilled' ? emailResult.value : { success: false, error: emailResult.reason },
        whatsapp: whatsappResult.status === 'fulfilled' ? whatsappResult.value : { success: false, error: whatsappResult.reason }
      }
    };

    // Check if at least one notification method succeeded
    const emailSuccess = emailResult.status === 'fulfilled' && emailResult.value.success;
    const whatsappSuccess = whatsappResult.status === 'fulfilled' && whatsappResult.value.success;

    if (!emailSuccess && !whatsappSuccess) {
      response.success = false;
      response.message = 'Form submitted but notification delivery failed';
    } else if (!emailSuccess || !whatsappSuccess) {
      response.message = 'Form submitted with partial notification delivery';
    }

    res.status(200).json(response);

  } catch (error) {
    console.error('Contact form processing error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Brain Logic Contact API is running',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Brain Logic Contact API server running on port ${PORT}`);
  console.log(`📧 Email notifications: ${process.env.EMAIL_USER ? 'Configured' : 'Not configured'}`);
  console.log(`📱 WhatsApp notifications: ${process.env.TWILIO_ACCOUNT_SID ? 'Configured' : 'Not configured'}`);
});

module.exports = app;
