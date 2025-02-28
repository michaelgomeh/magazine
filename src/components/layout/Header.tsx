import styles from './Layout.module.css';
import {categories} from "../../data.ts";

const Header = () => {
    return (
        <header>
            <div className={styles.headerTop}>
                {/* <img src={Logo} alt="Logo" /> */}
                <h1>Wellness Magazine</h1>

                <img className={styles.avatar} alt='avatar'
                     src={"https://tabler.io/_next/image?url=%2Favatars%2Fdefault%2F60467e1ae6f97acb8964f5aa617c7ecb.png&w=280&q=75"}/>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    {categories.map(e => <li key={e}>
                        <a href={`/articles?cat=${e.toLowerCase().replace(" ", "-")}`}>{e[0].toUpperCase() + e.slice(1, e.length)}</a>
                    </li>)}
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
