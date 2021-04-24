import React, {Component} from 'react';

class Dot extends Component{
    render(){
        
    return(
        <div className={this.props.section} onClick={()=>window.scrollTo({
            top: document.getElementById(this.props.section).offsetTop + 670,
            left: 0,
            behavior: 'smooth'
        })}>
        <span>{this.props.title}</span>
        </div>
    )
    }
}

export default Dot;