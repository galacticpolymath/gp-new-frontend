// global fixed nav options
let dotOffset = -500;

export function scrollIndiClicked(indiId) {

    const indiElement = document.getElementById(indiId)
    const activeDot = document.querySelector('.activeDot')
    const newDot = document.querySelector(`.${indiId}`)
    
    console.log(activeDot)
    console.log(newDot)

    activeDot.classList.toggle('activeDot')
    newDot.classList.toggle('activeDot')
    
        
    // fixed nav scroll
    window.scrollTo({
        top: indiElement.offsetTop - dotOffset,
        left: 0,
        behavior: 'smooth'
    });

};