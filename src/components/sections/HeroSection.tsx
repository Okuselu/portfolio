'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
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
          <div className="relative z-10 flex min-h-screen flex-col">
            {/* Subtle Background */}
            <AnimatedGroup
              variants={fadeInBlurVariants}
              className="mask-b-from-35% mask-b-to-90% absolute inset-0 top-56 -z-20 lg:top-32"
            >
              <Image
                src="https://ik.imagekit.io/lrigu76hy/tailark/night-background.jpg?updatedAt=1745733451120"
                alt="Background"
                fill
                className="object-cover opacity-20"
                priority
              />
            </AnimatedGroup>

            <div
              className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
            />

            <div className="mx-auto max-w-7xl px-6 pt-20 lg:pt-24">
              {/* Main Hero Content */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
                
                {/* Left Content - Text */}
                <div className="text-left space-y-8">
                  <AnimatedGroup variants={fadeInBlurVariants}>
                    <Link
                      href="#projects"
                      className="hover:bg-background dark:hover:border-t-border bg-muted group relative z-10 inline-flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
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
                  <div className="space-y-4">
                    <TextEffect
                      preset="fade-in-blur"
                      speedSegment={0.3}
                      as="h1"
                      className="text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl xl:text-8xl leading-[1.1]"
                    >
                      Hi, I'm
                    </TextEffect>
                    <TextEffect
                      preset="fade-in-blur"
                      speedSegment={0.3}
                      delay={0.2}
                      as="h1"
                      className="text-5xl font-bold tracking-tight text-primary md:text-6xl lg:text-7xl xl:text-8xl leading-[1.1]"
                    >
                      {SITE_CONFIG.author.fullName}
                    </TextEffect>
                  </div>

                  {/* Tagline */}
                  <TextEffect
                    preset="fade-in-blur"
                    speedSegment={0.2}
                    delay={0.4}
                    as="h2"
                    className="text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground"
                  >
                    {SITE_CONFIG.author.tagline}
                  </TextEffect>

                  {/* Bio */}
                  <TextEffect
                    preset="fade-in-blur"
                    speedSegment={0.2}
                    delay={0.6}
                    as="p"
                    className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
                  >
                    {SITE_CONFIG.author.bio} From e-commerce platforms to AI-powered applications, 
                    I bring ideas to life with modern web technologies.
                  </TextEffect>

                  {/* Action Buttons */}
                  <AnimatedGroup
                    variants={fadeInBlurVariants}
                    delay={0.8}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <Button size="lg" className="group text-lg px-8 py-6" asChild>
                      <Link href="#projects">
                        View My Projects
                        <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                      <Link href={SITE_CONFIG.author.github} target="_blank" rel="noopener noreferrer">
                        GitHub Profile
                      </Link>
                    </Button>
                  </AnimatedGroup>

                  {/* Stats */}
                  <AnimatedGroup
                    variants={fadeInBlurVariants}
                    delay={1}
                    className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8"
                  >
                    <div className="text-left">
                      <div className="text-3xl font-bold text-foreground">3+</div>
                      <div className="text-sm text-muted-foreground">Live Projects</div>
                    </div>
                    <div className="text-left">
                      <div className="text-3xl font-bold text-foreground">2</div>
                      <div className="text-sm text-muted-foreground">Current Roles</div>
                    </div>
                    <div className="text-left">
                      <div className="text-3xl font-bold text-foreground">15+</div>
                      <div className="text-sm text-muted-foreground">Technologies</div>
                    </div>
                    <div className="text-left">
                      <div className="text-3xl font-bold text-foreground">E2E</div>
                      <div className="text-sm text-muted-foreground">Development</div>
                    </div>
                  </AnimatedGroup>
                </div>

                {/* Right Content - Image with Gradient Fade */}
                <div className="flex justify-center lg:justify-end">
                  <AnimatedGroup
                    variants={fadeInBlurVariants}
                    delay={0.5}
                    className="relative"
                  >
                    <div className="relative w-80 h-80 lg:w-96 lg:h-96 xl:w-[450px] xl:h-[450px]">
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

              {/* Current Roles Section */}
              <AnimatedGroup
                variants={fadeInBlurVariants}
                delay={1.2}
                className="mt-24 lg:mt-32"
              >
                <div className="text-center mb-12">
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Currently Working At</h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Building innovative solutions at two exciting companies
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {CURRENT_ROLES.map((role, index) => (
                    <Link
                      key={role.company}
                      href={role.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-8 rounded-xl border border-border bg-card hover:bg-accent transition-all duration-300 hover:shadow-lg hover:scale-105"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {role.company}
                        </h4>
                        <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-primary font-semibold mb-3">{role.position}</p>
                      <p className="text-muted-foreground leading-relaxed">{role.description}</p>
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