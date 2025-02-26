import { Link } from 'react-router';
import ArticleCard from '../../components/article/ArticleCard';
import styles from './HomePage.module.css';
import { articles } from '../../data';

const HomePage = () => {
	return (
		<div>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque rerum
			voluptate, optio molestias architecto nemo exercitationem nesciunt
			deserunt error iste sint nulla totam tenetur atque reiciendis voluptatem
			blanditiis perspiciatis, alias, molestiae reprehenderit harum! Fugiat rem
			iusto fuga dignissimos nesciunt, porro maxime neque possimus in eos soluta
			cum tempora illum libero!
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
