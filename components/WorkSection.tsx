'use client'

import { useState } from 'react'

interface WorkHighlight {
  id: string
  title: string
  frontText: string
  backText: string
}

interface WorkCategory {
  id: string
  name: string
  introText: string
  highlights: WorkHighlight[]
}

export default function WorkSection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [hoveredHighlights, setHoveredHighlights] = useState<Set<string>>(new Set())
  const [isClosing, setIsClosing] = useState(false)

  const workCategories: WorkCategory[] = [
    {
      id: 'learning-development',
      name: 'Learning and Development',
      introText: 'Leaving the path behind me easier to tread for the next person is my true calling. I have a knack for making complicated things simple!',
      highlights: [
        {
          id: 'highlight-1',
          title: 'Money and Time Saving Expert',
          frontText: 'Money and Time Saving Expert',
          backText: 'Reduced training cost and time by 80% via innovative modular framework allowing L&D to prescribe only necessary content to employees based on their technical scores.',
        },
        {
          id: 'highlight-2',
          title: 'Flagship Product Developer',
          frontText: 'Flagship Product Developer',
          backText: `Designed and developed a startup company's first B2B internal company wellness offerings from research to deployment.`,
        },
        {
          id: 'highlight-3',
          title: 'Classroom Visionary',
          frontText: 'Classroom Visionary',
          backText: 'Pioneered plagiarism detection procedures for web development boot camp resulting in students crediting their sources more often and over 10,000 submissions reviewed.',
        },
        {
          id: 'highlight-4',
          title: 'Big Picture Team Player',
          frontText: 'Big Picture Team Player',
          backText: 'Bridged gaps between Operations, Support, and L&D team to automate training process, saving dozens of internal hours per week.',
        },
      ],
    },
    {
      id: 'customer-success',
      name: 'Customer Success',
      introText: 'Changing consumer behavior is the key to sticky adoptions. If learning = changed behavior, then the fastest way to unlocking this key is through customer education and partnership.',
      highlights: [
        {
          id: 'cat2-highlight-1',
          title: 'Data-driven Decision Maker',
          frontText: 'Data-driven Decision Maker',
          backText: `Using pivot tables and raw data representing one year's worth of selling across 200 adoptions, I developed a priority strategy informing which accounts deserved the most white-glove service. One key insight was that a single adoption accounted for 10% of our region's entire business.`,
        },
        {
          id: 'cat2-highlight-2',
          title: 'Team Player',
          frontText: 'Team Player',
          backText: 'Took initiative to meet the entire sales team (nearly 100 people) from new hires to the VP in less than one year. As a result, I was able to more quickly learn the ropes by gathering insights from across the country.',
        },
        {
          id: 'cat2-highlight-3',
          title: 'Pressure Cooker',
          frontText: 'Pressure Cooker',
          backText: 'Built the plane as it flew, so to speak. I supported hundreds of clients while I learned our key products, successfully supporting the busiest time of year for the business, maintaining >95% of our portfolio in my first few months.',
        },
        {
          id: 'cat2-highlight-4',
          title: 'Growth and Expansion Focused',
          frontText: 'Growth and Expansion Focused',
          backText: 'Achieve yearly growth target, 3.5% growth (~$60,000), in my first year via diligent support and strategic conversations. In one instance, I leveraged instructional design skills to position our courseware to a skeptical user, resulting in the client upgrading their offering.',
        },
      ],
    },
    {
      id: 'category-3',
      name: 'Tech',
      introText: 'I learned web development as a teen and use those skills to optimize workflows. I love building data dashboards, templates, and even websites (like this one!). Unsurprisingly, my favorite tech pastime is teaching others.',
      highlights: [
        {
          id: 'cat3-highlight-1',
          title: 'Making non-techies more technical',
          frontText: 'Making non-techies more technical',
          backText: 'I taught a team of instructional designers the basics of HTML and inline CSS to empower them with Canvas LMS tempalates they could copy, paste, and edit into their courses, leading to a 100% adoption rate of HTML templates, reducing build times and standardized the look and feel of our Canvas content.',
        },
        {
          id: 'cat3-highlight-2',
          title: 'Opening Tech Doors for Everyone',
          frontText: 'Opening Tech Doors for Everyone',
          backText: 'I have mentored over 100 people looking to break into tech through web development. My proudest achievement was helping a friend break into an $80,000 back-end position with no degree in about 1 year.',
        },
        {
          id: 'cat3-highlight-3',
          title: 'Coding Ninja',
          frontText: 'Coding Ninja',
          backText: 'Like, actually. I graduated from the Coding Dojo in Burbank, CA with proficiency "belts" in 3 tech stacks: Python/Django, Ruby on Rails, and MEAN. In 3 months, I developed my skills from no coding experience to building full-stack web apps.',
        },
        {
          id: 'cat3-highlight-4',
          title: 'Data Analysis',
          frontText: 'Data Analysis',
          backText: `My favorite letter of ADDIE is E for evaluation. I've leveraged my transferrable web development skills to various spreadsheet applications to build dashboards and reports empowering teams to make data-informed decisions. One of my reports proved the statistical significance of the trainings I revamped with modularity.`,
        },
      ],
    },
  ]

  const handleCategoryClick = (categoryId: string) => {
    setIsClosing(false)
    setSelectedCategory(categoryId)
    setHoveredHighlights(new Set())
  }

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setSelectedCategory(null)
      setHoveredHighlights(new Set())
      setIsClosing(false)
    }, 300) // Match animation duration
  }

  const handleHighlightHover = (highlightId: string) => {
    setHoveredHighlights((prev) => new Set(prev).add(highlightId))
  }

  const handleHighlightLeave = (highlightId: string) => {
    setHoveredHighlights((prev) => {
      const newSet = new Set(prev)
      newSet.delete(highlightId)
      return newSet
    })
  }

  const selectedCategoryData = selectedCategory
    ? workCategories.find((cat) => cat.id === selectedCategory)
    : null

  return (
    <section id="work" className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
            Selected work
          </h2>
        </div>

        {/* Default View: 3 Category Squares */}
        {!selectedCategory && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {workCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 aspect-square flex items-center justify-center"
              >
                <h3 className="text-2xl font-bold text-gray-900 text-center">
                  {category.name}
                </h3>
              </button>
            ))}
          </div>
        )}

        {/* Expanded View */}
        {selectedCategoryData && (
          <div 
            className={`bg-white rounded-xl shadow-xl overflow-hidden ${
              isClosing ? 'animate-shrink' : 'animate-grow'
            }`}
            key={selectedCategory}
          >
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button
                onClick={handleClose}
                className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close"
              >
                <span className="text-xl">×</span>
              </button>
            </div>

            {/* Expanded Content */}
            <div className="p-6 lg:p-8">
              {/* Mobile: Column layout with header, intro, highlights */}
              <div className="flex flex-col lg:hidden gap-6">
                <h3 className="text-3xl font-bold text-gray-900">
                  {selectedCategoryData.name}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {selectedCategoryData.introText}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedCategoryData.highlights.map((highlight) => {
                    const isHovered = hoveredHighlights.has(highlight.id)
                    return (
                      <div
                        key={highlight.id}
                        onMouseEnter={() => handleHighlightHover(highlight.id)}
                        onMouseLeave={() => handleHighlightLeave(highlight.id)}
                        className="relative h-32 bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                      >
                        <div className="relative w-full h-full">
                          {/* Front */}
                          <div
                            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                              isHovered ? 'opacity-0' : 'opacity-100'
                            }`}
                          >
                            <span className="text-sm font-semibold text-gray-900 text-center">
                              {highlight.frontText}
                            </span>
                          </div>
                          {/* Back */}
                          <div
                            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                              isHovered ? 'opacity-100' : 'opacity-0'
                            }`}
                          >
                            <span className="text-xs text-gray-700 text-center px-2">
                              {highlight.backText}
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Desktop: 35% left, 65% right layout */}
              <div className="hidden lg:grid gap-8" style={{ gridTemplateColumns: '35% 60%' }}>
                {/* Left Section: Header and Intro */}
                <div className="space-y-4">
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                    {selectedCategoryData.name}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {selectedCategoryData.introText}
                  </p>
                </div>

                {/* Right Section: Work Highlights */}
                <div className="grid grid-cols-2 gap-4">
                  {selectedCategoryData.highlights.map((highlight) => {
                    const isHovered = hoveredHighlights.has(highlight.id)
                    return (
                      <div
                        key={highlight.id}
                        onMouseEnter={() => handleHighlightHover(highlight.id)}
                        onMouseLeave={() => handleHighlightLeave(highlight.id)}
                        className="relative h-32 bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                      >
                        <div className="relative w-full h-full">
                          {/* Front */}
                          <div
                            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                              isHovered ? 'opacity-0' : 'opacity-100'
                            }`}
                          >
                            <span className="text-sm font-semibold text-gray-900 text-center">
                              {highlight.frontText}
                            </span>
                          </div>
                          {/* Back */}
                          <div
                            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                              isHovered ? 'opacity-100' : 'opacity-0'
                            }`}
                          >
                            <span className="text-xs text-gray-700 text-center px-2">
                              {highlight.backText}
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
              {/* What do I help Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
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

      </div>
    </section>
  )
}
