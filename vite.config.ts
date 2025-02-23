import { defineConfig } from 'vite';
import type { UserConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import process from 'node:process';

const host = process.env.TAURI_DEV_HOST;

export default defineConfig(() =>
	({
		plugins: [sveltekit()],
		// Prevent obscuring Rust errors
		clearScreen: false,
		server: {
			port: 1420,
			strictPort: true,
			host: host || false,
			hmr: host
				? {
					protocol: 'ws',
					host,
					port: 1421,
				}
				: undefined,
			watch: {
				ignored: ['**/src-tauri/**'],
			},
		},
	}) satisfies UserConfig
);
