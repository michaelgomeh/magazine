import { useParams } from 'react-router';
import { articles } from '../../data.ts';
import ArticleCard from '../../components/article/ArticleCard';

const ArticlePage = () => {
	const { id } = useParams<{ id: string }>();
	const article = articles.find((article) => article.id === id);
	if (!article) {
		return <div>Article not found</div>;
	}
	return <ArticleCard article={article} />;
};

export default ArticlePage;
