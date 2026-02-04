'use client'

import { useState } from 'react'

interface Experience {
  id: string
  title: string
  company: string
  period: string
  type: string[]
  skills: string[]
  summary: string
  highlights: string[]
}

const experiences: Experience[] = [
  {
    id: 'wiley-csm',
    title: 'Customer Success Manager',
    company: 'Wiley',
    period: 'May 2025 - Present',
    type: ['Customer Success', 'Account Management'],
    skills: ['Customer Success', 'Communication', 'Facilitation', 'Sales'],
    summary: 'Reconfirm and retain customers while expanding digital usage. Assist faculty in implementing and integrating Wiley\'s digital solutions.',
    highlights: [
      'Collaborate cross-functionally on adoption strategies and expansion opportunities',
      'Provide deep integration support on various LMS/LTI implementations',
      'Drive digital usage data analysis via activation reports',
      'Conduct re-training with key customers to ensure power user adoption'
    ]
  },
  {
    id: 'coaching-season',
    title: 'Learning Experiences Analyst',
    company: 'Coaching Season',
    period: 'May 2025 - Present',
    type: ['Learning Analysis', 'Data Analysis'],
    skills: ['Data Analysis', 'Program Evaluation', 'Google Sheets', 'Canva'],
    summary: 'Map learner journeys and identify opportunities to create more meaningful, accessible, and emotionally resonant experiences.',
    highlights: [
      'Design and manage learning tools, surveys, assessments, and dashboards',
      'Partner with instructional designers to align content with neuroscience and emotional intelligence',
      'Track learning effectiveness through mindset shifts and emotional impact',
      'Elevate learner voice through user testing and feedback loops'
    ]
  },
  {
    id: 'coaching-season-id',
    title: 'Instructional Designer and Content Developer',
    company: 'Coaching Season',
    period: 'Oct 2024 - Apr 2025',
    type: ['Instructional Design', 'Content Development'],
    skills: ['Instructional Design', 'E-Learning Development', 'Data Analysis', 'Content Development'],
    summary: 'Lead end-to-end development of Masterclass programs for VILT and ILT courses. Redesign learning experiences using ADDIE and Bloom\'s Taxonomy.',
    highlights: [
      'Storyboard, design, and develop video assets using Canva Pro',
      'Develop SOPs for data analysis on Google Sheets, empowering team members',
      'Consult assessment strategies and optimize respondent engagement',
      'Conduct qualitative feedback analysis to create actionable reports'
    ]
  },
  {
    id: 'letsgetchecked',
    title: 'Template Production Specialist',
    company: 'LetsGetChecked',
    period: 'May 2024 - Jan 2025',
    type: ['Content Development', 'Production'],
    skills: ['HTML5', 'Template Building', 'Figma', 'Quality Assurance', 'Jira'],
    summary: 'Designed and developed training materials for onboarding and product adoption. Built dynamic email and direct mail templates.',
    highlights: [
      'Created assets for learning materials using Figma, Google Slides, and Google Docs',
      'Built client content into HTML tools for automated sending',
      'Implemented updates from clients using Adobe Acrobat',
      'Managed tickets and workload cross-functionally in Jira'
    ]
  },
  {
    id: '2u-sr-id',
    title: 'Sr Instructional Designer',
    company: '2U',
    period: 'Oct 2023 - Aug 2024',
    type: ['Instructional Design', 'Training'],
    skills: ['Instructional Design', 'LMS', 'HTML', 'CSS', 'Training Delivery', 'Data Analysis'],
    summary: 'Analyzed training data to generate visual reports on learner engagement. Designed front-end templates for Canvas LMS and Mailchimp.',
    highlights: [
      'Created and delivered training sessions on front-end fundamentals and web accessibility',
      'Authored comprehensive SOPs for custom templates',
      'Managed and customized Google Blogger site for pedagogical blog',
      'Collaborated with cross-functional teams to refine e-learning content'
    ]
  },
  {
    id: '2u-senior-grader',
    title: 'Senior Grader',
    company: '2U',
    period: 'Mar 2020 - Jan 2024',
    type: ['Quality Assurance', 'Education'],
    skills: ['LMS', 'Edtech', 'E-Learning', 'Relationship Building'],
    summary: 'Created and maintained the first official plagiarism reporting system. Supervised a team of over 100 graders.',
    highlights: [
      'Reported over 1000 cases of plagiarism personally, 3000+ historically',
      'Performed bi-weekly audits and supervised 100+ graders',
      'Conducted one-on-one coaching sessions to improve grader performance',
      'Specialized in full stack topics (MERN, Node, JavaScript, React)'
    ]
  },
  {
    id: '2u-tech-lead',
    title: 'Technical Learning Lead',
    company: '2U',
    period: 'Oct 2022 - Sep 2023',
    type: ['Instructional Design', 'Learning Analysis'],
    skills: ['Instructional Design', 'LMS', 'Training Analysis', 'Data Analysis', 'KPIs'],
    summary: 'Designed and developed learning pathways based on diagnostic assessments. Connected Canvas LMS with Salesforce for automation.',
    highlights: [
      'Scoped and defined learning design projects with clear objectives',
      'Planned and organized instructional design tasks and timelines',
      'Conducted data analysis to evaluate learning pathway effectiveness',
      'Fostered cross-departmental collaboration on learning initiatives'
    ]
  },
  {
    id: '2u-eval-lead',
    title: 'Sr. Evaluation Lead',
    company: '2U',
    period: 'May 2021 - Sep 2022',
    type: ['Evaluation', 'Data Analysis'],
    skills: ['Evaluation', 'KPIs', 'Interviewing', 'Data Analysis', 'Presentations'],
    summary: 'Specialized in accommodating evaluation needs for international markets. Analyzed and presented evaluation metrics and key findings.',
    highlights: [
      'Facilitated hundreds of final interviews for instructional staff across 7 bootcamp programs',
      'Preserved historical Slack data using scripts to organize hundreds of data points',
      'Created and maintained SOPs on evaluation processes and communication guides',
      'Monitored and maintained regular communication with Pathway Learners'
    ]
  },
  {
    id: '2u-senior-tutor',
    title: 'Senior Tutor',
    company: '2U',
    period: 'Oct 2018 - Aug 2020',
    type: ['Education', 'Coaching'],
    skills: ['Edtech', 'E-Learning', 'Coaching'],
    summary: 'Helped students from all over the country with debugging, conceptualizing, and completing assignments remotely.',
    highlights: [
      'Self-managed by keeping track of spreadsheets and facilitating communication',
      'Supported students remotely across various technologies'
    ]
  }
]

