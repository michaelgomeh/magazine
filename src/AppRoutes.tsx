import { Route, Routes } from 'react-router';
import HomePage from './pages/homepage/HomePage';
import Layout from './components/layout/Layout';
import ArticlePage from './pages/articlepage/ArticlePage';
import ArticlesPage from "./pages/articlespage/ArticlesPage.tsx";

const AppRoutes = () => {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path="/articles" element={<ArticlesPage />} />
				<Route path="/article/:id" element={<ArticlePage />} />
			</Route>
		</Routes>
	);
};

export default AppRoutes;
