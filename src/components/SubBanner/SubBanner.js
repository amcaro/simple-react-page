import './SubBanner.css';

function SubBanner(props) {
    return (
        <div className={props.className}>
            <h3>{props.text}</h3>
        </div>
    )
}

export default SubBanner;