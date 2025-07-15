require('dotenv').config();

console.log('🔍 Environment Variables Check:\n');

console.log('📧 EMAIL CONFIGURATION:');
console.log(`EMAIL_USER: ${process.env.EMAIL_USER || 'Not set'}`);
console.log(`EMAIL_PASS: ${process.env.EMAIL_PASS || 'Not set'}`);
console.log(`NOTIFICATION_EMAIL: ${process.env.NOTIFICATION_EMAIL || 'Not set'}`);

console.log('\n📱 TWILIO CONFIGURATION:');
console.log(`TWILIO_ACCOUNT_SID: ${process.env.TWILIO_ACCOUNT_SID || 'Not set'}`);
console.log(`TWILIO_AUTH_TOKEN: ${process.env.TWILIO_AUTH_TOKEN ? '***' + process.env.TWILIO_AUTH_TOKEN.substring(process.env.TWILIO_AUTH_TOKEN.length - 4) : 'Not set'}`);
console.log(`TWILIO_WHATSAPP_FROM: ${process.env.TWILIO_WHATSAPP_FROM || 'Not set'}`);
console.log(`WHATSAPP_TO: ${process.env.WHATSAPP_TO || 'Not set'}`);

console.log('\n🔧 VALIDATION:');
console.log(`Email configured: ${process.env.EMAIL_USER && process.env.EMAIL_PASS && !process.env.EMAIL_USER.includes('placeholder') && !process.env.EMAIL_PASS.includes('placeholder')}`);
console.log(`Twilio configured: ${process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN && process.env.TWILIO_ACCOUNT_SID.startsWith('AC')}`);
