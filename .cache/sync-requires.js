
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/app/my-gatsby/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/app/my-gatsby/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/app/my-gatsby/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/app/my-gatsby/src/pages/index.js")),
  "component---src-pages-qa-js": preferDefault(require("/app/my-gatsby/src/pages/QA.js"))
}

