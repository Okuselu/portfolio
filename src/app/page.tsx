import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      
      {/* Featured Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project cards will go here */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">Project 1</h3>
              <p className="text-gray-600 mb-4">A brief description of your amazing project.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-600 hover:underline">View Project</a>
                <a href="#" className="text-blue-600 hover:underline">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Python'].map((skill) => (
              <div key={skill} className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="text-2xl mb-2">⚡</div>
                <span className="text-sm font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
