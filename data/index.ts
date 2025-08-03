export const navItems = [
	{ name: "About", link: "#about" },
	{ name: "Projects", link: "#projects" },
	{ name: "Experience", link: "#experience" },
	{ name: "Contact", link: "#contact" },
];

export const gridItems = [
	{
		id: 1,
		title: "I'm Aryan Gaikwad, a passionate Full Stack Developer",
		description: "",
		className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[70vh] xl:min-h-[60vh]",
		imgClassName: "w-full h-full",
		titleClassName: "justify-end",
		img: "/assets/b1.png",
		spareImg: "",
	},
	{
		id: 2,
		title: "I'm very flexible with time zone communications",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-2 lg:min-h-72 xl:min-h-60",
		imgClassName: "",
		titleClassName: "justify-start",
		img: "",
		spareImg: "",
	},
	{
		id: 3,
		title: "My tech stack",
		description: "I constantly try to improve",
		className: "lg:col-span-2 md:col-span-3 md:row-span-2 ",
		imgClassName: "",
		titleClassName: "justify-center",
		img: "",
		spareImg: "",
	},
	{
		id: 4,
		title: "Tech enthusiast with a passion for development.",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		imgClassName: "",
		titleClassName: "justify-start",
		img: "/grid.svg",
		spareImg: "/b4.svg",
	},

	{
		id: 5,
		title: "Currently pursuing B.E. in Information Technology with a focus on building scalable web applications and exploring AI technologies.",
		description: "The Inside Scoop",
		className: "md:col-span-3 md:row-span-2",
		imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
		titleClassName: "justify-center md:justify-start lg:justify-center",
		img: "/b5.svg",
		spareImg: "/grid.svg",
	},
	{
		id: 6,
		title: "Do you want to start a project together?",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		imgClassName: "",
		titleClassName: "justify-center md:max-w-full max-w-60 text-center",
		img: "",
		spareImg: "",
	},
];

export const projects = [
	{
		id: 1,
		title: "NutriLens - AI-Powered Nutrition Assistant",
		des: "Developed a fully free web app that analyzes food images to deliver real-time nutritional insights using AI. Integrated Claude via OpenRouter API to offer intelligent meal assessments and promote healthier eating habits.",
		img: "/p1.png",
		iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/ts.svg"],
		link: "/ui.earth.com",
		url: "#",
	},
	{
		id: 2,
		title: "GateLog – Visitor Management System",
		des: "Built a full-stack visitor management system for residential and commercial societies to enhance security and accountability. Designed with role-based access control, real-time resident approvals, and PDF export of visitor logs.",
		img: "/p2.gif",
		iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/ts.svg"],
		link: "/ui.yoom.com",
		url: "#",
	},
];


export const workExperience = [
	{
		id: 1,
		title: "Student Coordinator - Training & Placement Office",
		desc: "Assisted in coordinating campus recruitment drives and student-company interactions. Helped organize workshops and placement-focused events, ensuring smooth execution. Acted as a point of contact to resolve student queries and ensure smooth operations.",
		className: "md:col-span-2",
		thumbnail: "/exp1.svg",
	},
	{
		id: 2,
		title: "Student Volunteer – Quasar 3.0 (National Hackathon)",
		desc: "Ensured smooth execution and real-time troubleshooting during the hackathon. Supported event logistics, participant management, and overall coordination.",
		className: "md:col-span-2",
		thumbnail: "/exp2.svg",
	},
	{
		id: 3,
		title: "Cybersecurity Trainee – ACMEGrade x Mood Indigo (IIT Bombay)",
		desc: "Completed foundational training in cybersecurity, covering ethical hacking, data protection, and threat awareness. Attended live sessions and assessments conducted by ACMEGrade in collaboration with Mood Indigo, IIT Bombay. Successfully completed the certified program, demonstrating core proficiency in cybersecurity fundamentals.",
		className: "md:col-span-2",
		thumbnail: "/exp3.svg",
	},
];

export const socialMedia = [
	{
		id: 1,
		img: "/git.svg",
		url: "https://github.com/Aryangaikwadsql",
	},
	{
		id: 2,
		img: "/link.svg",
		url: "https://linkedin.com/in/aryan-g-3093862ab/",
	},
	{
		id: 3,
		img: "/resumeicon.png",
		url: "https://drive.google.com/file/d/1Nj38AvIgt72Z6xKPlIcRzj9uBEW-Y4dk/view?usp=sharing",
	},
];



//  projects for 3d screen

export const myProject = [
  {
    title: 'NutriLens - AI-Powered Nutrition Assistant',
    desc: 'Developed a fully free web app that analyzes food images to deliver real-time nutritional insights using AI.',
    subdesc:
      'Integrated Claude via OpenRouter API to offer intelligent meal assessments and promote healthier eating habits. Designed for commercial production-grade deployment with clean architecture, modular code, and scalable backend. Integrated Claude (via OpenRouter API), deployed on Vercel, and secured using TypeScript, Axios, and .env configs.',
    href: 'https://nutrilens-update3-t2fh.vercel.app/',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Next.js',
        path: '/assets/nextjs.png',
      },
      {
        id: 2,
        name: 'React',
        path: '/assets/react.svg',
      },
      {
        id: 3,
        name: 'TailwindCSS',
        path: '/assets/tailwindcss.png',
      },
      {
        id: 4,
        name: 'Firebase',
        path: '/assets/firebase.svg',
      },
    ],
  },
  {
    title: 'GateLog – Visitor Management System',
    desc: 'Built a full-stack visitor management system for residential and commercial societies to enhance security and accountability.',
    subdesc:
      'Designed and deployed the MVP with role-based access control, real-time resident approvals, and PDF export of visitor logs. Architected for commercial production-grade deployment on Vercel, featuring scalable authentication, Firestore, and cloud storage.',
    href: 'https://gate-log-visitor-management-system-mu.vercel.app/',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Next.js',
        path: '/assets/nextjs.png',
      },
      {
        id: 2,
        name: 'React',
        path: '/assets/react.svg',
      },
      {
        id: 3,
        name: 'TailwindCSS',
        path: '/assets/tailwindcss.png',
      },
      {
        id: 4,
        name: 'Firebase',
        path: '/assets/firebase.svg',
      },
    ],
  },
];

// Companies I've worked with (none yet)
export const companies = [
  // {
  //   id: 1,
  //   name: "cloudinary",
  //   img: "/cloud.svg",
  //   nameImg: "/cloudName.svg",
  // },
];
