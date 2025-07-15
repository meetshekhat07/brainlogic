const twilio = require('twilio');
require('dotenv').config();

console.log('🧪 Testing Twilio WhatsApp Configuration...\n');

// Display configuration
console.log('📋 Configuration:');
console.log(`TWILIO_ACCOUNT_SID: ${process.env.TWILIO_ACCOUNT_SID ? process.env.TWILIO_ACCOUNT_SID.substring(0, 10) + '...' : 'Not set'}`);
console.log(`TWILIO_AUTH_TOKEN: ${process.env.TWILIO_AUTH_TOKEN ? '***' + process.env.TWILIO_AUTH_TOKEN.substring(process.env.TWILIO_AUTH_TOKEN.length - 4) : 'Not set'}`);
console.log(`TWILIO_WHATSAPP_FROM: ${process.env.TWILIO_WHATSAPP_FROM || 'Not set'}`);
console.log(`WHATSAPP_TO: ${process.env.WHATSAPP_TO || 'Not set'}\n`);

// Test Twilio initialization
try {
  if (!process.env.TWILIO_ACCOUNT_SID || !process.env.TWILIO_AUTH_TOKEN) {
    throw new Error('Missing Twilio credentials');
  }

  const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
  console.log('✅ Twilio client initialized successfully');

  // Test sending a WhatsApp message
  const testMessage = async () => {
    try {
      console.log('\n📱 Sending test WhatsApp message...');
      
      const message = await client.messages.create({
        body: '🧪 Test message from Brain Logic Info Solutions!\n\nThis is a test to verify WhatsApp notifications are working correctly.\n\n✅ If you receive this message, WhatsApp notifications are configured properly!',
        from: `whatsapp:${process.env.TWILIO_WHATSAPP_FROM}`,
        to: `whatsapp:${process.env.WHATSAPP_TO}`
      });

      console.log('✅ WhatsApp message sent successfully!');
      console.log(`📧 Message SID: ${message.sid}`);
      console.log(`📱 To: ${message.to}`);
      console.log(`📤 Status: ${message.status}`);
      
    } catch (error) {
      console.error('❌ WhatsApp message failed:', error.message);
      if (error.code) {
        console.error(`🔢 Error Code: ${error.code}`);
      }
      if (error.moreInfo) {
        console.error(`ℹ️  More Info: ${error.moreInfo}`);
      }
    }
  };

  // Run the test
  testMessage();

} catch (error) {
  console.error('❌ Twilio initialization failed:', error.message);
}
