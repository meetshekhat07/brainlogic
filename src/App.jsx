import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import MagentoService from './pages/services/MagentoService';
import ReactService from './pages/services/ReactService';
import AngularService from './pages/services/AngularService';
import UIUXService from './pages/services/UIUXService';
import JavaService from './pages/services/JavaService';
import PythonService from './pages/services/PythonService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import './styles/components.css';
import './styles/pages.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/magento" element={<MagentoService />} />
          <Route path="/services/react" element={<ReactService />} />
          <Route path="/services/angular" element={<AngularService />} />
          <Route path="/services/uiux" element={<UIUXService />} />
          <Route path="/services/java" element={<JavaService />} />
          <Route path="/services/python" element={<PythonService />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
