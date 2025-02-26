import { Link } from 'react-router';
import ArticleCard from '../../components/article/ArticleCard';
import styles from './HomePage.module.css';
import { featuredArticles, articles } from '../../data';
import ArticleLink from '../../components/article/ArticleLink';

const HomePage = () => {
	const mainArticle = featuredArticles[0];
	const secondaryArticles = featuredArticles;
	return (
		<div className={styles.homepage}>
			<div className={styles.homeLayout}>
				<div className={styles.secondaryArticles}>
					{articles
						.slice(0, 3)
						.reverse()
						.map((article) => (
							<Link to={`/article/${article.id}`} key={article.id}>
								<ArticleCard
									key={article.id}
									article={{ ...article }}
									view="text"
								/>
							</Link>
						))}
				</div>
				<ArticleLink
					key={mainArticle.id}
					article={mainArticle}
					view="compact"
				/>
				<div className={styles.secondaryArticles}>
					{secondaryArticles.map((article) => (
						<ArticleLink key={article.id} article={article} view="text" />
					))}
				</div>
			</div>
			<div className={styles.articles}>
				{articles.map((article) => (
					<ArticleLink key={article.id} article={article} view="compact" />
				))}
			</div>
		</div>
	);
};

export default HomePage;
