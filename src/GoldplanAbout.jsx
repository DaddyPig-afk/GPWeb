import './GoldplanAbout.css';
import './Goldplan.css';
import { Link } from "react-router-dom";
import Header from './Header';
import toyota from './image/ToyotaLogo.png';
import ford from './image/FordLogo.png';
import suzuki from './image/SuzukiLogo.png';
import mitsubishi from './image/MitsubishiLogo.png';
import bethel from './image/BethelLogo.png';
import sterling from './image/SterlingLogo.png';
import stronghold from './image/stronghold.jpg';
import milestone from './image/MilestoneLogo.png';
import christianity from './image/christianity.png';
import analytics from './image/analytics.png';
import scale from './image/scale.png';
import handshake from './image/handshake.png';
import teamsupport from './image/team-support.png';

const coreValues = [
  {
    title: "FAITH",
    text: "WE HAVE BEEN CREATED TO GLORIFY GOD BY BEING GOOD STEWARDS OF WHAT HAS BEEN ENTRUSTED TO US.",
    icon: <img src={christianity} height={60} width={80} alt="Faith" style={{ objectFit: "contain" }} />,
    bg: "#c0392b",
  },
  {
    title: "SERVICE EXCELLENCE",
    text: "HONORING COMMITMENT TO OUR PARTNERS AND GIVING SATISFACTION TO OUR CLIENTS' NEEDS THAT BEGINS AND ENDS WITH OUR PEOPLE.",
    icon: <img src={analytics} height={60} width={80} alt="Service Excellence" style={{ objectFit: "contain" }} />,
    bg: "#a93226",
  },
  {
    title: "HONESTY AND INTEGRITY",
    text: "WHOLENESS OF OUR PEOPLE TO EARN THE TRUST OF OUR CLIENTS AND PARTNERS AND TO ACT FAIRLY WITHOUT COMPROMISING THE TRUTH.",
    icon: <img src={scale} height={60} width={80} alt="Honesty and Integrity" style={{ objectFit: "contain" }} />,
    bg: "#922b21",
  },
  {
    title: "RELIABILITY",
    text: "TO COMPLY CONSISTENTLY IN TAKING RESPONSIBILITY AND MAINTAINING ACCOUNTABILITY WITH OUR COMMITMENT TO OUR CLIENTS AND PRINCIPAL PARTNERS IN ORDER TO MAINTAIN OUR GOOD REPUTATION IN THE INDUSTRY.",
    icon: <img src={handshake} height={60} width={80} alt="Reliability" style={{ objectFit: "contain" }} />,
    bg: "#7b241c",
  },
  {
    title: "PROFESSIONALISM AND TEAMWORK",
    text: "OUR PEOPLE IS CAPABLE OF DELIVERING EXCEPTIONAL SKILLS & COMPETENCE IN SERVICING OUR CLIENTS AND PARTNERS.",
    icon: <img src={teamsupport} height={60} width={80} alt="Professionalism and Teamwork" style={{ objectFit: "contain" }} />,
    bg: "#641e16",
  },
];

const missionItems = [
  { letter: "G", text: "Give our best quality of service to our clients and business partner in order to earn their trust, loyalty and friendship.", red: true },
  { letter: "O", text: "Offer quality information, services and options to help satisfy our clients' insurance needs.", red: false },
  { letter: "L", text: "Lift up the quality of life of its employees.", red: true },
  { letter: "D", text: "Develop branches all over the Philippines.", red: false },
  { letter: "P", text: "Penetrate different markets such as car dealerships, financial institutions, individuals and corporate and government accounts.", red: false },
  { letter: "L", text: "Learn new ideas that will be beneficial to organization and its partners and clients.", red: true },
  { letter: "A", text: "Always maintain the highest standards of integrity and professionalism in our relationship with our clients and partners.", red: false },
  { letter: "N", text: "Nurture the relationship with our clients by providing personalized services, most especially during claims.", red: true },
];

const principals = [
  { href: "https://strongholdinsurance.com.ph/", src: stronghold, alt: "Stronghold" },
  { href: "https://sterling-insurance.com.ph/sici/", src: sterling, alt: "Sterling" },
  { href: "https://www.milestoneguaranty.com/wp2/", src: milestone, alt: "Milestone" },
  { href: "https://www.bethelgen.com/", src: bethel, alt: "Bethel" },
];

