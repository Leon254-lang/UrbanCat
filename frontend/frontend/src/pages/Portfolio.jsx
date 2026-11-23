import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ExternalLink, ArrowRight, CheckCircle, Sparkles,
  Layers, TrendingUp, Globe, Smartphone, ShoppingCart, Award
} from 'lucide-react';

const PROJECTS = [
  {
    id: 1,
    title: "Gusii Fresh Mart E-Commerce",
    category: "E-Commerce",
    client: "Gusii Fresh Mart Ltd",
    year: "2026",
    summary: "Full grocery e-commerce storefront with automated M-Pesa STK Push, delivery zone pricing, and live stock alerts.",
    result: "+210% increase in online orders within 60 days",
    tech: ["React", "Bootstrap", "Node.js", "M-Pesa Daraja API"],
    gradient: "linear-gradient(135deg, #0d6efd 0%, #0a2540 100%)",
    image: "/images/photo-1563986768494-4dee2763ff3f.avif",
    icon: ShoppingCart,
    highlights: [
      "Instant Safaricom M-Pesa STK Push checkout with automated SMS receipts",
      "Admin dashboard for stock management, rider dispatch, and daily sales reports",
      "Mobile-first storefront optimized for fast loading on mobile networks"
    ]
  },
  {
    id: 2,
    title: "Rift Valley Logistics Portal",
    category: "Web Apps",
    client: "Rift Valley Cargo & Freight",
    year: "2026",
    summary: "Real-time parcel tracking system and automated quote calculator for regional freight deliveries across East Africa.",
    result: "Cut customer support calls by 65% via live tracking",
    tech: ["React", "Bootstrap", "PostgreSQL", "Maps API"],
    gradient: "linear-gradient(135deg, #198754 0%, #0f291e 100%)",
    image: "/images/photo-1678690832311-bb6e361989ca.avif",
    icon: Globe,
    highlights: [
      "Waybill tracking page with live status updates at every transit hub",
      "Automated instant shipping rate calculator based on weight and destination",
      "Corporate client portal with downloadable invoices and delivery history"
    ]
  },
  {
    id: 3,
    title: "FinTrack Chama & SACCO App",
    category: "Mobile Apps",
    client: "FinTrack Kenya",
    year: "2025",
    summary: "Cross-platform mobile app helping investment groups manage member contributions, loans, and automated dividends.",
    result: "4,500+ active monthly members across 180 chamas",
    tech: ["React Native", "Node.js", "M-Pesa Paybill", "Firebase"],
    gradient: "linear-gradient(135deg, #6f42c1 0%, #1e1238 100%)",
    image: "/images/premium_photo-1720287601920-ee8c503af775.avif",
    icon: Smartphone,
    highlights: [
      "Automated M-Pesa Paybill reconciliation that credits member wallets instantly",
      "Digital loan request approvals with automated interest and repayment schedules",
      "Exportable PDF & Excel financial statements for group AGMs"
    ]
  },
  {
    id: 4,
    title: "Highland Tea Exporters Website",
    category: "Websites",
    client: "Highland Estate Teas",
    year: "2026",
    summary: "Modern B2B corporate website with interactive tea grade catalogs, sample request workflows, and global buyer inquiries.",
    result: "3x more international wholesale leads per month",
    tech: ["React", "Bootstrap", "Technical SEO"],
    gradient: "linear-gradient(135deg, #0dcaf0 0%, #083344 100%)",
    image: "/images/photo-1658863025658-4a259cc68fc9.avif",
    icon: Layers,
    highlights: [
      "Interactive tea grade showcase with tasting notes and packaging specs",
      "Direct sample-box request form integrated with sales team notifications",
      "99/100 Google PageSpeed performance and technical SEO setup"
    ]
  },
  {
    id: 5,
    title: "MedCare Clinic Booking System",
    category: "Web Apps",
    client: "MedCare Outpatient Center",
    year: "2025",
    summary: "Online doctor appointment scheduler with automated SMS reminders and digital patient intake forms.",
    result: "Reduced missed appointments by 48%",
    tech: ["React", "Bootstrap", "Express", "SMS Gateway"],
    gradient: "linear-gradient(135deg, #dc3545 0%, #2c0b0e 100%)",
    image: "/images/photo-1787839253728-f6d42c2cfb8c.avif",
    icon: TrendingUp,
    highlights: [
      "Real-time specialist availability calendar with instant slot booking",
      "Automated SMS appointment confirmations and 24-hour reminders",
      "Reception desk dashboard for managing walk-ins and patient queues"
    ]
  },
  {
    id: 6,
    title: "Urban Kicks Sneaker Store",
    category: "E-Commerce",
    client: "Urban Kicks Retail",
    year: "2026",
    summary: "High-converting fashion storefront with size filtering, flash-sale countdowns, and one-tap WhatsApp & M-Pesa checkout.",
    result: "KES 1.8M+ in launch-month sales",
    tech: ["React", "Bootstrap", "M-Pesa API", "Cloudinary"],
    gradient: "linear-gradient(135deg, #fd7e14 0%, #331904 100%)",
    image: "/images/photo-1557838923-2985c318be48.avif",
    icon: ShoppingCart,
    highlights: [
      "Dynamic size and color variant selector with live stock counts",
      "Same-day rider delivery estimator across major towns",
      "Automated abandoned-cart recovery notifications"
    ]
  }
];

