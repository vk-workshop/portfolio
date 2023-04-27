import project01 from "../../img/projects/01.jpg";
import project02 from "../../img/projects/dino-game.jpg";
import project01Big from "../../img/projects/01-big.jpg";
import { v1 } from "uuid"

export const projectsList = [
    {
        id: v1(),
        title: 'Social Network',
        skills: 'JS, CSS, HTML, Redux, React',
        img: project01,
        gitHubLink: 'https://github.com/anotherShine'
    },
    {
        id: v1(),
        title: 'Memory Game',
        skills: 'JS, CSS, HTML',
        img: project01,
        gitHubLink: 'https://github.com/anotherShine'
    },
    {
        id: v1(),
        title: 'Dino Game',
        skills: 'JS, CSS, HTML',
        img: project02,
        gitHubLink: 'https://github.com/anotherShine'
    },
    {
        id: v1(),
        title: 'Todo List',
        skills: 'JS, CSS, HTML, TypeScript, React',
        img: project01,
        gitHubLink: 'https://github.com/anotherShine'
    },
]

