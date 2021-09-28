import './Banner.css'
import background from '../../content/pattern.webp';

function Banner() {
    return (
        <section className="main-banner" style={{ backgroundImage: `url(${background})` }}>
            <h1>Dosmato's Arts and Crafts</h1>
        </section>
    )
}

export default Banner;