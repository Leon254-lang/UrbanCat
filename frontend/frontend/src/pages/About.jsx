import React from 'react';
import {
  Target, Eye, Award, ShieldCheck, Lightbulb,
  Users, ArrowRight, Sparkles, CheckCircle
} from 'lucide-react';

const VALUES = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    desc: "We stay ahead of modern web and mobile standards so your business gets fast, future-ready software."
  },
  {
    icon: ShieldCheck,
    title: "Transparent & Reliable",
    desc: "Clear timelines, honest KES pricing, and weekly milestone demos with zero hidden surprises."
  },
  {
    icon: Award,
    title: "Built for Results",
    desc: "Every line of code and pixel is designed to help you win customers, automate payments, and grow."
  }
];

const TEAM = [
  {
    name: "John Doe",
    role: "Chief Executive Officer (CEO)",
    initials: "JD",
    image: "/images/photo-1658863025658-4a259cc68fc9.avif",
    bio: "Leads business strategy, client partnerships, and product vision with over 8 years in digital transformation.",
    skills: ["Product Strategy", "Client Growth", "Operations"]
  },
  {
    name: "Jane Smith",
    role: "Chief Technology Officer (CTO)",
    initials: "JS",
    image: "/images/photo-1787839253728-f6d42c2cfb8c.avif",
    bio: "Architects scalable cloud systems, M-Pesa payment integrations, and enterprise-grade web security.",
    skills: ["System Architecture", "Cloud & Security", "API Integrations"]
  },
  {
    name: "Bob Johnson",
    role: "Lead Developer",
    initials: "BJ",
    image: "/images/premium_photo-1685086785636-2a1a0e5b591f.avif",
    bio: "Specializes in high-performance React frontends, cross-platform mobile apps, and clean, maintainable code.",
    skills: ["React & Next.js", "Mobile Apps", "UI Engineering"]
  }
];

