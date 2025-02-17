import project011 from "../../img/projects/iphone-3.png";
import project01 from "../../img/projects/iphone-2.png";
import project02 from "../../img/projects/dino-1.png";
import project021 from "../../img/projects/dino-2.png";
import project6 from "../../img/projects/sum-1.png";
import project61 from "../../img/projects/sum-4.png";
import project7 from "../../img/projects/e-commerce.jpeg";
import project71 from "../../img/projects/e-commerce-2.jpeg";
import project8 from "../../img/projects/myBike.jpeg";
import project81 from "../../img/projects/myBike-2.jpeg";
import { v1 } from "uuid";

export const projectsList = [
  {
    id: v1(),
    title: "Summarize OpenAI",
    skills: "JS, CSS, HTML, Vite, Tailwind CSS, RapidApi, React, React-Redux",
    link: "https://vk-workshop.github.io/chatgpt4_summarizer_app/",
    img: project6,
    imgBig: project61,
    gitHubLink:
      "https://github.com/vk-workshop/chatgpt4_summarizer_app/blob/main/README.md",
  },
  // {
  //   id: v1(),
  //   title: "Store + Admin Dashboard",
  //   title2: "eCommerce Store",
  //   title3: "Admin Dashboard",
  //   skills: "HTML, CSS, Tailwind CSS, React.js, TypeScript, Next.js, Headless UI, PostCSS",
  //   skills2: "Prisma, Next.js, Stripe, Zustand, Axios, Recharts, Zod, Next Cloudinary, Next Themes",
  //   link: "https://ecommerce-store-seven-pi.vercel.app/", 
  //   link2: "https://ecommerce-admin-phi-seven.vercel.app//",
  //   img: project05,
  //   imgBig: project051,
  //   img2: project052,
  //   gitHubLink:
  //     "https://github.com/vk-workshop/ecommerce-store/blob/master/README.md",
  //   gitHubLink2:
  //     "https://github.com/vk-workshop/ecommerce-admin/blob/main/README.md",
  // },
  {
    id: v1(),
    title: "iPhone",
    skills: "JS, CSS, HTML, WebGI, React, Vite, Sketchfab, GSAP",
    link: "https://vk-workshop.github.io/iphone/",
    img: project011,
    imgBig: project01,
    gitHubLink:
      "https://github.com/vk-workshop/iphone/blob/main/README.md",
  },
  {
    id: v1(),
    title: "Dino Game",
    skills: "JS, CSS, HTML, React",
    link: "https://vk-workshop.github.io/game-dino/",
    img: project02,
    imgBig: project021,
    gitHubLink: "https://github.com/vk-workshop/game-dino#readme",
  },
  {
    id: v1(),
    title: "Device Catalog",
    skills: "JS, TypeScript, Sass(SCSS), HTML5, BEM Methodology, React, Context API, React Router, Figma design",
    link: "https://vk-workshop.github.io/react-device-catalog",
    img: project71,
    imgBig: project7,
    gitHubLink: "https://github.com/vk-workshop/react-device-catalog",
  },
  {
    id: v1(),
    title: "myBike",
    skills: "JS, Sass(SCSS), HTML5, BEM Methodology, Figma design",
    link: "https://vk-workshop.github.io/myBike_landing_page/",
    img: project81,
    imgBig: project8,
    gitHubLink: "https://github.com/vk-workshop/myBike_landing_page",
  },
];
