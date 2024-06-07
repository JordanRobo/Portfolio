import type { LayoutServerLoad } from './$types.js';

export const load: LayoutServerLoad = async ({ url }) => {
    const { pathname } = url;

	return { pathname }
}