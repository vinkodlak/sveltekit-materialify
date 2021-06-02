import sveltePreprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-node'
// import { readFile } from 'fs/promises'

// const pkg = JSON.parse(await readFile(new URL('./package.json', import.meta.url)));

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess({
    scss: {
      includePaths: ["theme"],
    },
  }),
  kit: {
    // By default, `npm run build` will create a standard Node app.
    // You can create optimized builds for different platforms by
    // specifying a different adapter
    adapter: adapter(),

    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",

    // vite: {
    //   ssr: {
    //     noExternal: Object.keys(pkg.dependencies || {}),
    //   },
    // },
  },
}

export default config;

