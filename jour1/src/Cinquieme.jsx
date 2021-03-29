import { Component } from 'react';
import './Cinquieme.css';

class Cinquieme extends Component {
    state = {
        titre: "Premier article",
        contenu: "lorem ipsum",
        like:12
    }
    genererLike() {
        if (this.state.like <= 10)
        {
            return <span class="new">{this.state.like} likes</span>;
        } else {
            return <span class="hot">{this.state.like} likes</span>; 
        }

    }
    render() {
        let { titre, contenu, like } = this.state;
        return (
            <article>
                <h2>{titre}</h2>
                <p>{contenu}</p>
                { this.genererLike() }
            </article>
        );
    }
}
 
export default Cinquieme;