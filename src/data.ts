import { IArticle } from './types/types';

export const articles: IArticle[] = [
	{
		id: '1',
		category: 'category1',
		title: 'Article 1',
		content:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga vitae perferendis autem ex dolorum. Exercitationem minima, suscipit corporis neque magnam maxime dolor saepe provident dicta quas consequatur natus voluptatum earum est ratione at necessitatibus voluptates nesciunt minus asperiores et facilis. Fuga officia corrupti quos unde beatae temporibus laboriosam minima amet dicta in praesentium cupiditate repudiandae ab quod provident, dignissimos quo sed nihil. Voluptate corrupti dolor porro et unde aliquam quasi molestias tempore quaerat ab officiis ratione nobis fugit quis, cum, rerum dolore ipsam corporis id impedit praesentium voluptas nisi. Aspernatur corrupti beatae deleniti consectetur asperiores perferendis corporis, quo provident vitae?',
		imageUrl:
			'https://cdn.pixabay.com/photo/2023/12/13/17/54/bun-8447394_1280.jpg',
		datePublished: new Date(),
		author: 'Author 1',
	},
	{
		id: '2',
		title: 'Article 2',
		category: 'category2',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit velit dolor debitis et, animi alias? Ut quo beatae doloribus veritatis harum. Quibusdam aliquam deserunt itaque iusto quod eaque quia quas illum vero veritatis, quos laudantium, quo ea deleniti perferendis omnis nemo officia libero provident quidem aut expedita autem sit. Iusto laborum odio voluptates quas magnam vitae ullam fuga doloribus qui repellat, officiis, at repellendus culpa ab! Deserunt beatae sed facilis inventore officia assumenda, labore quibusdam dolor voluptatibus, voluptas deleniti facere explicabo sunt quas natus, nisi soluta repellat dicta accusamus. Animi eos aspernatur omnis explicabo iusto quis voluptate rem maxime est!',
		imageUrl:
			'https://cdn.pixabay.com/photo/2023/12/13/17/54/bun-8447394_1280.jpg',
		datePublished: new Date(),
		author: 'Author 2',
	},
];