const CATEGORIES = ["All", "Websites", "E-Commerce", "Web Apps", "Mobile Apps"];

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-light text-dark min-vh-100">

      {/* 1. HERO HEADER */}
      <section className="bg-dark text-white py-5">
        <div className="container py-5 text-center">
          <span className="badge rounded-pill bg-primary bg-opacity-25 text-info border border-info border-opacity-25 px-3 py-2 mb-3 d-inline-flex align-items-center gap-2">
            <Sparkles size={14} /> OUR WORK & CASE STUDIES
          </span>
          <h1 className="display-4 fw-bold mb-3">
            Projects Built for Real Business Growth.
          </h1>
          <p className="lead text-secondary mx-auto mb-0" style={{ maxWidth: "660px" }}>
            Explore websites, M-Pesa e-commerce platforms, and mobile apps we have designed, engineered, and launched for ambitious brands.
          </p>
        </div>
      </section>

      {/* 2. IMPACT HIGHLIGHTS BAR */}
      <section className="bg-white border-bottom py-4">
        <div className="container">
          <div className="row text-center g-3">
            <div className="col-6 col-md-3">
              <h4 className="fw-bold text-primary mb-0">50+</h4>
              <small className="text-muted fw-semibold">Websites Launched</small>
            </div>
            <div className="col-6 col-md-3">
              <h4 className="fw-bold text-primary mb-0">25+</h4>
              <small className="text-muted fw-semibold">M-Pesa Stores Live</small>
            </div>
            <div className="col-6 col-md-3">
              <h4 className="fw-bold text-primary mb-0">15+</h4>
              <small className="text-muted fw-semibold">Custom Web & Mobile Apps</small>
            </div>
            <div className="col-6 col-md-3">
              <h4 className="fw-bold text-primary mb-0">4.9 / 5</h4>
              <small className="text-muted fw-semibold">Average Client Rating</small>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FILTERABLE PROJECT GRID */}
      <section className="container py-5 my-3">
        {/* Category Filter Tabs */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`btn btn-sm rounded-pill px-4 py-2 fw-semibold ${
                activeCategory === category
                  ? "btn-primary shadow-sm"
                  : "btn-white bg-white border text-secondary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="row g-4">
          {filteredProjects.map((project) => {
            const Icon = project.icon;
            return (
              <div key={project.id} className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                  {/* Visual Banner Header */}
                  <div
                    className="p-4 text-white d-flex flex-column justify-content-between position-relative overflow-hidden"
                    style={{ minHeight: "175px" }}
                  >
                    <img
                      src={project.image}
                      alt=""
                      className="position-absolute top-0 start-0 w-100 h-100"
                      style={{ objectFit: "cover" }}
                      loading="lazy"
                    />
                    <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "linear-gradient(135deg, rgba(13,37,64,.82), rgba(13,37,64,.35))" }} />
                    <div className="d-flex justify-content-between align-items-start position-relative">
                      <span className="badge bg-white bg-opacity-25 text-white rounded-pill px-3 py-1">
                        {project.category}
                      </span>
                      <div className="bg-white bg-opacity-10 rounded-3 p-2">
                        <Icon size={22} />
                      </div>
                    </div>
                    <div className="position-relative">
                      <small className="text-white-50 d-block mt-3">{project.year}</small>
                      <h3 className="h5 fw-bold mb-0">{project.title}</h3>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="card-body p-4 d-flex flex-column justify-content-between">
                    <div>
                      <small className="text-muted fw-semibold d-block mb-2">
                        Client: {project.client}
                      </small>
                      <p className="text-secondary small mb-3">{project.summary}</p>

                      {/* Result Highlight */}
                      <div className="bg-success bg-opacity-10 text-success rounded-3 p-2 px-3 small fw-semibold mb-3 d-flex align-items-center gap-2">
                        <TrendingUp size={16} className="flex-shrink-0" />
                        <span>{project.result}</span>
                      </div>
                    </div>

                    <div>
                      {/* Tech Stack */}
                      <div className="d-flex flex-wrap gap-1 mb-3">
                        {project.tech.map((t, idx) => (
                          <span key={idx} className="badge bg-light text-secondary border fw-normal">
                            {t}
                          </span>
                        ))}
                      </div>

                      <button
                        type="button"
                        className="btn btn-outline-primary btn-sm rounded-pill px-3"
                        onClick={() => setSelectedProject(project)}
                      >
                        View case study <ArrowRight size={14} className="ms-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {selectedProject && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3"
          style={{ background: "rgba(0, 0, 0, 0.6)", zIndex: 1050 }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-4 shadow-lg w-100 p-4 p-md-5"
            style={{ maxWidth: "640px", maxHeight: "90vh", overflowY: "auto" }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div>
                <span className="badge bg-primary-subtle text-primary rounded-pill mb-2">
                  {selectedProject.category} · {selectedProject.year}
                </span>
                <h2 id="project-dialog-title" className="h4 fw-bold mb-1">
                  {selectedProject.title}
                </h2>
                <p className="text-muted mb-0">{selectedProject.client}</p>
              </div>
              <button
                type="button"
                className="btn-close"
                aria-label="Close case study"
                onClick={() => setSelectedProject(null)}
              />
            </div>

            <p className="text-secondary">{selectedProject.summary}</p>
            <div className="bg-success bg-opacity-10 text-success rounded-3 p-3 mb-4 fw-semibold">
              <Award size={18} className="me-2" />{selectedProject.result}
            </div>

            <h3 className="h6 fw-bold">Project highlights</h3>
            <ul className="list-unstyled mb-4">
              {selectedProject.highlights.map((highlight, index) => (
                <li key={index} className="d-flex gap-2 mb-2 text-secondary">
                  <CheckCircle size={18} className="text-primary flex-shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="d-flex flex-wrap gap-2 mb-4">
              {selectedProject.tech.map((technology, index) => (
                <span key={index} className="badge bg-light text-secondary border fw-normal">
                  {technology}
                </span>
              ))}
            </div>

            <Link to="/contact" className="btn btn-primary rounded-pill px-4">
              Discuss a similar project <ExternalLink size={15} className="ms-1" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Portfolio;
