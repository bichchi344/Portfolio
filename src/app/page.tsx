'use client'
import { useEffect, useState } from 'react'
import { AboutSection } from './components/AboutSection'
import { ProjectSection } from './components/ProjectSection'
import { ContactSection } from './components/ContactSection'
import { IntroduceSection } from './components/IntroduceSection'
import { ExperienceSection } from './components/ExperienceSection'

export default function Home() {
  const [open] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', open)
  }, [open])

  return (
    <>
      {/* <Sidebar open={open} setOpen={setOpen} />

      <div className="flex-1 sm:ml-16 bg-[#1b2631] min-h-screen text-white transition-all duration-300">
        <button
          onClick={() => setOpen(!open)}
          type="button"
          className="z-50 inline-flex items-center p-2 m-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button> */}

      {/* Page Sections */}
      <IntroduceSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <ContactSection />

      {/* </div> */}
    </>
  )
}
