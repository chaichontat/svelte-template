import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	build: {
		target: 'esnext',
		chunkSizeWarningLimit: 1024
	}
};

export default config;
