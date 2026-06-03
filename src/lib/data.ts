export const personalInfo = {
  name: "Sumit Saurav",
  email: "sauravsumit1907@gmail.com",
  phone: "+91 8252787452",
  location: "Kolkata, WB",
  github: "https://github.com/sauravsumit-dev",
  linkedin: "https://linkedin.com/in/#",
  twitter: "https://twitter.com/#",
  calendly: "https://calendly.com/#",
  whatsapp: "https://wa.me/8252787452",
  yearsOfExperience: 2.5,
};

export const heroRoles = [
  "Frontend Developer",
  "React Developer",
  "Next.js Developer",
  
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

export const stats = [
  { label: "Years Experience", value: 2.5, suffix: "+" },
  { label: "Projects Delivered", value: 2, suffix: "+" },
  { label: "Happy Clients", value: 1, suffix: "+" },
  { label: "Awards Won", value: 0, suffix: "" }
];

export const experienceTimeline = [
  {
    year: "Mar 2026 - Present",
    role: "Analyst",
    company: "Accenture",
    description: "Heading a team of 5 developers building enterprise SaaS platforms. Architected micro-frontend systems and scaled APIs to 1M+ requests/day.",
    highlights: ["Next.js", "Typescript", "Git", "shadcn/ui", "MUI", "Framer Motion"]
  },
  {
    year: "Nov 2023 - Feb 2026",
    role: "Associate",
    company: "Accenture",
    description: "Built modern & premium telecom sites for an UK based major client. Focusing on accessibility, SEO & performance optimization.",
    highlights: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React JS", "Three.js"]
  }
];

export const skills: Record<string, { name: string; level: number; icon: string }[]> = {
  Frontend: [
    { name: "React", level: 98, icon: "Atom" },
    { name: "Next.js", level: 96, icon: "Globe" },
    { name: "TypeScript", level: 95, icon: "FileCode" },
    { name: "Tailwind CSS", level: 97, icon: "Paintbrush" },
    { name: "Framer Motion", level: 92, icon: "Sparkles" },
    { name: "GSAP", level: 88, icon: "Zap" }
  ],
  Backend: [
    { name: "Node.js", level: 94, icon: "Server" },
    { name: "PostgreSQL", level: 90, icon: "Database" },
    { name: "GraphQL", level: 87, icon: "Route" },
    { name: "Redis", level: 82, icon: "Layers" },
  ],
  DevOps: [
    { name: "Docker", level: 85, icon: "Container" },
    { name: "AWS", level: 80, icon: "Cloud" },
    { name: "CI/CD", level: 83, icon: "Repeat" },
    { name: "Vercel", level: 95, icon: "Zap" },
  ],
  Tools: [
    { name: "Figma", level: 90, icon: "PenTool" },
    { name: "Git", level: 96, icon: "GitBranch" },
    { name: "Jest", level: 84, icon: "CheckCircle" },
    { name: "Storybook", level: 86, icon: "BookOpen" },
  ]
};
// style={{ width: "${skill.level}%" }}

export const projects = [
  {
    id: 1,
    title: "Dummy_1",
    category: "All",
    description: "Enterprise analytics platform with real-time data visualization, role-based access control, and AI-powered insights.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    stats: { users: "50K+", performance: "99.9%", conversion: "+340%" },
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    image: "/project.jpg"
  },
  {
    id: 2,
    title: "Dummy_2",
    category: "All",
    description: "Enterprise analytics platform with real-time data visualization, role-based access control, and AI-powered insights.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    stats: { users: "50K+", performance: "99.9%", conversion: "+340%" },
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    image: "/project.jpg"
  },
  {
    id: 3,
    title: "Dummy_3",
    category: "All",
    description: "Enterprise analytics platform with real-time data visualization, role-based access control, and AI-powered insights.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    stats: { users: "50K+", performance: "99.9%", conversion: "+340%" },
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    image: "/project.jpg"
  },
  {
    id: 4,
    title: "Dummy_4",
    category: "All",
    description: "Enterprise analytics platform with real-time data visualization, role-based access control, and AI-powered insights.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    stats: { users: "50K+", performance: "99.9%", conversion: "+340%" },
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    image: "/project.jpg"
  }
];

export const projectCategories = ["All"];

export const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Full-stack web applications built with React, Next.js, and modern technologies.",
    price: "From $5,000",
    icon: "Globe",
    features: ["Responsive Design", "SEO Optimization", "Performance Tuning", "API Integration"],
    popular: false
  },
  {
    id: 2,
    title: "SaaS Development",
    description: "End-to-end SaaS platforms with auth, billing, dashboards, and scalable architecture.",
    price: "From $15,000",
    icon: "LayoutDashboard",
    features: ["Multi-tenancy", "Stripe Billing", "Role-based Auth", "Admin Dashboard"],
    popular: true,
  },
  {
    id: 3,
    title: "E-Commerce",
    description: "Headless storefronts with fast checkout, inventory sync, and conversion optimization.",
    price: "From $8,000",
    icon: "ShoppingCart",
    features: ["Headless CMS", "Payment Gateways", "Cart Abandonment", "Analytics"],
    popular: false,
  },
  {
    id: 4,
    title: "UI/UX Design",
    description: "Pixel-perfect interfaces with accessibility-first design and design systems.",
    price: "From $3,000",
    icon: "MousePointer",
    features: ["Figma Prototypes", "Design Systems", "Accessibility Audit", "User Testing"],
    popular: false,
  },
  {
    id: 5,
    title: "Brand Identity",
    description: "Complete brand packages including logos, color palettes, and design guidelines.",
    price: "From $2,500",
    icon: "PenTool",
    features: ["Logo Design", "Style Guide", "Social Assets", "Brand Strategy"],
    popular: false,
  },
  {
    id: 6,
    title: "Performance Audit",
    description: "Deep-dive performance analysis and optimization for Core Web Vitals.",
    price: "From $1,500",
    icon: "Zap",
    features: ["Lighthouse Scores", "Bundle Analysis", "Caching Strategy", "CDN Setup"],
    popular: false,
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CEO, Tech Flow",
    content: "Muddsar transformed our product vision into reality. The attention to detail and technical excellence exceeded every expectation.",
    rating: 5
  },
  {
    id: 2,
    name: "Marcus Reid",
    role: "Founder, Aura",
    content: "Working with Muddsar was a game-changer. Our conversion rate tripled within two months of launch. Truly world-class work.",
    rating: 5,
  },
  {
    id: 3,
    name: "Elena Voss",
    role: "CTO, Orbit",
    content: "The architecture Muddsar designed scaled seamlessly to 100K users without a hitch. A rare combination of craft and engineering rigor.",
    rating: 5,
  },
  {
    id: 4,
    name: "James Connor",
    role: "Product Lead, Zenith",
    content: "Muddsar delivered our healthcare platform on time and under budget, with flawless HIPAA compliance. Outstanding partner.",
    rating: 5,
  },
  {
    id: 5,
    name: "Priya Sharma",
    role: "Director, Flux",
    content: "The crypto dashboard Muddsar built handles millions in daily volume with sub-second latency. Remarkable engineering.",
    rating: 5,
  },
  {
    id: 6,
    name: "David Kim",
    role: "Senior Manager, Voyage",
    content: "Muddsar's AI integration work was phenomenal. The trip planner feels magical and users absolutely love it.",
    rating: 5,
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "Building Accessible Design Systems at Scale",
    category: "Design",
    readTime: "8 min read",
    excerpt: "How to create component libraries that are inclusive by default and maintainable across large teams."
  },
  {
    id: 2,
    title: "React Server Components: A Practical Guide",
    category: "Engineering",
    readTime: "12 min read",
    excerpt: "Deep dive into RSC architecture, when to use them, and common pitfalls to avoid in production.",
  },
  {
    id: 3,
    title: "The Future of CSS: Tailwind v4 and Beyond",
    category: "CSS",
    readTime: "6 min read",
    excerpt: "Exploring the new engine, zero-runtime philosophy, and what it means for modern web styling.",
  },
  {
    id: 4,
    title: "Optimizing Core Web Vitals for E-Commerce",
    category: "Performance",
    readTime: "10 min read",
    excerpt: "Real-world techniques that increased our client's LCP by 40% and boosted conversions by 25%.",
  },
  {
    id: 5,
    title: "State Management in 2025: Beyond Redux",
    category: "Engineering",
    readTime: "9 min read",
    excerpt: "Comparing Zustand, Jotai, Valtio, and TanStack Store for modern React applications.",
  },
  {
    id: 6,
    title: "Designing for Dark Mode: A Complete Guide",
    category: "Design",
    readTime: "7 min read",
    excerpt: "From CSS custom properties to image optimization, everything you need for perfect dark mode UX.",
  }
];

export const blogCategories = ["All"];
