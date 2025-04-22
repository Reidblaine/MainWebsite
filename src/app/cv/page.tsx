import Navigation from '@/components/Navigation'

export default function CV() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Curriculum Vitae
          </h1>
          <p className="mt-3 text-xl text-gray-500 dark:text-gray-300">
            Professional Experience & Skills
          </p>
        </div>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Experience</h2>
          <div className="space-y-8">
            {/* Add your experience entries here */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Software Developer
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">Company Name</p>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">2020 - Present</p>
              </div>
              <ul className="mt-4 list-disc list-inside text-gray-600 dark:text-gray-300">
                <li>Developed and maintained web applications using modern technologies</li>
                <li>Collaborated with cross-functional teams to deliver high-quality software</li>
                <li>Implemented responsive designs and optimized performance</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Frontend</h3>
              <ul className="text-gray-600 dark:text-gray-300">
                <li>React</li>
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>TailwindCSS</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Backend</h3>
              <ul className="text-gray-600 dark:text-gray-300">
                <li>Node.js</li>
                <li>Express</li>
                <li>Firebase</li>
                <li>REST APIs</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Tools & Others</h3>
              <ul className="text-gray-600 dark:text-gray-300">
                <li>Git</li>
                <li>Docker</li>
                <li>AWS</li>
                <li>CI/CD</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Education</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="text-gray-600 dark:text-gray-300">University Name</p>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">2016 - 2020</p>
            </div>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems
            </p>
          </div>
        </section>
      </div>
    </main>
  )
} 