export interface IArticle {
	id: string;
	title: string;
	content: string;
	imageUrl: string;
	datePublished?: Date;
	category: string;
	author?: string;
}
