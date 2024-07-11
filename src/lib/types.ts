export type Categories = 'Personal Journey' | 'Web Development' | 'Industry Trends' | 'Research & Learning' | 'Project Mercury' | 'Backend Development' | 'Coding Challenges' | 'Frontend Development'


export type Post = {
	title: string
	slug: string
	description: string
	date: string
	categories: Categories[]
	published: boolean
}
