import Navigation from '@/components/Navigation'
import Image from 'next/image'

export default function About() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            About Me
          </h1>
          <p className="mt-3 text-xl text-gray-500 dark:text-gray-300">
            Get to know me better
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative h-96 w-full hover-trail" data-images="/Santa.jpg">
            <Image
              src="/Santa.jpg"
              alt="Reid Blaine"
              fill
              className="object-cover rounded-lg shadow-xl"
              priority
            />
          </div>

          {/* Bio */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Hello, I&apos;m Reid Blaine
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                I&apos;m a passionate software developer with a strong focus on creating elegant and efficient solutions. 
                With a background in computer science and years of experience in web development, I strive to build 
                applications that not only look great but also provide exceptional user experiences.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                My Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                My journey in software development began during my university years, where I discovered my passion 
                for creating digital solutions. Since then, I&apos;ve worked on various projects ranging from small 
                business websites to complex web applications, constantly learning and adapting to new technologies.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Interests & Hobbies
              </h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Open source contributions</li>
                <li>Learning new programming languages and frameworks</li>
                <li>Photography and digital art</li>
                <li>Hiking and outdoor activities</li>
                <li>Reading science fiction and technical books</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Values
              </h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Continuous learning and improvement</li>
                <li>Clean and maintainable code</li>
                <li>User-centered design</li>
                <li>Collaboration and knowledge sharing</li>
                <li>Problem-solving and innovation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 