function About() {
  return (
    <div className="bg-light text-dark min-vh-100">

      {/* 1. HERO HEADER */}
      <section className="bg-dark text-white py-5">
        <div className="container py-5 text-center">
          <span className="badge rounded-pill bg-primary bg-opacity-25 text-info border border-info border-opacity-25 px-3 py-2 mb-3 d-inline-flex align-items-center gap-2">
            <Sparkles size={14} /> OUR STORY & TEAM
          </span>
          <h1 className="display-4 fw-bold mb-3">
            Building Digital Solutions That Empower Businesses.
          </h1>
          <p className="lead text-secondary mx-auto mb-0" style={{ maxWidth: "660px" }}>
            We are a passionate team of designers, engineers, and strategists dedicated to helping brands thrive in the modern digital economy.
          </p>
        </div>
      </section>

      {/* 2. OUR STORY & MISSION / VISION */}
      <section className="container py-5 my-3">
        <div className="row align-items-center g-5 mb-5">
          <div className="col-lg-6">
            <span className="text-primary fw-bold small text-uppercase">Who We Are</span>
            <h2 className="fw-bold mt-1 mb-3">Turning Bold Ideas Into Reliable Software</h2>
            <p className="text-muted">
              Founded with a clear goal—to bridge the gap between ambitious businesses and world-class technology—we build websites, M-Pesa integrated e-commerce platforms, and mobile applications that solve real problems.
            </p>
            <p className="text-muted mb-4">
              Whether you are launching a startup or modernizing an established company, we partner with you from initial sketches to post-launch growth.
            </p>

            <div className="row g-3">
              <div className="col-sm-6">
                <div className="d-flex align-items-center gap-2 small fw-semibold">
                  <CheckCircle size={18} className="text-success flex-shrink-0" />
                  <span>120+ Successful Launches</span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center gap-2 small fw-semibold">
                  <CheckCircle size={18} className="text-success flex-shrink-0" />
                  <span>Local & Global Clients</span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center gap-2 small fw-semibold">
                  <CheckCircle size={18} className="text-success flex-shrink-0" />
                  <span>Agile Weekly Delivery</span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center gap-2 small fw-semibold">
                  <CheckCircle size={18} className="text-success flex-shrink-0" />
                  <span>24/7 Technical Care</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision Cards */}
          <div className="col-lg-6">
            <div className="d-flex flex-column gap-4">
              <img
                src="/images/photo-1787647562528-c591a0011510.avif"
                alt="UrbanCat team planning a digital project together"
                className="w-100 rounded-4 shadow-sm"
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="card border-0 shadow-sm rounded-4 p-4">
                <div className="d-flex align-items-start gap-3">
                  <div className="bg-primary bg-opacity-10 text-primary rounded-3 p-3 flex-shrink-0">
                    <Target size={24} />
                  </div>
                  <div>
                    <h3 className="h5 fw-bold mb-2">Our Mission</h3>
                    <p className="text-muted small mb-0">
                      To deliver accessible, high-performing digital products that help businesses automate operations, reach more customers, and scale sustainably.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card border-0 shadow-sm rounded-4 p-4">
                <div className="d-flex align-items-start gap-3">
                  <div className="bg-info bg-opacity-10 text-info rounded-3 p-3 flex-shrink-0">
                    <Eye size={24} />
                  </div>
                  <div>
                    <h3 className="h5 fw-bold mb-2">Our Vision</h3>
                    <p className="text-muted small mb-0">
                      To be the most trusted technology partner in East Africa and beyond, known for engineering excellence, integrity, and measurable client success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES */}
      <section className="bg-white border-top border-bottom py-5">
        <div className="container py-4">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
            <span className="text-primary fw-bold small text-uppercase">What Drives Us</span>
            <h2 className="fw-bold mt-1">Our Core Values</h2>
          </div>

          <div className="row g-4">
            {VALUES.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="col-md-4">
                  <div className="p-4 rounded-4 bg-light border h-100">
                    <div className="bg-primary bg-opacity-10 text-primary rounded-3 p-3 d-inline-flex mb-3">
                      <Icon size={24} />
                    </div>
                    <h3 className="h5 fw-bold mb-2">{val.title}</h3>
                    <p className="text-muted small mb-0">{val.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. MEET OUR TEAM */}
      <section className="container py-5 my-3">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
          <span className="text-primary fw-bold small text-uppercase d-inline-flex align-items-center gap-1">
            <Users size={15} /> LEADERSHIP
          </span>
          <h2 className="fw-bold mt-1">Meet Our Team</h2>
          <p className="text-muted">
            The people behind your strategy, architecture, and code.
          </p>
        </div>

        <div className="row g-4">
          {TEAM.map((member, idx) => (
            <div key={idx} className="col-md-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 text-center p-4">
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <img
                      src={member.image}
                      alt={`${member.name}, ${member.role}`}
                      className="rounded-4 mx-auto mb-3 shadow-sm d-block"
                      style={{ width: "100%", height: "180px", objectFit: "cover" }}
                      loading="lazy"
                    />
                    <h3 className="h5 fw-bold mb-1">{member.name}</h3>
                    <p className="text-primary small fw-semibold mb-3">{member.role}</p>
                    <p className="text-muted small mb-4">{member.bio}</p>
                  </div>

                  {/* Skill Badges */}
                  <div className="d-flex flex-wrap justify-content-center gap-2 pt-3 border-top">
                    {member.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="badge bg-light text-secondary border fw-normal px-2 py-1"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. BOTTOM CTA */}
      <section className="container pb-5">
        <div className="bg-primary text-white rounded-4 p-5 text-center shadow">
          <h2 className="fw-bold mb-3">Want to Work With Our Team?</h2>
          <p className="text-white-50 mx-auto mb-4" style={{ maxWidth: "560px" }}>
            Let's discuss your goals and build something great together.
          </p>
          <a
            href="/contact"
            className="btn btn-light text-primary btn-lg fw-bold px-4 d-inline-flex align-items-center gap-2"
          >
            Let's Talk <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;
