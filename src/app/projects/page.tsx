import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ExternalLink, Github, Globe, Zap, Users, Code, Smartphone, Calendar, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/motion-primitives/text-effect'
import { AnimatedGroup } from '@/components/motion-primitives/animated-group'
import { FEATURED_PROJECTS, SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Projects | ${SITE_CONFIG.name}`,
  description: 'Explore my complete portfolio of web development projects, from e-commerce platforms to developer tools.',
}

const getProjectIcon = (type: string) => {
  switch (type) {
    case 'E-commerce':
      return <Globe className="h-8 w-8" />
    case 'Streaming Platform':
      return <Smartphone className="h-8 w-8" />
    case 'Developer Platform':
      return <Code className="h-8 w-8" />
    default:
      return <Zap className="h-8 w-8" />
  }
}

const getStatusBadge = (status: string) => {
  const baseClasses = "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
  
  switch (status) {
    case 'Live':
      return <span className={`${baseClasses} bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200`}>
        🟢 Live
      </span>
    case 'In Development':
      return <span className={`${baseClasses} bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200`}>
        🔵 In Development
      </span>
    case 'Beta':
      return <span className={`${baseClasses} bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200`}>
        🟡 Beta
      </span>
    default:
      return <span className={`${baseClasses} bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200`}>
        {status}
      </span>
  }
}

const fadeInBlurVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0
      }
    }
  },
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 20,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
    },
  },
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <TextEffect
              preset="fade-in-blur"
              speedSegment={0.3}
              className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
            >
              My Projects
            </TextEffect>
            
            <TextEffect
              preset="fade-in-blur"
              speedSegment={0.3}
              className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto"
            >
              A showcase of my work in web development, from e-commerce platforms to developer tools. 
              Each project represents a unique challenge and learning experience.
            </TextEffect>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <AnimatedGroup variants={fadeInBlurVariants}>
            <div className="grid gap-8 md:gap-12">
              {FEATURED_PROJECTS.map((project, index) => (
                <div
                  key={project.name}
                  className={`group relative overflow-hidden rounded-3xl border bg-card p-8 lg:p-12 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
                    {/* Project Info */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                          {getProjectIcon(project.type)}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{project.name}</h3>
                          <p className="text-muted-foreground">{project.type}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        {getStatusBadge(project.status)}
                        <span className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {project.role}
                        </span>
                      </div>

                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground">Key Features:</h4>
                        <ul className="space-y-2">
                          {project.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                              <ArrowRight className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-4 pt-4">
                        <Button asChild size="lg" className="group/btn">
                          <Link href={project.url} target="_blank" rel="noopener noreferrer">
                            <Globe className="mr-2 h-4 w-4" />
                            Visit Site
                            <ExternalLink className="ml-2 h-3 w-3 opacity-0 transition-opacity group-hover/btn:opacity-100" />
                          </Link>
                        </Button>
                        
                        {project.github && (
                          <Button asChild variant="outline" size="lg">
                            <Link href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4" />
                              Source Code
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>

                    {/* Project Visual/Stats */}
                    <div className="relative">
                      <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 p-8 lg:p-12">
                        <div className="space-y-6">
                          <div className="text-center">
                            <div className="text-4xl font-bold text-primary">{project.name}</div>
                            <div className="text-muted-foreground mt-2">{project.type}</div>
                          </div>
                          
                          {/* Project Stats/Info */}
                          <div className="grid grid-cols-2 gap-4 text-center">
                            <div className="space-y-1">
                              <div className="text-2xl font-bold text-foreground">
                                {project.status === 'Live' ? '100%' : '85%'}
                              </div>
                              <div className="text-xs text-muted-foreground">Complete</div>
                            </div>
                            <div className="space-y-1">
                              <div className="text-2xl font-bold text-foreground">
                                {project.technologies.length}
                              </div>
                              <div className="text-xs text-muted-foreground">Technologies</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedGroup>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <AnimatedGroup variants={fadeInBlurVariants}>
            <h2 className="text-3xl font-bold mb-6">Interested in Working Together?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and collaborate on innovative projects. 
              Let's discuss how we can bring your ideas to life.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/#about">
                  Learn More About Me
                </Link>
              </Button>
            </div>
          </AnimatedGroup>
        </div>
      </section>
    </div>
  )
}