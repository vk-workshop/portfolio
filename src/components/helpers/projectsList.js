
import project02 from "../../img/projects/dino-game.jpg";
import project021 from "../../img/projects/dino-game-Big.jpg";
import project03 from "../../img/projects/todo-list.png";
import project031 from "../../img/projects/todo-list-Big.png";
import project04 from "../../img/projects/social-network.png";
import project041 from "../../img/projects/social-network-Big.png";
import project05 from "../../img/projects/memory-game.png";
import project051 from "../../img/projects/memory-game-Big.png";
import { v1 } from "uuid"

export const projectsList = [
    {
        id: v1(),
        title: 'Social Network',
        skills: 'JS, CSS, HTML, Redux, React, Axios',
        img: project04,
        imgBig: project041,
        gitHubLink: 'https://volodymyrkolisnichenko.github.io/social-network/'
    },
    {
        id: v1(),
        title: 'Memory Game',
        skills: 'JS, CSS, HTML',
        img: project05,
        imgBig: project051,
        gitHubLink: 'https://github.com/anotherShine'
    },
    {
        id: v1(),
        title: 'Dino Game',
        skills: 'JS, CSS, HTML',
        img: project02,
        imgBig: project021,
        gitHubLink: 'https://volodymyrkolisnichenko.github.io/game-dino/'
    },
    {
        id: v1(),
        title: 'Todo List',
        skills: 'JS, CSS, HTML, TypeScript, React, MUI',
        img: project03,
        imgBig: project031,
        gitHubLink: 'https://github.com/anotherShine'
    },
]

