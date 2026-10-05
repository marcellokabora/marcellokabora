import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// Firebase Hosting (web frameworks) builds with its own adapter during deploy
		adapter: adapter(),
		experimental: {
			remoteFunctions: true
		}
	},
	compilerOptions: {
		experimental: {
			async: true
		}
	},
	vitePlugin:{
		inspector:true
	}
};

export default config;
