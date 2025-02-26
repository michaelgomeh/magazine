import { Link } from 'react-router';
import ArticleCard from '../../components/article/ArticleCard';
import styles from './HomePage.module.css';
import { featuredArticles, articles } from '../../data';

const HomePage = () => {
	const mainArticle = featuredArticles[0];
	const secondaryArticles = featuredArticles;
	return (
		<div className={styles.homepage}>
			<div className={styles.homeLayout}>
				<div>asd</div>
				<ArticleCard
					key={mainArticle.id}
					article={mainArticle}
					view="compact"
				/>
				<div className={styles.secondaryArticles}>
					{secondaryArticles.map((article) => (
						<Link to={`/article/${article.id}`} key={article.id}>
							<ArticleCard
								key={article.id}
								article={{ ...article }}
								view="text"
							/>
						</Link>
					))}
				</div>
			</div>
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
