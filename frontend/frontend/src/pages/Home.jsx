import React, { useState } from 'react';
import {
  ArrowRight, CheckCircle, Code, ShoppingCart, Smartphone,
  Star, ShieldCheck, Zap, Users, Sparkles
} from 'lucide-react';

const STATS = [
  { label: "Projects Delivered", value: "120+" },
  { label: "Happy Clients", value: "98%" },
  { label: "Uptime Guarantee", value: "99.9%" },
  { label: "Support Coverage", value: "24/7" }
];

const FEATURED_SERVICES = [
  {
    icon: Code,
    title: "Custom Web Development",
    desc: "Fast, mobile-first websites and web apps tailored to convert visitors into loyal customers.",
    price: "From KES 45,000"
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce & M-Pesa",
    desc: "Full online stores with automated M-Pesa STK Push, inventory tracking, and order alerts.",
    price: "From KES 75,000"
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Smooth Android and iOS apps built for speed, offline support, and easy scaling.",
    price: "From KES 120,000"
  }
];

const TESTIMONIALS = [
  {
    name: "Brian Omwenga",
    role: "Founder, Gusii Fresh Mart",
    quote: "Our online orders tripled within two months of launching our M-Pesa integrated store. Fast, reliable, and easy to manage."
  },
  {
    name: "Faith Kerubo",
    role: "Director, Rift Valley Logistics",
    quote: "They took our outdated site and turned it into a modern booking platform. Their support team responds in minutes."
  },
  {
    name: "David Kamau",
    role: "CEO, FinTrack Kenya",
    quote: "Clean code, clear weekly milestones, and zero surprises on pricing. Easily the best tech team we have worked with."
  }
];

function Home() {
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  const handleOpenQuote = () => {
    setQuoteSubmitted(false);
    setShowQuoteModal(true);
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    setQuoteSubmitted(true);
  };

  return (
    <div className="bg-light text-dark">

      {/* 1. HERO SECTION */}
      <section className="bg-dark text-white py-5">
        <div className="container py-lg-5">
          <div className="row align-items-center g-5">
            {/* Left Copy */}
            <div className="col-lg-7">
              <span className="badge rounded-pill bg-primary bg-opacity-25 text-info border border-info border-opacity-25 px-3 py-2 mb-3 d-inline-flex align-items-center gap-2">
                <Sparkles size={14} /> DIGITAL AGENCY & SOFTWARE STUDIO
              </span>
              <h1 className="display-4 fw-bold mb-3">
                We Build Websites & Apps That Scale Your Business.
              </h1>
              <p className="lead text-secondary mb-4">
                From high-converting business websites to M-Pesa e-commerce platforms and mobile apps, we craft reliable digital solutions built for growth.
              </p>

              <div className="d-flex flex-wrap gap-3 mb-4">
                <button
                  onClick={handleOpenQuote}
                  className="btn btn-primary btn-lg px-4 fw-semibold d-inline-flex align-items-center gap-2"
                >
                  Start Your Project <ArrowRight size={18} />
                </button>
                <a
                  href="/services"
                  className="btn btn-outline-light btn-lg px-4 fw-semibold"
                >
                  View All Services
                </a>
              </div>

              <div className="d-flex flex-wrap gap-4 small text-secondary pt-2">
                <span className="d-inline-flex align-items-center gap-1">
                  <CheckCircle size={16} className="text-success" /> Free Consultation
                </span>
                <span className="d-inline-flex align-items-center gap-1">
                  <CheckCircle size={16} className="text-success" /> M-Pesa & Card Ready
                </span>
                <span className="d-inline-flex align-items-center gap-1">
                  <CheckCircle size={16} className="text-success" /> Fast Turnaround
                </span>
              </div>
            </div>

            {/* Right Feature Card */}
            <div className="col-lg-5">
              <div className="card bg-secondary bg-opacity-10 border border-secondary border-opacity-25 text-white rounded-4 p-4 shadow-lg">
                <div className="card-body">
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <div className="bg-primary text-white rounded-3 p-3">
                      <Zap size={24} />
                    </div>
                    <div>
                      <h5 className="fw-bold mb-0">Why Businesses Choose Us</h5>
                      <small className="text-secondary">Built for speed, trust & ROI</small>
                    </div>
                  </div>

                  <div className="d-flex gap-3 mb-3 pb-3 border-bottom border-secondary border-opacity-25">
                    <ShieldCheck size={22} className="text-info flex-shrink-0 mt-1" />
                    <div>
                      <h6 className="fw-bold mb-1">Enterprise-Grade Security</h6>
                      <p className="small text-secondary mb-0">
                        SSL encryption, daily cloud backups, and secure payment gateways included.
                      </p>
                    </div>
                  </div>

                  <div className="d-flex gap-3">
                    <Users size={22} className="text-info flex-shrink-0 mt-1" />
                    <div>
                      <h6 className="fw-bold mb-1">Dedicated Local Support</h6>
                      <p className="small text-secondary mb-0">
                        Direct WhatsApp and phone support with full training so you stay in control.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="bg-white border-bottom py-4">
        <div className="container">
          <div className="row text-center g-4">
            {STATS.map((stat, idx) => (
              <div key={idx} className="col-6 col-md-3">
                <h2 className="fw-bold text-primary mb-0">{stat.value}</h2>
                <small className="text-muted fw-semibold text-uppercase">{stat.label}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED SERVICES PREVIEW */}
      <section className="container py-5 my-3">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "620px" }}>
          <span className="text-primary fw-bold small text-uppercase">What We Do</span>
          <h2 className="fw-bold mt-1">Solutions Tailored to Your Goals</h2>
          <p className="text-muted">
            Everything you need to launch, modernize, and scale your online presence under one roof.
          </p>
        </div>

        <div className="row g-4">
          {FEATURED_SERVICES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="col-md-4">
                <div className="card h-100 border-0 rounded-4 shadow-sm p-3">
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                      <div className="bg-primary bg-opacity-10 text-primary rounded-3 p-3 d-inline-flex mb-4">
                        <Icon size={24} />
                      </div>
                      <h3 className="h5 fw-bold mb-2">{item.title}</h3>
                      <p className="text-muted small mb-4">{item.desc}</p>
                    </div>
                    <div className="pt-3 border-top d-flex align-items-center justify-content-between">
                      <span className="fw-bold text-dark small">{item.price}</span>
                      <a href="/services" className="text-primary fw-semibold small text-decoration-none d-inline-flex align-items-center gap-1">
                        Learn More <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. CLIENT TESTIMONIALS */}
      <section className="bg-white border-top border-bottom py-5">
        <div className="container py-4">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
            <span className="text-primary fw-bold small text-uppercase">Client Stories</span>
            <h2 className="fw-bold mt-1">Trusted by Growing Businesses</h2>
          </div>

          <div className="row g-4">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="col-md-4">
                <div className="card h-100 bg-light border-0 rounded-4 p-4">
                  <div className="text-warning mb-3 d-flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-secondary small fst-italic mb-4">"{t.quote}"</p>
                  <div className="mt-auto">
                    <h6 className="fw-bold mb-0">{t.name}</h6>
                    <small className="text-muted">{t.role}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA BANNER */}
      <section className="container py-5">
        <div className="bg-primary text-white rounded-4 p-5 text-center shadow">
          <h2 className="fw-bold mb-3">Ready to Bring Your Idea to Life?</h2>
        </div>
      </section>
    </div>
  );
}

export default Home;
