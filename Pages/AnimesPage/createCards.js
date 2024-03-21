//cards
function createCards(root,data){
    data.forEach((event)=>{
        const box = document.createElement('article');
        box.className = 'groupSite-card-box';

        const a = document.createElement('a');
        a.target = "_black"
        a.href = "https://aniplus.co.il/?page=anime&id=" + event.animeId;
        box.appendChild(a);

            const card = document.createElement('div');
            card.className = 'groupSite-card';
            a.appendChild(card);


                const imgbox = document.createElement('div');
                imgbox.className = 'groupSite-card-img-box';
                card.appendChild(imgbox);
                    
                    const img = document.createElement('img');
                    img.src = 'https://aniplus.co.il//Imgs/animePictures/' + event.animeImage;
                    img.alt = event.englishName + ' / ' + event.HebrewName;
                    imgbox.appendChild(img);

                const title = document.createElement('h1');
                title.className = 'groupSite-card-title';
                title.innerText = event.HebrewName;
                card.appendChild(title);

                const enTitle = document.createElement('h1');
                enTitle.className = 'groupSite-card-title en';
                enTitle.innerText = event.englishName;
                card.appendChild(enTitle);

        root.appendChild(box);
    })
}
export default createCards;