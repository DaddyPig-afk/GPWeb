import './GoldplanContact.css';
import './Goldplan.css';
import { Link } from "react-router-dom";
import Header from './Header';

function GoldplanContact() {
  return (
    <div className="goldplan">
      <Header />

      <main className="main-content">
        <form className="contact-form">
            <h3>Send us a message</h3>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
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

export default GoldplanContact;
