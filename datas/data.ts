export const socialLinks = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/amol-gupta-arg",
    simpleIcon: "/svgs/linkedIn.svg",
  },
  {
    name: "Gmail",
    link: "mailto:amol@amolgupta.com",
    simpleIcon: "/svgs/gmail.svg",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/amolratan.gupta/",
    simpleIcon: "/svgs/facebook.svg",
  },

  {
    name: "Instagram",
    link: "https://www.instagram.com/amolratangupta/",
    simpleIcon: "/svgs/insta.svg",
  },

];

import { faBuilding, faChartLine, faMoneyBillWave, faUsers, faShieldAlt, faUserTie } from "@fortawesome/free-solid-svg-icons";

export const specializations = [
  {
    name: "Organizational Development",
    icon: faBuilding, // Represents corporate development
  },
  {
    name: "Performance Management",
    icon: faChartLine, // Represents performance tracking
  },
  {
    name: "Compensation Management",
    icon: faMoneyBillWave, // Represents financial management
  },
  {
    name: "Talent Engagement",
    icon: faUsers, // Represents workforce engagement
  },
  {
    name: "Risk Management",
    icon: faShieldAlt, // Represents security and risk
  },
  {
    name: "Leadership Transformation",
    icon: faUserTie, // Represents leadership growth
  },
];


export const sections = [
  { idRoute: "#about", name: "ABOUT" },
  { idRoute: "#experience", name: "EXPERIENCE" },
  { idRoute: "#spotlight", name: "SPOTLIGHT" },
  { idRoute: "#vision", name: "VISION" },
  { idRoute: "#contact", name: "CONTACT" },
];

export const companies = [
  "Graphio.ai",
  "FIS",
  "Barclays Technology Center India",
  "SunGard",
  "Infosys BPO",
  "Lupin Ltd.",
  "Serum Institute of India Ltd.",
  "NIIT Ltd.",
];

export const companiesInfo = [
  {
    title: "Investor and Advisor",
    company: "Graphio.ai",
    location: "Freelance",
    duration: "February 2025 - Present",
    roles: [
      "Advising on business strategies and investment opportunities.",
      "Helping optimize internal inefficiencies using metadata-only analytics.",
      "Supporting integration of diverse data sources for better organizational performance.",
    ],
  },
  {
    title: "People Leader for COO / CTO",
    company: "FIS",
    location: "Jacksonville, Florida, United States",
    duration: "April 2022 - Present",
    roles: [
      "Leading people strategy and cultural transformation for the COO and CTO divisions.",
      "Driving HR initiatives that enhance operational efficiency.",
    ],
  },
  {
    title: "People Leader for India and Philippines",
    company: "FIS",
    location: "Pune Area, India",
    duration: "January 2020 - August 2022",
    roles: [
      "Led HR strategy and operational agility during the global pandemic.",
      "Board Member, FIS India.",
    ],
  },
  {
    title: "Senior Corporate Services People Partner",
    company: "FIS",
    location: "Jacksonville, Florida",
    duration: "August 2017 - January 2020",
    roles: [
      "Led HR strategy for CFO, CLO, CRO, and revenue unit of Global Commercial Services.",
    ],
  },
  {
    title: "Talent Management Head, India and Philippines",
    company: "FIS",
    location: "Pune Area, India",
    duration: "April 2015 - August 2017",
    roles: [
      "Led talent management initiatives across India and the Philippines.",
    ],
  },
  {
    title: "Senior HRBP",
    company: "Barclays Technology Center India",
    location: "Pune Area, India",
    duration: "February 2013 - April 2015",
    roles: [
      "Transformed HRBP role into a strategic function.",
      "First HRBP from India to take on a global role.",
      "Received ‘Kudos Certificate’ (2013) and ‘Barclays Values Recognition Award’ (2014).",
    ],
  },
  {
    title: "Senior Manager - HR",
    company: "FIS",
    location: "Pune, India",
    duration: "November 2009 - January 2013",
    roles: [
      "Led HRBP team and managed HR budgets.",
      "Revamped HR policies and compensation programs.",
      "Received ‘Supernova Award’ (2012).",
    ],
  },
  {
    title: "Senior Manager - HR",
    company: "Serum Institute of India Ltd.",
    location: "Pune, India",
    duration: "July 2007 - November 2009",
    roles: [
      "Automated HR processes and facilitated organizational restructuring.",
      "Negotiated union settlements and built employer branding.",
    ],
  },
  {
    title: "HR Manager",
    company: "Infosys BPO",
    location: "Pune Area, India",
    duration: "February 2006 - July 2007",
    roles: [
      "Managed HR operations for the Pune center.",
    ],
  },
  {
    title: "HR Manager",
    company: "Lupin Ltd.",
    location: "Mumbai Area, India",
    duration: "February 2005 - February 2006",
    roles: [
      "Managed Sales HR with additional responsibilities in Compensation & Benefits.",
    ],
  },
  {
    title: "Executive",
    company: "NIIT Ltd.",
    location: "New Delhi, India",
    duration: "1997 - September 2002",
    roles: [
      "Handled various executive responsibilities within the company.",
    ],
  },
];



