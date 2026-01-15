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
                <div className="w-12 h-12 bg-primary-black rounded-full flex items-center justify-center">
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
            <div className="absolute -bottom-4 -left-4 w-full h-full bg-primary-black/20 rounded-lg -z-10 blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Mission Statement Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="bg-primary-black rounded-2xl p-8 lg:p-12 text-white">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 max-w-4xl">
            My mission is to help people learn stuff.  
          </p>
          
          {/* Client Logos Placeholder */}
          <div className="flex flex-wrap items-center gap-6 lg:gap-8 opacity-90">
            <div className="text-xl font-semibold">Instructional Design</div>
            <div className="text-xl font-semibold">Customer Education</div>
            <div className="text-xl font-semibold">Customer Success</div>
            <div className="text-xl font-semibold">Onboarding</div>
            <div className="text-xl font-semibold">Data Analysis</div>
          </div>
        </div>
      </div>
    </section>
  )
}
