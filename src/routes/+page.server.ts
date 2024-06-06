import type { Post } from '$lib/types'
import type { PageServerLoad } from './$types.js';

export const load: PageServerLoad = async ({fetch}) => {
	const posts_response = await fetch('api/posts');
	let posts: Post[] = await posts_response.json();

	posts = posts.slice(0, 3);

	return { posts }
}
