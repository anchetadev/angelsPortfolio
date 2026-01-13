export default function ContactSection() {
  return (
    <section id="contact" className="min-h-screen pt-16 bg-white">
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
          <form className="space-y-6">
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
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent outline-none transition-all"
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
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent outline-none transition-all"
                placeholder="your.email@example.com"
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
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent outline-none transition-all resize-none"
                placeholder="Tell me about your project, idea, or just say hello..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary-teal text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-primary-teal/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Send Message
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
                  href="mailto:angel.ancheta@example.com"
                  className="text-primary-teal hover:underline"
                >
                  angel.ancheta@example.com
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
