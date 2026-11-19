import React, { useState } from 'react';
import {
  Code, Smartphone, Palette, TrendingUp, ShoppingCart, Shield,
  Check, ArrowRight, CheckCircle, Sparkles, Clock
} from 'lucide-react';

// 1. SERVICES DATA
const SERVICES = [
  {
    id: 1,
    category: "Development",
    title: "Custom Web Development",
    tagline: "Fast, responsive, and SEO-ready websites built to convert visitors.",
    price: "From KES 45,000",
    timeline: "2 – 4 Weeks",
    icon: Code,
    popular: true,
    features: [
      "Modern React / Next.js frontend architecture",
      "Mobile-first responsive design across all screens",
      "Technical SEO & Core Web Vitals optimization",
      "Admin CMS dashboard to edit your own content"
    ]
  },
  {
    id: 2,
    category: "Development",
    title: "E-Commerce & M-Pesa Stores",
    tagline: "Complete online shops with automated inventory and local payments.",
    price: "From KES 75,000",
    timeline: "3 – 5 Weeks",
    icon: ShoppingCart,
    popular: false,
    features: [
      "Safaricom M-Pesa STK Push & Card checkout",
      "Automated order tracking & email/SMS receipts",
      "Product variants, discount codes & stock alerts",
      "Sales analytics & customer management panel"
    ]
  },
  {
    id: 3,
    category: "Development",
    title: "Mobile App Development",
    tagline: "Cross-platform iOS and Android apps with smooth native performance.",
    price: "From KES 120,000",
    timeline: "5 – 8 Weeks",
    icon: Smartphone,
    popular: false,
    features: [
      "Single codebase for both Android & iOS",
      "Push notifications & offline data sync",
      "Google Play Store & Apple App Store publishing",
      "Secure user authentication & API integration"
    ]
  },
  {
    id: 4,
    category: "Design",
    title: "UI/UX & Brand Identity",
    tagline: "Memorable visual systems and intuitive interfaces users love.",
    price: "From KES 30,000",
    timeline: "1 – 2 Weeks",
    icon: Palette,
    popular: false,
    features: [
      "Interactive Figma wireframes & clickable prototypes",
      "Logo suite, typography & brand color guidelines",
      "User journey mapping & usability testing",
      "Design handoff ready for engineering teams"
    ]
  },
  {
    id: 5,
    category: "Growth",
    title: "SEO & Digital Marketing",
    tagline: "Rank higher on Google and turn search traffic into paying clients.",
    price: "From KES 25,000 / mo",
    timeline: "Ongoing",
    icon: TrendingUp,
    popular: false,
    features: [
      "Local & national keyword research strategy",
      "On-page SEO, speed fixes & Google Business setup",
      "Targeted Google & Meta ad campaign management",
      "Monthly traffic, leads & ROI performance reports"
    ]
  },
  {
    id: 6,
    category: "Support",
    title: "Website Care & Security",
    tagline: "24/7 uptime monitoring, daily backups, and speed maintenance.",
    price: "From KES 10,000 / mo",
    timeline: "24/7 Coverage",
    icon: Shield,
    popular: false,
    features: [
      "Daily automated cloud backups & one-click restore",
      "SSL certificate, firewall & malware protection",
      "Monthly plugin, framework & security patches",
      "Priority WhatsApp & email technical support"
    ]
  }
];

const PROCESS_STEPS = [
  { step: "01", title: "Discovery & Strategy", desc: "We discuss your goals, target audience, and project scope to create a clear roadmap." },
  { step: "02", title: "Design & Prototype", desc: "You review interactive wireframes and visual mockups before a single line of code is written." },
  { step: "03", title: "Agile Development", desc: "We build your solution in weekly milestones with live preview links so you track progress." },
  { step: "04", title: "Testing & Launch", desc: "After speed, security, and mobile testing, we deploy live and train your team." }
];

