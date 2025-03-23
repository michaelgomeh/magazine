import { articles } from '../../data.ts';
import ArticleLink from '../../components/article/ArticleLink.tsx';
import styles from './ArticlesPage.module.css';
import { useSearchParams } from 'react-router';

const ArticlesPage = () => {
	const [searchParams] = useSearchParams();
	const cat = searchParams.get('cat');
	return (
		<div className={styles.articlesList}>
			<h2 className="articles-category">{cat}</h2>
			{articles
				.filter(
					(article) =>
						article.category.toLowerCase() ===
						cat?.replace('-', ' ').toLowerCase()
				)
				.map((article) => (
					<ArticleLink key={article.id} article={article} view="horizontal" />
				))}
		</div>
	);
};

export default ArticlesPage;
