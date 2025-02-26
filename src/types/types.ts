export interface IArticle {
	id: string;
	title: string;
	content: string;
	imageUrl?: string;
	datePublished?: Date;
	category: string;
	author: string;
}

export type ArticleView = 'full' | 'compact' | 'text';

export interface IArticleCardProps {
	article: IArticle;
	view: ArticleView;
}
