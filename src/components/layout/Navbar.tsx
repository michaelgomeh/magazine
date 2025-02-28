import {Link} from "react-router";
import {categories} from "../../data.ts";
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                {categories.map(e => <li key={e}>
                    <Link
                        to={`/articles?cat=${e.toLowerCase().replace(" ", "-")}`}>{e[0].toUpperCase() + e.slice(1, e.length)}</Link>
                </li>)}
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;