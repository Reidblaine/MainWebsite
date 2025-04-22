import Navigation from '@/components/Navigation'
import Image from 'next/image'

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management and payment processing.',
    technologies: ['Next.js', 'TypeScript', 'Firebase', 'Stripe'],
    image: '/projects/ecommerce.jpg',
    link: 'https://github.com/yourusername/ecommerce-platform',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team collaboration features.',
    technologies: ['React', 'Node.js', 'WebSocket', 'MongoDB'],
    image: '/projects/task-manager.jpg',
    link: 'https://github.com/yourusername/task-manager',
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather forecasting application with interactive maps and detailed weather information.',
    technologies: ['React', 'OpenWeather API', 'Mapbox', 'TailwindCSS'],
    image: '/projects/weather.jpg',
    link: 'https://github.com/yourusername/weather-dashboard',
  },
  {
    title: 'Social Media Analytics',
    description: 'A dashboard for analyzing social media metrics and engagement across multiple platforms.',
    technologies: ['Next.js', 'TypeScript', 'Chart.js', 'Firebase'],
    image: '/projects/analytics.jpg',
    link: 'https://github.com/yourusername/social-analytics',
  },
]

export default function Projects() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            My Projects
          </h1>
          <p className="mt-3 text-xl text-gray-500 dark:text-gray-300">
            A collection of my recent work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Project
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
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
} 