function AboutPage( root, group ){
    // title and description
    document.title = "אנימה פלוס | " + group.name +" - אודות";
    document.getElementById('metaDes').setAttribute("content","אנימה פלוס - " + group.name + " - " + group.information );
    
    //title
    const title = document.createElement('h1');
    title.innerText = group.name + " - אודות";
    root.appendChild(title);

    // text
    const element = document.createElement('p');
    element.innerHTML = group.information;
    root.appendChild(element);
}
export default AboutPage;