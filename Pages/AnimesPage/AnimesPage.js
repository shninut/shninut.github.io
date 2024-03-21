import createCards from "./createCards.js";

//db
import { animes } from "../../data.js";

function AnimesPage(root,group){
    // title and description
    document.title = "אנימה פלוס | " + group.name + " - פרוייקטים";


    const finished = animes.filter((o) => o.statusProject === 3);
    const active = animes.filter((o) => o.statusProject === 2);
    const future = animes.filter((o) => o.statusProject === 1);
    
    const activeDiv = document.createElement('div');
    activeDiv.className = "activeDiv"
    root.appendChild(activeDiv);
        const activeTitle = document.createElement('h1');
        activeTitle.className = "activeTitle";
        activeTitle.innerText = "פעילים";
        activeDiv.appendChild(activeTitle);


    const finishedDiv = document.createElement('div');
    finishedDiv.className = "finishedDiv"
    root.appendChild(finishedDiv);
        const finishTitle = document.createElement('h1');
        finishTitle.className = "finishTitle";
        finishTitle.innerText = "גמורים";
        finishedDiv.appendChild(finishTitle);


    const futureDiv = document.createElement('div');
    futureDiv.className = "futureDiv"
    root.appendChild(futureDiv);
        const futureTitle = document.createElement('h1');
        futureTitle.className = "futureTitle";
        futureTitle.innerText = "מתוכננים";
        futureDiv.appendChild(futureTitle);


    createCards(activeDiv,active);
    createCards(finishedDiv,finished);
    createCards(futureDiv,future);

}
export default AnimesPage;