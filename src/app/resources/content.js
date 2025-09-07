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
        Results-driven Software Engineer with extensive experience delivering end-to-end mobile and
web applications across diverse industries. Skilled in designing, developing, and maintaining
scalable solutions with a focus on clean architecture, performance optimization, and user-
centric design. Proven ability to collaborate with cross-functional and international teams,
contributing to projects for both startups and enterprise clients. Adept at leveraging modern
technologies to build impactful products that enhance business efficiency and customer
engagement.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "FeedbackASAP, Australia",
        timeframe: "May 2024 - Sep 2025",
        role: "Mobile Developer",
        achievements: [
          <>
            Develop the 'FeedbackASAP' mobile app in Flutter, utilizing
            clean architecture, GetX, advanced logging, and data caching
          </>,
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
        company: "Roketin, Bandung",
        timeframe: "Oct 2022 - Dec 2023",
        role: "Mobile Developer",
        achievements: [
          <>
            Develop 2 apps from scratch with my team & maintenance 2
            apps by myself
          </>,
        ],
        images: [],
      },
      {
        company: "PT Digimatika, Malang",
        timeframe: "Oct 2021 - Aug 2022",
        role: "Mobile Developer",
        achievements: [
          <>
            Develop Dashboard AM/PM apps for telkom & maintenance app
            Power Pertamina
          </>,
        ],
        images: [],
      },
      {
        company: "Illiyin Studio, Malang",
        timeframe: "Mar 2021 - Sep 2021",
        role: "Mobile Developer",
        achievements: [<>Develop & maintaintenance Siginjai Masyarakat app</>],
        images: [],
      },
      {
        company: "Pind.ai - Jakarta",
        timeframe: "Oct 2019 - Oct 2020",
        role: "Software Engineer",
        achievements: [
          <>Develop Oree.id business system</>,
          <>Develop Ngolshop.com</>,
          <>Develop Web Buildr system E-commerce</>,
          <>Develop table Menu API</>,
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
        title: "Flutter",
        description: (
          <>
            Experienced in building cross-platform mobile apps with clean
            architecture and modern state management tools like GetX and Bloc.
          </>
        ),
        // images: [
        //   {
        //     src: "/images/projects/project-01/flutter-app.jpg",
        //     alt: "Flutter app project",
        //     width: 16,
        //     height: 9,
        //   },
        // ],
      },
      {
        title: "Express.js",
        description: (
          <>
            Developing RESTful APIs and backend services using Express.js with a
            focus on scalability, performance, and security best practices.
          </>
        ),
        // images: [
        //   {
        //     src: "/images/projects/project-01/express-api.jpg",
        //     alt: "Express API project",
        //     width: 16,
        //     height: 9,
        //   },
        // ],
      },
      {
        title: "Next.js",
        description: (
          <>
            Building production-ready web applications using Next.js, with
            support for server-side rendering, API routes, and full-stack
            integration.
          </>
        ),
        // images: [
        //   {
        //     src: "/images/projects/project-01/next-app.jpg",
        //     alt: "Next.js web project",
        //     width: 16,
        //     height: 9,
        //   },
        // ],
      },
      {
        title: "React.js",
        description: (
          <>
            Developing interactive, component-based UIs with React.js—leveraging
            modern libraries, hooks, and efficient state management strategies.
          </>
        ),
        // images: [
        //   {
        //     src: "/images/projects/project-01/react-ui.jpg",
        //     alt: "React.js UI project",
        //     width: 16,
        //     height: 9,
        //   },
        // ],
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Flutter",
        description: (
          <>
            Experienced in building cross-platform mobile apps with clean
            architecture and modern state management tools like GetX and Bloc.
          </>
        ),
        // images: [
        //   {
        //     src: "/images/projects/project-01/flutter-app.jpg",
        //     alt: "Flutter app project",
        //     width: 16,
        //     height: 9,
        //   },
        // ],
      },
      {
        title: "Express.js",
        description: (
          <>
            Developing RESTful APIs and backend services using Express.js with a
            focus on scalability, performance, and security best practices.
          </>
        ),
        // images: [
        //   {
        //     src: "/images/projects/project-01/express-api.jpg",
        //     alt: "Express API project",
        //     width: 16,
        //     height: 9,
        //   },
        // ],
      },
      {
        title: "Next.js",
        description: (
          <>
            Building production-ready web applications using Next.js, with
            support for server-side rendering, API routes, and full-stack
            integration.
          </>
        ),
        // images: [
        //   {
        //     src: "/images/projects/project-01/next-app.jpg",
        //     alt: "Next.js web project",
        //     width: 16,
        //     height: 9,
        //   },
        // ],
      },
      {
        title: "React.js",
        description: (
          <>
            Developing interactive, component-based UIs with React.js—leveraging
            modern libraries, hooks, and efficient state management strategies.
          </>
        ),
        // images: [
        //   {
        //     src: "/images/projects/project-01/react-ui.jpg",
        //     alt: "React.js UI project",
        //     width: 16,
        //     height: 9,
        //   },
        // ],
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
