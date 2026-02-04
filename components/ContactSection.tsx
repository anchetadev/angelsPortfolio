'use client'

import { useState, useEffect } from 'react'

type AlertType = 'success' | 'error' | 'loading' | null

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [alert, setAlert] = useState<AlertType>(null)
  const [isAlertClosing, setIsAlertClosing] = useState(false)

  // Auto-hide alert after 3 seconds
  useEffect(() => {
    if (alert && alert !== 'loading') {
      const timer = setTimeout(() => {
        setIsAlertClosing(true)
        setTimeout(() => {
          setAlert(null)
          setIsAlertClosing(false)
        }, 300) // Match animation duration
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [alert])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setAlert('loading')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'a491a06b-e51e-46c2-ad98-0091f7e1c5bb',
          subject: `Portfolio Contact: ${formData.subject}`,
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'anchetadev@gmail.com'
        })
      })

      const result = await response.json()

      if (result.success) {
        setAlert('success')
        // Reset form on success
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
      } else {
        setAlert('error')
      }
    } catch (error) {
      setAlert('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="min-h-screen pt-16 bg-white relative">
      {/* Floating Alert */}
      {alert && (
        <div
          className={`fixed top-20 left-1/2 z-50 px-6 py-4 rounded-lg shadow-2xl max-w-md w-full mx-4 ${
            isAlertClosing ? 'animate-slide-up' : 'animate-slide-down'
          } ${
            alert === 'success'
              ? 'bg-success text-white'
              : alert === 'error'
              ? 'bg-error text-white'
              : alert === 'loading'
              ? 'bg-info text-white'
              : ''
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {alert === 'success' && (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              )}
              {alert === 'error' && (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
              {alert === 'loading' && (
                <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              )}
              <p className="font-medium">
                {alert === 'success' && 'Message sent successfully!'}
                {alert === 'error' && 'Something went wrong. Please try again.'}
                {alert === 'loading' && 'Sending...'}
              </p>
            </div>
            {alert !== 'loading' && (
              <button
                onClick={() => {
                  setIsAlertClosing(true)
                  setTimeout(() => {
                    setAlert(null)
                    setIsAlertClosing(false)
                  }, 300)
                }}
                className="ml-4 text-white/80 hover:text-white transition-colors"
                aria-label="Close alert"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Send me a message and I'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 rounded-2xl p-6 lg:p-12 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-black focus:border-transparent outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="Your full name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-black focus:border-transparent outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Subject Field */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-black focus:border-transparent outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="What's this about?"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent outline-none transition-all resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="Tell me about your project, idea, or just say hello..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary-black text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-primary-red/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {/* Additional Contact Info */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wider">
                  Email
                </h3>
                <a
                  href="mailto:anchetadev@gmail.com"
                  className="text-primary-red hover:underline"
                >
                  anchetadev@gmail.com
                </a>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wider">
                  Availability
                </h3>
                <p className="text-gray-600">
                  Available for freelance projects
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Let's make something amazing together.
          </p>
          <p className="text-lg text-gray-600">
            Start by saying hi
          </p>
        </div>
      </div>
    </section>
  )
}
