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
    "I'm a graduate programmer looking for work. I've worked with various languages before - these projects showcase the things I've built with them.",
  skills: ["C++", "C#", "Python", "Java", "PHP", "JavaScript","React","NodeJS","Unreal","WPF",".NET"],
  projects: [
    {
      name: "WPF Character sheet",
      description:
        "A responsive character sheet for a tabletop roleplaying game (Call Of Cthulhu) created using Windows Presentation Format (WPF)",
      link: "https://github.com/AlfieWaddington/CthulhuCharacterSheet",
      skills: ["C#", "WPF", "XAML", ".NET"],
	  imagePath: "/src/assets/WPFCoCScreenCap.png",
	  altText: "A screenshot of a CallOfCthulhu character sheet",
    },
    {
      name: "Space Rocks 3D",
      description:
        "A simple 3D game built in Unreal Engine with C++.",
      link: "https://github.com/AlfieWaddington/SpaceRocks3D_AW",
      skills: ["C++", "Pointers", "Unreal Engine 5", ],
	  imagePath: "/src/assets/SpaceRocks3D.png",
	  altText: "A screenshot of a spaceship shooting at rocks in space",
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
	{
      name: "CaveRunner 2D",
      description:
        "A simple 2D game built using my university's in-house game engine 'Hornet'. Due to in-house engine and use on future university modules, repo is private.",
      link: "https://github.com/AlfieWaddington/CaveRunner-Hornet",
      skills: ["C++", "Pointers", "Defensive Programming", "Data Structures"],
	  imagePath: "/src/assets/CaveRunner.png",
	  altText: "Screenshot of a 2D cave-exploring game",
    },
	{
		name: "CHI API",
		description:
		"A RESTful API built to retrieve data from the CHI 2023 conference database. Due to use on future university modules, repo is private.",
		link: "https://github.com/AlfieWaddington/CHI2023RESTfulAPI",
		skills: ["PHP", "SQL", "REST"],
		imagePath: "/src/assets/RESTfulAPI.png",
		altText: "Screenshot of documentation for an API",
	},
	{
		name: "Heart-Responsive Virtual Environment",
		description:
		"A digital environment built in Unreal Engine which responds to data from a heartrate monitor device (Developed as a University group project). Due to privacy of client developed for, repo is private.",
		link: "https://github.com/DuckMeMz/ExpansionOfHeartRateSim",
		skills: ["Unreal Engine 5", "TCP","Real-time Data"],
		imagePath: "/src/assets/HeartResponsive.png",
		altText: "Screenshot of a virtual island",
	},
  ],
};
