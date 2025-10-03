'use client'

import React, { useState } from 'react'
import { Plus, X } from 'lucide-react'
import { SocialLinks } from './social-links'
import { Button } from './button'

export function FloatingSocial() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-40 no-print">
      <div className="relative">
        {/* Social Links */}
        <div
          className={`absolute bottom-16 right-0 transition-all duration-300 ${
            isOpen 
              ? 'opacity-100 translate-y-0 pointer-events-auto' 
              : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          <div className="bg-background/95 backdrop-blur-sm border border-border rounded-lg p-3 shadow-lg">
            <SocialLinks variant="floating" size="sm" />
          </div>
        </div>

        {/* Toggle Button */}
        <Button
          size="lg"
          className="h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-float"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Plus className="h-6 w-6" />
          )}
        </Button>
      </div>
    </div>
  )
}