const clients = [
  { href: "https://toyota.com.ph/toyotaInsure", src: toyota, alt: "Toyota" },
  { href: "https://www.ford.com.ph", src: ford, alt: "Ford" },
  { href: "https://www1.suzuki.com.ph/", src: suzuki, alt: "Suzuki" },
  { href: "https://www.mitsubishi-motors.com.ph", src: mitsubishi, alt: "Mitsubishi" },
];

const fullWidth = {
  width: "100vw",
  position: "relative",
  left: "50%",
  marginLeft: "-50vw",
  boxSizing: "border-box",
};

const redTitle = {
  color: "#c0392b",
  fontWeight: 900,
  textTransform: "uppercase",
  fontFamily: "'Arial Black', Impact, sans-serif",
  textAlign: "center",
};

function GoldplanAbout() {
  return (
    <div className="goldplan">
      <Header />
      <main className="main-content">

        {/* 1. HERO */}
        <section style={{
          ...fullWidth,
          minHeight: "100vh",
          background: "linear-gradient(rgba(0,0,0,0.62), rgba(0,0,0,0.62)), url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80') center center / cover no-repeat",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px 48px",
          textAlign: "center",
        }}>
          <h1 style={{
            color: "white",
            fontSize: "clamp(2.8rem, 8vw, 6rem)",
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "0.04em",
            lineHeight: 1.1,
            marginBottom: "40px",
            fontFamily: "'Arial Black', Impact, sans-serif",
            maxWidth: "1100px",
          }}>
            YOUR SECURITY IS OUR PRIORITY!
          </h1>
          <p style={{
            color: "white",
            fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            lineHeight: 1.9,
            maxWidth: "900px",
            marginBottom: "20px",
            opacity: 0.92,
          }}>
            LIFE IS UNPREDICTABLE. ACCIDENTS, NATURAL DISASTERS, OR UNFORESEEN EVENTS CAN STRIKE WHEN YOU LEAST
            EXPECT. HAVING THE RIGHT INSURANCE PROTECTS YOU, YOUR FAMILY, AND YOUR ASSETS FROM FINANCIAL HARDSHIP,
            GIVING YOU PEACE OF MIND AND SECURITY NO MATTER WHAT HAPPENS NEXT.
          </p>
          <p style={{
            color: "white",
            fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            lineHeight: 1.9,
            maxWidth: "900px",
            marginBottom: "48px",
          }}>
            WITH <strong>GOLDPLAN INSURANCE SERVICES</strong>, YOU'RE ALWAYS PREPARED FOR THE UNEXPECTED.
          </p>
          <div style={{ color: "white", fontSize: "2.5rem", opacity: 0.8 }}>&#8964;</div>
        </section>

        {/* 2. COMPANY OVERVIEW */}
        <section style={{
          ...fullWidth,
          backgroundColor: "#c0392b",
          padding: "80px 64px",
          display: "flex",
          alignItems: "center",
          gap: "64px",
          flexWrap: "wrap",
        }}>
          <div style={{ flex: "1 1 340px", maxWidth: "520px" }}>
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
              alt="Team meeting"
              style={{ width: "100%", height: "480px", objectFit: "cover", borderRadius: "16px", display: "block" }}
            />
          </div>
          <div style={{ flex: "1 1 340px", color: "white" }}>
            <h2 style={{
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: 1.0,
              marginBottom: "20px",
              fontFamily: "'Arial Black', Impact, sans-serif",
            }}>
              COMPANY<br />OVERVIEW
            </h2>
            <div style={{ display: "flex", gap: "10px", marginBottom: "24px", fontSize: "1.4rem" }}>
              {[...Array(5)].map((_, i) => <span key={i} style={{ opacity: 0.85 }}>☆</span>)}
            </div>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.8, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "16px", opacity: 0.95 }}>
              <strong>GOLDPLAN INSURANCE SERVICES,</strong> FOUNDED IN MARCH 2004 BY PERRY AND JENNIFER BUCAY,
              PROVIDES ESSENTIAL INSURANCE PROTECTION.
            </p>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.8, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "16px", opacity: 0.95 }}>
              THE COMPANY HAS GAINED STRONG CUSTOMER RECOGNITION BY PARTNERING WITH TOP INSURANCE PROVIDERS.
              GOLDPLAN OFFERS INNOVATIVE SERVICES TO MEET EVOLVING CLIENT NEEDS. IT IS RECOGNIZED AS A "BEST
              INNOVATIVE SOLUTION PROVIDER" FOR NON-LIFE INSURANCE AND AUTO LOAN FINANCING.
            </p>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.8, textTransform: "uppercase", letterSpacing: "0.05em", opacity: 0.95 }}>
              AS A HASSLE-FREE "ONE-STOP-SHOP," GOLDPLAN FOCUSES ON CLIENT SATISFACTION. THE COMPANY STAYS
              CURRENT WITH INDUSTRY TRENDS TO DELIVER THE BEST SERVICE.
            </p>
          </div>
        </section>

        {/* 3. GOLDEN VISION */}
        <section style={{
          ...fullWidth,
          background: "#f5f5f5",
          padding: "80px 48px",
          textAlign: "center",
        }}>
          <h2 style={{
            ...redTitle,
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            letterSpacing: "0.08em",
            marginBottom: "40px",
          }}>
            OUR GOLDEN VISION
          </h2>
          <div style={{
            maxWidth: "780px",
            margin: "0 auto",
            background: "white",
            borderRadius: "12px",
            padding: "40px 48px",
            textAlign: "left",
            boxShadow: "0 2px 20px rgba(0,0,0,0.08)",
          }}>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.9, textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: "20px" }}>
              <strong>GOLDPLAN INSURANCE SERVICES</strong> AIMS TO BECOME THE #1 NON-LIFE INSURANCE AGENCY IN
              THE PHILIPPINES, PROVIDING REMARKABLE AND BALANCED BUSINESS RELATIONSHIPS THAT CREATE POSITIVE
              AND LASTING EXPERIENCES FOR OUR CUSTOMERS AND BUSINESS PARTNERS.
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.9, textTransform: "uppercase", letterSpacing: "0.04em" }}>
              WE ASPIRE TO BE THE FOREMOST INSURANCE SERVICE PROVIDER THAT COMES TO MIND REGARDING NON-LIFE
              INSURANCE, OFFERING UNPARALLELED SERVICE.
            </p>
          </div>
        </section>

        {/* 4. CORE VALUES */}
        <section style={{ ...fullWidth }}>
          <div style={{
            background: "linear-gradient(to bottom, #f0f0f0, #e0e0e0)",
            textAlign: "center",
            padding: "56px 24px",
          }}>
            <h2 style={{
              ...redTitle,
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              letterSpacing: "0.15em",
              margin: 0,
            }}>
              OUR CORE VALUES
            </h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
            {coreValues.map((val, i) => (
              <div key={i} style={{
                flex: "1 1 180px",
                backgroundColor: val.bg,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "40px 32px",
                minHeight: "420px",
              }}>
                <div>
                  <h3 style={{
                    color: "white",
                    fontSize: "0.95rem",
                    fontWeight: 800,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: "16px",
                    lineHeight: 1.4,
                    fontFamily: "'Arial Narrow', Arial, sans-serif",
                  }}>
                    {val.title}
                  </h3>
                  <p style={{
                    color: "white",
                    fontSize: "0.75rem",
                    lineHeight: 1.7,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    opacity: 0.92,
                    margin: 0,
                  }}>
                    {val.text}
                  </p>
                </div>
                <div style={{ marginTop: "32px", opacity: 0.9 }}>{val.icon}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. OUR PRECIOUS MISSION */}
        <section style={{
          ...fullWidth,
          backgroundColor: "#1c1c1c",
          minHeight: "100vh",
          padding: "96px 48px",
        }}>
          <h2 style={{
            ...redTitle,
            color: "white",
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            letterSpacing: "0.08em",
            marginBottom: "64px",
          }}>
            OUR PRECIOUS MISSION
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "24px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}>
            {missionItems.map((item, index) => (
              <div
                key={index}
                style={{
                  position: "relative",
                  borderRadius: "12px",
                  padding: "40px",
                  minHeight: "280px",
                  backgroundColor: item.red ? "#dc2626" : "#e5e7eb",
                  color: item.red ? "white" : "#dc2626",
                  transition: "transform 0.3s",
                  cursor: "default",
                }}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
              >
                <span style={{
                  position: "absolute", top: "20px", right: "20px",
                  width: "24px", height: "4px", borderRadius: "2px",
                  backgroundColor: item.red ? "#e5e7eb" : "#dc2626",
                }} />
                <h3 style={{
                  fontSize: "4.5rem",
                  fontWeight: 900,
                  marginBottom: "16px",
                  color: item.red ? "white" : "#dc2626",
                  lineHeight: 1,
                  fontFamily: "'Arial Black', Impact, sans-serif",
                }}>
                  {item.letter}
                </h3>
                <p style={{ fontSize: "0.8rem", lineHeight: 1.7, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                  {item.text}
                </p>
                <span style={{
                  position: "absolute", bottom: "28px", left: "40px",
                  width: "64px", height: "2px",
                  backgroundColor: item.red ? "#e5e7eb" : "#dc2626",
                }} />
              </div>
            ))}
          </div>
        </section>

        {/* 6. OUR CLIENTS */}
        <section style={{
          ...fullWidth,
          background: "#f9f9f9",
          padding: "72px 48px",
          textAlign: "center",
        }}>
          <h2 style={{
            ...redTitle,
            fontSize: "clamp(2rem, 5vw, 3rem)",
            letterSpacing: "0.1em",
            marginBottom: "48px",
          }}>
            OUR CLIENTS
          </h2>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "32px",
            maxWidth: "900px",
            margin: "0 auto",
          }}>
            {clients.map((c, i) => (
              <a key={i} href={c.href} target="_blank" rel="noopener noreferrer" style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "24px 32px",
                borderRadius: "10px",
                border: "1px solid #e5e7eb",
                background: "white",
                minWidth: "140px",
              }}>
                <img src={c.src} alt={c.alt} style={{ maxHeight: "60px", maxWidth: "120px", objectFit: "contain" }} />
              </a>
            ))}
          </div>
        </section>

        {/* 7. OUR PRINCIPALS */}
        <section style={{
          ...fullWidth,
          background: "white",
          padding: "80px 48px",
        }}>
          <h2 style={{
            ...redTitle,
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            letterSpacing: "0.1em",
            marginBottom: "48px",
          }}>
            OUR PRINCIPALS
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px",
            maxWidth: "1100px",
            margin: "0 auto",
          }}>
            {principals.map((p, i) => (
              <a key={i} href={p.href} target="_blank" rel="noopener noreferrer" style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                padding: "40px 32px",
                minHeight: "160px",
                textDecoration: "none",
              }}>
                <img src={p.src} alt={p.alt} style={{ maxHeight: "90px", maxWidth: "100%", objectFit: "contain" }} />
              </a>
            ))}
          </div>
        </section>

        {/* 8. CTA */}
        <section style={{
          ...fullWidth,
          display: "flex",
          minHeight: "480px",
        }}>
          <div style={{
            flex: "0 0 55%",
            backgroundColor: "#c0392b",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "64px 72px",
          }}>
            <p style={{
              color: "white",
              fontSize: "0.85rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              margin: "0 0 20px 0",
              opacity: 0.9,
            }}>
              READY TO SECURE YOUR FUTURE?
            </p>
            <h2 style={{
              color: "white",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: 1.05,
              fontFamily: "'Arial Black', Impact, sans-serif",
              margin: "0 0 28px 0",
              letterSpacing: "0.02em",
            }}>
              LET US TAKE<br />CARE OF YOU
            </h2>
            <a href="/contact" style={{
              color: "white",
              fontSize: "0.85rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textDecoration: "none",
              opacity: 0.9,
            }}>
              GET A FREE QUOTE TODAY →
            </a>
          </div>
          <div style={{
            flex: "0 0 45%",
            backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }} />
        </section>

      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
          <h3>CONTACT US</h3>
          <p>Get in touch with us for any inquiries or to start your financial journey.</p>
        </div>
        <br />
        <div className="contact-info" style={{ color: "white" }}>
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
        <p>&copy; 2025 Goldplan Insurance Services. All rights reserved.</p>
        <div className="footer-links">
        </div>
      </footer>
    </div>
  );
}

export default GoldplanAbout;