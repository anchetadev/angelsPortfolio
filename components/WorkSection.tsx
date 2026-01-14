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
  const [flippedHighlights, setFlippedHighlights] = useState<Set<string>>(new Set())
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
      introText: 'Changing consumer behavior is the key to sticky adoptions. ',
      highlights: [
        {
          id: 'cat2-highlight-1',
          title: 'Project A',
          frontText: 'Project A',
          backText: 'Detailed description of Project A.',
        },
        {
          id: 'cat2-highlight-2',
          title: 'Project B',
          frontText: 'Project B',
          backText: 'Detailed description of Project B.',
        },
        {
          id: 'cat2-highlight-3',
          title: 'Project C',
          frontText: 'Project C',
          backText: 'Detailed description of Project C.',
        },
        {
          id: 'cat2-highlight-4',
          title: 'Project D',
          frontText: 'Project D',
          backText: 'Detailed description of Project D.',
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
    setFlippedHighlights(new Set())
  }

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setSelectedCategory(null)
      setFlippedHighlights(new Set())
      setIsClosing(false)
    }, 300) // Match animation duration
  }

  const handleHighlightClick = (highlightId: string) => {
    setFlippedHighlights((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(highlightId)) {
        newSet.delete(highlightId)
      } else {
        newSet.add(highlightId)
      }
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
                    const isFlipped = flippedHighlights.has(highlight.id)
                    return (
                      <button
                        key={highlight.id}
                        onClick={() => handleHighlightClick(highlight.id)}
                        className="relative h-32 bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                      >
                        <div className="relative w-full h-full">
                          {/* Front */}
                          <div
                            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                              isFlipped ? 'opacity-0' : 'opacity-100'
                            }`}
                          >
                            <span className="text-sm font-semibold text-gray-900 text-center">
                              {highlight.frontText}
                            </span>
                          </div>
                          {/* Back */}
                          <div
                            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                              isFlipped ? 'opacity-100' : 'opacity-0'
                            }`}
                          >
                            <span className="text-xs text-gray-700 text-center px-2">
                              {highlight.backText}
                            </span>
                          </div>
                        </div>
                      </button>
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
                    const isFlipped = flippedHighlights.has(highlight.id)
                    return (
                      <button
                        key={highlight.id}
                        onClick={() => handleHighlightClick(highlight.id)}
                        className="relative h-32 bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                      >
                        <div className="relative w-full h-full">
                          {/* Front */}
                          <div
                            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                              isFlipped ? 'opacity-0' : 'opacity-100'
                            }`}
                          >
                            <span className="text-sm font-semibold text-gray-900 text-center">
                              {highlight.frontText}
                            </span>
                          </div>
                          {/* Back */}
                          <div
                            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                              isFlipped ? 'opacity-100' : 'opacity-0'
                            }`}
                          >
                            <span className="text-xs text-gray-700 text-center px-2">
                              {highlight.backText}
                            </span>
                          </div>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
