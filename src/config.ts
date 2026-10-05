export const siteConfig = {
  name: "Alfie Waddington",
  title: "",
  description: "Showcase of my work and the skills I developed",
  accentColor: "#1d4ed8",
  social: {
    email: "alfiework0212@outlook.com",
    linkedin: "",
    github: "https://github.com/AlfieWaddington",
  },
  aboutMe:
    "Wondering if I really need an aboutMe section in this page...",
  skills: ["Javascript", "React", "Node.js", "Python", "C#", "C++"],
  projects: [
    {
      name: "Windows WPF Character sheet",
      description:
        "A responsive character sheet for a tabletop roleplaying game (Call Of Cthulhu) created using Windows Presentation Format (WPF)",
      link: "https://github.com/AlfieWaddington/CthulhuCharacterSheet",
      skills: ["C#", "WPF", "XAML", ".NET"],
	  imagePath: "/src/assets/WPFCoCScreenCap.png",
	  altText: "A screenshot of a CallOfCthulhu character sheet",
    },
    {
      name: "",
      description:
        "",
      link: "https://fullstackextensions.com/?ref=devportfolio",
      skills: ["", ""],
	  imagePath: "",
	  altText: "",
    },
    {
      name: "Research Recruitment Prototype",
      description:
        "Prototype of a web page for a research participant recruitment platform (Developed as a University group project)",
      link: "https://github.com/AlfieWaddington/DHA2-Research-Recruitment-Prototype",
      skills: ["React", "Node.js", "Tailwind", "TypeScript"],
	  imagePath: "/src/assets/ResearchRecruitment.png",
	  altText: "Screenshot of a website layout designed for user engagement",
    },
  ],
  education: [
    {
      school: "University Name",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2014 - 2018",
      achievements: [
        "Graduated Magna Cum Laude with 3.8 GPA",
        "Dean's List all semesters",
        "President of Computer Science Club",
      ],
    },
    {
      school: "Online Platform",
      degree: "Full Stack Development Certificate",
      dateRange: "2019",
      achievements: [
        "Completed 500+ hours of coursework",
        "Built 10+ portfolio projects",
        "Specialized in React and Node.js",
      ],
    },
  ],
};
