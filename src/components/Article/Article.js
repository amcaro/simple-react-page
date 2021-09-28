import './Article.css';
import parse from 'html-react-parser'

function Article(props) {
    return (
        <article>
            <img src={props.src} alt="" />
            <h4>{props.title}</h4>
            <p>{parse(props.text)}</p>
        </article>
    )
}

export default Article;