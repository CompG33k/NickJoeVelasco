// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Nick",
  middleName: "Joe",
  lastName: "Velasco",
  message: " Passionate about changing the world with technology!! P.S. Pizza and Motorcycles also cool!!",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/CompG33k",
    }
    // ,
    // {
    //   image: "fa-facebook",
    //   url: "https://www.facebook.com/nick.velasco/",
    // }
    // ,
    // {
    //   image: "fa-instagram",
    //   url: "https://www.instagram.com/hashirshoaeb/",
    // }
    ,
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/nickvelasco/",
    }
    // ,
    // {
    //   image: "fa-twitter",
    //   url: "https://www.twitter.com/hashirshoaeb/",
    // },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/NickJoeVelasco.png"),
  imageSize: 365,
  // imageSize: {
  //   width:"615",
  //   height:"450"
  // },
  message:
  "I am Nick Joe Velasco, a Senior Software Engineer with a B.S. in Computer Science from California State University, Long Beach, and over a decade of hands-on experience in designing and building modern, scalable applications.\n\nMost recently, I served as a Software Engineer III at JPMorgan Chase & Co., where I contributed to the transformation of large-scale legacy systems into a distributed, microservices-driven architecture. In this role, I worked across the full development lifecycle and partnered closely with cross-functional teams to deliver performant, reliable solutions at enterprise scale.\n\nMy technical strengths include ASP.NET, .NET Core, C#, microservices, Kafka, Redis, RESTful API development, and SQL/MySQL database design. I am passionate about building clean, maintainable systems and continuously enhancing my skills to stay aligned with modern engineering practices.",
  //"I am Nick Joe Velasco, a Senior Software Engineer with a B.S. degree in Computer Science from California State University, Long Beach. With over 10 years of professional application development experience, I have gained expertise in building scalable and robust applications.	Latest role as a Software Engineer III at JPMorgan Chase & Co. where I continuously challenge and enhance my skills as we migrated a monolithic environment to a microservice based architecture. My areas of proficiency include the Asp.Net, Core, .NET framework, C#, Kafka, Redis, microservices, WebAPI, SQL/MySql design, and development.",
  //resume:"https://drive.google.com/file/d/1oqInMcg5t03uuSACrUKZsX8YpdK49vAD/view?usp=sharing"
  resume:"https://drive.google.com/file/d/11QvbAgFZZxsXexaX46TnA-OeMz7mfEDl/view?usp=sharing"
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "CompG33k", //i.e."johnDoe12Gh"
  reposLength: 12,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/NickVelascoMotorcycle.png"), 
      label: "Passion for Motorcycles!!", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/pizza.JPG"), 
      label: "I LOVE PIZZA!!", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/NickHiking.JPG"), 
      label: "Outdoors", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"415",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Microsoft .NET /.NET Core framework /C#", value: 90 },
    { name: "SQL /oracle", value: 90 },
    { name: "Kafka /Redis", value: 75 },
    { name: "Microservices /WebApi /WPF", value: 90 }
   // { name: "Python", value: 20 },
    
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Troubleshooter", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm always looking for next opportunity; Lead/Senior Software Engineering opportunities! If you know of any positions available (preferably remote/consider hybrid), if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "nvelasco.joe@gmail.com",
};
const moment = require('moment');
function getMonths(){
  var startMonth = new Date('11-01-2020').getMonth() + 1;
  var todayMonth = new Date().getMonth() + 1;
  //console.log('todayMonth ' + todayMonth);
  //console.log('startMonth ' + startMonth);
  if( (todayMonth + 1) < 12)
  {
      return todayMonth + 1 ;
  }

  if(startMonth - todayMonth == 0){
    return   startMonth - todayMonth; 
  }
    
  return 1;
}

function getTodayYears(){
  var todayYear = new Date().getFullYear();
  var startDateYear = new Date('11-01-2020').getFullYear();
  //console.log('todayMonth ' + todayMonth);
  console.log('todayYear ' + todayYear);
  console.log('startDateYear ' + startDateYear);
  console.log('CALC  ' + ( (todayYear  - startDateYear)  ) );
  var startMonth = (new Date().getMonth() + 1);
  if( startMonth == 11 || startMonth == 12)
  {
    return todayYear - startDateYear;
  }
  return (todayYear - startDateYear) -1;
  
}
const experiences = {
  show: true,
  heading: "Experience",
  data: [
    {
      role:'Software Engineer III (AkA. Senior Associate)',
      company: 'JPMorgan Chase & Co.',// Here Add Company Name
      companylogo: require('../assets/img/JpMorganNChase.png'),
      date: 'Nov. 2020 - Mar. 2024 (3 yrs 5 mos)'
      //date: 'NOV 2020 – Present ('+ getTodayYears() + ' yrs ' + getMonths() + ' mos)',
    
      // message:     
      //    '( ' + getTodayYears() + ' yrs '+
      //         getMonths() + ' mo )'
    
    },
    {
      role: 'Full Stack Software Engineer (Lead)',
      company: 'Resillion (formerly Eurofins Digital Media Services)',// Here Add Company Name
      companylogo: require('../assets/img/Resillion.png'),
      date: 'Sep. 2017 – Apr 2019 (1 yr 8 mos)',
    },
    {
      role: 'Full Stack .NET Developer',
      company: 'Kretek International Inc.',// Here Add Company Name
      companylogo: require('../assets/img/KretekInternational.png'),
      date: 'Dec. 2011 – May. 2017  (5 yr 6 mos)',
    },
    {
      role: 'Game Programmer',
      company: 'Robotic Arm Software',// Here Add Company Name
      companylogo: require('../assets/img/RoboticArmSoftware.png'),
      date: 'Aug. 2011 – Oct. 2011 (3 mos Contract)',
    },
  ]
}

// Blog SECTION
//  const blog = {
//    show: true,
//  };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
