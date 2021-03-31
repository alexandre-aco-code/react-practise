import { Component } from "react";
import Article from "./Article";

class Articles extends Component {
    state = {
        articles: [
            { id: 1, titre: "article 1", contenu: "lorem ipsum", like: 3 },
            { id: 2, titre: "article 2", contenu: "lorem ipsum", like: 0 },
        ],
    };

    augmenter = (data) => {
        const cloneArticles = [...this.state.articles];
        const articleAModifier = cloneArticles.find(
            (item) => item.id === data.id
        );
        const index = cloneArticles.indexOf(articleAModifier);
        cloneArticles[index].like++;
        this.setState({
            articles: cloneArticles,
        });
    };

    componentDidMount() {
        console.log("le composant articles est chargé dans le DOM");
    }

    render() {
        return (
            <div className="articles">
                {this.state.articles.map((item, index) => {
                    return (
                        <Article
                            key={index}
                            donnee={item}
                            augmenter={this.augmenter}
                        />
                    );
                })}
            </div>
        );
    }
}

export default Articles;
