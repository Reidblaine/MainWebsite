/* eslint-disable react/no-unescaped-entities */

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
          <div className="flex flex-col gap-8">
            <div className="relative h-96 w-full hover-trail" data-images="/snow.jpg">
              <Image
                src="/snow.jpg"
                alt="Reid Blaine in snow"
                fill
                className="object-cover rounded-lg shadow-xl"
                priority
              />
            </div>
            <div className="relative h-96 w-full">
              <Image
                src="/view.jpg"
                alt="View"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Hello, I&#39;m Reid Blaine
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                I&#39;m from rural Oregon, where I grew up working on an apple and pear farm. That experience gave me an early 
                appreciation for how <strong>systems in the physical world — like agriculture and natural resources — intersect 
                with broader economic forces</strong>. I&#39;ve always been curious about how the world works, and that curiosity 
                eventually led me to pursue a <strong>Master of Arts in Financial Economics</strong> in Scotland, where I&#39;m 
                now finishing my degree.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                My Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Growing up in a farming community taught me the importance of hard work, adaptability, and understanding the 
                tangible side of life — weather patterns, supply chains, soil quality. But I&#39;ve also been drawn to the 
                <strong> structures that govern how economies operate</strong>, from commodity markets to international finance. 
                Studying Financial Economics in Scotland gave me the tools to think critically about these systems and their 
                impact on people and the planet. Along the way, I&#39;ve also enjoyed <strong>traveling</strong>, picking up 
                <strong> bits of new languages</strong>, and seeing how different regions approach the same global challenges.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Interests & Hobbies
              </h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Following global economic trends and financial policy</li>
                <li>Reading history, political economy, and economic theory</li>
                <li>Strength training and scuba diving</li>
                <li>Spending time outdoors, especially hiking and exploring new places</li>
                <li>Learning about food systems, sustainability, and agri-tech</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Values
              </h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Honesty and direct communication</li>
                <li>Clarity of thought and expression</li>
                <li>Respect for people's lived experiences</li>
                <li>Intellectual curiosity grounded in real-world context</li>
                <li>Integrity in how I work and how I treat others</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 