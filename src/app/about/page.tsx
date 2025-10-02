import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Your Portfolio',
  description: 'Learn more about my background, skills, and experience.',
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Background</h2>
          <p className="text-gray-600 mb-6">
            I'm a passionate developer with experience in modern web technologies. 
            I love creating beautiful, functional, and user-friendly applications.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Python'].map((skill) => (
              <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold">Senior Developer</h3>
              <p className="text-gray-600">Company Name • 2022 - Present</p>
              <p className="text-sm text-gray-500 mt-1">
                Leading development of modern web applications using React and Next.js.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}