import { Component } from 'react';
import like from "./like.svg";
import "./Like.css" ;

class Like extends Component {
    state = { 
        nombre : 0 ,
        class : "",
        style : { 
            width : "40px" ,
            height : "40px",
            cursor:"pointer"
        }
    }

    augmenter = () => {
        this.setState({
            nombre : this.state.nombre + 1
        })
    }

    modifStyle = () => {
        this.setState({
            style : { width : "80px" , height : "80px" }
        })
    }
    retourNormal = () => {
        this.setState({
            style : { width : "40px" , height : "40px" }
        })
    }

    changement = () => {
        if(this.state.class == "" ){
            this.setState({
                class : "big"
            })
        }else {
            this.setState({
                class : ""
            })
        }
    }

    render() { 
        return ( 
            <>
                <img 
                    src={like} 
                    alt="" 
                    onClick={this.augmenter} 
                    style={ this.state.style } 
                    onMouseEnter={this.modifStyle}
                    onMouseLeave={this.retourNormal}
                    />
                <span>{ this.state.nombre }</span>
                <img src={like} onClick={this.changement} className={this.state.class} alt="" />
            </>
         );
    }
}
 
export default Like;