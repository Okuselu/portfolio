export const SITE_CONFIG = {
  name: "Tope Okuselu",
  description: "Engineering Lead creating tech solutions by positioning myself to learn, grow, and serve. Specializing in React, Next.js, and modern web technologies.",
  url: "https://topeokuselu.dev",
  author: {
    name: "Tope Okuselu",
    fullName: "Temitope Okuselu",
    firstName: "Temitope",
    lastName: "Okuselu",
    email: "topeokuselu@gmail.com",
    tagline: "Creating Tech Solutions Through Learning, Growing & Serving",
    bio: "Engineering Lead at Pacepard and Frontend Developer at Troott. I create tech solutions by positioning myself to learn, grow, and serve, building exceptional user experiences and scalable web solutions.",
    github: "https://github.com/topeokuselu",
    linkedin: "https://www.linkedin.com/in/temitope-okuselu-76445a155/"
  }
}

export const CURRENT_ROLES = [
  {
    company: "Troott",
    position: "Frontend Developer",
    description: "Building sermon streaming platform with React and modern web technologies",
    url: "https://troott.com"
  },
  {
    company: "Pacepard",
    position: "Engineering Lead", 
    description: "Leading development of developer engagement platform with cutting-edge UI/UX and team collaboration",
    url: "https://pacepard.com"
  }
]

export const FEATURED_PROJECTS = [
  {
    id: "troott",
    name: "Troott",
    title: "Troott",
    type: "Streaming Platform",
    description: "A sermon streaming application that connects congregations with their spiritual content, featuring live streaming and on-demand access.",
    url: "https://troott.com",
    github: null,
    status: "Live",
    role: "Frontend Developer",
    logo: "/troott-icon-dark.svg",
    highlights: [
      "Real-time sermon streaming with high-quality video",
      "User-friendly interface for easy content discovery",
      "Mobile-optimized for on-the-go access",
      "Community features for congregation engagement"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "WebRTC", "Firebase"]
  },
  {
    id: "pacepard",
    name: "Pacepard",
    title: "Pacepard",
    type: "Developer Platform",
    description: "A developer engagement platform designed to enhance productivity and collaboration among development teams with modern tools and insights.",
    url: "https://pacepard.com",
    github: null,
    status: "In Development",
    role: "Engineering Lead",
    logo: "/images/Pacepard.png",
    highlights: [
      "Advanced developer analytics and insights",
      "Team collaboration and project management tools",
      "Integration with popular development workflows",
      "Real-time performance monitoring and reporting"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GraphQL", "PostgreSQL"]
  },
  {
    id: "biscenic",
    name: "Biscenic",
    title: "Biscenic",
    type: "E-commerce",
    description: "A comprehensive e-commerce platform featuring modern design, seamless user experience, and robust functionality for online retail.",
    url: "https://biscenic.com",
    github: "https://github.com/topeokuselu/biscenic",
    status: "Live",
    role: "Full-Stack Developer",
    logo: null,
    highlights: [
      "Modern e-commerce platform with intuitive user interface",
      "Secure payment processing and order management",
      "Responsive design optimized for all devices",
      "Advanced product catalog and search functionality"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Node.js"]
  }
]

export const NAVIGATION_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "mailto:topeokuselu@gmail.com" },
]

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/topeokuselu",
    icon: "github",
    description: "View my code repositories and open source contributions"
  },
  {
    name: "LinkedIn", 
    url: "https://www.linkedin.com/in/temitope-okuselu-76445a155/",
    icon: "linkedin",
    description: "Connect with me professionally and view my career journey"
  }
]
export const SKILLS = {
  frontend: [
    "React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", 
    "HTML5", "CSS3", "Responsive Design", "Progressive Web Apps"
  ],
  backend: [
    "Node.js", "Express", "RESTful APIs", "GraphQL", 
    "Authentication", "Server-Side Rendering"
  ],
  tools: [
    "Git", "Docker", "AWS", "Vercel", "Figma", 
    "VS Code", "Webpack", "Vite", "ESLint", "Prettier", "POSTMAN"
  ]
}
