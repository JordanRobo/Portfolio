import type { Post } from '$lib/types';
import type { PageServerLoad } from './$types.js';

export const load: PageServerLoad = async ({ fetch }) => {
	const posts_response = await fetch('api/posts');
	let posts: Post[] = await posts_response.json();

	const project = await fetch('https://api.github.com/repos/JordanRobo/Mercury');
	let projects = await project.json();

	const languages = await fetch('https://api.github.com/repos/JordanRobo/Mercury/languages');
	projects.languages = await languages.json();

	posts = posts.slice(0, 3);

	return { posts, projects };
};
