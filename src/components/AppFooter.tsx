import "./AppFooter.css";
import {Link} from "react-router-dom";

export default function AppFooter() {
    return (
        <footer className="container">
            <section className="links">
                <Link to="/">HOME</Link> | <Link to="/">CONTACT</Link> | <Link to="/">DIRECTIONS</Link>
            </section>
            <section className="copyright">
                <p>&copy; 2024 H. L. Lyons Books & Brews. All Rights Reserved.</p>
            </section>
            <section className="social-media-icons">
                <a><i className="fa-brands fa-facebook"></i></a>
                <a><i className="fa-brands fa-x-twitter"></i></a>
                <a><i className="fa-brands fa-instagram"></i></a>
            </section>
        </footer>
    );
}
