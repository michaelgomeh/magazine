import dayjs from 'dayjs';
import { IArticle } from '../../types/types';
import styles from './ArticleCard.module.css';
import classNames from 'classnames';
import Markdown from 'react-markdown';

interface ArticleCardProps {
	article: IArticle;
	view: 'full' | 'compact';
}

const ArticleCard = ({ article, view }: ArticleCardProps) => {
	return (
		<div className={styles.articleCard}>
			<div className={styles.articleBody}></div>
			<h2 className={styles.articleTitle}>{article.title}</h2>
			<div
				className={classNames(styles.articleContent, {
					[styles.compactArticleView]: view === 'compact',
				})}
			>
				<Markdown>{article.content}</Markdown>
			</div>
			<div className={styles.cardDetails}>
				{<p className={styles.author}>{article.author}</p>}
				{
					<p className={styles.date}>
						{dayjs(article.datePublished).format('MM/DD/YY')}
					</p>
				}
			</div>
			<img
				className={styles.articleImage}
				src={article.imageUrl}
				alt={article.title}
			/>
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
