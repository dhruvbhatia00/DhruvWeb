import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.svx'],
	
	preprocess: [
		mdsvex({
			extensions: ['.md', '.svx'],
			remarkPlugins: [remarkMath],
			rehypePlugins: [rehypeKatex]
		})
	],
	
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		paths: {
			base: ''
		}
	}
};

export default config;