const filterTypes = [
  'All',
  'Customer Success',
  'Instructional Design',
  'Learning Analysis',
  'Content Development',
  'Evaluation',
  'Education',
  'Data Analysis'
]

export default function ExperienceSection() {
  const [selectedFilter, setSelectedFilter] = useState<string>('All')
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  const filteredExperiences = selectedFilter === 'All'
    ? experiences
    : experiences.filter(exp => exp.type.includes(selectedFilter))

  const handleCardClick = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id)
  }

  return (
    <section id="experience" className="min-h-screen pt-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Career Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            Explore my diverse experiences across edTech. Filter by focus area to discover different aspects of my career.
          </p>
        </div>

        {/* Filter Buttons - Sticky on mobile */}
        <div className="sticky top-16 z-40 mb-8 bg-white py-4 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 md:static md:py-0 md:z-auto shadow-sm md:shadow-none transition-shadow duration-200">
          <div className="flex flex-wrap gap-3">
            {filterTypes.map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  setSelectedFilter(filter)
                  setExpandedCard(null)
                }}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedFilter === filter
                    ? 'bg-primary-black text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExperiences.map((experience) => {
            const isExpanded = expandedCard === experience.id
            return (
              <div
                key={experience.id}
                className={`bg-white rounded-xl shadow-lg border-2 transition-all duration-300 cursor-pointer ${
                  isExpanded
                    ? 'border-primary-black shadow-2xl'
                    : 'border-transparent hover:shadow-xl hover:border-gray-200'
                }`}
                onClick={() => handleCardClick(experience.id)}
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {experience.title}
                    </h3>
                    <p className="text-sm font-semibold text-secondary mb-1">
                      {experience.company}
                    </p>
                    <p className="text-xs text-gray-500">
                      {experience.period}
                    </p>
                  </div>

                  {/* Summary - Always visible */}
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {experience.summary}
                  </p>

                  {/* Type Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {experience.type.slice(0, 2).map((type) => (
                      <span
                        key={type}
                        className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded"
                      >
                        {type}
                      </span>
                    ))}
                  </div>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-gray-200 animate-grow">
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">
                          Key Highlights:
                        </h4>
                        <ul className="space-y-2">
                          {experience.highlights.map((highlight, idx) => (
                            <li key={idx} className="text-xs text-gray-600 flex items-start">
                              <span className="text-secondary mr-2">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">
                          Skills:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.skills.slice(0, 4).map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-1 text-xs bg-gray-50 text-gray-600 rounded border border-gray-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Expand/Collapse Indicator */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-500 text-center">
                      {isExpanded ? 'Click to collapse' : 'Click to expand'}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Results Count */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Showing {filteredExperiences.length} {filteredExperiences.length === 1 ? 'experience' : 'experiences'}
            {selectedFilter !== 'All' && ` in ${selectedFilter}`}
          </p>
        </div>
      </div>
    </section>
  )
}
