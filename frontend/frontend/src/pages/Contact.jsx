import React, { useState } from 'react';
import {
  MapPin, Phone, Mail, Clock, Send,
  CheckCircle, MessageSquare, Sparkles
} from 'lucide-react';
import { sendContactMessage } from '../api';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    try {
      await sendContactMessage(formData);
      setSubmitted(true);
    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-light text-dark min-vh-100">

      {/* 1. HERO HEADER */}
      <section className="bg-dark text-white py-5">
        <div className="container py-4 text-center">
          <span className="badge rounded-pill bg-primary bg-opacity-25 text-info border border-info border-opacity-25 px-3 py-2 mb-3 d-inline-flex align-items-center gap-2">
            <Sparkles size={14} /> WE'D LOVE TO HEAR FROM YOU
          </span>
          <h1 className="display-4 fw-bold mb-3">Contact Us</h1>
          <p className="lead text-secondary mx-auto mb-0" style={{ maxWidth: "620px" }}>
            Have a project in mind, need a custom quote, or have a question about our services? Reach out and our team will respond within 24 hours.
          </p>
        </div>
      </section>

      {/* 2. CONTACT DETAILS & FORM SECTION */}
      <section className="container py-5 my-3">
        <div className="row g-4 g-lg-5">

          {/* Left Column: Contact Info Cards */}
          <div className="col-lg-5">
            <h2 className="h4 fw-bold mb-2">Get in Touch</h2>
            <p className="text-muted small mb-4">
              Choose the channel that works best for you, or visit our office during working hours.
            </p>

            <img
              src="/images/photo-1542744173-8e7e53415bb0.avif"
              alt="A productive digital project meeting"
              className="w-100 rounded-4 shadow-sm mb-4"
              style={{ height: "190px", objectFit: "cover" }}
              loading="lazy"
            />

            <div className="d-flex flex-column gap-3 mb-4">
              {/* Phone / WhatsApp */}
              <div className="card border-0 shadow-sm rounded-4 p-3">
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-primary bg-opacity-10 text-primary rounded-3 p-3">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h6 className="fw-bold mb-0">Phone & WhatsApp</h6>
                    <p className="text-muted small mb-0">+254 700 000 000</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="card border-0 shadow-sm rounded-4 p-3">
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-primary bg-opacity-10 text-primary rounded-3 p-3">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h6 className="fw-bold mb-0">Email Us</h6>
                    <p className="text-muted small mb-0">hello@youragency.co.ke</p>
                  </div>
                </div>
              </div>

              {/* Office Location */}
              <div className="card border-0 shadow-sm rounded-4 p-3">
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-primary bg-opacity-10 text-primary rounded-3 p-3">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h6 className="fw-bold mb-0">Office Location</h6>
                    <p className="text-muted small mb-0">Kisii Town, Kenya</p>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="card border-0 shadow-sm rounded-4 p-3">
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-primary bg-opacity-10 text-primary rounded-3 p-3">
                    <Clock size={22} />
                  </div>
                  <div>
                    <h6 className="fw-bold mb-0">Business Hours</h6>
                    <p className="text-muted small mb-0">Mon – Fri: 8:00 AM – 6:00 PM | Sat: 9:00 AM – 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp CTA */}
            <a
              href="https://wa.me"
              target="_blank"
              rel="noreferrer"
              className="btn btn-success w-100 py-3 rounded-4 fw-bold d-flex align-items-center justify-content-center gap-2 shadow-sm"
            >
              <MessageSquare size={20} /> Chat Instantly on WhatsApp
            </a>
          </div>

          {/* Right Column: Contact Form */}
          <div className="col-lg-7">
            <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5 h-100">
              {submitted ? (
                <div className="text-center my-auto py-5">
                  <CheckCircle size={56} className="text-success mb-3" />
                  <h3 className="fw-bold">Message Sent!</h3>
                  <p className="text-muted mx-auto mb-4" style={{ maxWidth: "420px" }}>
                    Thank you, <strong>{formData.name}</strong>. We have received your inquiry regarding <strong>{formData.subject}</strong> and will get back to you at <strong>{formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setSubmitError('');
                      setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
                    }}
                    className="btn btn-primary px-4 fw-semibold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="h4 fw-bold mb-1">Send Us a Message</h2>
                  <p className="text-muted small mb-4">
                    Fill out the form below and we will get back to you as soon as possible.
                  </p>

                  <form onSubmit={handleSubmit}>
                    {submitError && (
                      <div className="alert alert-danger" role="alert">{submitError}</div>
                    )}
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="name" className="form-label small fw-semibold">
                          Full Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="form-control py-2"
                          placeholder="Brian Omwenga"
                          required
                        />
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="email" className="form-label small fw-semibold">
                          Email Address <span className="text-danger">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="form-control py-2"
                          placeholder="brian@example.com"
                          required
                        />
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="phone" className="form-label small fw-semibold">
                          Phone / WhatsApp Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="form-control py-2"
                          placeholder="07XX XXX XXX"
                        />
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="subject" className="form-label small fw-semibold">
                          Service / Subject
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="form-select py-2"
                        >
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Custom Web Development">Custom Web Development</option>
                          <option value="E-Commerce & M-Pesa Store">E-Commerce & M-Pesa Store</option>
                          <option value="Mobile App Development">Mobile App Development</option>
                          <option value="UI/UX & Branding">UI/UX & Branding</option>
                          <option value="SEO & Marketing">SEO & Marketing</option>
                        </select>
                      </div>

                      <div className="col-12">
                        <label htmlFor="message" className="form-label small fw-semibold">
                          Your Message <span className="text-danger">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows="5"
                          value={formData.message}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Tell us about your project, timeline, and goals..."
                          required
                        />
                      </div>
                    </div>

                    <button type="submit" className="btn btn-primary w-100 py-3 mt-4 rounded-3 fw-bold d-flex align-items-center justify-content-center gap-2" disabled={isSubmitting}>
                      <Send size={18} /> {isSubmitting ? 'Sending…' : 'Send Message'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
