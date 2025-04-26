import Navigation from '@/components/Navigation'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-4 px-4 sm:px-6 lg:px-8">
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

      {/* Highlights Grid */}
      <section className="py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* CV Highlight */}
          <Link href="/cv" className="group">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 h-full transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer">
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
            </div>
          </Link>

          {/* About Me Highlight */}
          <Link href="/about" className="group">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 h-full transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer">
              <div className="relative w-full h-48 mb-4 overflow-hidden rounded">
                <Image
                  src="/Snow.jpg"
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
            </div>
          </Link>

          {/* Projects Highlight */}
          <Link href="/projects" className="group">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 h-full transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer">
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
                A selection of projects that demonstrate my technical skills, creativity, and problem-solving abilities.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </main>
  )
}
