// ==== SideBar ====
let sideBar = document.querySelector("#sidebar");
// anchore
let btnLink1 = document.querySelector("#link1");
let btnLink2 = document.querySelector("#link2");
let btnLink3 = document.querySelector("#link3");
let btnLink4 = document.querySelector("#link4");
let btnLink5 = document.querySelector("#link5");
// icons
let icon1 = document.querySelector("#icon1");
let icon2 = document.querySelector("#icon2");
let icon3 = document.querySelector("#icon3");
let icon4 = document.querySelector("#icon4");
let icon5 = document.querySelector("#icon5");
let check = true;

// Hamburger
let burg = document.querySelector("#burger");
let logo = document.querySelector(".logo");
let menu = document.querySelector(".menu");

// ==== Pagine ====
let homePage = document.querySelector(".homePage")
let checkBurg = true;


// Richiamo progressBar
let barHTML = document.querySelector(".progress-barHTML");
let prgHTML = document.querySelector(".prgHTML")
let barCSS = document.querySelector(".progress-barCSS");
let prgCSS = document.querySelector(".prgCSS");
let prgTW = document.querySelector(".prgTW");
let barTW = document.querySelector(".progress-barTW");
let barJS = document.querySelector(".progress-barJS");
let prgJS = document.querySelector(".prgJS");
let barPHP = document.querySelector(".progress-barPHP");
let prgPHP = document.querySelector(".prgPHP");
let barLaravel = document.querySelector(".progress-barLaravel");
let prgLaravel = document.querySelector(".prgLaravel");

    
burg.addEventListener("click",()=>{
    if(checkBurg){
        // apertura
        openBurg();
        checkBurg = false;
        
    }else{
        // chiusura
        closeBurg();
        checkBurg=true;
    }
})
// variabile per mediaquery
let query = window.matchMedia("(max-width:576px)");
// funzioni apertura e chiusura hamburger
function openBurg(){
    if(query.matches){
        burg.classList.remove("fa-bars");
        burg.classList.add("fa-x");
        burg.style.transform= "rotate(180deg)";
        sideBar.style.left="-50px";
        burg.style.left="21px";
    }
}
function closeBurg(){
    if(query.matches){
        burg.classList.add("fa-bars");
        burg.classList.remove("fa-x")
        burg.style.transform= "rotate(-180deg)";
        sideBar.style.left="-500px";
        burg.style.left="20px";

    }
}
// Funzione animazione progressBar
function progressAnimating(){
    barHTML.style.webkitAnimationPlayState = "running";
    barCSS.style.webkitAnimationPlayState = "running";
    barJS.style.webkitAnimationPlayState = "running";
    barPHP.style.webkitAnimationPlayState = "running";
    barLaravel.style.webkitAnimationPlayState = "running";
    barTW.style.webkitAnimationPlayState = "running";
    setTimeout(() => {
        createPrg(prgHTML,95,40,5000);
        createPrg(prgCSS,80,40,5000);
        createPrg(prgJS,75,40,5000);
        createPrg(prgPHP,45,40,5000);
        createPrg(prgLaravel,60,40,5000);
        createPrg(prgTW,30,40,5000);

        
        barHTML.style.width="95%";
        barCSS.style.width="80%";
        barJS.style.width="75%";
        barPHP.style.width="45%";
        barLaravel.style.width="60%";
        barTW.style.width="30%";

    }, 1000);
}
// Funzione creazione numeri ProgressBar
function createPrg(element,reach,timer){
    let counter =0;
    setInterval(()=>{
        if(counter<reach){
            counter=counter+1;
            element.innerHTML = counter+"%";
            setTimeout(() => {
                check=false; 
            }, 3000);
        }
        else{
            clearInterval();
        }
    },timer)
}

