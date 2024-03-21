import HomePage from './Pages/HomePage.js';
import get_parameters from './get_parameters.js';
import PostPage from './Pages/PostPage.js';
import AboutPage from './Pages/AboutPage.js';
import AnimesPage from './Pages/AnimesPage/AnimesPage.js';

//db
import { group } from './data.js';
import NeededPage from './Pages/NeededPage.js';
import TeamPage from './Pages/TeamPage.js';

//start url
const homeUrl = `/?page=groupsWebsite&group=${group.group_id}`;

// title and description
document.title = "אנימה פלוס | " + group.name;
document.getElementById('metaDes').setAttribute("content",group.information );

// header title
const groupSiteH1 = document.getElementById("groupSiteH1");
groupSiteH1.textContent = group.name; 
if(group.colorTitle){
    groupSiteH1.style.color = group.colorTitle
}

// header a img
const aImg = document.getElementById("groupSiteLinkImg");
aImg.href = homeUrl;

// header img
const groupSiteImg = document.getElementById('groupSiteImg');
groupSiteImg.src = 'https://aniplus.co.il/userPictures/groupsPictures/cover/' + group.coverPicture;
groupSiteImg.alt = group.name;

//nav
const homeNav = document.getElementById("groupSiteNavHome");
homeNav.href = homeUrl;
const aboutNav = document.getElementById("groupSiteNavAbout");
aboutNav.href = homeUrl + '&post=about';
const projectsNav = document.getElementById("groupSiteNavProjects");
projectsNav.href = homeUrl + '&post=animes';
const neededNav = document.getElementById("groupSiteNavNeeded");
neededNav.href = homeUrl + '&post=needed';
if(!true){neededNav.style.display = "none"};
const teamNav = document.getElementById("groupSiteNavTeam");
teamNav.href = homeUrl + '&post=team';

// links
if(group.websiteLink){
    document.querySelector("#websiteLink > a").href = group.websiteLink;
}else{
    document.querySelector("#websiteLink > a").remove();
}
if(group.discordLink){
    document.querySelector("#discordLink > a").href = group.discordLink;
} else{
    document.querySelector("#discordLink > a").remove();
}




// Main
const mainSite = document.getElementById('groupSiteMain');
const params = get_parameters();

if(params.post === "about"){
    AboutPage(mainSite, group);
} else if(params.post === "animes"){
    AnimesPage(mainSite, group);
} else if((params.post === "needed") && (true)){
    NeededPage(mainSite, group, "<p>דרושים</p>");
} else if(params.post === "team"){
    TeamPage(mainSite, group);
} else if(params.post){
    PostPage(mainSite, params.post, homeUrl);
} else {
    HomePage(mainSite,homeUrl);
}


