'use client'

import React from 'react'
import { motion, Variants } from 'framer-motion'
import { cn } from '@/lib/utils'

interface TextEffectProps {
  children: React.ReactNode
  preset?: 'fade-in' | 'fade-in-blur' | 'slide-up' | 'typewriter'
  speedSegment?: number
  as?: React.ElementType
  className?: string
  delay?: number
}

const presetVariants: Record<string, Variants> = {
  'fade-in': {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  'fade-in-blur': {
    hidden: { opacity: 0, filter: 'blur(12px)' },
    visible: { opacity: 1, filter: 'blur(0px)' }
  },
  'slide-up': {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  'typewriter': {
    hidden: { width: 0 },
    visible: { width: 'auto' }
  }
}

export function TextEffect({
  children,
  preset = 'fade-in',
  speedSegment = 0.1,
  as: Component = 'div',
  className,
  delay = 0
}: TextEffectProps) {
  const variants = presetVariants[preset]

  if (preset === 'typewriter') {
    return (
      <motion.div
        className={cn('overflow-hidden whitespace-nowrap', className)}
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{
          duration: speedSegment * 10,
          delay,
          ease: 'easeInOut'
        }}
      >
        <Component as={Component}>{children}</Component>
      </motion.div>
    )
  }

  const text = typeof children === 'string' ? children : ''
  const words = text.split(' ')

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: speedSegment, delayChildren: delay }}
    >
      <Component as={Component}>
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block"
            variants={variants}
            transition={{
              duration: 0.6,
              ease: 'easeOut'
            }}
          >
            {word}
            {i < words.length - 1 && '\u00A0'}
          </motion.span>
        ))}
      </Component>
    </motion.div>
  )
}