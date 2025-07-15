const twilio = require('twilio');

// Direct credentials (for testing)
const TWILIO_ACCOUNT_SID = 'AC207333daf003e10aaff1cb21d63fc53a';
const TWILIO_AUTH_TOKEN = '4e867112d0b5b4f9835802f2c52b3d60';
const TWILIO_WHATSAPP_FROM = '+14155238886';
const WHATSAPP_TO = '+917575011974';

console.log('🧪 Testing Direct WhatsApp Integration...\n');

const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

const formData = {
  name: 'Test Contact',
  email: 'test@brainlogic.in',
  phone: '+919876543210',
  company: 'Test Company',
  service: 'Web Development',
  message: 'This is a test contact form submission to verify WhatsApp notifications are working from the Brain Logic website.'
};

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

console.log('📱 Sending WhatsApp notification...\n');

client.messages.create({
  body: message,
  from: `whatsapp:${TWILIO_WHATSAPP_FROM}`,
  to: `whatsapp:${WHATSAPP_TO}`
})
.then(message => {
  console.log('✅ WhatsApp message sent successfully!');
  console.log(`📧 Message SID: ${message.sid}`);
  console.log(`📱 To: ${message.to}`);
  console.log(`📤 Status: ${message.status}`);
  console.log('\n🎉 WhatsApp notifications are working correctly!');
})
.catch(error => {
  console.error('❌ WhatsApp message failed:', error.message);
  if (error.code) {
    console.error(`🔢 Error Code: ${error.code}`);
  }
});
