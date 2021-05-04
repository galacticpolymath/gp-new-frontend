let lastOffset = window.pageYOffset

const getOffset = function(element) {
    let top = 0, left = 0;
    do {
        top += element.offsetTop  || 0;
        element = element.offsetParent;
    } while(element);

    return top
};

const activateDot = function(index, elemIds){
    const activeNodeid = elemIds[index]

    const activeNode = document.querySelector(`.${activeNodeid}`)

    if (!activeNode.classList.contains('activeDot')){
        activeNode.classList.add('activeDot')
    }

    let notActive = elemIds.slice()
    notActive.splice(index,1)
    notActive.forEach((id)=>document.querySelector(`.${id}`).classList.remove('activeDot'))
}

const scrollDown = function(cursorBottom, elemOffsets, elemIds) {
    // you have the offset tops. find nearest one above current position by..
    // filtering out the ones below it and taking the last elem
    // filter:
    const removeBelow = elemOffsets.filter(function (x) { return x < cursorBottom ; });
    const index = removeBelow.length - 1

    activateDot(index, elemIds)
}

const scrollUp = function(cursorTop, elemOffsets, elemIds) {
    // when you're scrolling up you want the nearest previous top.... find index - 1
    const removeBelow = elemOffsets.filter(function (x) { return x < cursorTop ; });
    const index = removeBelow.length > 0 ? removeBelow.length - 1 : 0

    activateDot(index, elemIds)
}

export default function scrollHandler(){
    const scrollElems = Array.prototype.slice.call(document.querySelectorAll('.SectionHeading'))

    let elemOffsets = []
    let elemIds = []

    scrollElems.forEach(el => {
        elemIds.push(el.id.replace('&','\\&'))
        elemOffsets.push(getOffset(el)) // get the offsetTops and put in dict
    })

    const cursorTop = window.pageYOffset
    const cursorBottom = window.pageYOffset + window.innerHeight
    
    if (window.pageYOffset < lastOffset) {
        scrollUp(cursorTop, elemOffsets, elemIds)
    }
    else {
        scrollDown(cursorBottom, elemOffsets, elemIds)
    }
    lastOffset = window.pageYOffset
}

/*const scrollActions = function (){
    

    const offsets = Object.values(elemOffsets)
    const removeMinuses = offsets.filter(function (x) { return x > -300; });
    const minOffset = Math.min.apply(null, removeMinuses)
    console.log(minOffset)
    Object.keys(elemOffsets).forEach(elem=> {

        const dotClass = elem.replace('&','\\&')
        const dotNode = document.querySelector(`.${dotClass}`)
        
        if(elemOffsets[elem]==minOffset){
            if(!dotNode.classList.contains('activeDot')){
                dotNode.classList.add('activeDot')
            }
            else{
                dotNode.classList.remove('activeDot')
            }
        }
    })
}
*/