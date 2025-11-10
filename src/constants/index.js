import {
  mobile,
  backend,
  creator,
  web,
  angular,
  aws,
  dart,
  docker,
  flutter,
  git,
  html,
  javascript,
  mongodb,
  mysql,
  php,
  python,
  pytorch,
  reactjs,
  springboot,
  tailwind,
  typescript,
  tensorflow,
  vite,
  meta,
  starbucks,
  tesla,
  shopify,
amazon_tracking,
  anbucocomart,
  anbucoconutfarm,
  ausmile,
  college_project,
  dating_application,
  evice, 
  ksmodular,
  more_projects,
  movies_ticket_booking,
  stavat,
  theamdc,
  github,
linkedin,
email,
phone,
copy,
blockstats,
  isanghanminds
} from "../assets";

export const navLinks = [
  {
    path: "/",
    title: "Home",
  },
{
path: "/about",
title: "About",
},
{
path: "/projects",
title: "Projects",
},
{
path: "/contact",
title: "Contact",
},
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "App Development",
    icon: mobile,
  },
  {
    title: "AI/ML Development",
    icon: backend,
  },
  {
    title: "SEO",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
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
    name: "Dart",
    icon: dart,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Spring Boot",
    icon: springboot,
  },
  {
    name: "PyTorch",
    icon: pytorch,
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
  },
  {
    name: "Vite",
    icon: vite,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
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
    name: "Blockstats ",
    description:
      "BlockStats.app — a powerful all-in-one analytics platform offering real-time blockchain data, insights, tax calculator, and portfolio management tools",
   tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Jquery",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
           {
        name: "Mysql",
        color: "green-text-gradient",
      },
         {
        name: "php",
        color: "blue-text-gradient",
      },
    ],
    image: blockstats,
    live_site_link: "https://blockstats.app/",
  },
  {
    name: "Anbu CocoMart",
    description:
      "Anbu CocoMart is a dedicated online platform serving coconut farmers across India — offering organic growing mediums (like coco-peat), bio-fertilisers, farm tools etc.",
   tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Jquery",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
           {
        name: "Mysql",
        color: "green-text-gradient",
      },
         {
        name: "php",
        color: "blue-text-gradient",
      },
    ],
    image: anbucocomart,
    live_site_link: "https://anbucocomart.in/",
  },
  {
    name: "KS Modular",
    description:
      "KS Modular Furniture delivers premium modular solutions for both residential and commercial spaces, backed by over 15 years of industry expertise. Located in Bengaluru.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Jquery",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    
    ],
    image: ksmodular,
    live_site_link: "https://ksmodular.com/.in/",
  },
  {
    name: "Isanghan Minds",
    description:
      "Isanghan Minds — an ed-tech company offering industry-driven online courses in AI and machine learning for beginners through professionals.",
   tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Jquery",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
           {
        name: "Mysql",
        color: "green-text-gradient",
      },
         {
        name: "php",
        color: "blue-text-gradient",
      },
    ],
    image: isanghanminds,
    live_site_link: "https://isanghanminds.com/",
  },
    {
    name: "Stavat Artventure",
    description:
      "Stavat ArtVenture specialises in high-impact digital wall-printing solutions across residential and commercial spaces. Based in Bengaluru (Vijayashree Layout, Myla­sandra)",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Jquery",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    
    ],
    image: stavat,
    live_site_link: "https://artventure.stavat.in/",
  },
    {
    name: "Ausmile Dental Care",
    description:
      "Ausmile Dental Care is an Australian-licensed team of dental professionals dedicated to delivering gentle, high-quality oral care for children and seniors.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Jquery",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    
    ],
    image: ausmile,
    live_site_link: "https://ausmile.com.au/",
  },
      {
    name: "Amazon Price Tracker",
    description:
      "Amazon Price Tracker is a user-friendly web application that allows users to track the prices of Amazon products in real-time and receive alerts when prices drop.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Jquery",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    
    ],
    image: amazon_tracking,
    source_code_link: "https://github.com/Kushvith/amzon-tracking-edited",
  },

        {
    name: "ANBU CocoNut Farm",
    description:
      "Anbu Coconut Farm is a trusted leader in premium coconut farming, offering over 20,000 high-quality saplings annually from 14 distinct varieties..",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Jquery",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    
    ],
    image: anbucoconutfarm,
    live_site_link: "https://anbucoconutfarm.in/",
  },
        {
    name: "Online Assesment portal",
    description:
      "Online Assesment Management System is a web-based platform that provides a secure and efficient solution  for managing online assessments.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Jquery",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    
    ],
    image: college_project,
    source_code_link: "https://github.com/Kushvith/oaedit",
  },
        {
    name: "Dating Application",
    description:
      "Dating Application is a user-friendly web application that allows users to connect with others and find their perfect match for a romantic relationship.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Jquery",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    
    ],
    image: dating_application,
    source_code_link: "https://github.com/Kushvith/DatingApp",
  },
        {
    name: "Evice Hybrid Store",
    description:
      "EVICE – The Hybrid Store offers a seamless multi-brand showroom experience of hybrid and electric two-wheelers, combining eco-friendly mobility with trusted brands, flexible financing and full-service support.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Jquery",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    
    ],
    image: evice,
    live_site_link: "https://evice.co.in/",
  },
      {
    name: "Movies Ticket Booking",
    description:
      "Movies Ticket Booking is a user-friendly web application that allows users to book tickets for movies, concerts, sports events, and more.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Jquery",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    
    ],
    image: dating_application,
    source_code_link: "https://github.com/Kushvith/movies-management",
  },
          {
    name: "Austrilian Mobile Dental Care (AMDC)",
    description:
      "AMDC (Australia) is a  dental health professionals who bring Australian-licensed oral care to children and seniors.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Jquery",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    
    ],
    image: theamdc,
    live_site_link: "https://theamdc.com.au/",
  },
        {
    name: "More Projects",
    description:
      "More Projects Access Github link to view my works on different projects and languages used in them.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Jquery",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    
    ],
    image: dating_application,
    source_code_link: "https://github.com/Kushvith",
  },
];
const contacts = [
{
name: "GitHub",
icon: github,
type: "link",
link: "https://github.com/Kushvith", 
},
{
name: "LinkedIn",
icon: linkedin,
type: "link",
link: "https://linkedin.com/in/kushvith-chinna-30b552272", 
},
{
name: "Email",
icon: email,
type: "copy",
value: "kushvith.yallamoor@gmail.com",
link: "mailto:kushvith.yallamoor@gmail.com", 
},
{
name: "Email",
icon: email,
type: "copy",
link: "mailto:Hello@kushvith.com", 
value: "Hello@kushvith.com",
},
{
name: "Phone",
icon: phone,
type: "copy",
link: "tel:+916362150408", 
value: "+91 6362150408",
},
];


export { services, technologies, experiences, testimonials, projects, contacts };
