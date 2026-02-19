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
    icon: <img src={christianity} height={60} width={80} alt="Christianity" className="h-16 object-contain" />,
    bg: "#c0392b",
  },
  {
    title: "SERVICE EXCELLENCE",
    text: "HONORING COMMITMENT TO OUR PARTNERS AND GIVING SATISFACTION TO OUR CLIENTS' NEEDS THAT BEGINS AND ENDS WITH OUR PEOPLE.",
    icon: <img src={analytics} height={60} width={80} alt="Analytics" className="h-16 object-contain" />,
    bg: "#a93226",
  },
  {
    title: "HONESTY AND INTEGRITY",
    text: "WHOLENESS OF OUR PEOPLE TO EARN THE TRUST OF OUR CLIENTS AND PARTNERS AND TO ACT FAIRLY WITHOUT COMPROMISING THE TRUTH.",
    icon: <img src={scale} height={60} width={80} alt="Scale" className="h-16 object-contain" />,
    bg: "#922b21",
  },
  {
    title: "RELIABILITY",
    text: "TO COMPLY CONSISTENTLY IN TAKING RESPONSIBILITY AND MAINTAINING ACCOUNTABILITY WITH OUR COMMITMENT TO OUR CLIENTS AND PRINCIPAL PARTNERS IN ORDER TO MAINTAIN OUR GOOD REPUTATION IN THE INDUSTRY.",
    icon: <img src={handshake} height={60} width={80} alt="Handshake" className="h-16 object-contain" />,
    bg: "#7b241c",
  },
  {
    title: "PROFESSIONALISM AND TEAMWORK",
    text: "OUR PEOPLE IS CAPABLE OF DELIVERING EXCEPTIONAL SKILLS & COMPETENCE IN SERVICING OUR CLIENTS AND PARTNERS.",
    icon: <img src={teamsupport} height={60} width={80} alt="Team Support" className="h-16 object-contain" />,
    bg: "#641e16",
  },
];

