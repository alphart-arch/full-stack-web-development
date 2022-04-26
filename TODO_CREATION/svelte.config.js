import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		/*methodOverride: {
			allowed: ['PUT', 'PATCH', 'DELETE']
		  },*/
		//target: '#svelte',
			vite:{
			server:{
			 hmr:{
				 clientPort: 3000,
				 host: "localhost"
			 }	
			}
		}
	}
};

/*const config = {
	kit: {
	  methodOverride: {
		allowed: ['PUT', 'PATCH', 'DELETE']
	  }
	}
  };*/
export default config;
