import styles from './Layout.module.css';

const Header = () => {
	return (
		<header>
			<div className={styles.headerTop}>
				{/* <img src={Logo} alt="Logo" /> */}
				<h1>Wellness Magazine</h1>

				<div className={styles.avatar}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width={24}
						height={24}
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth={1}
						strokeLinecap="round"
						strokeLinejoin="round"
						className="icon icon-tabler icons-tabler-outline icon-tabler-user"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
						<path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
					</svg>
				</div>
			</div>
			<nav>
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/articles">Articles</a>
					</li>
					<li>
						<a href="/about">About</a>
					</li>
					<li>
						<a href="/contact">Contact</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
