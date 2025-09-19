
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
    'index.csr.html': {size: 792, hash: '4dab183a7e48a70536e334206214f69503371f58ee5ba5c8b1b5e884f7de325f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1013, hash: 'b84aab5e966ff9a5bafb5f324ff18b9dd61c399452948ac3d0c525f8d396c8f8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 4236, hash: '137b933662b7eff601205685ea52acaa5b2185d296650ff675f6243b5ae2199b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-AQ3XO23P.css': {size: 167, hash: 'l2swz6LWHBk', text: () => import('./assets-chunks/styles-AQ3XO23P_css.mjs').then(m => m.default)}
  },
};
