import Navigation from '@/components/Navigation'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="hover-trail inline-block" data-images="/Santa.jpg">
                Reid Blaine
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Software Developer & Creative Problem Solver
            </p>
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* CV Highlight */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Professional Experience</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              View my complete work history, skills, and achievements in my detailed CV.
            </p>
            <a
              href="/cv"
              className="mt-4 inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
            >
              View CV
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>

          {/* About Me Highlight */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">About Me</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Learn more about my background, interests, and what drives me in my work.
            </p>
            <a
              href="/about"
              className="mt-4 inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
            >
              About Me
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>

          {/* Projects Highlight */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Featured Projects</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Explore my portfolio of projects showcasing my skills and expertise.
            </p>
            <a
              href="/projects"
              className="mt-4 inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
            >
              View Projects
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
