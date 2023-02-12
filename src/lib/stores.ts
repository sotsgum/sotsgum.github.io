import { derived } from 'svelte/store';
import { page } from '$app/stores';

export const pathname = derived(page, ($page) => $page.url.pathname);
