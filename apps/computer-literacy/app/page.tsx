import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computer Literacy Learning App | Taotech Solutions',
  description: 'Learn the essentials of using a computer, navigating the internet, and mastering everyday digital tools.',
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to Computer Literacy Learning
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Basic Computer Skills */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Basic Computer Skills</h2>
            <ul className="space-y-2">
              <li>• Understanding hardware components</li>
              <li>• Operating system basics</li>
              <li>• File management</li>
              <li>• Keyboard shortcuts</li>
            </ul>
          </div>

          {/* Internet Navigation */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Internet Navigation</h2>
            <ul className="space-y-2">
              <li>• Web browser basics</li>
              <li>• Safe browsing practices</li>
              <li>• Search engine usage</li>
              <li>• Online communication</li>
            </ul>
          </div>

          {/* Digital Tools */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Digital Tools</h2>
            <ul className="space-y-2">
              <li>• Email management</li>
              <li>• Document creation</li>
              <li>• Cloud storage</li>
              <li>• Digital security</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Start Learning
          </button>
        </div>
      </div>
    </main>
  )
} 