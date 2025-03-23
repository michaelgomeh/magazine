import { Link } from 'react-router';
import ArticleCard from '../../components/article/ArticleCard';
import styles from './HomePage.module.css';
import { articles } from '../../data';
import ArticleLink from '../../components/article/ArticleLink';
import classNames from 'classnames';
import ZenSentence from '../../components/ZenSentence.tsx';

const HomePage = () => {
	const mainArticle = articles[0];
	const secondaryArticles = articles.slice(0, 3);
	const videoArticle = articles[4];
	return (
		<div className={styles.homepage}>
			<div className={styles.homeLayout}>
				<div
					className={classNames(styles.secondaryArticles, styles.onlyDesktop)}
				>
					{secondaryArticles
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
			<ZenSentence />
			<ArticleLink
				key={videoArticle.id}
				article={videoArticle}
				view="horizontal"
			/>
			<div className={styles.articles}>
				{articles.map((article) => (
					<ArticleLink key={article.id} article={article} view="compact" />
				))}
			</div>
		</div>
	);
};

export default HomePage;
