# Deployment & Customization Guide

## Quick Start Deployment

### Option 1: Netlify (Recommended for beginners)
1. **Create Netlify account** at netlify.com
2. **Connect your repository** (GitHub, GitLab, or Bitbucket)
3. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
4. **Deploy automatically** on every git push

### Option 2: Vercel (Optimized for React)
1. **Create Vercel account** at vercel.com
2. **Import your project** from Git repository
3. **Auto-detected settings:**
   - Framework: Vite
   - Build command: `npm run build`
   - Output directory: `dist`
4. **Deploy with zero configuration**

### Option 3: Traditional Web Hosting
1. **Build the project locally:**
   ```bash
   npm run build
   ```
2. **Upload the `dist/` folder** to your web server
3. **Configure server** for Single Page Application:
   - Apache: Add `.htaccess` file (see below)
   - Nginx: Configure try_files directive

#### Apache .htaccess Configuration
```apache
RewriteEngine On
RewriteBase /

# Handle Angular and React Router
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

#### Nginx Configuration
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## Content Customization Guide

### 1. Company Information Updates

#### Update Company Details
**File:** `src/components/Footer.jsx`
```javascript
// Update contact information
<p>📧 your-email@company.com</p>
<p>📞 +1 (555) YOUR-NUMBER</p>
<p>📍 Your Company Address</p>
```

**File:** `src/pages/Contact.jsx`
```javascript
// Update contact info array
const contactInfo = [
  {
    icon: '📧',
    title: 'Email Us',
    details: 'your-email@company.com',
    link: 'mailto:your-email@company.com'
  },
  // ... update other contact details
];
```

#### Update Page Title and Meta Tags
**File:** `index.html`
```html
<title>Your Company Name - Professional IT Services</title>
<meta name="description" content="Your company description">
<meta name="keywords" content="your, keywords, here">
```

### 2. Visual Customization

#### Change Color Scheme
**File:** `src/index.css`
```css
:root {
  /* Update primary colors */
  --primary-blue: #your-primary-color;
  --primary-dark: #your-dark-color;
  --secondary-cyan: #your-secondary-color;
  /* Update gradients */
  --gradient-primary: linear-gradient(135deg, #color1 0%, #color2 100%);
}
```

#### Replace Logo/Branding
**Files:** `src/components/Header.jsx` and `src/components/Footer.jsx`
```javascript
// Replace text logo with image
<img src="/logo.png" alt="Company Logo" className="logo-image" />

// Or update text logo
<span className="logo-text gradient-text">YOUR COMPANY</span>
<span className="logo-subtitle">YOUR TAGLINE</span>
```

### 3. Content Updates

#### Update Services Information
**File:** `src/pages/Home.jsx`
```javascript
const services = [
  {
    name: 'Your Service 1',
    description: 'Your service description',
    icon: '🔧', // Change icon
    link: '/services/your-service'
  },
  // ... update all services
];
```

#### Update Team Information
**File:** `src/pages/About.jsx`
```javascript
const team = [
  {
    name: 'Your Name',
    role: 'Your Role',
    description: 'Your description',
    image: '/team/your-photo.jpg' // Replace with real photo
  },
  // ... update team members
];
```

#### Update Portfolio Projects
**File:** `src/pages/Portfolio.jsx`
```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    category: 'technology-category',
    description: 'Project description',
    technologies: ['Tech1', 'Tech2'],
    image: '/projects/project1.jpg', // Real project image
    link: 'https://project-url.com'
  },
  // ... update all projects
];
```

### 4. Adding Real Images

#### Image Optimization Tips
1. **Recommended formats:** WebP, JPEG, PNG
2. **Recommended sizes:**
   - Hero images: 1920x1080px
   - Project thumbnails: 600x400px
   - Team photos: 400x400px
3. **Optimization tools:** TinyPNG, ImageOptim, or Squoosh

#### Image Placement
```
public/
├── images/
│   ├── hero/
│   ├── projects/
│   ├── team/
│   └── blog/
```

#### Update Image References
```javascript
// Replace emoji placeholders
<img src="/images/projects/project1.jpg" alt="Project Name" />

