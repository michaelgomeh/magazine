import React from 'react';
import styles from './AboutPage.module.css';

const AboutPage: React.FC = () => {
	return (
		<div className={styles.aboutPage}>
			<h1 className={styles.title}>About This Website</h1>
			<p className={styles.description}>
				Welcome to my demonstration website! This site is part of my frontend
				portfolio, showcasing my skills in web development and design.
			</p>
			<p className={styles.description}>
				Feel free to explore and see what I can do. If you'd like to connect or
				view more of my work, check out the links below:
			</p>
			<ul>
				<li className={styles.link}>
					<a
						href="https://github.com/michaelgomeh/"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub
					</a>
				</li>
				<li className={styles.link}>
					<a
						href="https://www.linkedin.com/in/michael-gomeh/"
						target="_blank"
						rel="noopener noreferrer"
					>
						LinkedIn
					</a>
				</li>
			</ul>
		</div>
	);
};

export default AboutPage;
