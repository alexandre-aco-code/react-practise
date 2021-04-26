import Like from "../commun/Like";

const Article = (props) => {
    return (
        <article>
            <h2>{props.donnee.titre}</h2>
            <p>{props.donnee.contenu}</p>
            <Like
                nombre={props.donnee.like}
                augmenter={() => props.augmenter(props.donnee)}
            />
        </article>
    );
};

export default Article;