// Or use as background
<div 
  className="hero-image" 
  style={{backgroundImage: 'url(/images/hero/hero-bg.jpg)'}}
>
```

## Advanced Customization

### 1. Adding New Pages

#### Create New Page Component
**File:** `src/pages/NewPage.jsx`
```javascript
import React from 'react';

const NewPage = () => {
  return (
    <div className="new-page">
      <section className="section-padding">
        <div className="container">
          <h1>New Page Title</h1>
          <p>Page content here...</p>
        </div>
      </section>
    </div>
  );
};

export default NewPage;
```

#### Add Route to App.jsx
```javascript
import NewPage from './pages/NewPage';

// Add to Routes
<Route path="/new-page" element={<NewPage />} />
```

#### Add Navigation Link
**File:** `src/components/Header.jsx`
```javascript
const navigation = [
  // ... existing items
  { name: 'New Page', href: '/new-page' },
];
```

### 2. Integrating with Backend APIs

#### Contact Form Integration
**File:** `src/pages/Contact.jsx`
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    if (response.ok) {
      alert('Message sent successfully!');
      // Reset form
    }
  } catch (error) {
    alert('Error sending message. Please try again.');
  }
};
```

#### Newsletter Integration
**File:** `src/components/Footer.jsx`
```javascript
const handleNewsletterSubmit = async (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  
  try {
    await fetch('/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    alert('Subscribed successfully!');
  } catch (error) {
    alert('Subscription failed. Please try again.');
  }
};
```

### 3. Adding Analytics

#### Google Analytics 4
**File:** `index.html`
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

#### Track Page Views
**File:** `src/App.jsx`
```javascript
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  
  useEffect(() => {
    // Track page views
    if (typeof gtag !== 'undefined') {
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: location.pathname,
      });
    }
  }, [location]);
  
  // ... rest of component
}
```

## Performance Optimization

### 1. Image Optimization
```javascript
// Lazy loading images
<img 
  src="/images/project.jpg" 
  alt="Project" 
  loading="lazy"
  decoding="async"
/>
```

### 2. Code Splitting
```javascript
// Lazy load pages
import { lazy, Suspense } from 'react';

const About = lazy(() => import('./pages/About'));

// Wrap in Suspense
<Suspense fallback={<div>Loading...</div>}>
  <Route path="/about" element={<About />} />
</Suspense>
```

### 3. Bundle Analysis
```bash
# Install bundle analyzer
npm install --save-dev rollup-plugin-visualizer

# Add to vite.config.js
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({ filename: 'dist/stats.html' })
  ]
});
```

## SEO Optimization

### 1. Meta Tags for Each Page
```javascript
// Use React Helmet or similar
import { Helmet } from 'react-helmet-async';

const About = () => (
  <>
    <Helmet>
      <title>About Us - Company Name</title>
      <meta name="description" content="Learn about our company..." />
    </Helmet>
    {/* Page content */}
  </>
);
```

### 2. Structured Data
**File:** `index.html`
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Brain Logic Info Solutions",
  "url": "https://yourwebsite.com",
  "description": "Professional IT services company"
}
</script>
```

## Maintenance Checklist

### Monthly Tasks
- [ ] Update dependencies: `npm update`
- [ ] Security audit: `npm audit`
- [ ] Performance check: Lighthouse audit
- [ ] Content updates: Blog posts, portfolio projects
- [ ] Backup: Code and content backups

### Quarterly Tasks
- [ ] Major dependency updates
- [ ] SEO performance review
- [ ] Analytics review and optimization
- [ ] User feedback implementation
- [ ] Security review

### Annual Tasks
- [ ] Design refresh evaluation
- [ ] Technology stack review
- [ ] Hosting and performance optimization
- [ ] Accessibility audit
- [ ] Complete security audit

This guide provides everything needed to deploy, customize, and maintain the Brain Logic Info Solutions website successfully.
