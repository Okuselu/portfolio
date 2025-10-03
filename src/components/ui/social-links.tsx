'use client'

import React from 'react'
import Link from 'next/link'
import { Github, Linkedin, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SOCIAL_LINKS } from '@/lib/constants'

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'github':
      return <Github className="h-5 w-5" />
    case 'linkedin':
      return <Linkedin className="h-5 w-5" />
    default:
      return <ExternalLink className="h-5 w-5" />
  }
}

interface SocialLinksProps {
  variant?: 'default' | 'minimal' | 'floating'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  className?: string
}

export function SocialLinks({ 
  variant = 'default', 
  size = 'default',
  className = '' 
}: SocialLinksProps) {
  const baseClasses = "flex items-center gap-3"
  const variantClasses = {
    default: "flex-row",
    minimal: "flex-row gap-2",
    floating: "flex-col gap-2"
  }

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {SOCIAL_LINKS.map((link) => (
        <Button
          key={link.name}
          variant={variant === 'minimal' ? 'ghost' : 'outline'}
          size={size}
          asChild
          className="group"
        >
          <Link
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            title={link.description}
          >
            {getIcon(link.icon)}
            {variant !== 'minimal' && (
              <span className="ml-2">{link.name}</span>
            )}
            <ExternalLink className="ml-2 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>
        </Button>
      ))}
    </div>
  )
}