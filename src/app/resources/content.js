import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Alim",
  lastName: "Arief",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.png",
  email: "alimarief97@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/alimarf",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/alimarief/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.png",
  label: "Home",
  title: `Journey – ${person.name}`,
  description: `Portfolio website showcasing my work as a software engineer`,
  headline: <>Turning complex problems into elegant software solutions</>,
  // featured: {
  //   display: false,
  //   title: <>Latest project: <strong className="ml-4">IntelliOps Platform</strong></>,
  //   href: "/work/intelliops-platform",
  // },
  subline: (
    <>
      I'm a software engineer specializing in building reliable, scalable, and
      user-focused applications.
      <br /> I design and develop systems that align technical precision with
      real-world usability.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
       Software Engineer with 5+ years of experience building and delivering production-grade applications across mobile, web, and backend systems. Strong background in Flutter mobile development, complemented by full-stack experience using React, Next.js, and Node.js–based backends. Experienced in designing scalable architectures, integrating REST APIs, working with IoT and smart devices, and collaborating directly with international clients and cross-functional teams. Proven ability to translate business requirements into reliable, maintainable, and user-centric software solutions.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "SEI ASIA, Malaysia",
        timeframe: "Nov 2025 - Dec 2025",
        role: "Mobile Developer",
        achievements: [
          <>Developed Flutter mobile applications integrating with smart watches and IoT devices</>,
          <>Implemented communication between mobile apps and smart devices such as smart doors and smart medicine dispensers</>,
          <>Built real-time device monitoring and control features</>,
          <>Collaborated with international clients and cross-functional teams to deliver high-quality software solutions</>,
          <>Translated client requirements into technical solutions in collaboration with backend and hardware teams</>,
          <>Ensured application stability, performance, and secure device interaction</>,
        ],
        images: [],
      },
      {
        company: "NVP, Indonesia",
        timeframe: "Sep 2025 - Nov 2025",
        role: "Mobile Developer",
        achievements: [
          <>Product: Songcry (Music Social Platform) - A mobile application combining social media engagement (TikTok-style feed) with music discovery and hosting (Spotify-inspired experience)</>,
          <>Contributed to the development of Songcry, a music-focused social platform connecting artists and fans</>,
          <>Built key Flutter UI screens including artist profiles, fan profiles, rankings, badges, and music feeds</>,
          <>Implemented dynamic content feeds, filtering, and user interaction features</>,
          <>Worked closely with designers and backend engineers to deliver a polished, production-ready experience</>,
          <>Focused on performance optimization and smooth animations for media-heavy screens</>,
          <>Collaborated in an agile team environment to iterate quickly on product features</>,
        ],
        images: [],
      },
      {
        company: "FeedbackASAP, Australia",
        timeframe: "May 2024 - Sept 2025",
        role: "Mobile Developer",
        achievements: [
          <>Developed and delivered a Flutter mobile application from initial concept to production release</>,
          <>Implemented Clean Architecture and modular code structure to improve scalability and maintainability</>,
          <>Integrated Firebase services including Push Notifications, Crashlytics, and Analytics</>,
          <>Collaborated with an international cross-functional team using Agile methodologies</>,
          <>Delivered a user-friendly interface that improved customer feedback collection efficiency</>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Roketin, Indonesia",
        timeframe: "Oct 2022 - Dec 2023",
        role: "Mobile Developer",
        achievements: [
          <>Built 2 complete Flutter mobile applications from scratch in collaboration with the development team</>,
          <>Maintained and enhanced 2 existing mobile applications, improving performance and stability</>,
          <>Implemented responsive UI and optimized app performance across multiple devices</>,
          <>Managed the full development lifecycle including testing, deployment, and post-launch support</>,

        ],
        images: [],
      },
      {
        company: "PT Digimatika, Indonesia",
        timeframe: "Oct 2021 - Aug 2022",
        role: "Mobile Developer",
        achievements: [
          <>Developed Dashboard AM/PM mobile applications for Telkom, serving thousands of enterprise users</>,
          <>Built a maintenance application for Pertamina Power to improve operational efficiency</>,
          <>Implemented real-time data visualization and reporting features</>,
          <>Collaborated closely with backend, QA, and product teams to deliver enterprise-level solutions</>
        ],
        images: [],
      },
      {
        company: "Illiyin Studio, Indonesia",
        timeframe: "Mar 2021 - Sep 2021",
        role: "Mobile Developer",
        achievements: [
        <>Developed and maintained the Siginjai Masyarakat community mobile application</>,
        <>Implemented user engagement features and optimized application performance</>,
        <>Ensured application stability and resolved production issues in a timely manner</>,
      ],
        images: [],
      },
      {
        company: "Pind.ai, Indonesia",
        timeframe: "Oct 2019 - Oct 2020",
        role: "Software Engineer",
        achievements: [
          <>Developed Oree.id business management system to streamline internal business operations</>,
          <>Built Ngolshop.com e-commerce platform with end-to-end shopping functionality</>,
          <>Created a web builder system enabling non-technical users to build online stores</>,
          <>Developed Table Menu API for restaurant management systems</>,
          <>Worked with modern web technologies and optimized backend performance</>
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University Bhinneka Nusantara",
        description: (
          <>
            Focused on computer science fundamentals and practical software
            engineering, including system design, algorithms, and software
            development lifecycle.
          </>
        ),
      },
      {
        name: "PetaniWeb",
        description: (
          <>
            Hands-on experience building and deploying real-world applications,
            with an emphasis on practical implementation, scalability, and
            production readiness.
          </>
        ),
      },
    ],
  },
  // technical: {
  //   display: true, // set to false to hide this section
  //   title: "Technical skills",
  //   skills: [
  //     {
  //       title: "Flutter",
  //       description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
  //       // optional: leave the array empty if you don't want to display images
  //       // images: [
  //       //   {
  //       //     src: "/images/projects/project-01/cover-02.jpg",
  //       //     alt: "Project image",
  //       //     width: 16,
  //       //     height: 9,
  //       //   },
  //       //   {
  //       //     src: "/images/projects/project-01/cover-03.jpg",
  //       //     alt: "Project image",
  //       //     width: 16,
  //       //     height: 9,
  //       //   },
  //       // ],
  //     },
  //     {
  //       title: "Next.js",
  //       description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
  //       // optional: leave the array empty if you don't want to display images
  //       images: [
  //         {
  //           src: "/images/projects/project-01/cover-04.jpg",
  //           alt: "Project image",
  //           width: 16,
  //           height: 9,
  //         },
  //       ],
  //     },
  //   ],
  // },

  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Mobile Development",
        description: (
          <>
            Experienced in Flutter development with expertise in Clean Architecture, MVVM, and MVC patterns.
            Building cross-platform mobile applications with scalable architecture and maintainable code structure.
          </>
        ),
      },
      {
        title: "Frontend Development",
        description: (
          <>
            Proficient in React.js, Next.js, and Vite for building modern web applications. Skilled in JavaScript,
            TypeScript, HTML5, CSS3, and Tailwind CSS to create responsive and interactive user interfaces.
          </>
        ),
      },
      {
        title: "Backend & APIs",
        description: (
          <>
            Developing RESTful APIs and backend services using Express.js, Nest.js, and Django. Focused on
            building scalable, performant, and secure server-side applications with proper architecture patterns.
          </>
        ),
      },
      {
        title: "State Management",
        description: (
          <>
            Experienced with various state management solutions including Flutter Bloc, Cubit, GetX, Provider, Riverpod for mobile
            and TanStack Query, Redux Toolkit (RTK), Zustand for web applications. Choosing the right tool
            for optimal performance and developer experience.
          </>
        ),
      },
      {
        title: "Cloud & Services",
        description: (
          <>
            Integrated Firebase services (Push Notifications, Remote Config, Firestore, App Distribution,
            Crashlytics, Analytics), Supabase, WebEngage, and Sanity CMS. Leveraging cloud services for
            scalable infrastructure and enhanced application capabilities.
          </>
        ),
      },
      {
        title: "Tools & Collaboration",
        description: (
          <>
            Proficient with Git for version control, Figma for design collaboration, and Jira with Confluence
            for project management and team collaboration. Experienced in agile methodologies and cross-functional teamwork.
          </>
        ),
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
