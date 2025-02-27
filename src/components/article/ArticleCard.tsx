import dayjs from 'dayjs';
import styles from './ArticleCard.module.css';
import classNames from 'classnames';
import Markdown from 'react-markdown';
import { IArticleCardProps } from '../../types/types';

const ArticleCard = ({ article, view }: IArticleCardProps) => {
	const { title, content, imageUrl, datePublished, author } = article;
	return (
		<div className={styles.articleCard}>
			<div className={styles.articleBody}></div>
			<h2
				className={classNames(styles.articleTitle, {
					[styles.textCard]: view == 'text',
				})}
			>
				{title}
			</h2>
			<div
				className={classNames(styles.articleContent, {
					[styles.compactArticleView]: view === 'compact' || view === 'text',
				})}
			>
				<Markdown>{content}</Markdown>
			</div>
			<div className={styles.cardDetails}>
				{<p className={styles.author}>{author}</p>}
				{
					<p className={styles.date}>
						{dayjs(datePublished).format('MM/DD/YY')}
					</p>
				}
			</div>
			{imageUrl && (
				<img
					className={classNames(styles.articleImage, {
						[styles.noImage]: view === 'text',
						[styles.grayscale]: view !== 'full',
					})}
					src={imageUrl}
					alt={title}
				/>
			)}
			{/* {tags && tags.length > 0 && (
				<ul>
					{tags.map((tag, index) => (
						<li key={index}>{tag}</li>
					))}
				</ul>
			)} */}
		</div>
	);
};

export default ArticleCard;
