'use client'

import React from 'react'
import { motion, Variants } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedGroupProps {
  children: React.ReactNode
  variants?: {
    container?: Variants
    item?: Variants
  }
  className?: string
  delay?: number
  staggerChildren?: number
}

export function AnimatedGroup({
  children,
  variants,
  className,
  delay = 0,
  staggerChildren = 0.1
}: AnimatedGroupProps) {
  // Default container variants without transitions in the variant objects
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  // Default item variants without transitions in the variant objects
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  // Use provided variants or fall back to defaults
  const finalContainerVariants = variants?.container || containerVariants
  const finalItemVariants = variants?.item || itemVariants

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      animate="visible"
      variants={finalContainerVariants}
      transition={{
        staggerChildren,
        delayChildren: delay
      }}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div 
          key={index} 
          variants={finalItemVariants}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
            type: 'spring',
            bounce: 0.3
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}