export const sections = [
  { name: 'Home', id: 'home', ariaLabel: 'Go to a home section', number: 0 },
  {
    name: 'About',
    id: 'about',
    ariaLabel: 'Go to an about section',
    number: 1,
  },
  {
    name: 'Work',
    id: 'work',
    ariaLabel: 'Go to a work section',
    number: 4,
  },
  {
    name: 'Contact',
    id: 'contact',
    ariaLabel: 'Go to a contact section',
    number: 6,
  },
];

export const contacts = [
  {
    name: 'GitHub',
    link: 'https://github.com/Olacdy',
    ariaLabel: 'Review a GitHub page',
    icon: 'github',
  },
  {
    name: 'Resume',
    link: 'https://olacdy.github.io/Full-Stack-Developer-CV/',
    ariaLabel: 'Review a resume',
    icon: 'resume',
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/oleg-didechkin/',
    ariaLabel: 'LinkedIn profil',
    icon: 'linkedin',
  },
  {
    name: 'Telegram',
    link: 'https://t.me/golovakanta',
    ariaLabel: 'Telegram contact',
    icon: 'telegram',
  },
  {
    name: 'Email',
    link: 'mailto:oleg.didechkin@gmail.com',
    ariaLabel: 'Send an email',
    icon: 'email',
  },
];

export const projects = [
  {
    title: 'Frontend Mentor Challenges',
    description:
      "A collection of Frontend Mentor tasks I've solved and deployed on GitHub Pages. Utilizing the Next router, I've harmoniously integrated all pages into one cohesive website, dedicating a unique page to each solution. Dive into this exhibit of my technical skills and creative design.",
    tags: '',
    link: 'https://olacdy.github.io/frontend-mentor-challenges/',
    image: '/Project-1.webp',
  },
  {
    title: 'Interactive Comments Section',
    description:
      'All-encompassing full-stack web application empowering users to create, edit, and delete diverse comments within a unified global comments section. Account creation is a prerequisite for accessing this feature-rich platform. Originally initiated as a Frontend Mentor task, I expanded its scope to develop a comprehensive web application.',
    tags: '',
    link: 'https://interactive-comments-section-mocha.vercel.app/',
    image: '/Project-2.webp',
  },
  {
    title: 'Bellify',
    description:
      'Telegram bot project – a user-centered hub for tracking preferred YouTube and Twitch channels. Receive instant notifications for new content while benefiting from commerce practices like user agreements, tutorials, and plan upgrades, with payments via Stripe for a seamless experience.',
    tags: '',
    link: 'https://bellify.org/',
    image: '/Project-3.webp',
  },
  {
    title: 'DinoNN',
    description:
      'Python script that launches a Chrome browser, generates multiple agents (neural networks) to compete for top scores in Dino game, identifies the most successful agent, and mutates its genes to spawn a new generation of agents.',
    tags: '',
    link: 'https://github.com/Olacdy/DinoNN',
    image: '/Project-4.webp',
  },
];

export const skills = {
  frontend: [
    {
      name: 'HTML',
      icon: 'html',
    },
    {
      name: 'CSS',
      icon: 'css',
    },
    {
      name: 'JS',
      icon: 'js',
    },
    {
      name: 'React',
      icon: 'react',
    },
    {
      name: 'Next',
      icon: 'next',
    },
    {
      name: 'TailwindCSS',
      icon: 'tailwindcss',
    },
  ],
  backend: [
    {
      name: 'Python',
      icon: 'python',
    },
    {
      name: 'Node',
      icon: 'node',
    },
    {
      name: 'Docker',
      icon: 'docker',
    },
  ],
};

export const about = [
  {
    title: 'Data Science',
    content:
      'My expedition as a software developer commenced with the elegant language of Python. This initial foray into the realm of Data Science set the foundation for my evolving voyage.',
    image: { src: '/DS.webp', alt: 'Data Science Illustration' },
  },
  {
    title: 'Web-development',
    content:
      'Transitioning, I immersed myself in web development, powered by Python. Guided by Django and Flask frameworks, I sculpted web applications, combining functionality and aesthetics seamlessly.',
  },
  {
    title: 'Full-Stack',
    content:
      "Today, I stand at a crossroads, merging experience with vision. Embracing full-stack potential, I've embarked on the Node.js journey. I now craft comprehensive applications, seamlessly blending frontend and backend expertise, using efficient tools and techniques.",
  },
];