// Funzione tasto Home
function homeBtn(){
    btnLink1.classList.add("active"); 
    btnLink2.classList.remove("active");
    btnLink3.classList.remove("active");
    btnLink4.classList.remove("active");
    btnLink5.classList.remove("active");
    icon1.classList.add("active");
    icon2.classList.remove("active");
    icon3.classList.remove("active");
    icon4.classList.remove("active");
    icon5.classList.remove("active");
    closeBurg();
    // query.addEventListener(closeBurg);
    checkBurg=true;
}

// FUNZIONE TASTO ABOUT
function aboutBtn(){
    btnLink2.classList.add("active");
    btnLink1.classList.remove("active");
    btnLink3.classList.remove("active");
    btnLink4.classList.remove("active");
    btnLink5.classList.remove("active");
    icon2.classList.add("active");
    icon1.classList.remove("active");
    icon3.classList.remove("active");
    icon4.classList.remove("active");
    icon5.classList.remove("active");
    closeBurg();
    checkBurg=true;

    // let checkPrg =false;

}

// Funzione tasto Service
function servicesBtn(){
    btnLink3.classList.add("active");
    btnLink1.classList.remove("active");
    btnLink2.classList.remove("active");
    btnLink4.classList.remove("active");
    btnLink5.classList.remove("active");
    icon3.classList.add("active");
    icon1.classList.remove("active");
    icon2.classList.remove("active");
    icon4.classList.remove("active");
    icon5.classList.remove("active");
    closeBurg();
    checkBurg=true;
}

// Funzione tasto Portfolio
function portfolioBtn(){
    btnLink4.classList.add("active");
    btnLink1.classList.remove("active");
    btnLink2.classList.remove("active");
    btnLink3.classList.remove("active");
    btnLink5.classList.remove("active");
    icon4.classList.add("active");
    icon1.classList.remove("active");
    icon2.classList.remove("active");
    icon3.classList.remove("active");
    icon5.classList.remove("active");
    closeBurg();
    checkBurg=true;
}

// Funzione Tasto Contatti
function contattiBtn(){
    btnLink5.classList.add("active");
    btnLink1.classList.remove("active");
    btnLink2.classList.remove("active");
    btnLink3.classList.remove("active");
    btnLink4.classList.remove("active");
    icon5.classList.add("active");
    icon1.classList.remove("active");
    icon2.classList.remove("active");
    icon3.classList.remove("active");
    icon4.classList.remove("active");
    closeBurg();
    checkBurg=true;
}

// HOME
btnLink1.addEventListener("click",()=>{
    homeBtn();
})
// About
btnLink2.addEventListener("click",()=>{
    aboutBtn();
})
// Tasto More about Me
let moreAboutBtn = document.querySelector(".moreAbout");
moreAboutBtn.addEventListener("click",()=>{
    aboutBtn();
})

//About ProgressBar Mobile
if(query.matches){
    // variabili progressBar per mobile
    let barHTML = document.querySelector(".progress-barHTML")
    let prgHTML = document.querySelector(".prgHTML")
    let barCSS = document.querySelector(".progress-barCSS");
    let prgCSS = document.querySelector(".prgCSS");
    let barJS = document.querySelector(".progress-barJS");
    let prgJS = document.querySelector(".prgJS");
    let barPHP = document.querySelector(".progress-barPHP");
    let prgPHP = document.querySelector(".prgPHP");
    let barLaravel = document.querySelector(".progress-barLaravel");
    let prgLaravel = document.querySelector(".prgLaravel");

    function createPrg(element,reach,timer){
        let counter =0;
        setInterval(()=>{
            if(counter<reach){
                counter=counter+1;
                element.innerHTML = counter+"%";
                setTimeout(() => {
                    check=false; 
                }, 3000);
            }else{
                clearInterval();
            }
        },timer)
    }
    window.addEventListener("scroll",()=>{
        let scrolledMobile = window.scrollY;
        if(scrolledMobile>1450){
            //Animazione progressBar
            barHTML.style.webkitAnimationPlayState = "running";
            barCSS.style.webkitAnimationPlayState = "running";
            barJS.style.webkitAnimationPlayState = "running";
            barPHP.style.webkitAnimationPlayState = "running";
            barLaravel.style.webkitAnimationPlayState = "running";
            barTW.style.webkitAnimationPlayState = "running";

            sideBar.style.top = "scrolledMobile"
        setTimeout(() => {
            createPrg(prgHTML,95,40, 5000);
            createPrg(prgCSS,80,40, 5000);
            createPrg(prgJS,75,40, 5000);
            createPrg(prgPHP,45,40, 5000);
            createPrg(prgLaravel,60,40, 5000);
            createTW(prgTW,30,40, 5000);

            
            barHTML.style.width="95%";
            barCSS.style.width="80%";
            barJS.style.width="75%";
            barPHP.style.width="45%";
            barLaravel.style.width="60%";
            barTW.style.width="30%";

        }, 1000);  
        }
    })
}