const FAQS = [
  {
    q: "How do payments work for a new project?",
    a: "We typically require a 50% deposit to kick off design and development, with the remaining 50% payable upon final approval right before launch."
  },
  {
    q: "Can you integrate M-Pesa or card payments into my site?",
    a: "Yes! We integrate Safaricom Daraja (M-Pesa STK Push & Paybill/Till), Paystack, Flutterwave, and Stripe depending on where your customers are located."
  },
  {
    q: "Will I be able to update the website myself after launch?",
    a: "Absolutely. Every website we build comes with an easy-to-use admin dashboard and a recorded walkthrough showing you how to edit text, images, and products."
  },
  {
    q: "Do you offer domain registration and hosting?",
    a: "Yes, we handle .co.ke, .com, and custom domain registration along with fast, SSL-secured cloud hosting."
  }
];

const CATEGORIES = ["All", "Development", "Design", "Growth", "Support"];

function Services() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openFaq, setOpenFaq] = useState(0);
  const [selectedService, setSelectedService] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const filteredServices = activeCategory === "All"
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  const handleOpenModal = (serviceTitle) => {
    setSelectedService(serviceTitle);
    setSubmitted(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-light text-dark min-vh-100">

      {/* 1. HERO SECTION */}
      <section className="bg-dark text-white py-5">
        <div className="container py-5 text-center">
          <span className="badge rounded-pill bg-primary bg-opacity-25 text-info border border-info border-opacity-25 px-3 py-2 mb-3 d-inline-flex align-items-center gap-2">
            <Sparkles size={14} /> END-TO-END DIGITAL SOLUTIONS
          </span>
          <h1 className="display-4 fw-bold mb-3">
            Services Built to Grow Your Business.
          </h1>
          <p className="lead text-secondary mx-auto mb-4" style={{ maxWidth: "680px" }}>
            From high-converting websites and M-Pesa e-commerce stores to custom mobile apps, we turn your ideas into scalable digital products.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <a href="#services-list" className="btn btn-primary btn-lg px-4 fw-semibold d-inline-flex align-items-center gap-2">
              Explore Services <ArrowRight size={18} />
            </a>
            <button
              onClick={() => handleOpenModal("Custom Project Consultation")}
              className="btn btn-outline-light btn-lg px-4 fw-semibold"
            >
              Request a Free Quote
            </button>
          </div>
        </div>
      </section>

      {/* 2. FILTERABLE SERVICES GRID */}
      <section id="services-list" className="container py-5 my-3">
        <div className="row align-items-end mb-5 g-3">
          <div className="col-lg-6">
            <h2 className="fw-bold mb-1">Our Core Services</h2>
            <p className="text-muted mb-0">
              Transparent starting rates and clear deliverables for every stage of growth.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="col-lg-6 d-flex flex-wrap justify-content-lg-end gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`btn btn-sm rounded-pill px-3 py-2 fw-semibold ${
                  activeCategory === category
                    ? "btn-primary"
                    : "btn-white bg-white border text-secondary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Service Cards */}
        <div className="row g-4">
          {filteredServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="col-md-6 col-lg-4">
                <div
                  className={`card h-100 rounded-4 shadow-sm position-relative ${
                    service.popular ? "border-primary border-2" : "border-0"
                  }`}
                >
                  {service.popular && (
                    <span className="badge bg-primary position-absolute top-0 end-0 translate-middle-y me-4 px-3 py-2 rounded-pill">
                      Most Popular
                    </span>
                  )}

                  <div className="card-body p-4 d-flex flex-column justify-content-between">
                    <div>
                      {/* Icon & Timeline */}
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div className="bg-primary bg-opacity-10 text-primary rounded-3 p-3 d-inline-flex">
                          <IconComponent size={24} />
                        </div>
                        <span className="badge bg-light text-secondary border px-3 py-2 rounded-pill d-inline-flex align-items-center gap-1">
                          <Clock size={13} /> {service.timeline}
                        </span>
                      </div>

                      {/* Title & Tagline */}
                      <h3 className="h5 fw-bold mb-2">{service.title}</h3>
                      <p className="text-muted small mb-4">{service.tagline}</p>

                      {/* Price */}
                      <div className="border-top border-bottom py-3 mb-4">
                        <small className="text-uppercase text-muted fw-semibold d-block" style={{ fontSize: "0.7rem" }}>
                          Starting Investment
                        </small>
                        <span className="h4 fw-bold text-dark mb-0">{service.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Services;

