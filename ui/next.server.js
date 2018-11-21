/* eslint-disable max-len */
const express = require('express');
const next = require('next');
const { parse } = require('url');
const { join } = require('path');
const { Router } = require('./routes');

const PROJECT_SRC_DIR = './src';
const port = Number(process.env.PORT) || 3000;
const env = process.env.NODE_ENV;
const dev = env !== 'production';
const app = next({
  dir: PROJECT_SRC_DIR,
  dev,
});

const handle = app.getRequestHandler();

let server;
app
  .prepare()
  .then(() => {
    server = express();

    Router.forEachPrettyPattern((page, pattern, defaultParams) => server.get(pattern, (req, res) => {
      const pageToRender = Object.assign({}, defaultParams, req.query, req.params);
      return app.render(req, res, `/${page}`, pageToRender);
    }));

    // setProxy(server);

    server.all('*', (req, res) => {
      const parsedUrl = parse(req.url, true);
      const rootStaticFiles = [
        '/robots.txt',
        '/sitemap.xml',
        '/favicon.ico',
      ];
      if (rootStaticFiles.indexOf(parsedUrl.pathname) > -1) {
        const path = join(__dirname, 'static', parsedUrl.pathname);
        app.serveStatic(req, res, path);
      } else {
        return handle(req, res);
      }
    });

    server.listen(port, (err) => {
      if (err) {
        throw err;
      }
      console.log(`> Ready on port ${port} [${env}]`);
    });
  })
  .catch((err) => {
    console.log('An error occurred, unable to start the server');
    console.error(err);
  });
