import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Code2, Phone, Mail, MapPin, ArrowUpRight, Menu, X } from 'lucide-react';

// Import all 5 Bootstrap pages from src/pages/
// @ts-expect-error Home is a JSX page without a TypeScript declaration.
import Home from './pages/Home';
import About from './pages/About';
// @ts-expect-error Services is a JSX page without a TypeScript declaration.
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-secondary border-opacity-25 sticky-top py-3">
      <div className="container">
        <Link to="/" onClick={closeMenu} className="navbar-brand d-flex align-items-center gap-2 fw-bold fs-4">
          <span className="bg-primary text-white rounded-3 p-2 d-inline-flex">
            <Code2 size={22} />
          </span>
          <span>
            NOVA<span className="text-primary">TECH</span>
          </span>
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-3 pt-3 pt-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                end
                onClick={closeMenu}
                className={({ isActive }) =>
                  `nav-link fw-semibold ${isActive ? 'active text-primary' : 'text-light'}`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `nav-link fw-semibold ${isActive ? 'active text-primary' : 'text-light'}`
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/services"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `nav-link fw-semibold ${isActive ? 'active text-primary' : 'text-light'}`
                }
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/portfolio"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `nav-link fw-semibold ${isActive ? 'active text-primary' : 'text-light'}`
                }
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `nav-link fw-semibold ${isActive ? 'active text-primary' : 'text-light'}`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="d-flex pt-2 pt-lg-0">
            <Link
              to="/contact"
              onClick={closeMenu}
              className="btn btn-primary fw-semibold px-4 rounded-pill d-inline-flex align-items-center gap-1"
            >
              Get a Quote <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-auto border-top border-secondary border-opacity-25">
      <div className="container">
        <div className="row g-4 pb-4 border-bottom border-secondary border-opacity-25">
          <div className="col-lg-4">
            <Link to="/" className="text-white text-decoration-none d-flex align-items-center gap-2 fw-bold fs-4 mb-3">
              <span className="bg-primary text-white rounded-3 p-2 d-inline-flex">
                <Code2 size={20} />
              </span>
              <span>
                NOVA<span className="text-primary">TECH</span>
              </span>
            </Link>
            <p className="text-secondary small mb-0" style={{ maxWidth: '320px' }}>
              Building modern websites, M-Pesa e-commerce platforms, and mobile apps designed to scale your business.
            </p>
          </div>

          <div className="col-6 col-lg-2">
            <h6 className="fw-bold text-uppercase small text-light mb-3">Company</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li><Link to="/" className="text-secondary text-decoration-none">Home</Link></li>
              <li><Link to="/about" className="text-secondary text-decoration-none">About Us</Link></li>
              <li><Link to="/services" className="text-secondary text-decoration-none">Services</Link></li>
              <li><Link to="/portfolio" className="text-secondary text-decoration-none">Portfolio</Link></li>
              <li><Link to="/contact" className="text-secondary text-decoration-none">Contact</Link></li>
            </ul>
          </div>

          <div className="col-6 col-lg-3">
            <h6 className="fw-bold text-uppercase small text-light mb-3">Solutions</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small text-secondary">
              <li>Web Development</li>
              <li>E-Commerce & M-Pesa</li>
              <li>Mobile App Development</li>
              <li>UI/UX & Branding</li>
            </ul>
          </div>

          <div className="col-lg-3">
            <h6 className="fw-bold text-uppercase small text-light mb-3">Contact</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small text-secondary">
              <li className="d-flex align-items-center gap-2">
                <MapPin size={15} className="text-primary" /> Kisii Town, Kenya
              </li>
              <li className="d-flex align-items-center gap-2">
                <Phone size={15} className="text-primary" /> +254 700 000 000
              </li>
              <li className="d-flex align-items-center gap-2">
                <Mail size={15} className="text-primary" /> hello@novatech.co.ke
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-4 d-flex flex-column flex-sm-row justify-content-between align-items-center small text-secondary">
          <p className="mb-2 mb-sm-0">© {new Date().getFullYear()} NovaTech Solutions. All rights reserved.</p>
          <p className="mb-0">Built with React & Bootstrap</p>
        </div>
      </div>
    </footer>
  );
}

function NotFound() {
  return (
    <section className="container py-5 my-5 text-center">
      <h1 className="display-1 fw-bold text-primary">404</h1>
      <h2 className="fw-bold mb-3">Page Not Found</h2>
      <p className="text-muted mb-4">The page you are looking for doesn't exist or has been moved.</p>
      <Link to="/" className="btn btn-primary px-4 fw-semibold">
        Back to Home
      </Link>
    </section>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
