const axios = require('axios');

// Test data
const testFormData = {
  name: 'John Doe',
  email: 'meetshekhat1988@gmail.com',
  phone: '+917575011974',
  company: 'Test Company',
  service: 'ReactJS Development',
  message: 'This is a test message to verify the email and WhatsApp notification system is working correctly.'
};

// Test the contact form API
async function testContactForm() {
  try {
    console.log('🧪 Testing Contact Form API...');
    console.log('📝 Test data:', testFormData);
    
    const response = await axios.post('http://localhost:3001/api/contact', testFormData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log('\n✅ API Response:');
    console.log('Status:', response.status);
    console.log('Data:', JSON.stringify(response.data, null, 2));

    if (response.data.success) {
      console.log('\n🎉 Test completed successfully!');
      
      // Check notification results
      const { email, whatsapp } = response.data.notifications;
      
      console.log('\n📧 Email notification:', email.success ? '✅ Sent' : '❌ Failed');
      if (!email.success) {
        console.log('   Error:', email.error || email.message);
      }
      
      console.log('📱 WhatsApp notification:', whatsapp.success ? '✅ Sent' : '❌ Failed');
      if (!whatsapp.success) {
        console.log('   Error:', whatsapp.error || whatsapp.message);
      }

      console.log('\n💡 Next steps:');
      console.log('   - Check your email inbox for the notification');
      console.log('   - Check your WhatsApp for the message');
      console.log('   - If notifications failed, check your .env configuration');
      
    } else {
      console.log('\n❌ Test failed:', response.data.message);
    }

  } catch (error) {
    console.error('\n❌ Test failed with error:');
    
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
    } else if (error.request) {
      console.error('No response received. Is the backend server running?');
      console.error('Make sure to start the server with: npm run dev');
    } else {
      console.error('Error:', error.message);
    }
  }
}

// Test health endpoint
async function testHealth() {
  try {
    console.log('🏥 Testing Health Endpoint...');
    const response = await axios.get('http://localhost:3001/api/health');
    console.log('✅ Health check passed:', response.data);
    return true;
  } catch (error) {
    console.error('❌ Health check failed. Backend server may not be running.');
    console.error('Start the server with: cd backend && npm run dev');
    return false;
  }
}

// Main test function
async function runTests() {
  console.log('🚀 Starting Brain Logic Contact Form Tests\n');
  
  // Test health first
  const healthOk = await testHealth();
  
  if (healthOk) {
    console.log('\n' + '='.repeat(50));
    await testContactForm();
  }
  
  console.log('\n' + '='.repeat(50));
  console.log('🏁 Tests completed');
}

// Run tests
runTests();
