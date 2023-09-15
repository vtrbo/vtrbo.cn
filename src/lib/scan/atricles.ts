import type { ImportModule } from '$lib/scan/types';

export interface Article {
	// 文件 'src/articles/**/*.md'
	name?: string;
	// 标题
	title: string;
	// 时间
	date: string;
	// 阅读时长
	timer?: string;
	// 中文
	zh?: boolean;
	// 置顶
	upper?: boolean;
	// 视频
	video?: boolean;
}

export const getArticles = () => {
	let articles: Article[] = [];

	const modules = import.meta.glob<ImportModule<Article>>('../../articles/**/*.md', { eager: true });
	for (const path in modules) {
		const module = modules[path];
		const article: Article = {
			...module?.metadata,
			name: getName(path)
		};
		articles.push(article);
	}

	return { articles };
};

const getName = (path: string): string => path.split('/').at(-1)!.replace('.md', '');
