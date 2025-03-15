
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1283, hash: '3720badd3e813da9cc31e9e2962e91dc8751467f9e285c500adf623b90065c6e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1141, hash: '895682ff329042e505a1b5c466068a830bd1dd618f6db9a74fb707c251c49fa1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 7264, hash: 'c46f129a0815c27957be0bf61bd7291438c67dd80d6802ac8c891e26a39bc20e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles.css': {size: 644, hash: '4HG8UQcFUOs', text: () => import('./assets-chunks/styles_css.mjs').then(m => m.default)}
  },
};
