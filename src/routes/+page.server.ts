import type { Post } from '$lib/types'
import type { PageServerLoad } from './$types.js';

export const load: PageServerLoad = async ({fetch}) => {
	const repos_response = await fetch('https://api.github.com/users/JordanRobo/repos?per_page=20');
    let repos = await repos_response.json();

	repos = repos.filter(repo => repo.description);
    
    // Limit to 4 repos
    repos = repos.slice(0, 3);

	const posts_response = await fetch('api/posts');
	let posts: Post[] = await posts_response.json();

	posts = posts.slice(0, 3);

	return { posts, repos }
}
