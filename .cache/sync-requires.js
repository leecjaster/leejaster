
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/leecjaster/Dropbox/Websites/leejaster/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/leecjaster/Dropbox/Websites/leejaster/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/leecjaster/Dropbox/Websites/leejaster/src/pages/page-2.js")),
  "component---src-pages-using-ssr-js": preferDefault(require("/Users/leecjaster/Dropbox/Websites/leejaster/src/pages/using-ssr.js")),
  "component---src-pages-using-typescript-tsx": preferDefault(require("/Users/leecjaster/Dropbox/Websites/leejaster/src/pages/using-typescript.tsx")),
  "component---src-templates-using-dsg-js": preferDefault(require("/Users/leecjaster/Dropbox/Websites/leejaster/src/templates/using-dsg.js"))
}
