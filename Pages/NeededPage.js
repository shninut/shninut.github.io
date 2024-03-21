function NeededPage( root, group, html){
  
    //title
    const title = document.createElement('h1');
    title.innerText = group.name + " - דרושים";
    root.appendChild(title);

    // text
    const element = document.createElement('p');
    element.innerHTML = html;
    root.appendChild(element);

    // title and description
    document.title = "אנימה פלוס | " + group.name +" - דרושים";
    document.getElementById('metaDes').setAttribute("content","אנימה פלוס - " + group.name + " - דרושים - " + element.innerText );
  
}
export default NeededPage;