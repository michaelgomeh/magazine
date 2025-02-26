import React from 'react';
import { Outlet } from 'react-router';
import styles from './Layout.module.css';
import Header from './Header';
const Layout: React.FC = () => {
	return (
		<div className={styles.layout}>
			<Header />
			<main>
				<Outlet />
			</main>
		</div>
	);
};

export default Layout;
