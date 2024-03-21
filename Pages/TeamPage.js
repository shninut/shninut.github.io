function TeamPage( root, group ){
    // title and description
    document.title = "אנימה פלוס | " + group.name +" - צוות";
    document.getElementById('metaDes').setAttribute("content","אנימה פלוס - " + group.name + " - צוות");
  
    //title
    const title = document.createElement('h1');
    title.innerText = group.name + " - צוות";
    root.appendChild(title);

    // text
    const element = document.createElement('p');
    element.innerHTML = "צוות";
    root.appendChild(element);

}
export default TeamPage;