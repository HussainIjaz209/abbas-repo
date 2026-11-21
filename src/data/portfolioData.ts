export interface GraphicProject {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  clientOrTheme?: string;
}

export interface WebProject {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
}

export const graphicProjects: GraphicProject[] = [
  {
    id: 'g1',
    title: 'Neon Cyber Gaming Poster',
    category: 'Advertising Posters',
    description: 'High-energy futuristic esports tournament promotional poster featuring glowing typography, neon 3D elements, and cyberpunk atmosphere.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
    tags: ['Photoshop', 'Illustrator', 'Lighting Effects', 'Poster Design'],
    clientOrTheme: 'Esports Championship Series'
  },
  {
    id: 'g2',
    title: 'Modern Brand Identity & Typography',
    category: 'Branding',
    description: 'Minimalist brand identity kit including creative gradient logo concepts, vector stationery, and sleek typography layout.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&auto=format&fit=crop',
    tags: ['Illustrator', 'Branding', 'Vector Art', 'Visual Identity'],
    clientOrTheme: 'NextGen Tech Studio'
  },
  {
    id: 'g3',
    title: 'Social Media Campaign Kit',
    category: 'Social Media Posts',
    description: 'Dynamic set of Instagram, Facebook, and LinkedIn campaign banners designed for product launch engagement and high conversion.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    tags: ['Canva Pro', 'Photoshop', 'Social Strategy', 'Creative Ads'],
    clientOrTheme: 'Pulse Fitness & Apparel'
  },
  {
    id: 'g4',
    title: 'Futuristic Conference Billboard & Banner',
    category: 'Business Banners',
    description: 'Wide format corporate conference exhibition backdrop and digital web roll-up banner with clean geometric gradients.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
    tags: ['Large Format', 'Photoshop', 'Print Ready', 'Corporate Design'],
    clientOrTheme: 'Global AI Summit'
  },
  {
    id: 'g5',
    title: 'Creative Beverage Promotion Ad',
    category: 'Promotional Designs',
    description: 'Vibrant commercial splash advertising concept with photorealistic composition, dynamic water splashes, and 3D fruit effects.',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop',
    tags: ['Photo Manipulation', 'Digital Art', 'Retouching', 'Color Grading'],
    clientOrTheme: 'Zenith Organic Energy'
  },
  {
    id: 'g6',
    title: 'Minimalist Architectural Studio Poster',
    category: 'Creative Graphics',
    description: 'Editorial-grade contemporary poster exploring isometric grids, elegant duotone color schemes, and Swiss typography rules.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    tags: ['Illustrator', 'Swiss Grid', 'Abstract Layout', 'Poster Art'],
    clientOrTheme: 'Vanguard Architects'
  }
];

export const webProjects: WebProject[] = [
  {
    id: 'w1',
    title: 'NovaSpace - Interactive SaaS Platform',
    category: 'Web Applications',
    description: 'A modern, lightning-fast dashboard interface featuring real-time data visualizers, glassmorphic cards, responsive dark UI, and authentication workflow.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    technologies: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Chart.js', 'Node.js'],
    liveUrl: 'https://example.com/demo-novaspace',
    githubUrl: 'https://github.com/abbaskhan-dev/novaspace',
    featured: true
  },
  {
    id: 'w2',
    title: 'Aura Luxe - Modern E-Commerce Experience',
    category: 'E-Commerce',
    description: 'Full-featured premium store front-end with intuitive filtering, product quick-view modal, dynamic cart drawer, and sleek micro-interactions.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    technologies: ['React', 'Tailwind CSS', 'Lucide Icons', 'Context API'],
    liveUrl: 'https://example.com/demo-auraluxe',
    githubUrl: 'https://github.com/abbaskhan-dev/aura-luxe',
    featured: true
  },
  {
    id: 'w3',
    title: 'Apex Agency - High-Conversion Landing Page',
    category: 'Landing Pages',
    description: 'A cutting-edge agency website featuring interactive 3D tilt effects, client testimonial sliders, animated pricing tiers, and contact integration.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
    technologies: ['React.js', 'Framer Motion', 'Tailwind CSS', 'Express.js'],
    liveUrl: 'https://example.com/demo-apexagency',
    githubUrl: 'https://github.com/abbaskhan-dev/apex-agency'
  },
  {
    id: 'w4',
    title: 'DevPulse - Developer Knowledge & Blog Portal',
    category: 'Web Applications',
    description: 'Fast, responsive developer documentation and tech article hub with syntax highlighting, search capability, tag filtering, and dark/light themes.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop',
    technologies: ['JavaScript', 'HTML5', 'CSS3 / Tailwind', 'Node.js'],
    liveUrl: 'https://example.com/demo-devpulse',
    githubUrl: 'https://github.com/abbaskhan-dev/devpulse'
  }
];

export const skillCategories = {
  web: [
    { name: 'HTML5', level: 'Semantic structure, accessibility, modern standards' },
    { name: 'CSS3', level: 'Flexbox, CSS Grid, custom properties & keyframe animations' },
    { name: 'JavaScript (ES6+)', level: 'Async/await, DOM manipulation, functional programming' },
    { name: 'React.js', level: 'Component architecture, Hooks, state management, SPA' },
    { name: 'Tailwind CSS', level: 'Utility-first styling, responsive layouts, glassmorphism' },
    { name: 'Node.js', level: 'Server-side runtime, REST APIs, scripting' },
    { name: 'Express.js', level: 'Backend routing, middleware, API endpoints' },
    { name: 'Database Management', level: 'SQL & NoSQL fundamentals, schema design, queries' },
  ],
  design: [
    { name: 'Adobe Photoshop', level: 'Photo manipulation, retouching, poster composition' },
    { name: 'Adobe Illustrator', level: 'Vector logo design, icons, typography, illustration' },
    { name: 'Canva Pro', level: 'Rapid social media graphics, client presentations' },
    { name: 'Social Media Design', level: 'High-engagement Instagram, Facebook & YouTube graphics' },
    { name: 'Poster Design', level: 'Commercial ads, event posters, visual hierarchy' },
    { name: 'Branding & Identity', level: 'Color palettes, font pairing, style guides' },
  ]
};

export const services = [
  {
    id: 'web-dev',
    title: 'Website Development',
    description: 'Custom, blazing-fast websites engineered with modern web standards, semantic HTML, and responsive design for all devices.',
    icon: 'Code2',
    features: ['Responsive websites', 'Business websites', 'Portfolio websites', 'Landing pages']
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'Eye-catching visual designs and digital artwork crafted to grab attention, communicate clearly, and elevate brand value.',
    icon: 'Palette',
    features: ['Social media posts', 'Advertising posters', 'Business banners', 'Promotional designs']
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'User-centric wireframes and intuitive interface designs structured for aesthetic appeal, clarity, and seamless user experiences.',
    icon: 'Layout',
    features: ['Website layouts', 'Modern interfaces', 'Creative visual concepts', 'Design prototypes']
  },
  {
    id: 'redesign',
    title: 'Website Redesign',
    description: 'Transform outdated websites into modern, sleek, mobile-friendly digital assets that perform better and convert more visitors.',
    icon: 'Sparkles',
    features: ['Modern layouts', 'Better user experience', 'Responsive improvements', 'Speed & visual upgrades']
  }
];
