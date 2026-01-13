export default function WorkSection() {
  const projects = [
    {
      id: 1,
      name: 'Payu',
      year: '2021',
      category: 'DIGITAL AGENCY',
      tags: ['UI DESIGN', 'MOBILE DEV'],
      description: 'Financial mobile application with portfolio management features',
      image: (
        <div className="w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center relative overflow-hidden">
          {/* Phone Mockup */}
          <div className="w-64 h-[500px] bg-black rounded-[2.5rem] p-2 shadow-2xl relative">
            <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
              {/* Mock App Screen */}
              <div className="bg-gray-50 h-full p-4 space-y-4 overflow-y-auto">
                <div className="text-xs text-gray-600">Good Morning</div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary-teal rounded-full"></div>
                  <div className="font-semibold">William Butcher</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-xs text-gray-500 mb-1">Total Portfolio</div>
                  <div className="text-2xl font-bold mb-1">$24,554,960</div>
                  <div className="text-sm text-green-600">+$14,512.24</div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-medium">Deposit</button>
                  <button className="flex-1 bg-black text-white py-2 rounded-lg text-sm font-medium">Withdraw</button>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold">Trading Balance</span>
                    <span className="text-xs text-gray-500">&gt;</span>
                  </div>
                  <div className="text-lg font-bold">$14,663,345</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-semibold">Stock Portfolio</span>
                    <span className="text-xs text-primary-teal">Show all</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-blue-500 rounded"></div>
                        <span className="text-xs font-medium">AAPL</span>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-medium">120,842 units</div>
                        <div className="text-xs text-green-600">$132,843 (+0.72%)</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-pink-500 rounded"></div>
                        <span className="text-xs font-medium">ABNB</span>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-medium">4,924 units</div>
                        <div className="text-xs text-green-600">$224,745 (+1.79%)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Surface texture */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-100 to-transparent"></div>
        </div>
      ),
    },
    {
      id: 2,
      name: 'Zenpoint',
      year: '2024',
      category: 'WELLNESS PLATFORM',
      tags: ['UI DESIGN', 'WEB DEV'],
      description: 'Yoga and meditation platform website',
      image: (
        <div className="w-full h-96 bg-gradient-to-b from-blue-200 to-blue-300 rounded-lg overflow-hidden relative">
          {/* Mock Website */}
          <div className="absolute inset-0 bg-white/90 backdrop-blur-sm p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-xl font-bold text-gray-900">Zenpoint</div>
              <div className="hidden sm:flex gap-4 text-sm text-gray-600">
                <span>About</span>
                <span>Service</span>
                <span>Timetable</span>
                <span>Articles</span>
                <button className="bg-gray-900 text-white px-4 py-1 rounded">Log In</button>
              </div>
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">Explore the wonders of inner peace of mind.</h2>
              <p className="text-gray-600 text-sm max-w-md">
                Experience the harmonious balance of body and mind through our carefully designed yoga and meditation programs.
              </p>
              <div className="flex gap-3 pt-2">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium">Enroll now</button>
                <button className="border-2 border-gray-900 text-gray-900 px-6 py-2 rounded-lg text-sm font-medium">Schedule a free call</button>
              </div>
            </div>
          </div>
          {/* Background image placeholder */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
              <span className="text-6xl">🧘</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      name: 'Payu E-commerce',
      year: '2024',
      category: 'E-COMMERCE',
      tags: ['UI DESIGN', 'WEB DEV'],
      description: 'E-commerce platform with shopping cart functionality',
      image: (
        <div className="w-full h-96 bg-gray-100 rounded-lg overflow-hidden relative">
          {/* Product Page Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-amber-100 p-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 max-w-md">
                Premium carbon free furniture at unbeatable prices
              </h2>
              <p className="text-gray-600 text-sm max-w-lg">
                Over 5000 high quality and new now from your favorite brands
              </p>
              <button className="bg-gray-900 text-white px-6 py-2 rounded-lg text-sm font-medium">Shop Now</button>
              <p className="text-xs text-gray-500">Available now on the platform</p>
            </div>
            {/* Chair placeholder */}
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-amber-200 rounded-lg flex items-center justify-center">
              <span className="text-6xl">🪑</span>
            </div>
          </div>
          {/* Cart Modal */}
          <div className="absolute top-8 right-8 w-80 bg-white rounded-xl shadow-2xl p-6 z-10">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Cart</h3>
              <button className="text-gray-400 hover:text-gray-600">✕</button>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-20 h-20 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🪑</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm mb-2">Timber Elegance Seating</h4>
                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="text-gray-600">Wood:</span>
                      <div className="flex gap-2 mt-1">
                        <button className="px-2 py-1 border border-gray-300 rounded">Walnut</button>
                        <button className="px-2 py-1 border border-gray-300 rounded">Oak</button>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-600">Leather Color:</span>
                      <div className="flex gap-2 mt-1">
                        <button className="px-2 py-1 border border-gray-300 rounded">Black</button>
                        <button className="px-2 py-1 border border-gray-300 rounded">Gray</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t pt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Discount and Deposit</span>
                  <span>$100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>$1200</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>$100</span>
                </div>
                <div className="flex justify-between font-bold pt-2 border-t">
                  <span>Total</span>
                  <span>$1300</span>
                </div>
              </div>
              <button className="w-full bg-black text-white py-3 rounded-lg font-medium">Continue</button>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      name: 'Mobile Companion',
      year: '2023',
      category: 'MOBILE APP',
      tags: ['UI DESIGN', 'MOBILE DEV'],
      description: 'Your pocket companion app',
      image: (
        <div className="w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="text-6xl">📱</div>
            <p className="text-xl text-gray-600 font-medium">Your pocket companion</p>
            <div className="w-32 h-48 bg-white rounded-2xl shadow-lg mx-auto flex items-center justify-center">
              <span className="text-4xl">✨</span>
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="work" className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
            Selected work
          </h2>
          <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
            See All
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${
                index === 0 ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Project Image */}
              <div className="w-full">{project.image}</div>

              {/* Project Details */}
              <div className="p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                  <div className="space-y-2">
                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                      {project.category}
                    </p>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                      {project.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-4">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            tag === 'UI DESIGN'
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>
                </div>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
