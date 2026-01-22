import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';

import { Careers } from './pages/Careers';
import { Contact } from './pages/Contact';
import { PartnershipModel } from './pages/PartnerShipModel';
import ServiceDetail from './pages/ServiceDetail';
import ScrollToTop from './components/common/ScrollToTop';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/partnership-model" element={<PartnershipModel />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;