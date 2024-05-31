import type { PageServerLoad } from '../$types.js';

export const load: PageServerLoad = async ({fetch}) => {
    const response = await fetch('https://api.github.com/users/JordanRobo/repos');
    const repos = await response.json();
    return {
        repos
    };
}