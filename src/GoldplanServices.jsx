import './GoldplanServices.css';
import './Goldplan.css';
import { Link } from "react-router-dom";
import Header from './Header';

function GoldplanServices() {
  return (
    <div className="goldplan">
      <Header />

      <main className="main-content">
        <section className="services-page">
          <h2>Our Services</h2>
          <p>We offer comprehensive financial solutions tailored to your needs.</p>
          <div className="services-list">
            <div className="service">
              <h3>Investment Planning</h3>
              <p>Secure your future with our expert investment strategies and portfolio management.</p>
              <Link to="/contact" className="service-link">Learn More</Link>
            </div>
            <div className="service">
              <h3>Loan Management</h3>
              <p>Efficient loan processing, refinancing, and debt consolidation services.</p>
              <Link to="/contact" className="service-link">Learn More</Link>
            </div>
            <div className="service">
              <h3>Payment Processing</h3>
              <p>Seamless and secure payment solutions for businesses and individuals.</p>
              <Link to="/payment" className="service-link">Make Payment</Link>
            </div>
            <div className="service">
              <h3>Insurance Coverage</h3>
              <p>Comprehensive insurance plans for life, health, property, and more.</p>
              <Link to="/contact" className="service-link">Get Quote</Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="flex w-full items-center justify-center gap-4 flex-col">
            <h2>Contact Us</h2>
              <p>Get in touch with us for any inquiries or to start your financial journey.</p>
        </div>
        <br></br>
        <br></br>
        <div className="contact-info">

            <div className="contact-item">
              <h3>Email</h3>
              <p>inquiry@goldplaninsurance.com</p>
            </div>
            <div className="contact-item">
              <h3>Phone</h3>
              <p>+638922-5555 | +63917-526-8855</p>
            </div>
            <div className="contact-item">
              <h3>Address</h3>
              <p>Room 209 2nd Floor The One Executive Office Building West Ave, Quezon City Metro Manila 1104</p>
            </div>
            <div className="contact-item">
              <h3>Hours</h3>
              <p>Monday - Friday<br />8:00 AM – 5:00 PM<br />Saturday – Sunday – Closed</p>
            </div>
          </div>
        <p>&copy; 2023 Goldplan Insurance Services Finance. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </footer>
    </div>
  );
}

export default GoldplanServices;
