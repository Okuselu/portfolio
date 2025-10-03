'use client'

import Link from 'next/link'
import { Logo } from '@/components/ui/logo'
import { Menu, X, Linkedin, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { cn } from '@/lib/utils'

const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Contact', href: 'mailto:topeokuselu@gmail.com' },
]

export default function Header() {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Prevent body scroll when menu is open
    React.useEffect(() => {
        if (menuState) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        
        // Cleanup on unmount
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [menuState])

    const toggleMenu = () => {
        setMenuState(prev => !prev)
    }

    const closeMenu = () => {
        setMenuState(false)
    }

    return (
        <header>
            <nav className="fixed z-[100] w-full px-2">
                <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2 z-[110]">
                                <Logo />
                            </Link>

                            <button
                                onClick={toggleMenu}
                                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                                className="relative z-[110] -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden hover:bg-accent/10 rounded-md transition-colors touch-manipulation"
                                style={{ WebkitTapHighlightColor: 'transparent' }}>
                                <Menu className={cn("m-auto size-6 duration-300 ease-in-out", menuState && "rotate-180 scale-0 opacity-0")} />
                                <X className={cn("absolute inset-0 m-auto size-6 duration-300 ease-in-out", menuState ? "rotate-0 scale-100 opacity-100" : "-rotate-180 scale-0 opacity-0")} />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Mobile Menu Overlay with enhanced glassy effect */}
                        {menuState && (
                            <div 
                                className="fixed inset-0 bg-black/60 backdrop-blur-md z-[90] lg:hidden transition-all duration-300"
                                onClick={closeMenu}
                            />
                        )}

                        {/* Mobile Menu with glassy effect and centered content */}
                        <div className={cn(
                            "bg-background/80 backdrop-blur-xl border border-white/20 shadow-2xl shadow-black/25 rounded-3xl p-8 w-full max-w-sm mx-auto",
                            "flex flex-col items-center justify-center space-y-8",
                            "lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-none lg:flex-row lg:max-w-none",
                            "dark:bg-background/80 dark:border-white/10 dark:shadow-black/40 dark:lg:bg-transparent",
                            "z-[95] transition-all duration-300",
                            menuState ? "flex fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" : "hidden lg:flex"
                        )}>
                            {/* Mobile Navigation Links */}
                            <div className="lg:hidden w-full">
                                <ul className="space-y-6 text-center">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                onClick={closeMenu}
                                                className="text-foreground hover:text-primary block duration-200 py-3 px-4 rounded-lg hover:bg-white/10 transition-all text-lg font-medium">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Social Buttons - Centered */}
                            <div className="flex flex-col items-center space-y-4 w-full lg:flex-row lg:space-y-0 lg:space-x-3 lg:w-fit">
                                {/* LinkedIn Button - Show when NOT scrolled */}
                                {!isScrolled ? (
                                    <Button
                                        key="linkedin-button"
                                        asChild
                                        variant="outline"
                                        size="sm"
                                        className="w-full lg:w-auto bg-white/10 border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all duration-200">
                                        <Link href="https://www.linkedin.com/in/temitope-okuselu-76445a155/" target="_blank" rel="noopener noreferrer">
                                            <Linkedin className="mr-2 h-4 w-4" />
                                            <span>LinkedIn</span>
                                        </Link>
                                    </Button>
                                ) : (
                                    /* GitHub Button - Show when scrolled */
                                    <Button
                                        key="github-button"
                                        asChild
                                        size="sm"
                                        className="w-full lg:w-auto bg-primary hover:bg-primary/90 border-0 shadow-none backdrop-blur-sm transition-all duration-200">
                                        <Link href="https://github.com/Okuselu" target="_blank" rel="noopener noreferrer">
                                            <Github className="mr-2 h-4 w-4" />
                                            <span>GitHub</span>
                                        </Link>
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}