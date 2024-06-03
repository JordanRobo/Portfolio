import type { Post } from '$lib/types'
import type { PageServerLoad } from './$types.js';

export const load: PageServerLoad = async ({fetch}) => {
	const repos_response = await fetch('https://api.github.com/repos/JordanRobo/Morningtide-Website');
    let repos = await repos_response.json();

	const posts_response = await fetch('api/posts');
	let posts: Post[] = await posts_response.json();

	posts = posts.slice(0, 3);

	return { posts, repos }
}
