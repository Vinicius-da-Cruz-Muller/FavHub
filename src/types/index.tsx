export type TaskT = {
	id: string;
	title: string;
	link: string; 
	excerpt: string; 
	image?: string;
	alt?: string;
	tags: { title: string; bg: string; text: string }[];
};

type Column = {
	name: string;
	items: TaskT[];
};

export type Columns = {
	[key: string]: Column;
};
