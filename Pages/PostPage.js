// db
import { posts } from "../data.js";

function PostPage(root, postid,homeUrl){
    // db
    let post = posts.find(o => o.postId == postid);

    // 404
    if(!post){
        window.location.assign(homeUrl)
        return;
    }

    // title and description
    document.title = "אנימה פלוס | " + post.title;

    // box
    const box = document.createElement('div');
    box.className = 'groupSite-postPage';

        // date
        const d = new Date(post.datePublic);
        const timeBox = document.createElement('div');
        timeBox.className = 'time';
        timeBox.innerText = 'פורסם ';
            const time = document.createElement('time');
            time.setAttribute('datetime',post.datePublic);
            const timeText = d.toLocaleString().split(',')[0]; // +' |'+ d.toLocaleString().split(',')[1].split(':').slice(0,2).join(':');
            time.textContent = timeText;
            timeBox.appendChild(time);
        box.appendChild(timeBox);
        
        // title
        const title = document.createElement('h1');
        title.innerText = post.title;
        box.appendChild(title);

        // text
        const text = document.createElement('div');
        text.innerText = post.title;
        text.innerHTML = post.dataText;
        box.appendChild(text);

        
    root.appendChild(box);


    // background image
    const urlImg = "https://aniplus.co.il/userPictures/posts/" + post.postPicture;
    document.getElementById('groupSiteBox').style.backgroundImage = 'url('+urlImg+')';
}
export default PostPage;