function GoldplanAbout() {
  return (
    <div className="goldplan">
      <Header />
      <main className="main-content">
        <h1 className="page-title" style={{ textAlign: "center" }}>YOUR SECURITY IS OUR PRIORITY!</h1>
        <br></br>
        <p style={{ textAlign: "center" }}>Life is unpredictable. Accidents, natural disasters, or unforeseen events can strike when you least expect. Having the right insurance protects you, your family, and your assets from financial hardship, giving you peace of mind and security no matter what happens next.
        <p>With GOLDPLAN INSURANCE SERVICES, you're always prepared for the unexpected.</p>
        </p>
        <br></br>

        <h1 style={{ textAlign: "center" }}>COMPANY OVERVIEW</h1>
        <br></br>
        <p style={{ textAlign: "center" }}>GOLDPLAN INSURANCE SERVICES, founded in March 2004 by Perry and Jennifer Bucay, provides essential insurance protection.</p>
        <p>The company has gained strong customer recognition by partnering with top insurance providers. GOLDPLAN offers innovative services to meet evolving client needs. It is recognized as a "Best Innovative Solution Provider" for non-life insurance and auto loan financing.</p>
        <p>As a hassle-free "one-stop-shop," GOLDPLAN focuses on client satisfaction. The company stays current with industry trends to deliver the best service.</p>

        <section className="about-page">
          <h1 style={{ textAlign: "center" }}>ABOUT GOLDPLAN INSURANCE</h1>
          <p style={{ textAlign: "center" }}>For over 20 years, GoldPlan Insurance Services has been offering a wide range of comprehensive insurance solutions, including motor car, property, and health insurance. We aim to provide security, peace of mind, and exceptional service to all our clients.</p>

          <h1>OUR GOLDEN VISION</h1>
          <p>GOLDPLAN INSURANCE SERVICES aims to become the #1 non-life insurance agency in the Philippines, providing remarkable and balanced business relationships that create positive and lasting experiences for our customers and business partners. We aspire to be the foremost insurance service provider that comes to mind regarding non-life insurance, offering unparalleled service.</p>

          {/* ── OUR CORE VALUES ── */}
          <div style={{ width: "100%" }}>
            {/* Header */}
            <div style={{
              background: "linear-gradient(to bottom, #f0f0f0, #e0e0e0)",
              textAlign: "center",
              padding: "56px 24px",
            }}>
              <h2 style={{
                color: "#c0392b",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 900,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontFamily: "'Arial Black', Impact, sans-serif",
                margin: 0,
              }}>
   
                OUR CORE VALUES
              </h2>
            </div>

            {/* Five columns */}
            <div style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
              {coreValues.map((val, i) => (
                <div
                  key={i}
                  style={{
                    flex: "1 1 180px",
                    backgroundColor: val.bg,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "40px 32px",
                    minHeight: "420px",
                  }}
                >
                  <div>
                    <h3 style={{
                      color: "white",
                      fontSize: "0.95rem",
                      fontWeight: 800,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      marginBottom: "20px",
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
                  <div style={{ marginTop: "32px", opacity: 0.9 }}>
                    {val.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* ── END OUR CORE VALUES ── */}

          {/* Mission Section */}
          <div style={{ backgroundColor: "#111" }} className="py-20 px-6"></div>
          <section style={{ backgroundColor: "#1c1c1c", minHeight: "100vh", width: "100vw", marginLeft: "calc(-50vw + 50%)", padding: "96px 48px", boxSizing: "border-box" }}>
            <div className="max-w-7xl mx-auto">
              <h1 className="text-center text-white text-6xl md:text-7xl font-extrabold tracking-wider mb-20 uppercase">
                OUR PRECIOUS MISSION
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    letter: "G",
                    text: "Give our best quality of service to our clients and business partner in order to earn their trust, loyalty and friendship.",
                    red: true,
                  },
                  {
                    letter: "O",
                    text: "Offer quality information, services and options to help satisfy our clients' insurance needs.",
                    red: false,
                  },
                  {
                    letter: "L",
                    text: "Lift up the quality of life of its employees.",
                    red: true,
                  },
                  {
                    letter: "D",
                    text: "Develop branches all over the Philippines.",
                    red: false,
                  },
                  {
                    letter: "P",
                    text: "Penetrate different markets such as car dealerships, financial institutions, individuals and corporate and government accounts.",
                    red: false,
                  },
                  {
                    letter: "L",
                    text: "Learn new ideas that will be beneficial to organization and its partners and clients.",
                    red: true,
                  },
                  {
                    letter: "A",
                    text: "Always maintain the highest standards of integrity and professionalism in our relationship with our clients and partners.",
                    red: false,
                  },
                  {
                    letter: "N",
                    text: "Nurture the relationship with our clients by providing personalized services, most especially during claims.",
                    red: true,
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`relative rounded-xl p-10 min-h-[320px] transition duration-300 hover:scale-105 ${item.red ? "bg-red-600 text-white" : "bg-gray-200 text-red-600"}`}>
                    <span className={`absolute top-6 right-6 w-6 h-1 rounded ${item.red ? "bg-gray-200" : "bg-red-600"}`}></span>
                    <h2 className={`text-7xl font-extrabold mb-6 ${item.red ? "text-white" : "text-red-600"}`}>{item.letter}</h2>
                    <p className="text-sm leading-relaxed uppercase">{item.text}</p>
                    <div className={`absolute bottom-8 left-10 w-20 h-[2px] ${item.red ? "bg-gray-200" : "bg-red-600"}`}></div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Our Clients */}
          <div className="py-10 bg-gray-100">
            <h1 className="text-3xl font-bold text-center mb-8">OUR CLIENTS</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
              <a href="https://toyota.com.ph/toyotaInsure" target="_blank" rel="noopener noreferrer">
                <img src={toyota} height={100} width={100} alt="Toyota" className="h-16 object-contain" />
              </a>
              <a href="https://www.ford.com.ph" target="_blank" rel="noopener noreferrer">
                <img src={ford} height={100} width={100} alt="Ford" className="h-16 object-contain" />
              </a>
              <a href="https://www1.suzuki.com.ph/" target="_blank" rel="noopener noreferrer">
                <img src={suzuki} height={100} width={100} alt="Suzuki" className="h-16 object-contain" />
              </a>
              <a href="https://www.mitsubishi-motors.com.ph" target="_blank" rel="noopener noreferrer">
                <img src={mitsubishi} height={100} width={150} alt="Mitsubishi" className="h-16 object-contain" />
              </a>
            </div>

            <h1 className="text-3xl font-bold text-center mt-10 mb-8">OUR PRINCIPALS</h1>
          </div>

          <a href="https://www.bethelgen.com/" target="_blank" rel="noopener noreferrer">
            <img src={bethel} height={60} width={400} alt="Bethel" className="h-16 object-contain" />
          </a>
          <a href="https://www.milestoneguaranty.com/wp2/" target="_blank" rel="noopener noreferrer">
            <img src={milestone} height={60} width={400} alt="Milestone" className="h-16 object-contain" />
          </a>
          <a href="https://sterling-insurance.com.ph/sici/" target="_blank" rel="noopener noreferrer">
            <img src={sterling} height={60} width={400} alt="Sterling" className="h-16 object-contain" />
          </a>
          <a href="https://strongholdinsurance.com.ph/" target="_blank" rel="noopener noreferrer">
            <img src={stronghold} height={150} width={400} alt="Stronghold" className="h-16 object-contain" />
          </a>

          <div>
            <p>Ready to Secure Your Future?</p>
            <h2>Let Us Take Care Of You</h2>
            <h3>Get a Free Quote Today ⟶</h3>
          </div>
        </section>

      </main>
      <footer className="footer">
        <div className="flex w-full items-center justify-center gap-4 flex-col">
          <h1>CONTACT US</h1>
          <p>Get in touch with us for any inquiries or to start your financial journey.</p>
        </div>
        <br />
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
        <p>&copy; 2023 Goldplan Insurance Services Finance. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </footer>
    </div>
  );
}

export default GoldplanAbout;