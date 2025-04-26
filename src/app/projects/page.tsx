import Navigation from '@/components/Navigation'
import Image from 'next/image'

export default function Projects() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Current Projects
          </h1>
          <p className="mt-6 text-xl text-gray-500 dark:text-gray-300">
            This section is currently under development
          </p>
        </div>

        <div className="flex flex-col items-center justify-center py-12">
          <div className="relative w-full max-w-lg h-80 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/IceCream.jpg"
              alt="Project in Scotland"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 700px"
              priority
            />
          </div>
          <div className="mt-8 max-w-2xl text-center">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I'm currently working on several projects related to financial analysis and economic modeling.
              More details will be added here soon as these projects reach completion.
            </p>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              If you'd like to collaborate or learn more about my current work, please reach out via email.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
} 