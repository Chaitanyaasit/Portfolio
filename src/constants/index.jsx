import { assetUrl } from "../utils/assets";

export const myProjects = [
  {
    id: 1,
    title: "Travel in Glance",
    description:
      "An advanced Travel Companion App that helps users discover nearby restaurants, hotels, and attractions using real-time location and Google Maps integration.",
    subDescription: [
      "Built and deployed a full-featured Travel Advisor App integrating Google Maps for real-time geolocation, place search, and navigation.",
      "Fetched nearby restaurants, hotels, and attractions from Rapid APIs with dynamic data filtering for personalized recommendations.",
      "Implemented Google Maps API for live map rendering and user positioning, and designed an intuitive React-based UI for a seamless travel experience.",
      "This project highlights expertise in full-stack integration, API management, and frontend optimization, making it one of the most feature-rich travel apps available online."
    ],
    href: "",
    logo: "",
    image: assetUrl("assets/projects/TravelInGlance.png"),
    tags: [
      {
        id: 1,
        name: "TailwindCSS",
        path: assetUrl("assets/logos/tailwindcss.svg"),
      },
      {
        id: 2,
        name: "Javascript",
        path: assetUrl("assets/logos/javascript.svg"),
      },
      {
        id: 3,
        name: "Google API",
        
      },
    ],
  },
  {
    id: 2,
    title: "Modern UI/UX GPT-3",
    description:
      "Built a fully responsive, modern GPT-3-themed website using React and CSS, featuring reusable components, smooth animations, and advanced layout techniques for a clean, futuristic UI/UX experience.",
    subDescription: [
      "Developed a modern, fully responsive GPT-3-inspired website using React.js and CSS with a clean, futuristic design. The project focuses on delivering an exceptional user experience (UX) and pixel-perfect UI, built entirely from scratch while mastering layout, animation, and component structure.",
      "Implemented reusable React functional components, a scalable folder architecture, and advanced CSS styling with Flexbox, Grid, and the BEM convention. Designed smooth animations, gradients, and responsive media queries to ensure the interface adapts flawlessly across all screen sizes.",
      "Developed a React-based frontend with Tailwind CSS for a sleek user experience.",
      "Connected to a secure SQLite database for user data storage.",
    ],
    href: "",
    logo: "",
    image: assetUrl("assets/projects/gpt3.png"),
    tags: [
      {
        id: 1,
        name: "React",
        path: assetUrl("assets/logos/react.svg"),
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: assetUrl("assets/logos/tailwindcss.svg"),
      },
    ],
  },
    {
      id: 3,
      title: "Foodingo",
      description:
        "Built a full-featured Food App with restaurant listings, menus, UAE PASS & Google authentication, and real-time push notifications using React Native and .NET Core APIs.",
      subDescription: [
        "Developed a feature-rich Food App that lists restaurants along with detailed food menus, offering users a smooth and interactive ordering experience. Integrated UAE PASS authentication and Google Sign-In for secure, hassle-free login.",
        "Implemented push notifications for real-time order updates and user engagement. Designed the UI with React Native for a seamless mobile experience, connecting with .NET Core APIs for dynamic data handling and restaurant management.",
       
      ],
      href: "",
      logo: "",
      image: assetUrl("assets/grid.png"),
      tags: [
        {
          id: 1,
          name: "React Native",
          
        },
        {
          id: 2,
          name: ".NET Core",
          path: assetUrl("assets/logos/dotnetcore.svg"),
        },
        {
          id: 3,
          name: "TailwindCSS",
          path: assetUrl("assets/logos/tailwindcss.svg"),
        },
      ],
    },
 
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: assetUrl("assets/socials/whatsApp.svg"),
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ali-sanati/",
    icon: assetUrl("assets/socials/linkedIn.svg"),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ali.sanatidev/reels/",
    icon: assetUrl("assets/socials/instagram.svg"),
  },
];

export const experiences = [
  {
    title: "Frontend Developer",
    job: "ILIPS INFOTECH",
    date: "2023-2024",
    contents: [
      "⚡ Responsive Web Experiences",
      "Delivered high-performance, responsive user interfaces across desktop and mobile using React.js, ensuring seamless navigation and consistent UI across all devices.",
      "🎨 Event Page Optimization",
      "Revamped the Events page using Figma-based design improvements and React layout optimization, resulting in faster load times and increased user engagement.",
      "🛠️ Core Website & Admin Panel Maintenance",
      "Maintained and optimized core features and the React-based admin panel, significantly reducing bug rates and enhancing platform stability for daily operations.",
      "🧠 Agile Collaboration & Delivery",
      "Worked in an Agile environment, contributing to end-to-end project lifecycles — from sprint planning and development to testing and deployment — ensuring timely, high-quality releases.",
    ],
  },
  {
    title: "Junior Software Developer",
    job: "OMA EMIRATES GLOBAL LLC",
    date: "2024-Present",
    contents: [
      "🚀 Sigma",
      "Built a fully responsive React.js UI from scratch, delivering a smooth, user-friendly experience. Integrated APIs seamlessly with the backend, optimized performance, and turned Figma designs into production-ready features. Developed modular, scalable backend APIs within a microservices architecture.",
      
      "🚀 Role-Based Admin Panel",
      "Built a scalable admin panel featuring multi-role authentication and authorization using .NET Core APIs and React.js dashboards. Designed intuitive UI components for seamless role management and secure data access.",
      "🧩 POS Repair Management Module",
      "Developed a Repair Module for Point of Sale(POS) systems integrating RESTful.NET Core APIs with a React.js front - end.Enabled real - time request tracking, improving service turnaround time and visibility for operations teams.",
      "📦 POS Inventory Management Enhancements",
      "Collaborated with cross - functional teams to integrate new inventory features, optimize data synchronization, and ensure reliable data flow across multiple endpoints in the POS management ecosystem.",
      "📱 Mobile App Contributions(React Native + Expo)",
      "Contributed to mobile feature development, implementing push notifications, and enhancing API - driven updates to improve user engagement and system responsiveness on both iOS and Android platforms.",
      

    ],
  },

];
