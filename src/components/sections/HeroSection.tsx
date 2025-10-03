'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronRight, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { TextEffect } from '@/components/motion-primitives/text-effect'
import { AnimatedGroup } from '@/components/motion-primitives/animated-group'
import Header from '@/components/layout/Header'
import { SITE_CONFIG, CURRENT_ROLES } from '@/lib/constants'

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
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
    },
  },
}

export default function HeroSection() {
  return (
    <>
      <Header />
      <main className="relative">
        <section className="relative min-h-screen overflow-hidden">
          <div className="relative">
            {/* Grid Background for Both Mobile and Desktop */}
            <div className="absolute inset-0 -z-20">
              {/* Grid Pattern */}
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
                  `,
                  backgroundSize: '50px 50px'
                }}
              />
              {/* Subtle radial fade */}
              <div 
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(circle at 50% 50%, transparent 0%, hsl(var(--background)) 70%)`
                }}
              />
            </div>

            <div className="mx-auto max-w-6xl px-6 pt-20 lg:pt-24 relative z-10">
              {/* Main Hero Content */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center min-h-[60vh] lg:min-h-[70vh]">
                
                {/* Left Content - Text */}
                <div className="text-center lg:text-left space-y-4 lg:space-y-8">
                  <AnimatedGroup variants={fadeInBlurVariants}>
                    <Link
                      href="#projects"
                      className="hover:bg-background dark:hover:border-t-border bg-muted/90 lg:bg-muted group relative z-10 inline-flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950 backdrop-blur-sm lg:backdrop-blur-none"
                    >
                      <span className="text-foreground text-sm">
                        Currently building at Troott & Pacepard
                      </span>
                      <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                      <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                        <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                          <span className="flex size-6">
                            <ArrowRight className="m-auto size-3" />
                          </span>
                          <span className="flex size-6">
                            <ArrowRight className="m-auto size-3" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </AnimatedGroup>

                  {/* Main Heading */}
                  <div className="space-y-2 lg:space-y-4">
                    <TextEffect
                      preset="fade-in-blur"
                      className="text-4xl sm:text-3xl  tracking-tight text-white lg:text-foreground"
                      delay={0.2}
                    >
                      Hi, I&apos;m
                    </TextEffect>
                    <TextEffect
                      preset="fade-in-blur"
                      className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white lg:text-foreground"
                      delay={0.4}
                    >
                      Tope Okuselu
                    </TextEffect>
                  </div>

                  {/* Subtitle */}
                  <TextEffect
                    preset="fade-in-blur"
                    className="text-xl lg:text-2xl text-gray-300 lg:text-muted-foreground max-w-2xl leading-relaxed mx-auto lg:mx-0"
                    delay={0.6}
                  >
                    Software Engineer | Redemptive Entrepreneur
                  </TextEffect>

                  {/* Action Buttons */}
                  <AnimatedGroup
                    variants={fadeInBlurVariants}
                    delay={0.8}
                    className="flex flex-col sm:flex-row gap-4 pt-2 lg:pt-4 justify-center lg:justify-start"
                  >
                    <Button size="lg" className="group text-lg px-8 py-6 bg-primary/90 hover:bg-primary lg:bg-primary lg:hover:bg-primary/90 backdrop-blur-sm lg:backdrop-blur-none" asChild>
                      <Link href="#projects">
                        View My Projects
                        <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10 lg:border-border lg:text-foreground lg:hover:bg-accent backdrop-blur-sm lg:backdrop-blur-none" asChild>
                      <Link href={SITE_CONFIG.author.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-5 w-5" />
                        GitHub Profile
                      </Link>
                    </Button>
                  </AnimatedGroup>
                </div>

                {/* Right Content - Image (Smaller and Higher) */}
                <div className="hidden lg:flex justify-center">
                  <AnimatedGroup
                    variants={fadeInBlurVariants}
                    delay={0.5}
                    className="relative ml-30"
                  >
                    <div className="relative w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
                      {/* Main Image Container */}
                      <div className="relative w-full h-full overflow-hidden rounded-2xl">
                        <Image
                          src="/images/Bitwise-removebg-preview.png"
                          alt="Tope Okuselu - Frontend Developer"
                          fill
                          className="object-cover object-center"
                          priority
                        />
                        
                        {/* Gradient Fade Overlay - Lower 30% */}
                        <div 
                          className="absolute inset-0 pointer-events-none z-10"
                          style={{
                            background: `linear-gradient(to top, 
                              hsl(var(--background)) 0%, 
                              hsl(var(--background) / 0.95) 10%, 
                              hsl(var(--background) / 0.8) 20%, 
                              hsl(var(--background) / 0.5) 30%, 
                              hsl(var(--background) / 0.2) 35%, 
                              transparent 40%)`
                          }}
                        />
                      </div>
                      
                      {/* Decorative elements */}
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
                      <div className="absolute top-1/4 -left-8 w-4 h-4 bg-primary/40 rounded-full animate-pulse delay-500"></div>
                      <div className="absolute top-1/3 -right-6 w-6 h-6 bg-primary/60 rounded-full animate-pulse delay-1000"></div>
                    </div>
                  </AnimatedGroup>
                </div>
              </div>

              {/* Stats Section - Full Width Outside Grid */}
              <AnimatedGroup
                variants={fadeInBlurVariants}
                delay={1}
                className="mt-8 lg:mt-12"
              >
                <div className="grid grid-cols-4 gap-4 lg:gap-12 max-w-5xl mx-auto">
                  <div className="text-center">
                    <div className="text-2xl lg:text-5xl font-bold text-white lg:text-foreground mb-1 lg:mb-2">2+</div>
                    <div className="text-xs lg:text-lg text-gray-300 lg:text-muted-foreground">Live Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl lg:text-5xl font-bold text-white lg:text-foreground mb-1 lg:mb-2">2</div>
                    <div className="text-xs lg:text-lg text-gray-300 lg:text-muted-foreground">Current Roles</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl lg:text-5xl font-bold text-white lg:text-foreground mb-1 lg:mb-2">15+</div>
                    <div className="text-xs lg:text-lg text-gray-300 lg:text-muted-foreground">Technologies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl lg:text-5xl font-bold text-white lg:text-foreground mb-1 lg:mb-2">E2E</div>
                    <div className="text-xs lg:text-lg text-gray-300 lg:text-muted-foreground">Development</div>
                  </div>
                </div>
              </AnimatedGroup>

              {/* Current Roles Section */}
              <AnimatedGroup
                variants={fadeInBlurVariants}
                delay={1.2}
                className="mt-24 lg:mt-32"
              >
                <div className="text-center mb-12">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white lg:text-foreground mb-4">Currently Working At</h3>
                  <p className="text-gray-300 lg:text-muted-foreground max-w-2xl mx-auto">
                    Building innovative solutions at two exciting companies
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {CURRENT_ROLES.map((role) => (
                    <Link
                      key={role.company}
                      href={role.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-8 rounded-xl border border-white/20 lg:border-border bg-white/10 lg:bg-card hover:bg-white/20 lg:hover:bg-accent transition-all duration-300 hover:shadow-lg hover:scale-105 backdrop-blur-sm lg:backdrop-blur-none"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                          {/* Company Logo */}
                          {role.company === "Troott" && (
                            <Image
                              src="/troott-icon-dark.svg"
                              alt="Troott Logo"
                              width={40}
                              height={40}
                              className="rounded-lg"
                            />
                          )}
                          {role.company === "Pacepard" && (
                            <Image
                              src="/images/Pacepard.png"
                              alt="Pacepard Logo"
                              width={40}
                              height={40}
                              className="rounded-lg"
                            />
                          )}
                          <h4 className="text-xl font-bold text-white lg:text-foreground group-hover:text-primary transition-colors">
                            {role.company}
                          </h4>
                        </div>
                        <ArrowRight className="h-5 w-5 text-gray-300 lg:text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-primary font-semibold mb-3">{role.position}</p>
                      <p className="text-gray-300 lg:text-muted-foreground leading-relaxed">{role.description}</p>
                    </Link>
                  ))}
                </div>
              </AnimatedGroup>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}