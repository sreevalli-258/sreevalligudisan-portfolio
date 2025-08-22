import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Sree Valli Gudisan",
  title: "Hi, I'm SreeValli",
  subTitle: emoji(
    "👋 I’m a Software Engineer specializing in Full-Stack Development and Cloud Computing ☁️. I create sleek frontends and scalable backends, turning ideas into impactful digital solutions 💼. With a strong Computer Science background 🎓 and a passion for problem-solving, I’m always ready to innovate 🚀."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1mjGdHQSXh2DIfrM48iEgDAOwG0Dhi7aC/view?usp=drive_link",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/sreevalli-258",
  linkedin: "https://www.linkedin.com/in/sreevallig258/",
  gmail: "sreevallig86@gmail.com",
  display: true
};

const skillsSection = {
  title: "Expertise",
  subTitle: "FULL STACK DEVELOPER WITH A FOCUS ON MODERN TECHNOLOGIES",
  skills: [
    emoji("⚡ Build interactive user interfaces using React.js, Redux, and Angular."),
    emoji("⚡ Design scalable backend services with Node.js, Python (Flask, Django), and Java (Spring Boot)."),
    emoji("⚡ Leverage cloud platforms like AWS, Azure, and GCP for deployment and scalability ☁️."),
  ],
  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "SQL/NoSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-cubes"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    }
  ],
  display: true
};


const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Alabama at Birmingham (UAB)",
      logo: `${process.env.PUBLIC_URL}/uablogo.png`,
      subHeader: "Master of Science in Electrical and Computer Engineering",
      duration: "August 2022 - May 2024",
      desc: "CGPA: 3.73/4",
    },
    {
      schoolName: "Jawaharlal Nehru Technological University, Hyderabad (JNTUH)",
      logo: `${process.env.PUBLIC_URL}/Jntuhlogo.jpeg`,
      subHeader: "Bachelor of Technology in Electronics and Instrumentation Engineering",
      duration: "August 2017 - May 2021",
      desc: "CGPA: 8.2/10",
    },
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Database",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: true
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineer",
      company: "PremierINC",
      companylogo: `${process.env.PUBLIC_URL}/premierlogo.jpeg`,
      date: "June 2024 - Present",
      desc: "Driving digital healthcare innovation by building scalable full-stack applications with Java, Spring Boot, React, and cloud platforms (Azure/AWS), including GenAI-powered chatbot features to enhance user engagement.",
      
    },
    {
      role: "Software Engineer Intern",
      company: "JP Morgan Chase & Co.",
      companylogo: `${process.env.PUBLIC_URL}/JpMorganLogo.png`,
      date: "April 2023 - Oct 2023",
      desc: "Engineered enterprise-grade banking solutions using Java, Spring Boot, React, and Kafka; strengthened CI/CD pipelines and implemented secure authentication with OAuth2/JWT to improve reliability and compliance."
    },
    {
      role: "Java Developer",
      company: "Mphasis",
      companylogo: `${process.env.PUBLIC_URL}/mphasislogo.png`,
      date: "Aug 2020 - Aug 2022",
      desc: "Developed and optimized backend microservices in Java & Spring Boot, integrated REST APIs, and supported large-scale cloud migrations to AWS, boosting performance and scalability for global clients."
    }
  ]
};

const openSource = {
  showGithubProfile: "false",
  display: false
};

const bigProjects = {
  title: "Major Projects",
  subtitle: "Highlighted Projects that Showcase My Skills and Experience",
  projects: [
    {
      image: `${process.env.PUBLIC_URL}/hgn.jpeg`, // Replace with the actual URL of the project image
      projectName: "Highest Good Network (HGNv2) React App",
      projectDesc: "Led the development of key features in the HGNv2 React App, improving user experience and system stability. Managed CI/CD pipelines, resolved critical bugs, and integrated Sentry.io for enhanced error tracking.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/sreevalli-258/highest-good-network-v2" // Replace with the actual URL of the project
        }
      ]
    },
    {
      image: `${process.env.PUBLIC_URL}/e.jpg`, // Replace with the actual URL of the project image
      projectName: "E-commerce Website",
      projectDesc: "Developed a full-stack e-commerce platform with features like user authentication, product listings, shopping cart, and order management. Integrated payment gateways and ensured a responsive design for an optimal user experience across devices.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/sreevalli-258/ecommerce-platform" 
        }
      ]
    }
  ],
  display: true
};


const achievementSection = {
  title: emoji(""),
  subtitle: "",
  achievementsCards: [
    {
      title: "",
      subtitle:
        "",
      image: "",
      imageAlt: "",
      footerLink: [
        {
          name: "",
          url: ""
        },
        {
          name: "",
          url: ""
        },
        {
          name: "",
          url: ""
        }
      ]
    },
    {
      title: "",
      subtitle:
        "",
      image: "",
      imageAlt: "",
      footerLink: [
        {
          name: "",
          url: ""
        }
      ]
    },
    {
      title: "",
      subtitle: "",
      image: "",
      imageAlt: "",
      footerLink: [
        { name: "", url: "" },
        {
          name: "",
          url: ""
        }
      ]
    }
  ],
  display: false
};

const blogSection = {
  title: "Blogs",
  subtitle:
    "",
  displayMediumBlogs: "false",
  blogs: [
    {
      url: "",
      title: "",
      description:
        ""
    },
    {
      url: "",
      title: "",
      description:
        ""
    }
  ],
  display: false
};

const talkSection = {
  title: "",
  subtitle: emoji(
    ""
  ),
  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  podcast: [
    ""
  ],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "If you need to get in touch, you can contact me here.",
  email_address: "sreevallig86@gmail.com"
};

const twitterDetails = {
  userName: "twitter",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
