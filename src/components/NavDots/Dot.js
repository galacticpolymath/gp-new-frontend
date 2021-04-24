import React, {Component} from 'react';

class Dot extends Component{

   getPosition(element) {
        var yPosition = 0;
    
        while(element) {
            yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
            element = element.offsetParent;
        }
    
        return yPosition
    }

    render(){
        
    return(

        

        <div className={this.props.section} onClick={()=>window.scrollTo({
            top: this.getPosition(document.getElementById(this.props.section)) -70,
            left: 0,
            behavior: 'smooth'
        })}>
        <span>{this.props.title}</span>
        </div>
    )
    }
}

export default Dot;