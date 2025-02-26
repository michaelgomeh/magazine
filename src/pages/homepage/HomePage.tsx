import { Link } from 'react-router';
import ArticleCard from '../../components/article/ArticleCard';
import styles from './HomePage.module.css';
import { articles } from '../../data';

const HomePage = () => {
	return (
		<div>
			<div className={styles.articles}>
				{articles.map((article) => (
					<Link to={`/article/${article.id}`} key={article.id}>
						<ArticleCard key={article.id} article={article} view="compact" />
					</Link>
				))}
			</div>
		</div>
	);
};

export default HomePage;
