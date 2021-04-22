import React, {Component} from 'react';

class Dot extends Component{
    constructor(props){
        super(props)
        let dotOffset = -500;
        this.scrollIndiClicked = (indiId) => {

            const indiElement = document.getElementById(indiId)
        
            window.scrollTo({
                top: indiElement.offsetTop - dotOffset,
                left: 0,
                behavior: 'smooth'
            });
        
        };
    }
    render(){
        
    return(
        <div className={this.props.section} onClick={()=>this.scrollIndiClicked(`${this.props.section}`)}>
        <span>{this.props.title}</span>
        </div>
    )
    }
}

export default Dot;