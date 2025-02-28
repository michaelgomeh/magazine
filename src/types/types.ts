export interface IArticle {
	id: string;
	title: string;
	description: string;
	content: string;
	imageUrl?: string;
	videoUrl?: string;
	datePublished?: Date;
	category: string;
	author: string;
	claps: number;
	comments: number;
}

export type ArticleView = 'full' | 'compact' | 'text' | 'horizontal';

export interface IArticleCardProps {
	article: IArticle;
	view: ArticleView;
}
