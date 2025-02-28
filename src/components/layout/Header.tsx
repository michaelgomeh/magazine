import styles from './Layout.module.css';
import Logo from "/news.svg"
import Navbar from "./Navbar.tsx";

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
            <Navbar/>
        </header>
    );
};

export default Header;
