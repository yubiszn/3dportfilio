import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  jpmorgan,
  tesla,
  palm_tree,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Engineer",
    icon: backend,
  },
  {
    title: "Wellness Coordinator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Development Co-op",
    company_name: "Franklin University",
    icon: mobile,
    iconBg: "#383E56",
    date: "March 2024 - August 2024",
    points: [
      "Collaborated with engineers to develop “Connected,” a social media platform for young developers.",
      "Enhancing user engagement by 30% through optimized sharing, faster content distribution, and improved interaction features.",
      "Utilized Spring Boot, Java, React, Node.js, and MySQL, with version control managed via Git and GitHub.",
    ],
  },
  {
    title: "Code For Good 24-Hour Hackathon - 1st Place",
    company_name: "JPMorgan Chase",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "November 2024",
    points: [
      "Collaborated with a team of engineers to win the 2024 JPMorgan Chase Code For Good Hackathon by developing a scalable, responsive full stack web platform for Lower Manhattan Cultural Council (LMCC).",
      "Created tailored connections using advanced filtering to help users find community members by location and interests.",
      "Implemented features like an interactive feed, jobs board, events calendar, and alumni directory.",
      "Built using MongoDB, Express, React, Node.js, increasing user engagement by 30% through faster navigation.",
    ],
  },
  {
    title: "Paradise – Full Stack E-Commerce Web Application",
    company_name: "Franklin University",
    icon: palm_tree,
    iconBg: "#383E56",
    date: "May 2025 - July 2025",
    points: [
      "Developed a responsive e-commerce platform featuring product browsing, cart management, and Stripe checkout.",
      "Implemented JWT authentication, bcrypt password hashing for robust security, and AWS S3 for cloud storage.",
      "Built an intuitive user interface and admin dashboards for inventory updates and management of 500+ products.",
      "Utilized persistent data storage with MongoDB Atlas and deployed interfaces on Vercel and backend on Render.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Freelancer",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };