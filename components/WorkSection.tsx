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
      introText: 'Creating engaging educational experiences and training solutions that empower learners and drive organizational growth.',
      highlights: [
        {
          id: 'highlight-1',
          title: 'Interactive Training Platform',
          frontText: 'Interactive Training Platform',
          backText: 'Developed a comprehensive learning management system with gamification features, progress tracking, and personalized learning paths for enterprise clients.',
        },
        {
          id: 'highlight-2',
          title: 'Mobile Learning App',
          frontText: 'Mobile Learning App',
          backText: 'Built a cross-platform mobile application enabling on-the-go learning with offline capabilities and synchronized progress across devices.',
        },
        {
          id: 'highlight-3',
          title: 'Virtual Classroom Solution',
          frontText: 'Virtual Classroom Solution',
          backText: 'Designed and implemented a real-time virtual classroom platform with video conferencing, screen sharing, and collaborative whiteboard features.',
        },
        {
          id: 'highlight-4',
          title: 'Assessment & Analytics',
          frontText: 'Assessment & Analytics',
          backText: 'Created an advanced analytics dashboard providing insights into learner performance, engagement metrics, and course effectiveness.',
        },
      ],
    },
    {
      id: 'category-2',
      name: 'Category 2',
      introText: 'Introduction text for category 2.',
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
      name: 'Category 3',
      introText: 'Introduction text for category 3.',
      highlights: [
        {
          id: 'cat3-highlight-1',
          title: 'Project X',
          frontText: 'Project X',
          backText: 'Detailed description of Project X.',
        },
        {
          id: 'cat3-highlight-2',
          title: 'Project Y',
          frontText: 'Project Y',
          backText: 'Detailed description of Project Y.',
        },
        {
          id: 'cat3-highlight-3',
          title: 'Project Z',
          frontText: 'Project Z',
          backText: 'Detailed description of Project Z.',
        },
        {
          id: 'cat3-highlight-4',
          title: 'Project W',
          frontText: 'Project W',
          backText: 'Detailed description of Project W.',
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
