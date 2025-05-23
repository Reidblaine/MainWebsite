import Navigation from '@/components/Navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, Linkedin } from 'lucide-react'

export default function CV() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            CV / Resume
          </h1>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="mailto:reidgorham@gmail.com"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email
            </a>
            <a
              href="tel:+447951680937"
              className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              UK Phone
            </a>
            <a
              href="tel:+12488970413"
              className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              US Phone
            </a>
            <a
              href="https://www.linkedin.com/in/reidblaine"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Profile Image Section */}
        <div className="w-full flex justify-center">
          <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden shadow-xl mx-auto">
            <Image
              src="/Profile.jpeg"
              alt="Professional profile"
              fill
              className="object-contain object-center rounded-2xl"
              sizes="(max-width: 768px) 90vw, 400px"
              priority
            />
          </div>
        </div>

        {/* Education Section */}
        <section className="transition-transform duration-500 hover:translate-x-2">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">University of St Andrews, Fife Scotland</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">2021 – May 2025</p>
              <p className="italic text-gray-600 dark:text-gray-300">Master of Arts, Honours in Financial Economics</p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Ranked Top UK University (The Guardian & The Times, 2024). Predicted high 2:1 across all modules.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                Relevant Modules: Asset Pricing, Statistics for Economists, Practical Financial Modelling, Corporate Finance, Portfolio Management, Econometrics, Development Economics.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Hood River Valley Highschool, Hood River</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">2016 – 2021</p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">Grade: 4.0 GPA (Valedictorian)</p>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                Highest Classes: Pre-Calculus, AP US History, AP Human Geography, AP Physics, AP Chemistry, AP Statistics.
              </p>
            </div>
          </div>
        </section>

        {/* Finance Experience */}
        <section className="transition-transform duration-500 hover:translate-x-2">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Finance Experience</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Agricultural Finance Intern — AgWest Farm Credit <span className="text-sm text-gray-500 dark:text-gray-400">(3 months 2024)</span>
              </h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-2 space-y-1">
                <li>Selected for a competitive internship supporting credit and lending team at headquarters.</li>
                <li>Conducted financial analysis and created risk profiles for agribusiness clients.</li>
                <li>Led research on commodity pricing trends and borrower repayment capacity in quarterly risk reports.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Equity Research Lead — University of St Andrews Investment Society <span className="text-sm text-gray-500 dark:text-gray-400">(15 months 2021–2023)</span>
              </h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-2 space-y-1">
                <li>Oversaw research and portfolio strategy for a £25,000 student-run fund.</li>
                <li>Led analysts in producing equity reports and investment pitches.</li>
                <li>Chaired weekly meetings and advised on portfolio allocation.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Securities Industry Essentials (SIE) Certificate — FINRA <span className="text-sm text-gray-500 dark:text-gray-400">(March 2023)</span>
              </h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-2 space-y-1">
                <li>Built knowledge of U.S. financial regulations and compliance practices.</li>
                <li>Studied risk/return principles and characteristics of financial instruments.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Investment Banking Virtual Experience — J.P. Morgan Chase <span className="text-sm text-gray-500 dark:text-gray-400">(February 2023)</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Completed simulation on preparing pitch materials and quantitative company analysis.
              </p>
            </div>
          </div>
        </section>

        {/* Other Work Experience */}
        <section className="transition-transform duration-500 hover:translate-x-2">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Other Work Experience</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Farming & Agribusiness — Dog River Ranch Orchard <span className="text-sm text-gray-500 dark:text-gray-400">(5 years 2018–2023)</span>
              </h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-2 space-y-1">
                <li>Hands-on agricultural operations including orchard management and labour.</li>
                <li>Shadowed leadership on financial planning, crop cycles, and commodity risks in apple/pear markets.</li>
                <li>Developed understanding of management decisions on business financial health.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Server — Three Rivers Grill <span className="text-sm text-gray-500 dark:text-gray-400">(3 years 2019–2021)</span>
              </h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-2 space-y-1">
                <li>Delivered exceptional customer service in a busy upscale dining environment.</li>
                <li>Built communication skills, professionalism, and multitasking under pressure.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Volunteering */}
        <section className="transition-transform duration-500 hover:translate-x-2">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Volunteering</h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
            <li>Friends of the Columbia River Gorge (2020): Participated in native vegetation restoration and fundraising for trail maintenance.</li>
          </ul>
        </section>

        {/* Skills, Activities, and Interests */}
        <section className="transition-transform duration-500 hover:translate-x-2">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Skills, Activities, & Interests</h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
            <li><strong>Financial Software & Analysis:</strong> Excel & STATA for regression analysis, forecasting, and financial modelling.</li>
            <li><strong>Languages:</strong> Spanish (B2 level), actively studying to full fluency.</li>
            <li><strong>Travel & Culture:</strong> Studying abroad at St Andrews deepened my global perspective.</li>
            <li><strong>Sports & Outdoors:</strong> Varsity tennis player, lifelong skier, Advanced Open Water certified diver.</li>
          </ul>
        </section>
      </div>
    </main>
  )
} 