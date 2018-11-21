const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const port = process.env.PORT || 3200;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const blogCategories = ['digital-marketing', 'content-marketing', 'growth-hacking', 'social-media', 'mobile',
  'community-management', 'email', 'word-of-mouth', 'analytics', 'brand-identity'];


app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true);
    let { pathname, query } = parsedUrl;
    //  headers.referer
    //  rawHeaders[11]
    // console.log("req.headers in next.server.js : ", req.headers.referer.substr(22))
    // console.log("req.rawHeaders path in next.server.js : ", req.rawHeaders[11].substr(22))

    var slashIndex = pathname.substr(1).indexOf('/');
    var pathProcessed = pathname.substr(1, slashIndex);
    if (pathname.includes('_next/static/development/pages/')
      && pathname.includes(pathname.substring(pathname.indexOf('s/') + 2))) {
      pathname = pathname.substring(pathname.indexOf('s/') + 2);
    } else {
      var slashIndex = pathname.substr(1).indexOf('/');
      var pathProcessed = pathname.substr(1, slashIndex);
    }
    console.log('pathProcessed ranged: ', pathProcessed);
    console.log('pathname in next server: ', pathname);

    // if (blogCategories.includes(pathname.substr(1)))  {

    if (blogCategories.includes(pathProcessed)) {
      app.render(req, res, '/post', query);
    }
    if (pathname.substr(0, 11) === '/blog/page/'
        || pathname.substr(0, 10) === '/blog/page') {
      app.render(req, res, '/blog', query);
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(port, (err) => {
    if (err) { throw err(`> Ready on ${port}`); }
  });
});
