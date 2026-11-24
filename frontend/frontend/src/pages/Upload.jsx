import React, { useState } from 'react';
import { sendProjectInquiry } from '../api';

const MAX_FILES = 5;
const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ACCEPTED_TYPES = '.pdf,.png,.jpg,.jpeg,.gif,.webp';

function Upload() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'web-development',
    budget: '',
    details: '',
  });
  const [files, setFiles] = useState([]);
  const [fileError, setFileError] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    setFormData((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
    setSubmitError('');
  };

  const addFiles = (selectedFiles) => {
    const incoming = Array.from(selectedFiles);
    const next = [...files];
    let error = '';

    for (const file of incoming) {
      const extension = file.name.includes('.')
        ? `.${file.name.split('.').pop().toLowerCase()}`
        : '';
      if (!ACCEPTED_TYPES.split(',').includes(extension)) {
        error = `${file.name} is not a supported file type.`;
        break;
      }
      if (file.size > MAX_FILE_SIZE) {
        error = `${file.name} exceeds the 10 MB limit.`;
        break;
      }
      if (next.length >= MAX_FILES) {
        error = `You can attach up to ${MAX_FILES} files.`;
        break;
      }
      if (!next.some((existing) => existing.name === file.name && existing.size === file.size)) {
        next.push(file);
      }
    }

    setFiles(next);
    setFileError(error);
  };

  const removeFile = (fileToRemove) => {
    setFiles((previous) => previous.filter((file) => file !== fileToRemove));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'web-development',
      budget: '',
      details: '',
    });
    setFiles([]);
    setFileError('');
    setSubmitError('');
    setSubmitted(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (fileError) return;

    setIsSubmitting(true);
    setSubmitError('');
    const payload = new FormData();
    Object.entries(formData).forEach(([key, value]) => payload.append(key, value));
    files.forEach((file) => payload.append('attachments', file));

    try {
      await sendProjectInquiry(payload);
      setSubmitted(true);
      setFiles([]);
    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-9 col-xl-8">
          <div className="mb-4">
            <span className="text-primary fw-bold small text-uppercase">Start a project</span>
            <h1 className="h2 fw-bold mt-1">Tell us what you’re building</h1>
            <p className="text-muted mb-0">
              Share a few details and attach any helpful references. Our team will follow up with you.
            </p>
          </div>

          {submitted ? (
            <div className="alert alert-success shadow-sm" role="status">
              <h2 className="h5 alert-heading">Your project brief has been received.</h2>
              <p className="mb-3">Thanks, {formData.name}. We’ll get back to you at {formData.email}.</p>
              <button type="button" className="btn btn-success" onClick={resetForm}>
                Send another project brief
              </button>
            </div>
          ) : (
            <form className="card border-0 shadow-sm" onSubmit={handleSubmit}>
              <div className="card-body p-4 p-md-5">
                {submitError && (
                  <div className="alert alert-danger" role="alert">{submitError}</div>
                )}

                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">Your name *</label>
                    <input
                      id="name"
                      name="name"
                      className="form-control"
                      autoComplete="name"
                      maxLength="150"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email address *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-control"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="phone" className="form-label">Phone / WhatsApp</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="form-control"
                      autoComplete="tel"
                      maxLength="40"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="service" className="form-label">Service *</label>
                    <select
                      id="service"
                      name="service"
                      className="form-select"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="web-development">Custom Web Development</option>
                      <option value="ecommerce">E-Commerce & M-Pesa</option>
                      <option value="mobile-app">Mobile App Development</option>
                      <option value="ui-branding">UI/UX & Branding</option>
                      <option value="seo-marketing">SEO & Marketing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label htmlFor="budget" className="form-label">Estimated budget</label>
                    <select
                      id="budget"
                      name="budget"
                      className="form-select"
                      value={formData.budget}
                      onChange={handleChange}
                    >
                      <option value="">Select a range (optional)</option>
                      <option value="Under KES 50,000">Under KES 50,000</option>
                      <option value="KES 50,000–150,000">KES 50,000–150,000</option>
                      <option value="KES 150,000–500,000">KES 150,000–500,000</option>
                      <option value="Over KES 500,000">Over KES 500,000</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label htmlFor="details" className="form-label">Project details *</label>
                    <textarea
                      id="details"
                      name="details"
                      className="form-control"
                      rows="5"
                      maxLength="5000"
                      value={formData.details}
                      onChange={handleChange}
                      placeholder="Describe your goals, audience, required features, and timeline."
                      required
                    />
                    <div className="form-text text-end">{formData.details.length}/5000</div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="attachments" className="form-label">
                      Reference files <span className="text-muted">(optional, up to 5 files / 10 MB each)</span>
                    </label>
                    <div
                      className={`border border-2 rounded-3 p-3 ${
                        isDragging ? 'border-primary bg-primary bg-opacity-10' : 'border-secondary-subtle'
                      }`}
                      style={{ borderStyle: 'dashed' }}
                      onDragOver={(event) => {
                        event.preventDefault();
                        setIsDragging(true);
                      }}
                      onDragLeave={() => setIsDragging(false)}
                      onDrop={(event) => {
                        event.preventDefault();
                        setIsDragging(false);
                        addFiles(event.dataTransfer.files);
                      }}
                    >
                      <input
                        id="attachments"
                        type="file"
                        className="form-control"
                        accept={ACCEPTED_TYPES}
                        multiple
                        onChange={(event) => {
                          addFiles(event.target.files);
                          event.target.value = '';
                        }}
                      />
                      <div className="form-text">Or drag files here.</div>
                    </div>
                    <div className="form-text">PDF, PNG, JPG, GIF, or WebP.</div>
                    {fileError && <div className="text-danger small mt-2" role="alert">{fileError}</div>}
                    {files.length > 0 && (
                      <ul className="list-group mt-3">
                        {files.map((file, index) => (
                          <li
                            key={`${file.name}-${file.size}-${index}`}
                            className="list-group-item d-flex justify-content-between align-items-center"
                          >
                            <span className="text-break">{file.name}</span>
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-danger ms-3"
                              onClick={() => removeFile(file)}
                              aria-label={`Remove ${file.name}`}
                            >
                              Remove
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
                <button type="submit" className="btn btn-primary px-4 mt-4" disabled={isSubmitting || Boolean(fileError)}>
                  {isSubmitting ? 'Sending project brief…' : 'Send project brief'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Upload;
