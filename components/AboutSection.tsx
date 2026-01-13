export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen pt-16 bg-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
              Hi, I'm <span className="text-primary-teal">Angel</span>
            </h1>
            <p className="text-lg text-gray-600">
              anchetadev@gmail.com
            </p>
            <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed">
              If it's a challenge, I'm in.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
              <div>
                <span className="text-5xl sm:text-6xl font-bold text-primary-teal">8</span>
                <p className="text-sm text-gray-600 uppercase tracking-wide mt-2">Years Experience</p>
              </div>
              <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-4">
                <div className="w-12 h-12 bg-primary-teal rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-700">Tech + Education<br />Education focused Technologist</p>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10">
              {/* Placeholder for profile image */}
              <div className="w-full h-96 sm:h-[500px] bg-gradient-to-br from-primary-teal to-primary-teal/70 rounded-lg flex items-center justify-center">
                <div className="w-64 h-64 sm:w-80 sm:h-80 bg-white rounded-full flex items-center justify-center shadow-2xl">
                  <span className="text-6xl sm:text-8xl">👨‍💻</span>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -left-4 w-full h-full bg-primary-teal/20 rounded-lg -z-10 blur-xl"></div>
          </div>
        </div>
      </div>

      {/* What do I help Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 bg-gray-50">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 lg:mb-12">
          What I like Working On
        </h2>
        <p className="text-gray-600 text-lg mb-8 max-w-3xl">
          I enjoy a challenge - especially ones people think are "impossible". I have a "roll-up-my-sleeves" attitude to get things done!
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {/* Website Design */}
          <div className="bg-white rounded-xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-primary-teal rounded-lg flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Website Design</h3>
            <p className="text-2xl font-bold text-gray-700 mb-1">76 Projects</p>
          </div>

          {/* Mobile App Design */}
          <div className="bg-white rounded-xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-primary-orange rounded-lg flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile App Design</h3>
            <p className="text-2xl font-bold text-gray-700 mb-1">63 Projects</p>
          </div>

          {/* Brand Identity */}
          <div className="bg-white rounded-xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Brand Identity</h3>
            <p className="text-2xl font-bold text-gray-700 mb-1">47 Projects</p>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          <div className="bg-white rounded-xl p-6 lg:p-8 shadow-lg">
            <p className="text-4xl lg:text-5xl font-bold text-primary-teal mb-2">285+</p>
            <p className="text-gray-600 text-lg">Project Completed</p>
          </div>
          <div className="bg-white rounded-xl p-6 lg:p-8 shadow-lg">
            <p className="text-4xl lg:text-5xl font-bold text-primary-orange mb-2">190+</p>
            <p className="text-gray-600 text-lg">Happy Clients</p>
          </div>
        </div>
      </div>

      {/* Mission Statement Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="bg-primary-teal rounded-2xl p-8 lg:p-12 text-white">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 max-w-4xl">
            My mission is to help teams optimize.  
          </p>
          
          {/* Client Logos Placeholder */}
          <div className="flex flex-wrap items-center gap-6 lg:gap-8 opacity-90">
            <div className="text-xl font-semibold">Customer Education</div>
            <div className="text-xl font-semibold">Customer Success</div>
            <div className="text-xl font-semibold">Onboarding</div>
            <div className="text-xl font-semibold">Data Analysis</div>
            <div className="text-xl font-semibold">Operations</div>
          </div>
        </div>

        {/* How Can I Assist You Section */}
        <div className="mt-12 lg:mt-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
            How Can I Assist You?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* UI Design */}
            <div className="bg-gray-100 rounded-xl p-6 lg:p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚙️</span>
                </div>
                <div className="flex-1">
                  <p className="text-gray-600 text-sm mb-4">
                    We create intuitive, visually appealing interfaces that enhance user experience and navigation, ensuring your app is both beautiful and functional across all devices.
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">UI Design</h3>
                  <span className="text-gray-400 text-sm">01</span>
                </div>
              </div>
            </div>

            {/* Development */}
            <div className="bg-gray-100 rounded-xl p-6 lg:p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚡</span>
                </div>
                <div className="flex-1">
                  <p className="text-gray-600 text-sm mb-4">
                    Our team builds reliable, scalable solutions, delivering clean code that powers websites and mobile apps with top-notch performance and security.
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Development</h3>
                  <span className="text-gray-400 text-sm">02</span>
                </div>
              </div>
            </div>

            {/* Graphic Design */}
            <div className="bg-gray-100 rounded-xl p-6 lg:p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">✏️</span>
                </div>
                <div className="flex-1">
                  <p className="text-gray-600 text-sm mb-4">
                    We design responsive, user-friendly websites that blend aesthetics with functionality, providing a seamless experience across devices and reflecting your brand's identity.
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Graphic Design</h3>
                  <span className="text-gray-400 text-sm">03</span>
                </div>
              </div>
            </div>

            {/* Branding */}
            <div className="bg-gray-100 rounded-xl p-6 lg:p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold">T</span>
                </div>
                <div className="flex-1">
                  <p className="text-gray-600 text-sm mb-4">
                    We craft memorable brand identities, from logos to complete strategies, ensuring consistency and a strong connection with your audience across all platforms.
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Branding</h3>
                  <span className="text-gray-400 text-sm">04</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
