let mainColor=localStorage.getItem("color_option")

if(mainColor!==null){
    document.documentElement.style.setProperty("--main-color",localStorage.getItem("color_option"))
}


// end
let landingPage =document.querySelector(".land")

let imgArray=["01.jpg","02.jpg","03.jpg","04.jpg"]



// end
let settingBox=document.querySelector(".setting-box")
let settingIcon=document.querySelector(".cup i")
settingIcon.onclick=function(){
    settingBox.classList.toggle("open");
    settingIcon.classList.toggle("fa-spin");
}
// end 

let colorIi=document.querySelectorAll(".color-box li")

colorIi.forEach(li => {
    li.addEventListener("click",(e)=>{
        document.documentElement.style.setProperty("--main-color",e.target.dataset.color)
        
        localStorage.setItem("color_option",e.target.dataset.color)
        
        activeClass(e)
    })
});
let randombac=document.querySelectorAll(".box-container  span")

randombac.forEach(span=>{
    span.addEventListener("click",(e)=>{
        activeClass(e)
    })
})
let backgroundOption = true;

let backgroundint;

 function randomBackground(){         
     if(backgroundOption===true){
    backgroundint= setInterval(() =>{
        let randomimg=Math.floor(Math.random()* imgArray.length);

        landingPage.style.backgroundImage='url("imgs/'+imgArray[randomimg] +'")'
    }, 10000);
}
}
randomBackground()

randombac[0].onclick=function(){
    backgroundOption=true
    randomBackground()
    localStorage.setItem("background_option",true)
}
randombac[1].onclick=function(){
    clearInterval(backgroundint)
    backgroundOption=false;
    localStorage.setItem("background_option",false)
}
let backgroundLocal=localStorage.getItem("background_option")
if(backgroundLocal!==null){
    if(backgroundLocal==='true'){
        randombac[0].classList.add("active")
        
        backgroundOption=true;
    }else{
        backgroundOption=false;
        randombac[1].classList.add("active")
        clearInterval(backgroundint)
    }
}
// end

// start our skills

let ourSkills=document.querySelector(".skills");

window.onscroll=function(){
    let skillofset=ourSkills.offsetTop;
    // console.log(skillofset)
    let skillsOuter=ourSkills.offsetHeight
    // console.log(skillsOuter)
    let windowHeight=this.innerHeight;
    // console.log(windowHeight)
    let windowOffset=this.pageYOffset
    // console.log(windowOffset)

    if(windowOffset>(skillofset+skillsOuter-windowHeight)){
        let skillsWidth=document.querySelectorAll(".skills-box .progress-skills div");

        skillsWidth.forEach(ele=>{
            ele.style.width=ele.dataset.width
        })
    }

}
// end our skills
// start gallary
let gallaryImg=document.querySelectorAll(".gallary .img-box img");

gallaryImg.forEach(imgs=> {
    imgs.addEventListener("click",(img)=>{
        let div=document.createElement("div")

        div.className="popup-overlay"

        document.body.appendChild(div)

        let imgDiv=document.createElement("div")

        document.body.appendChild(imgDiv)

        imgDiv.className="img-div"

        let closeButton=document.createElement("span")
        let closeText=document.createTextNode("x")
        closeButton.className="close-button"
        closeButton.appendChild(closeText)
        imgDiv.appendChild(closeButton)

        if(imgs.alt!==null){
            let imgH3=document.createElement("h3")

            let h3Text=document.createTextNode(imgs.alt)

            imgH3.appendChild(h3Text)

            imgDiv.appendChild(imgH3)
        }

        let imgBox=document.createElement("img")
        
        imgBox.src=imgs.src

        imgDiv.appendChild(imgBox)
        closeButton.onclick=function(e){
            div.remove()
            imgDiv.remove()
        }
    })
})
// end gallary
// start nav
let nav=document.querySelectorAll(".bulluts .bullet")
let ulnav=document.querySelectorAll(".land ul li");

function goToSection(element){
    element.forEach(ele=>{
        ele.addEventListener("click",(e)=>{
            e.preventDefault()   
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior:"smooth"
                
            })
        })
    })
}
goToSection(nav)
goToSection(ulnav)
// end nav
// active function
function activeClass(ev){
    ev.target.parentElement.querySelectorAll(".active").forEach(ele=>{
        ele.classList.remove("active")
    })
    ev.target.classList.add("active")
}
// active function
let bullets=document.querySelectorAll(".setting-box .bullet span")
let navBullets=document.querySelector(".bulluts")
let localBullets=localStorage.getItem("bullets_option")

bullets.forEach(ele =>{
    ele.addEventListener("click",(e)=>{
        if(e.target.dataset.display==="block"){
            navBullets.style.display="block"
            localStorage.setItem("bullets_option","block")
        }else{
            navBullets.style.display="none"
            localStorage.setItem("bullets_option","none")
        }
        activeClass(e)
    })
});
if(localBullets!==null){
    bullets.forEach(e=>{
        e.classList.remove(".active")
    })
    if(localBullets==="block"){
        navBullets.style.display="block"
        document.querySelector(".setting-box .bullet .yes").classList.add("active")
    }else{
        navBullets.style.display="none"
        document.querySelector(".setting-box .bullet .no").classList.add("active")

    }

}

// reset option
document.querySelector(".setting-box .reset").onclick=function(){
    localStorage.clear()
    window.location.reload()
}
// reset option
// menu
let burger=document.querySelector("header .head .burger")
let ulmenu=document.querySelector("header div ul")

document.querySelector("header .head .burger").onclick=function(){
    document.querySelector("header div ul").classList.toggle("show")
}
// menu
