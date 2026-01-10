// ===============================
// Navigation Bar SECTION
// ===============================
const navBar = {
  show: true,
};

// ===============================
// Main Body SECTION (Hero)
// ===============================
const mainBody = {
  gradientColors: "#0f2027, #203a43, #2c5364",
  firstName: "Nick",
  middleName: "Joe",
  lastName: "Velasco",
  message:
  "Senior Software Engineer specializing in C# / .NET, scalable backend systems, and enterprise-grade APIs.\nExperienced in designing high-performance, reliable architectures for production environments.\nOpen to Senior and Lead roles — full-time, contract, consulting, remote, or hybrid.",
icons: [
    { image: "fa-github", url: "https://github.com/CompG33k" },
    { image: "fa-linkedin", url: "https://www.linkedin.com/in/nickvelasco/" },
    { image: "fa-globe", url: "https://nickjvelasco.com" },
  ],
};

// ===============================
// ABOUT SECTION
// ===============================
const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/NickJoeVelasco.png"),
  imageSize: 365,
 message:
  "I am Nick Joe Velasco, a Senior Software Engineer with over 10 years of professional experience designing, building, and maintaining high-performance backend systems and enterprise applications. I hold a B.S. in Computer Science from California State University, Long Beach and have worked across the full software development lifecycle in production-critical environments.\n\nMost recently, I served as a Software Engineer III at JPMorgan Chase & Co., where I contributed to the modernization of large-scale legacy platforms into distributed, microservices-based architectures. My work focused on building resilient backend services, RESTful APIs, and event-driven systems while collaborating closely with cross-functional teams to deliver secure, scalable solutions used at enterprise scale.\n\nMy technical expertise includes C#, ASP.NET, .NET Core, microservices architecture, Kafka, Redis, REST API development, and relational database design using SQL and MySQL. I am passionate about writing clean, maintainable code, improving system reliability, and continuously evolving my skills to align with modern backend and cloud-native engineering practices.",
 resume:
    "https://drive.google.com/file/d/11QvbAgFZZxsXexaX46TnA-OeMz7mfEDl/view?usp=sharing",
};

// ===============================
// PROJECTS SECTION
// ===============================
// PROJECTS SECTION
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "CompG33k",

  // Total number of projects shown
  reposLength: 8,

  // These appear FIRST, in this exact order
  specificRepos: [
    "Auto-Anton-App",
    "Auto-Open-Nick",
    "ApiNetCoreWebApi",
    "NickJoeVelasco",
  ],
};


// ===============================
// LEADERSHIP SECTION
// ===============================
const leadership = {
  show: true,
  heading: "Leadership",
  message:
    "Leadership through ownership, mentorship, and technical excellence.",
 images: [
  {
    img: require("../editable-stuff/NickVelascoMotorcycle.png"),
    label: "Discipline & Focus",
    paragraph:
      "Motorcycling demands precision, preparation, and accountability—the same principles I apply when designing and maintaining reliable software systems.",
  },
  {
    img: require("../editable-stuff/pizza.JPG"),
    label: "Team Culture",
    paragraph:
      "I value collaboration and team culture, believing that strong relationships and shared moments help teams perform at their best.",
  },
  {
    img: require("../editable-stuff/NickHiking.JPG"),
    label: "Perspective & Problem Solving",
    paragraph:
      "Spending time outdoors helps me maintain balance, clarity, and perspective—qualities that support thoughtful decision-making and effective problem solving.",
  },
],

  imageSize: {
    width: "415",
    height: "450",
  },
};

// ===============================
// SKILLS SECTION
// ===============================
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "C# / .NET / ASP.NET Core", value: 90 },
    { name: "SQL / Database Design", value: 90 },
    { name: "Kafka / Redis", value: 75 },
    { name: "Microservices / REST APIs / WPF", value: 90 },
  ],
  // ✅ prevent SkillsTab.slice crash
   softSkills: [
//     { name: "Ownership", value: 90 },
//     { name: "Collaboration", value: 90 },
//     { name: "Problem Solving", value: 90 },
//     { name: "Mentorship", value: 80 },
   ],
};


// ===============================
// GET IN TOUCH SECTION
// ===============================
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
"I'm open to Lead and Senior Software Engineering opportunities, including full-time, contract, consulting, and temporary roles. If you’re hiring for remote or hybrid positions, have questions, or would like to connect, feel free to reach out at",
  email: "nvelasco.joe@gmail.com",
};

// ===============================
// TIME HELPERS (FIXED & ACCURATE)
// ===============================
function diffYearsMonths(startDate, endDate = new Date()) {
  const s = new Date(startDate);
  const e = new Date(endDate);

  let years = e.getFullYear() - s.getFullYear();
  let months = e.getMonth() - s.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  if (e.getDate() < s.getDate()) {
    months -= 1;
    if (months < 0) {
      years -= 1;
      months += 12;
    }
  }

  return { years, months };
}

function formatYearsMonths({ years, months }) {
  if (years <= 0) return `${months} mos`;
  if (months <= 0) return `${years} yrs`;
  return `${years} yrs ${months} mos`;
}

// ===============================
// EXPERIENCE SECTION
// ===============================
const jpmDuration = formatYearsMonths(
  diffYearsMonths("2020-11-01", "2024-03-01")
);

const experiences = {
  show: true,
  heading: "Experience",
  data: [
    {
      role: "Software Engineer III (AKA Senior Associate)",
      company: "JPMorgan Chase & Co.",
      companylogo: require("../assets/img/JpMorganNChase.png"),
      date: `Nov. 2020 - Mar. 2024 (${jpmDuration})`,
    },
    {
      role: "Full Stack Software Engineer (Lead)",
      company: "Resillion (formerly Eurofins Digital Media Services)",
      companylogo: require("../assets/img/Resillion.png"),
      date: "Sep. 2017 – Apr. 2019 (1 yr 8 mos)",
    },
    {
      role: "Full Stack .NET Developer",
      company: "Kretek International Inc.",
      companylogo: require("../assets/img/KretekInternational.png"),
      date: "Dec. 2011 – May. 2017 (5 yr 6 mos)",
    },
    {
      role: "Game Programmer",
      company: "Robotic Arm Software",
      companylogo: require("../assets/img/RoboticArmSoftware.png"),
      date: "Aug. 2011 – Oct. 2011 (3 mos Contract)",
    },
  ],
};

// ===============================
// RESUME SECTION (Overlay Viewer)
// ===============================
const resumeSection = {
  show: true,
  heading: "Resume",
  // PDF direct link is best (not Google Drive preview page)
  // We'll generate it from your fileId in the component too.
  fileId: "11QvbAgFZZxsXexaX46TnA-OeMz7mfEDl",
};

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
  resumeSection,
};
