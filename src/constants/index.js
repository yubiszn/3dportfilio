import {
  mobile,
  backend,
  creator,
  web,
  c,
  css,
  html,
  java,
  javascript,
  mongodb,
  mui,
  mysql,
  nodejs,
  python,
  reactjs,
  springboot,
  tailwind,
  typescript,
  palm_tree,
  paradiseweb,
  llmcweb,
  yubimovies,
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
    name: "C",
    icon: c,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "MUI",
    icon: mui,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Python",
    icon: python,
  },
   {
    name: "Spring Boot",
    icon: springboot,
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
    name: "Paradise",
    description:
      "Built a responsive e-commerce platform with product browsing, cart, Stripe checkout, JWT auth, bcrypt, AWS S3, MongoDB, admin dashboards, and Vercel/Render deployment.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "AWS-S3",
        color: "pink-text-gradient",
      },
    ],
    image: paradiseweb,
    source_code_link: "https://github.com/yubiszn/Paradise",
  },
  {
    name: "LLMC Alumni Directory",
    description:
      "Won 2024 JPMorgan Chase Hackathon with a full-stack platform for LMCC. Built MongoDB/Express/React/Node features: interactive feed, jobs, events, alumni, boosting engagement 30%.",
    tags: [
      {
        name: "MUI",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: llmcweb,
    source_code_link: "https://github.com/yubiszn/cfg-jpmorgan-team16",
  },
  {
    name: "Yubi Movies",
    description:
      "Built Yubi Movies, a Flutter/Dart mobile app using OMDb API to browse and search movies. Features watchlists, ratings, and real-time movie info updates.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Dart",
        color: "green-text-gradient",
      },
      {
        name: "OmDb Api",
        color: "pink-text-gradient",
      },
    ],
    image: yubimovies,
    source_code_link: "https://github.com/yubiszn/yubi-movies",
  },
];

export { services, technologies, experiences, testimonials, projects };