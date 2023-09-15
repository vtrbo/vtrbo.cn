export interface Project {
	// 标题
	title: string;
	// 描述
	description: string;
	// 地址
	link: string;
	// 图标
	icon?: string;
}

export interface ProjectGroup {
	// 组名
	group: string;
	// 项目
	projects: Project[];
}
