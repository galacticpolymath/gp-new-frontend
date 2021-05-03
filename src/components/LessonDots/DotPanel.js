import Dot from './Dot';
import React, { useEffect, useState } from 'react';

function Panel(props){

    const [titles, setTitles] = useState([])
        /*
        console.log('anything???')
        const title = id.replace(/_/g,' ').replace(/\b\w/g, l => l.toUpperCase())
        titles.push(title)
        console.log(title) //formatted ids
        */

    // big assumption, all section headings start off with a number
    // have to do this because sectionheading structure is at uneven nesting levels so querySelectorAll brings them up out of order
    // also assuming the title content appears from the node's first child's content. appears to be consistent so far.

    useEffect(()=>{
        let titleArray = []

        let headings = document.querySelectorAll('.SectionHeading')
        headings.forEach((el)=>{

            const indextitle = el.firstChild.textContent
            const index = +indextitle.substr(0,indextitle.indexOf(' ')).slice(0,-1)
            const title = indextitle.substr(indextitle.indexOf(' ')+1)
            
            titleArray.push([index, title, el.id])
            //el.classList.add('scroll-indicator')
        })
        setTitles(titleArray)
    },[])
    
    let dots = titles.map((title)=>{
        return (<Dot section={title[2]} title={title[1]}/>)
    })

    return (
        <div className="scroll-indicator-controller">
            {dots}
        </div>
    )
}

export default Panel