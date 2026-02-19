import { NavLink, Link } from 'react-router-dom';
import './Goldplan.css';
import Header from './Header';

function Goldplan() {
  return (
    <div className="goldplan" style={{ color: 'white' }}>

      <Header />

      {/* Main Content */}
      <main className="main-content">
        <section className="hero">
          <h2>Welcome to Goldplan</h2>
          <p>Your trusted partner in insurance and financial services.</p>
          <Link to="/services" className="cta-button">
            Explore Services
          </Link>
        </section>

        <section className="features">
          <h2>Why Choose Us?</h2>
          <div className="feature-list">
            <div className="feature">
              <h3>Secure Investments</h3>
              <p>Protect your future with reliable investment plans.</p>
            </div>
            <div className="feature">
              <h3>Loan Management</h3>
              <p>Efficient loan processing tailored to your needs.</p>
            </div>
            <div className="feature">
              <h3>Payment Solutions</h3>
              <p>Seamless payment processing for all transactions.</p>
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
              <p style={{ color: 'white' }}>inquiry@goldplaninsurance.com</p>
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

export default Goldplan;
