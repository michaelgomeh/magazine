import dayjs from 'dayjs';
import { IArticle } from '../../types/types';
import styles from './ArticleCard.module.css';

interface ArticleCardProps {
	article: IArticle;
	view: 'full' | 'compact';
}

const ArticleCard = ({ article, view }: ArticleCardProps) => {
	return (
		<div className={styles.articleCard}>
			<div className={styles.articleBody}></div>
			<h2 className={styles.articleTitle}>{article.title}</h2>
			<p className={styles.articleContent}>
				{view === 'full'
					? article.content
					: article.content.substring(0, 100) + '...'}
			</p>
			{article.author && (
				<p className={styles.author}>Author: {article.author}</p>
			)}
			<img
				className={styles.articleImage}
				src={article.imageUrl}
				alt={article.title}
			/>
			{article.datePublished && (
				<p className={styles.date}>
					{dayjs(article.datePublished).format('MM/DD/YY')}
				</p>
			)}
			{/* {article.tags && article.tags.length > 0 && (
				<ul>
					{article.tags.map((tag, index) => (
						<li key={index}>{tag}</li>
					))}
				</ul>
			)} */}
		</div>
	);
};

export default ArticleCard;
