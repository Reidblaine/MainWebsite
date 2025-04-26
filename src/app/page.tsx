import Navigation from '@/components/Navigation'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              Reid Blaine
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Financial Economics Student & Global Thinker
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <div className="relative w-full h-80 sm:h-96 md:h-[500px]">
              <Image
                src="/dapper.jpg"
                alt="Dapper"
                fill
                className="object-cover"
                style={{ objectPosition: 'center 30%' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 1200px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* CV Highlight */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 h-full transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
            <div className="relative w-full h-48 mb-4 overflow-hidden rounded">
              <Image
                src="/Profile.jpeg"
                alt="Professional Experience"
                fill
                className="object-cover"
                style={{ objectPosition: 'center 20%' }}
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Professional Experience</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              View my complete work history, skills, and achievements in my detailed CV.
            </p>
            <Link
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
            </Link>
          </div>

          {/* About Me Highlight */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 h-full transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
            <div className="relative w-full h-48 mb-4 overflow-hidden rounded">
              <Image
                src="/snow.jpg"
                alt="About Me"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">About Me</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Learn more about my background, interests, and what drives me in my work.
            </p>
            <Link
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
            </Link>
          </div>

          {/* Projects Highlight */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 h-full transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
            <div className="relative w-full h-48 mb-4 overflow-hidden rounded">
              <Image
                src="/IMG_0454.jpg"
                alt="Projects"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Featured Projects</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Explore my portfolio of projects showcasing my skills and expertise.
            </p>
            <Link
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
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
