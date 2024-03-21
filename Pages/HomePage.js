// db
import { posts } from "../data.js";


function HomePage(root, homeUrl){

    // Show posts
    posts.forEach((post, index)=>{

        // article
        const article = document.createElement('article');
        if(index === 0){ 
            article.className='groupSite-onePost first';
        } else{
            article.className='groupSite-onePost';
        }
            // div
            const articleDiv = document.createElement('div');
            articleDiv.className= 'groupSite-onePost-div'
            article.appendChild(articleDiv);

                //header
                const header = document.createElement('header');
                articleDiv.appendChild(header);


                    //img link
                    const imgLink = document.createElement('a');
                    imgLink.href = homeUrl + '&post=' + post.postId;
                    header.appendChild(imgLink);
                        // img
                        const imgbox = document.createElement('div');
                        imgbox.className = 'imgBox';
                        imgLink.appendChild(imgbox);
                            const img = document.createElement('img');
                            img.src = 'https://aniplus.co.il/userPictures/posts/'+ post.postPicture;
                            img.alt = post.title;
                            imgbox.appendChild(img);

                    // date
                    const d = new Date(post.datePublic);
                    const timeBox = document.createElement('div');
                    timeBox.className = 'time';
                    timeBox.innerText = 'פורסם ';
                    header.appendChild(timeBox);
                        const time = document.createElement('time');
                        time.setAttribute('datetime',post.datePublic);
                        const timeText = d.toLocaleString().split(',')[0]; // +' |'+ d.toLocaleString().split(',')[1].split(':').slice(0,2).join(':');
                        time.textContent = timeText;
                        timeBox.appendChild(time);      

                    // title
                    const title = document.createElement('h1');
                    title.id = 'titlePost' + post.postId;
                    header.appendChild(title);
                        const titleLink = document.createElement('a');
                        titleLink.href = homeUrl + '&post=' + post.postId;
                        titleLink.innerText = post.title;
                        title.appendChild(titleLink);
                
                // p
                const main = document.createElement('p');
                articleDiv.appendChild(main);
                    
                    // get text for p
                    const tmp = document.createElement('div');
                    tmp.innerHTML = post.dataText;
                    const tmpFor = tmp.querySelectorAll('*');
                    for(let e of tmpFor) {
                        e.insertAdjacentText('beforeend', ' ');
                    }
                    main.innerText = tmp.innerText;
                
                // footer
                const footer = document.createElement('footer');
                articleDiv.appendChild(footer);
                    // button
                    const button = document.createElement('a');
                    button.className = 'button';
                    button.id = 'buttonPost' + post.postId;
                    button.innerText = 'Read More';
                    button.href = homeUrl + '&post=' + post.postId;
                    footer.appendChild(button);
        
        // add post to document
        root.appendChild(article);
    });


    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    // background image
    const urlImg = "https://aniplus.co.il/userPictures/posts/" + posts[getRandomInt(posts.length)].postPicture;
    document.getElementById('groupSiteBox').style.backgroundImage = 'url('+urlImg+')';

}

export default HomePage;