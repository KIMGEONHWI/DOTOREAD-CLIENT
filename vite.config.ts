import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), svgr()],
	resolve: {
		alias: [{ find: '@', replacement: '/src' }],
	},
	// server: {
	// 	https: true,
	// 	proxy: {
	// 		'api/': {
	// 			target: 'https://api.dotoread.shop',
	// 			secure: false,
	// 			changeOrigin: true,
	// 		},
	// 	},
	// },
});
