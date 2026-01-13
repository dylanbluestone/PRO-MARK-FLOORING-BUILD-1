'use client'

import { useState } from 'react'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    service: '',
    message: ''
  })

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', phone: '', email: '', address: '', service: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  if (status === 'success') {
    return (
      <div className="bg-forest-50 border-2 border-forest-200 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="text-forest-600" size={32} />
        </div>
        <h3
          className="text-2xl text-charcoal-900 mb-3"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Message Sent!
        </h3>
        <p className="text-charcoal-600 mb-6">
          Thank you for reaching out. Mark will personally review your message
          and get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="btn-primary"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="form-label">
            Full Name <span className="text-copper-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            onFocus={() => setFocusedField('name')}
            onBlur={() => setFocusedField(null)}
            className={`form-input ${focusedField === 'name' ? 'border-forest-500' : ''}`}
            placeholder="John Smith"
          />
        </div>

        <div>
          <label className="form-label">
            Phone Number <span className="text-copper-500">*</span>
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            onFocus={() => setFocusedField('phone')}
            onBlur={() => setFocusedField(null)}
            className={`form-input ${focusedField === 'phone' ? 'border-forest-500' : ''}`}
            placeholder="(604) 123-4567"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="form-label">
            Email Address <span className="text-copper-500">*</span>
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField(null)}
            className={`form-input ${focusedField === 'email' ? 'border-forest-500' : ''}`}
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label className="form-label">
            Property Address <span className="text-copper-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.address}
            onChange={(e) => handleChange('address', e.target.value)}
            onFocus={() => setFocusedField('address')}
            onBlur={() => setFocusedField(null)}
            className={`form-input ${focusedField === 'address' ? 'border-forest-500' : ''}`}
            placeholder="123 Main St, Vancouver, BC"
          />
        </div>
      </div>

      <div>
        <label className="form-label">
          Service Interested In <span className="text-copper-500">*</span>
        </label>
        <select
          required
          value={formData.service}
          onChange={(e) => handleChange('service', e.target.value)}
          className="form-select"
        >
          <option value="">Select a service</option>
          <option value="floor-leveling">Floor Leveling (5-Year Warranty)</option>
          <option value="hardwood-installation">Hardwood Installation</option>
          <option value="stairs">Staircase Installation/Repair</option>
          <option value="repair">Floor Repair & Maintenance</option>
          <option value="consultation">Free Consultation</option>
          <option value="other">Other / Not Sure</option>
        </select>
      </div>

      <div>
        <label className="form-label">
          Message <span className="text-copper-500">*</span>
        </label>
        <textarea
          required
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          onFocus={() => setFocusedField('message')}
          onBlur={() => setFocusedField(null)}
          rows={5}
          className={`form-textarea ${focusedField === 'message' ? 'border-forest-500' : ''}`}
          placeholder="Tell us about your project, questions, or how we can help..."
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary btn-lg w-full justify-center"
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            Sending Message...
          </>
        ) : (
          <>
            <Send size={20} />
            Send Message
          </>
        )}
      </button>

      <p className="text-center text-charcoal-500 text-sm">
        We respect your privacy and will never share your information.
      </p>

      {/* Error Message */}
      {status === 'error' && (
        <div className="bg-copper-50 border-2 border-copper-200 rounded-xl p-6 flex items-start gap-4">
          <div className="w-10 h-10 bg-copper-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <AlertCircle className="text-copper-600" size={20} />
          </div>
          <div>
            <h4 className="font-semibold text-charcoal-900 mb-1">Something Went Wrong</h4>
            <p className="text-charcoal-600 text-sm">
              We're sorry, there was an error sending your message. Please call us directly at{' '}
              <a href="tel:+16043536077" className="text-forest-600 font-medium">(604) 353-6077</a>
              {' '}or email{' '}
              <a href="mailto:promarkflooring@hotmail.com" className="text-forest-600 font-medium">
                promarkflooring@hotmail.com
              </a>
            </p>
          </div>
        </div>
      )}
    </form>
  )
}