export const projects = [
  {
    name: "PharmaBin",
    type: "Featured Project",
    description:
      "PharmaBin tackles pharmaceutical waste management in Nigeria by integrating technology, community engagement, and sustainability. It offers a safe, efficient, and eco-friendly solution for disposing of expired, unused, or contaminated medications.",
    image: "/pharmabin.webp",
    liveLink: "https://www.pharmabin.org/",
    stacks: ["TypeScript", "React", "TailwindCss", "AOS"],
  },
  {
    name: "JustIron",
    type: "Featured Project",
    description:
      "JustIron simplifies laundry services with an intuitive online platform, offering seamless booking, scheduling, and real-time order tracking for users in the UK.",
    image: "/justiron.webp",
    liveLink: "https://main.d3pwx7piz5hanx.amplifyapp.com/",
    stacks: ["TypeScript", "React", "TailwindCss", "Redux"],
  },
  {
    name: "BerryStamp",
    type: "Featured Project",
    description:
      "Berrystamp is revolutionizing the print-on-demand industry with its innovative approach to customization and printing services.",
    image: "/berrystamp.webp",
    liveLink: "https://berrystamp.com/",
    stacks: ["TypeScript", "React", "TailwindCss", "Redux"],
  },
  {
    name: "BFN",
    type: "Featured Project",
    description:
      "Developed a microsite for the BFN initiative, collaborating closely with content writers to create a visually appealing and intuitive platform. The site is designed with a focus on user experience, utilizing a clean and modern layout.",
    image: "/bfn.webp",
    liveLink: "https://www.programs-bfn.ca/",
    stacks: ["TypeScript", "React", "TailwindCss", "AOS"],
  },
  {
    name: "GSwift",
    type: "Featured Project",
    description:
      "A Gwift web app is a progressive ridesharing application with real-time tracking, seamless geocoordinate integration, and a user-friendly interface, prioritizing smooth navigation and efficient API consumption.",
    image: "/gswift.webp",
    liveLink: "https://gswift.pathpalz.com/",
    stacks: ["TypeScript", "React", "TailwindCss"],
  },

  {
    name: "DeepFocustt",
    type: "Featured Project",
    description:
      "For the DeepFocustt project, I developed and integrated animations by incorporating full HTML code, including CSS, JavaScript, and additional packages, to create a dynamic and engaging user experience on their Wix platform",
    image: "/deepfocus.webp",
    liveLink: "https://www.deepfocustt.com/",
    stacks: ["Wix", "Css", "Html", "Gsap"],
  },
  {
    name: "Huntstore",
    type: "Personal Project",
    description:
      "Huntstore is an ecommerce store that shows a variety of gender products.",
    image: "/huntstore.webp",
    liveLink: "https://huntstore.vercel.app/",
    githubLink: "https://github.com/Farouk-ayo/huntstore",
    stacks: ["JavaScript", "React", "css"],
  },
  {
    name: "Duplicate character remover",
    type: "Personal Project",
    description:
      "A houseware frontend engineering octernship task to develop a webapp for deletion of duplicate characters on clicking on the selected duplicated character or text",
    image: "/duplicateremover.webp",
    liveLink:
      "https://houseware-frontend-engineering-octernship-frk-ayo.vercel.app/",
    stacks: ["JavaScript", "React", "css"],
  },
  {
    name: "E-vent",
    type: "Featured Project",
    description:
      "E-vent is a centralized platform for event planners, organizers and attendees, to coordinate and manage various aspects of events such as scheduling, ticketing, registration, marketing and communication",
    image: "/e-vent.webp",
    stacks: ["JavaScript", "React", "Tailwind", "Mui"],
  },
  {
    name: "MovieBox",
    type: "Personal Project",
    description:
      "A movie discovery web application that allows users to search for movies, view details about them, and save their favorite movies, consuming data from the TMDB API.",
    image: "/moviebox.webp",
    liveLink: "https://movie-box-tmdb.vercel.app/",
    githubLink: "https://github.com/Farouk-ayo/movie--boxTMDB/tree/master",
    stacks: ["JavaScript", "React", "css"],
  },
  {
    name: "Penslab",
    type: "Featured Project",
    description:
      "An Electrical Electronics Engineering Departmental Project in connection to an Arduino Sensor",
    image: "/penslab.webp",
    liveLink: "https://penslab.vercel.app/",
    githubLink: "https://github.com/Farouk-ayo/penslab",
    stacks: ["JavaScript", "React", "Tailwind"],
  },
  {
    name: "Yalbaze",
    type: "Personal Project",
    description: "A designed webapp landing page",
    image: "/yalbaze.webp",
    githubLink: "https://github.com/Farouk-ayo/yalbaze",
    liveLink: "https://yalbaze.vercel.app/",
    stacks: ["css", "React"],
  },
  {
    name: "Frk-ayo",
    type: "Personal Project",
    description:
      "The aim of the project was to attract the users with the UI, which i built with HTML/CSS and JavaScript.",
    image: "/frk_ayo.webp",
    githubLink: "https://github.com/Farouk-ayo/Frkayo-Financesite",
    liveLink: "https://frkayo-financesite.vercel.app",
    stacks: ["Sass/scss", "Html", "JavaScript"],
  },
  ,
];
export const spotlight = [
  {
    name: "Interview with Richa Jain Kalra",
    type: "Interview",
    description:
      "An insightful discussion with Richa Jain Kalra on various HR trends and practices.",
    link: "https://www.youtube.com/watch?v=at_pOL_7h2E",
    image: "/Interview_with_Richa_Jain_Kalra.jpg",
    platforms: ["YouTube"],
  },
  {
    name: "SHRM India HR Social Media Influencer Ranking Report 2021-22",
    type: "Recognition",
    description:
      "Recognized in the SHRM India HR Social Media Influencer Ranking Report for 2021-22.",
    link: "https://www.linkedin.com/posts/amol-gupta-arg_shrm-shrmindia-shrmtech22-activity-6934708181889601536-Pqmq",
    image:"/SHRM_India_HR_Social_Media_Influencer_Ranking_Report_2021-22.jpeg",
    platforms: ["LinkedIn"],
  },
  {
    name: "How AI and Metaverse Can Transform the HR Industry",
    type: "Article",
    description:
      "An article in the Economic Times discussing the transformative potential of AI and the Metaverse in the HR industry.",
    link: "https://hr.economictimes.indiatimes.com/news/hrtech/how-ai-and-metaverse-can-transform-the-hr-industry/90659933",
    image:"/How_AI_and_Metaverse_Can_Transform_the_HR_Industry.png",
    platforms: ["Economic Times"],
  },
  {
    name: "Independent Director Certification",
    type: "Certification",
    description:
      "Certified as an Independent Director, showcasing expertise in corporate governance.",
    link: "https://www.linkedin.com/posts/amol-gupta-arg_independentdirectors-fisindia-activity-6896294319532429312-bZAX",
    image:"/Independent_Director_Certification.jpeg",
    platforms: ["LinkedIn"],
  },
  {
    name: "Dear CHROs, Do You Hold Your HRBPs Accountable?",
    type: "Article",
    description:
      "Quoted in an Economic Times article addressing the accountability of HR Business Partners.",
    link: "https://hr.economictimes.indiatimes.com/news/trends/employee-experience/dear-chros-do-you-hold-your-hrbps-accountable/88510586",
    image: "/Dear_CHROs_Do_You_Hold_Your_HRBPs_Accountable.png",
    platforms: ["Economic Times"],
  },
  {
    name: "The Pandemic and the Restructuring",
    type: "Article",
    description:
      "Discussed digital transformation, effective communication, and empathy in business growth and employee development.",
    link: "https://humancapitalonline.com/Workplace/details/2361/The+Pandemic+And+The+Restructuring",
    image:"/The_Pandemic_and_The_Restructuring.png",
    platforms: ["Human Capital Online"],
  },
  {
    name: "What India Inc is Missing on Employee Wellbeing Front",
    type: "Article",
    description:
      "Explored the aspects of financial wellbeing and its importance in employee satisfaction and performance.",
    link: "https://hr.economictimes.indiatimes.com/news/workplace-4-0/employee-wellbeing/what-india-inc-is-missing-on-employee-wellbeing-front/86499639",
    image: "/What_India_Inc_is_Missing_on_Employee_Wellbeing_Front.png",
    platforms: ["Economic Times"],
  },
  {
    name: "Building A Talent Pipeline",
    type: "Article",
    description:
      "Authored an article on the importance of developing a sustainable talent pipeline for organizational growth.",
    link: "https://humancapitalonline.com/Talent/details/1741/Building",
    image:"/Building_A_Talent_Pipeline.png",
    platforms: ["Human Capital Online"],
  },
  {
    name: "What’s Driving IT’s Scramble for Talent?",
    type: "Article",
    description:
      "Contributed to an Economic Times article discussing the impact of emerging technologies on the demand for tech talent.",
    link: "https://economictimes.indiatimes.com/prime/technology-and-startups/whats-driving-its-scramble-for-talent-its-emerging-tech-ai-cloud-big-data-5g-and-more/primearticleshow/85635163.cms",
    image:"/whats-driving-its-scramble-for-talent-its-emerging-tech-ai-cloud-big-data-5g-and-more.gif",
    platforms: ["Economic Times"],
  },
];
