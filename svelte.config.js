const sveltePreprocess = require('svelte-preprocess')

module.exports = {
  preprocess: dev =>
    sveltePreprocess({
      preserve: ['ld+json'],
      postcss: true,
    }),
}