const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || '/api').replace(/\/$/, '');

async function post(endpoint, body, isMultipart = false) {
  const response = await fetch(`${API_BASE_URL}/${endpoint}/`, {
    method: 'POST',
    headers: isMultipart ? undefined : { 'Content-Type': 'application/json' },
    body: isMultipart ? body : JSON.stringify(body),
  });
  const result = await response.json();

  if (!response.ok) {
    const message = result.detail || Object.entries(result)
      .map(([field, errors]) => `${field}: ${Array.isArray(errors) ? errors.join(' ') : errors}`)
      .join(' ');
    throw new Error(message || 'The request could not be completed.');
  }

  return result;
}

export function sendContactMessage(data) {
  return post('contact-messages', data);
}

export function sendProjectInquiry(data) {
  return post('project-inquiries', data, true);
}
