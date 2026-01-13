'use client'

import { useState } from 'react'
import { FileText } from 'lucide-react'

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    // Required
    name: '',
    phone: '',
    email: '',
    address: '',

    // Optional
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
        // Reset form
        setFormData({
          name: '', phone: '', email: '', address: '', serviceType: '',
          propertyType: '', squareFootage: '', currentFlooringType: '',
          floorRemoval: '', subfloorCondition: '', timeline: '', budgetRange: '',
          projectDescription: '', contactMethod: '', bestTimeToCall: ''
        })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Required Information Section */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
                placeholder="(604) 123-4567"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Property Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
                placeholder="Property address"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Project Details Section */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Details</h3>
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Service Type
              </label>
              <select
                value={formData.serviceType}
                onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
              >
                <option value="">Select service type</option>
                <option value="floor-leveling">Floor Leveling</option>
                <option value="hardwood-installation">Hardwood Installation</option>
                <option value="stairs">Staircase Installation/Repair</option>
                <option value="repair">Floor Repair & Maintenance</option>
                <option value="multiple">Multiple Services</option>
                <option value="not-sure">Not Sure</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Property Type
              </label>
              <select
                value={formData.propertyType}
                onChange={(e) => setFormData({...formData, propertyType: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
              >
                <option value="">Select property type</option>
                <option value="residential-house">Residential - House</option>
                <option value="residential-condo">Residential - Condo</option>
                <option value="residential-townhome">Residential - Townhome</option>
                <option value="commercial-office">Commercial - Office</option>
                <option value="commercial-warehouse">Commercial - Warehouse</option>
                <option value="commercial-retail">Commercial - Retail</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Approximate Square Footage
              </label>
              <input
                type="text"
                value={formData.squareFootage}
                onChange={(e) => setFormData({...formData, squareFootage: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
                placeholder="e.g., 1,200 sq ft"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Flooring Type
              </label>
              <select
                value={formData.currentFlooringType}
                onChange={(e) => setFormData({...formData, currentFlooringType: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
              >
                <option value="">Select flooring type</option>
                <option value="hardwood">Hardwood</option>
                <option value="laminate">Laminate</option>
                <option value="vinyl">Vinyl</option>
                <option value="tile">Tile</option>
                <option value="carpet">Carpet</option>
                <option value="concrete">Concrete/Bare Subfloor</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Floor Removal Needed?
              </label>
              <select
                value={formData.floorRemoval}
                onChange={(e) => setFormData({...formData, floorRemoval: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
              >
                <option value="">Select option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="not-sure">Not Sure</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subfloor Condition
              </label>
              <select
                value={formData.subfloorCondition}
                onChange={(e) => setFormData({...formData, subfloorCondition: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
              >
                <option value="">Select condition</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
                <option value="poor">Poor - Needs Leveling</option>
                <option value="not-sure">Not Sure</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Timeline
              </label>
              <select
                value={formData.timeline}
                onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
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
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Budget Range
              </label>
              <select
                value={formData.budgetRange}
                onChange={(e) => setFormData({...formData, budgetRange: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
              >
                <option value="">Select budget range</option>
                <option value="under-5k">Under $5,000</option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="10k-20k">$10,000 - $20,000</option>
                <option value="20k-plus">$20,000+</option>
                <option value="flexible">Flexible - Depends on Scope</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project Description
            </label>
            <textarea
              value={formData.projectDescription}
              onChange={(e) => setFormData({...formData, projectDescription: e.target.value})}
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
              placeholder="Please describe your project, any specific requirements, or questions you have..."
            />
          </div>
        </div>
      </div>

      {/* Contact Preferences Section */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Preferences</h3>
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Contact Method
              </label>
              <select
                value={formData.contactMethod}
                onChange={(e) => setFormData({...formData, contactMethod: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
              >
                <option value="">Select preference</option>
                <option value="phone">Phone Call</option>
                <option value="email">Email</option>
                <option value="text">Text Message</option>
                <option value="no-preference">No Preference</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Best Time to Call
              </label>
              <select
                value={formData.bestTimeToCall}
                onChange={(e) => setFormData({...formData, bestTimeToCall: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
              >
                <option value="">Select time</option>
                <option value="morning">Morning (8am - 12pm)</option>
                <option value="afternoon">Afternoon (12pm - 5pm)</option>
                <option value="evening">Evening (5pm - 8pm)</option>
                <option value="anytime">Anytime</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-primary-red text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-red-dark disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-colors"
      >
        {status === 'loading' ? 'Submitting...' : (
          <>
            <FileText size={20} />
            Request Free Quote
          </>
        )}
      </button>

      {status === 'success' && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
          <p className="font-semibold mb-1">Quote Request Received!</p>
          <p className="text-sm">Thank you for your detailed information. Mark will review your request and get back to you within 24 hours with a comprehensive quote.</p>
        </div>
      )}

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
          <p className="font-semibold mb-1">Submission Failed</p>
          <p className="text-sm">We're sorry, something went wrong. Please call us directly at (604) 353-6077 or email promarkflooring@hotmail.com</p>
        </div>
      )}
    </form>
  )
}
