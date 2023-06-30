
import project01 from "../../img/projects/iphone.png";
import project011 from "../../img/projects/ihone-small.jpg";
import project02 from "../../img/projects/dino-game.jpg";
import project021 from "../../img/projects/dino-game-Big.jpg";
import project03 from "../../img/projects/todo-list.jpg";
import project031 from "../../img/projects/todo-list-Big.png";
import project04 from "../../img/projects/social-network.jpg";
import project041 from "../../img/projects/social-network-Big.png";
import project6 from "../../img/projects/summarize-openAI.jpg";
import project61 from "../../img/projects/summarize-openAI-big.png";
import { v1 } from "uuid"

export const projectsList = [
    {
        id: v1(),
        title: 'iPhone',
        skills: 'JS, CSS, HTML, WebGI, React, Vite, Sketchfab, GSAP',
        link: 'https://volodymyrkolisnichenko.github.io/iphone/',
        img: project011,
        imgBig: project01,
        gitHubLink: 'https://github.com/VolodymyrKolisnichenko/iphone/blob/main/README.md'
    },
    {
        id: v1(),
        title: 'Social Network',
        skills: 'JS, CSS, HTML, Redux, React, Axios',
        link: 'https://volodymyrkolisnichenko.github.io/social-network/',
        img: project04,
        imgBig: project041,
        gitHubLink: 'https://github.com/VolodymyrKolisnichenko/social-network/blob/main/README.md'
    },
    {
        id: v1(),
        title: 'Summarize OpenAI',
        skills: 'JS, CSS, HTML, Vitejs, Tailwindcss, RapidApi, React, React-Redux',
        link: 'https://volodymyrkolisnichenko.github.io/chatgpt4_summarizer_app/',
        img: project6,
        imgBig: project61,
        gitHubLink: 'https://github.com/VolodymyrKolisnichenko/chatgpt4_summarizer_app/blob/main/README.md'
    },
    {
        id: v1(),
        title: 'Dino Game',
        skills: 'JS, CSS, HTML',
        link: 'https://volodymyrkolisnichenko.github.io/game-dino/',
        img: project02,
        imgBig: project021,
        gitHubLink: 'https://github.com/VolodymyrKolisnichenko/game-dino#readme'
    },
    {
        id: v1(),
        title: 'Todo List',
        skills: 'JS, CSS, HTML, TypeScript, React, MUI',
        link: 'https://volodymyrkolisnichenko.github.io/todo-list-2/',
        img: project03,
        imgBig: project031,
        gitHubLink: 'https://github.com/VolodymyrKolisnichenko/todo-list-2#readme'
    },
 
]

