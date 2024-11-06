/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_BASE_URL: string;
	readonly VITE_ORIGIN_URI: string;

	readonly VITE_GOOGLE_CLIENT_ID: string;
	readonly VITE_GOOGLE_AUTHORIZE_URI: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