// Services
btnLink3.addEventListener("click",()=>{
    servicesBtn();


})
// Portfolio
btnLink4.addEventListener("click",()=>{
    portfolioBtn();

})
// Contact
btnLink5.addEventListener("click",()=>{
    contattiBtn();
})

// Script typing text
let typed = new Typed(".typing",{
    strings: ["","Web Developer"],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true
})

// scroll Observers x Sidebar

// observe Home Page
let observerHome = new IntersectionObserver((home)=>{
    home.forEach((home)=>{
        if(home.isIntersecting){
            homeBtn();
        }
    })
})
observerHome.observe(obsHome);

// Observer About Page
let observerAbout = new IntersectionObserver((about)=>{
    about.forEach((about)=>{
        if(about.isIntersecting){
            aboutBtn();
            progressAnimating()
        }
    })
})
observerAbout.observe(obsAbout)

// Observer Services Page
let observerServices = new IntersectionObserver((services)=>{
    services.forEach((services)=>{
        if(services.isIntersecting){
            servicesBtn();
        }
    })
})
observerServices.observe(obsServices)

let observerPortfolio = new IntersectionObserver((portfolio)=>{
    portfolio.forEach((port)=>{
        if(port.isIntersecting){
            portfolioBtn();
        }
    })
})
observerPortfolio.observe(obsPortfolio)

let observerContatti = new IntersectionObserver((contatti)=>{
    contatti.forEach((contacts)=>{
        if(contacts.isIntersecting){
            contattiBtn();
        }
    })
})
observerContatti.observe(obsContatti)

// json servizi
fetch("./services.json").then((response)=>response.json()).then((data)=>{
    //richiamo wrapper servizi
    let wrapperServices = document.querySelector("#obsServices");
    //creazione card servizi
    data.forEach((servizio)=>{
        let div = document.createElement("div");
        div.classList.add("cardServices","text-center","mb-3","mx-2")
        div.innerHTML=`
            <div class="iconServices">
                <i class="colorIcon fa-solid ${servizio.icon} fs-1 mt-2"></i>
            </div>
                <p class="fw-bold my-3 fs-3">${servizio.servizio}</p>
                <p>${servizio.descrizione}</p>
        `
        wrapperServices.appendChild(div);
        })
    }
)

// Portfolio
let videos = document.querySelectorAll(".video");
videos.forEach((video)=>{
    video.addEventListener("mouseover",()=>{
        video.play();
        video.controls=true;
        video.loop=true;
        video.controlsList("nodownload")
        
    })
    video.addEventListener("mouseout",()=>{
        video.pause();
        video.controls=false;
        video.currentTime=0;
    
    })

})


// modalVideo
let modalVideo = document.querySelector(".modalVideo")
let btnClose = document.querySelector(".btn-close")
btnClose.addEventListener("click",()=>{
    modalVideo.currentTime=0;
    modalVideo.pause()
})


// swiper
const swiper = new Swiper('.swiper', {
        effect: "coverflow",
        slidesPerView: "3",
        grabCursor: true,
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowScale: 0.94,
        },
    loop: true,

    autoplay: {
        delay: 20000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      },
  });