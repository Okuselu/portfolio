'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Code, Zap, Globe, Users, Award, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/motion-primitives/text-effect'
import { AnimatedGroup } from '@/components/motion-primitives/animated-group'
import { SocialLinks } from '@/components/ui/social-links'
import { SITE_CONFIG, SKILLS, CURRENT_ROLES } from '@/lib/constants'

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

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <Code className="h-6 w-6" />,
    skills: SKILLS.frontend,
    description: 'Building responsive and interactive user interfaces'
  },
  {
    title: 'Backend Development',
    icon: <Zap className="h-6 w-6" />,
    skills: SKILLS.backend,
    description: 'Creating robust server-side applications and APIs'
  },
  {
    title: 'Tools & Platforms',
    icon: <Globe className="h-6 w-6" />,
    skills: SKILLS.tools,
    description: 'Leveraging modern development tools and cloud platforms'
  },
  {
    title: 'Specializations',
    icon: <Award className="h-6 w-6" />,
    skills: SKILLS.specialties,
    description: 'Areas of expertise and focused development'
  }
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <TextEffect
            preset="fade-in-blur"
            speedSegment={0.3}
            as="h2"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            About Me
          </TextEffect>
          <TextEffect
            preset="fade-in-blur"
            speedSegment={0.2}
            delay={0.3}
            as="p"
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
          >
            Passionate about creating exceptional digital experiences and building the future of web applications.
          </TextEffect>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Personal Info */}
          <AnimatedGroup variants={fadeInBlurVariants} delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {SITE_CONFIG.author.tagline}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm a Frontend Developer with a passion for creating innovative web applications 
                  that solve real-world problems. Currently working at two exciting startups, 
                  I specialize in building scalable, user-centric solutions using modern technologies.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  From e-commerce platforms to AI-powered applications, I bring a full-stack 
                  perspective to frontend development, ensuring seamless integration and 
                  optimal performance across all layers of the application.
                </p>
              </div>

              {/* Current Roles */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Current Positions
                </h4>
                <div className="space-y-4">
                  {CURRENT_ROLES.map((role) => (
                    <div key={role.company} className="p-4 rounded-lg border border-border bg-card">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-medium text-foreground">{role.position}</h5>
                        <Link
                          href={role.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors"
                        >
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                      <p className="text-sm text-primary font-medium mb-1">{role.company}</p>
                      <p className="text-sm text-muted-foreground">{role.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Let's Connect
                </h4>
                <SocialLinks variant="default" size="default" />
              </div>
            </div>
          </AnimatedGroup>

          {/* Skills */}
          <AnimatedGroup variants={fadeInBlurVariants} delay={0.4}>
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-foreground">Skills & Expertise</h3>
              
              <div className="grid grid-cols-1 gap-6">
                {skillCategories.map((category, index) => (
                  <div
                    key={category.title}
                    className="p-6 rounded-lg border border-border bg-card hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        {category.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{category.title}</h4>
                        <p className="text-sm text-muted-foreground">{category.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {category.skills.map((skill: string, idx: number) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="p-6 rounded-lg border border-border bg-gradient-to-br from-primary/5 to-transparent">
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  Ready to Collaborate?
                </h4>
                <p className="text-muted-foreground mb-4">
                  I'm always interested in discussing new opportunities and innovative projects.
                </p>
                <Button asChild size="lg">
                  <Link href="mailto:topeokuselu@gmail.com">
                    Get In Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedGroup>
        </div>
      </div>
    </section>
  )
}