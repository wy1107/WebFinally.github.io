/*================SHOW MENU=================== */
const navMenu=document.getElementById('nav-menu'),
      navToggle=document.getElementById('nav-toogle'),
      navClose=document.getElementById('nav-close')

/*===========MENU SHOW==============*/
/*Validate if constant exits */
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

/*===========MENU HIDDEN=============== */
/*Validate if constant exits */
if(navClose){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}


/*=====================REMOVE MENU MOBILE=============== */
const navLink=document.getElementById('nav__link')

const linkAction=()=>{
    const navMenu=document.getElementById('nav-menu')
    //when we click on each nav_link,we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click',linkAction))

/*==================CHANGE BACKGROUNDHEADER================== */
const scrollHeader=()=>{
    const header=document.getElementById('header')
    //when the scroll is greater than 50 viewport height,add the the scroll-header class to the header tag
    this.scroll >=50 ? header.classList.add('bg-header')
                        :header.classList.remove('bg-header')
}
window.addEventListener('scroll',scrollHeader)

/*========================SHOW SCROLL UP====================== */



/*===================SCROLL SECTIONS ACTIVE LINK================== */




/*================DARK LIGHT THEME============================== */



/*=====================SCROLL REVEAL ANIMATION */



