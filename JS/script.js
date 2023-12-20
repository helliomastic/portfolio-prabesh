var typed = new Typed(".typing",{
    strings:["Web Designer.....","Graphic Designer.....","Web Developer.....","Video Editor....."],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
var typed = new Typed(".texting",{
    strings:["Bachelor in Computer Science.....","Skilled With Different Programming Languages.....","My Eduction & Experiences....."],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
var typed = new Typed(".animation",{
    strings:["I am thrilled to showcase my recent web design and graphic design project, This project seamlessly integrates my passion for creativity and technical proficiency to deliver a visually stunning and functional website.  Through meticulous design decisions, I aimed to convey the essence and values of the brand or concept behind the project."],
    typeSpeed:20,
    BackSpeed:10,
    loop:true
})

// Aside
const nav = document.querySelector(".nav"),
navList = nav.querySelectorAll("li"),
totalNavList = navList.length,
allSection = document.querySelectorAll(".section"),
totalSection = allSection.length;
for(let i=0; i<totalNavList; i++)   
{
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function()
    {
        for(let j=0; j<totalNavList; j++)
        {
            if(navList[j].querySelector("a").classList.contains("active"))
            {
                console.log("back-section" + navList[j].querySelector("a"))
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        if(window.innerWidth < 1200)
        {
            asideSectionTogglerBtn();
        }
    })
}

function showSection(element)
{
    for(let i=0; i<totalSection; i++)
    {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("herf").split('#')[1];
    document.querySelector("#" + target).classList.add("active")
}
function updateNav(element){
    for(let i=0; i<totalNavList; i++)
    {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
        {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector(".hire-me").addEventListener("click", function()
{
    showSection(this);
    updateNav(this);
})

const navTogglerBtn = document.querySelector(".nav-toggler"),
aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {

    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn()
{
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i=0; i<totalSection; i++){
        allSection[i].classList.toggle("open");
    }
}