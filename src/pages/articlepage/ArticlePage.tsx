import { useParams } from 'react-router';
import { articles } from '../../data.ts';
import ArticleCard from '../../components/article/ArticleCard';
import styles from './ArticlePage.module.css';

const ArticlePage = () => {
	const { id } = useParams<{ id: string }>();
	const article = articles.find((article) => article.id === id);
	if (!article) {
		return <div>Article not found</div>;
	}
	return <div className={styles.articlePage}>
	<ArticleCard article={article} view="full" />
	</div>
	;
};

export default ArticlePage;
