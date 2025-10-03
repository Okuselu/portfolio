'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, ExternalLink, Github, Globe, Zap, Users, Code, Smartphone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/motion-primitives/text-effect'
import { AnimatedGroup } from '@/components/motion-primitives/animated-group'
import { FEATURED_PROJECTS } from '@/lib/constants'

const fadeInBlurVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

const getProjectIcon = (type: string) => {
  switch (type) {
    case 'E-commerce':
      return <Globe className="h-6 w-6" />
    case 'Streaming Platform':
      return <Smartphone className="h-6 w-6" />
    case 'Developer Platform':
      return <Code className="h-6 w-6" />
    default:
      return <Zap className="h-6 w-6" />
  }
}

const getStatusBadge = (status: string) => {
  const baseClasses = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
  
  switch (status) {
    case 'Live':  // Changed from 'live' to 'Live'
      return (
        <span className={`${baseClasses} bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400`}>
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5 animate-pulse" />
          Live
        </span>
      )
    case 'In Development':  // Changed from 'in-development' to 'In Development'
      return (
        <span className={`${baseClasses} bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400`}>
          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-1.5 animate-pulse" />
          In Development
        </span>
      )
    default:
      return null
  }
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <TextEffect
            preset="fade-in-blur"
            speedSegment={0.3}
            as="h2"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            Featured Projects
          </TextEffect>
          <TextEffect
            preset="fade-in-blur"
            speedSegment={0.2}
            delay={0.3}
            as="p"
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
          >
            A showcase of my work spanning e-commerce, streaming platforms, and developer tools. 
            Each project represents a unique challenge and innovative solution.
          </TextEffect>
        </div>

        <AnimatedGroup
          variants={fadeInBlurVariants}
          delay={0.5}
          className="grid grid-cols-1 gap-8 lg:grid-cols-3"
        >
          {FEATURED_PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 ${
                index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {getProjectIcon(project.type)}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{project.type}</p>
                  </div>
                </div>
                {getStatusBadge(project.status)}
              </div>

              {/* Project Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Role & Highlights */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{project.role}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-secondary text-secondary-foreground"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-sm font-medium text-foreground mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="flex items-center gap-3">
                <Button size="sm" className="group" asChild>
                  <Link href={project.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Live
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                
                {project.status === 'live' && (
                  <Button variant="outline" size="sm" asChild>
                    <Link href="#contact">
                      Learn More
                    </Link>
                  </Button>
                )}
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </AnimatedGroup>

        {/* Call to Action */}
        <AnimatedGroup
          variants={fadeInBlurVariants}
          delay={1}
          className="mt-16 text-center"
        >
          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and collaborate on innovative projects. 
              Let's discuss how we can bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" size="lg">
                <Link href="mailto:topeokuselu@gmail.com">
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="https://github.com/Okuselu" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View All Code
                </Link>
              </Button>
            </div>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  )
}