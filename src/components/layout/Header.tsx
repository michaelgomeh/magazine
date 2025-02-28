import styles from './Layout.module.css';
import {categories} from "../../data.ts";
import {Link} from "react-router";
import Logo from "/news.svg"

const Header = () => {
    return (
        <header>
            <div className={styles.headerTop}>
                <div className={styles.logo}>
                    <img src={Logo} alt="Logo"/>

                    <h1>Wellness Magazine</h1>
                </div>

                <img className={styles.avatar} alt='avatar'
                     src={"https://tabler.io/_next/image?url=%2Favatars%2Fdefault%2F60467e1ae6f97acb8964f5aa617c7ecb.png&w=280&q=75"}/>
            </div>
            <nav>
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
        </header>
    );
};

export default Header;
