'use client'

import { useState } from 'react'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    // Required fields
    name: '',
    phone: '',
    email: '',
    address: '',

    // Optional fields
    serviceType: '',
    propertyType: '',
    squareFootage: '',
    currentFlooringType: '',
    floorRemoval: '',
    subfloorCondition: '',
    timeline: '',
    budgetRange: '',
    projectDescription: '',
    contactMethod: '',
    bestTimeToCall: ''
  })

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('success')
        setFormData({
          name: '', phone: '', email: '', address: '', serviceType: '',
          propertyType: '', squareFootage: '', currentFlooringType: '',
          floorRemoval: '', subfloorCondition: '', timeline: '', budgetRange: '',
          projectDescription: '', contactMethod: '', bestTimeToCall: ''
        })
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
          Quote Request Received!
        </h3>
        <p className="text-charcoal-600 mb-6">
          Thank you for your detailed information. Mark will personally review your request
          and get back to you within 24 hours with a comprehensive quote.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="btn-primary"
        >
          Submit Another Request
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      {/* Contact Information Section */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 bg-forest-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
            1
          </div>
          <h3
            className="text-xl text-charcoal-900"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Contact Information
          </h3>
        </div>

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
      </div>

      {/* Project Details Section */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 bg-forest-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
            2
          </div>
          <h3
            className="text-xl text-charcoal-900"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Project Details
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="form-label">Service Type</label>
            <select
              value={formData.serviceType}
              onChange={(e) => handleChange('serviceType', e.target.value)}
              className="form-select"
            >
              <option value="">Select service type</option>
              <option value="floor-leveling">Floor Leveling (5-Year Warranty)</option>
              <option value="hardwood-installation">Hardwood Installation</option>
              <option value="stairs">Staircase Installation/Repair</option>
              <option value="repair">Floor Repair & Maintenance</option>
              <option value="multiple">Multiple Services</option>
              <option value="not-sure">Not Sure - Need Consultation</option>
            </select>
          </div>

          <div>
            <label className="form-label">Property Type</label>
            <select
              value={formData.propertyType}
              onChange={(e) => handleChange('propertyType', e.target.value)}
              className="form-select"
            >
              <option value="">Select property type</option>
              <option value="residential-house">Residential - House</option>
              <option value="residential-condo">Residential - Condo/Apartment</option>
              <option value="residential-townhome">Residential - Townhome</option>
              <option value="commercial-office">Commercial - Office</option>
              <option value="commercial-warehouse">Commercial - Warehouse</option>
              <option value="commercial-retail">Commercial - Retail</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="form-label">Approximate Square Footage</label>
            <input
              type="text"
              value={formData.squareFootage}
              onChange={(e) => handleChange('squareFootage', e.target.value)}
              className="form-input"
              placeholder="e.g., 1,200 sq ft"
            />
          </div>

          <div>
            <label className="form-label">Current Flooring Type</label>
            <select
              value={formData.currentFlooringType}
              onChange={(e) => handleChange('currentFlooringType', e.target.value)}
              className="form-select"
            >
              <option value="">Select current flooring</option>
              <option value="hardwood">Hardwood</option>
              <option value="laminate">Laminate</option>
              <option value="vinyl">Vinyl/LVP</option>
              <option value="tile">Tile</option>
              <option value="carpet">Carpet</option>
              <option value="concrete">Concrete/Bare Subfloor</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="form-label">Floor Removal Needed?</label>
            <select
              value={formData.floorRemoval}
              onChange={(e) => handleChange('floorRemoval', e.target.value)}
              className="form-select"
            >
              <option value="">Select option</option>
              <option value="yes">Yes - Removal Required</option>
              <option value="no">No - Ready for Installation</option>
              <option value="not-sure">Not Sure - Need Assessment</option>
            </select>
          </div>

          <div>
            <label className="form-label">Subfloor Condition</label>
            <select
              value={formData.subfloorCondition}
              onChange={(e) => handleChange('subfloorCondition', e.target.value)}
              className="form-select"
            >
              <option value="">Select condition</option>
              <option value="good">Good - Level and Solid</option>
              <option value="fair">Fair - Minor Issues</option>
              <option value="poor">Poor - Needs Leveling/Repair</option>
              <option value="not-sure">Not Sure - Need Assessment</option>
            </select>
          </div>

          <div>
            <label className="form-label">Project Timeline</label>
            <select
              value={formData.timeline}
              onChange={(e) => handleChange('timeline', e.target.value)}
              className="form-select"
            >
              <option value="">Select timeline</option>
              <option value="asap">As Soon As Possible</option>
              <option value="1-2-weeks">Within 1-2 Weeks</option>
              <option value="1-month">Within 1 Month</option>
              <option value="2-3-months">2-3 Months</option>
              <option value="planning">Just Planning/Researching</option>
            </select>
          </div>

          <div>
            <label className="form-label">Budget Range</label>
            <select
              value={formData.budgetRange}
              onChange={(e) => handleChange('budgetRange', e.target.value)}
              className="form-select"
            >
              <option value="">Select budget range</option>
              <option value="under-5k">Under $5,000</option>
              <option value="5k-10k">$5,000 - $10,000</option>
              <option value="10k-20k">$10,000 - $20,000</option>
              <option value="20k-plus">$20,000+</option>
              <option value="flexible">Flexible - Depends on Scope</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="form-label">Project Description</label>
            <textarea
              value={formData.projectDescription}
              onChange={(e) => handleChange('projectDescription', e.target.value)}
              className="form-textarea"
              placeholder="Please describe your project, any specific requirements, concerns, or questions you have. The more details you provide, the more accurate our quote will be."
              rows={5}
            />
          </div>
        </div>
      </div>

      {/* Contact Preferences Section */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 bg-forest-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
            3
          </div>
          <h3
            className="text-xl text-charcoal-900"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Contact Preferences
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="form-label">Preferred Contact Method</label>
            <select
              value={formData.contactMethod}
              onChange={(e) => handleChange('contactMethod', e.target.value)}
              className="form-select"
            >
              <option value="">Select preference</option>
              <option value="phone">Phone Call</option>
              <option value="email">Email</option>
              <option value="text">Text Message</option>
              <option value="no-preference">No Preference</option>
            </select>
          </div>

          <div>
            <label className="form-label">Best Time to Call</label>
            <select
              value={formData.bestTimeToCall}
              onChange={(e) => handleChange('bestTimeToCall', e.target.value)}
              className="form-select"
            >
              <option value="">Select time</option>
              <option value="morning">Morning (8AM - 12PM)</option>
              <option value="afternoon">Afternoon (12PM - 5PM)</option>
              <option value="evening">Evening (5PM - 8PM)</option>
              <option value="anytime">Anytime</option>
            </select>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-primary btn-xl w-full justify-center"
        >
          {status === 'loading' ? (
            <>
              <Loader2 size={20} className="animate-spin" />
              Submitting Request...
            </>
          ) : (
            <>
              <Send size={20} />
              Request Free Quote
            </>
          )}
        </button>

        <p className="text-center text-charcoal-500 text-sm mt-4">
          By submitting, you agree to be contacted regarding your flooring project.
          We respect your privacy and will never share your information.
        </p>
      </div>

      {/* Error Message */}
      {status === 'error' && (
        <div className="bg-copper-50 border-2 border-copper-200 rounded-xl p-6 flex items-start gap-4">
          <div className="w-10 h-10 bg-copper-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <AlertCircle className="text-copper-600" size={20} />
          </div>
          <div>
            <h4 className="font-semibold text-charcoal-900 mb-1">Submission Failed</h4>
            <p className="text-charcoal-600 text-sm">
              We're sorry, something went wrong. Please call us directly at{' '}
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
