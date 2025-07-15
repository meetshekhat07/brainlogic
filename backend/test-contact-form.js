const axios = require('axios');

console.log('🧪 Testing Contact Form API with WhatsApp Notifications...\n');

const testData = {
  name: 'Test User',
  email: 'test@example.com',
  phone: '+919876543210',
  company: 'Test Company',
  service: 'Web Development',
  message: 'This is a test message to verify that both email and WhatsApp notifications are working correctly from the contact form.'
};

console.log('📋 Test Data:');
console.log(JSON.stringify(testData, null, 2));
console.log('\n📤 Sending POST request to contact API...\n');

axios.post('https://brainlogic.in/api/contact', testData)
  .then(response => {
    console.log('✅ Contact form submission successful!');
    console.log('📊 Response Status:', response.status);
    console.log('📄 Response Data:');
    console.log(JSON.stringify(response.data, null, 2));
    
    if (response.data.notifications) {
      console.log('\n📧 Email Notification:', response.data.notifications.email.success ? '✅ Success' : '❌ Failed');
      console.log('📱 WhatsApp Notification:', response.data.notifications.whatsapp.success ? '✅ Success' : '❌ Failed');
    }
  })
  .catch(error => {
    console.error('❌ Contact form submission failed!');
    if (error.response) {
      console.error('📊 Status:', error.response.status);
      console.error('📄 Response:', error.response.data);
    } else {
      console.error('🔗 Error:', error.message);
    }
  });
