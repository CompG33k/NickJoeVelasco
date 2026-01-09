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
    "Senior Software Engineer | C# / .NET | Backend & API Specialist | Enterprise Systems",
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
    "I am Nick Joe Velasco, a Senior Software Engineer with a B.S. in Computer Science from California State University, Long Beach, and over a decade of hands-on experience in designing and building modern, scalable applications.\n\nMost recently, I served as a Software Engineer III at JPMorgan Chase & Co., where I contributed to the transformation of large-scale legacy systems into a distributed, microservices-driven architecture. In this role, I worked across the full development lifecycle and partnered closely with cross-functional teams to deliver performant, reliable solutions at enterprise scale.\n\nMy technical strengths include ASP.NET, .NET Core, C#, microservices, Kafka, Redis, RESTful API development, and SQL/MySQL database design. I am passionate about building clean, maintainable systems and continuously enhancing my skills to stay aligned with modern engineering practices.",
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
      label: "Passion for Motorcycles",
      paragraph: "Engineering discipline applies on and off the road.",
    },
    {
      img: require("../editable-stuff/pizza.JPG"),
      label: "I Love Pizza",
      paragraph: "Because great engineering requires fuel.",
    },
    {
      img: require("../editable-stuff/NickHiking.JPG"),
      label: "Outdoors",
      paragraph: "Balance, perspective, and problem solving.",
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
    "I'm always open to Lead/Senior Software Engineering opportunities. If you know of any roles (remote or hybrid), have questions, or just want to connect, feel free to email me at",
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
// EXPORTS
// ===============================
export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
};
