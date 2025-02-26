import React from 'react';
import { Link } from 'react-router';
import ArticleCard from './ArticleCard';
import { IArticle, ArticleView } from '../../types/types';

interface ArticleLinkProps {
	article: IArticle;
	view: ArticleView;
}

const ArticleLink: React.FC<ArticleLinkProps> = (props) => {
	const { article, view } = props;
	const { id } = article;
	return (
		<Link to={`/article/${id}`} key={id}>
			<ArticleCard key={id} article={article} view={view} />
		</Link>
	);
};

export default ArticleLink;
