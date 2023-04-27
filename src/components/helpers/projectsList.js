
import project02 from "../../img/projects/dino-game.jpg";
import project03 from "../../img/projects/todo-list.png";
import project04 from "../../img/projects/social-network.png";
import project05 from "../../img/projects/memory-game.png";
import { v1 } from "uuid"

export const projectsList = [
    {
        id: v1(),
        title: 'Social Network',
        skills: 'JS, CSS, HTML, Redux, React',
        img: project04,
        gitHubLink: 'https://github.com/anotherShine'
    },
    {
        id: v1(),
        title: 'Memory Game',
        skills: 'JS, CSS, HTML',
        img: project05,
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
        img: project03,
        gitHubLink: 'https://github.com/anotherShine'
    },
]

