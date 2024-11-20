export type Categories =
	| 'Personal Journey'
	| 'Web Development'
	| 'DevOps'
	| 'Research & Learning'
	| 'Project Mercury'
	| 'Backend Development'
	| 'Coding Challenges'
	| 'Frontend Development';

export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	categories: Categories[];
	published: boolean;
};
