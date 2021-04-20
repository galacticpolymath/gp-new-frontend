/* Easy Scroll Dots 1.1.5 --- https://github.com/Superhands89/EasyScrollDots
* Quickly add anchor points throughout your web page/application and have navigational dots automatically appear
* in a fixed position on the side of the page. This allows the user to click to scroll though sections of the page,
* and it updates as they scroll.
*
* By Superhands89 2019-2021 --- https://github.com/Superhands89/
*
* GPLv3 Licence for open source use only
* or purchase a Single Commercial License at https://gum.co/TdtEX
* or purchase an Extended Commercial License at https://gum.co/NGfmlw
*/

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