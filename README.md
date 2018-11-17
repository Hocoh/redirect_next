# hoco_next_launch

 *the server is linked to localhost:3200.
 you can launch the program with "yarn dev"'s command*
 
 

I'm trying to fetch the URL entered in the browser to make some redirect in my NextJS custom server. This error occurs only in dev mode, no in production mode, so is it normal ? there is some modification to do on the devmode to handle that ?

I have tried to use the pathname object. Sadly when I first entered an URL in my address bar, my pathname firstly returns:

    /_next/static/chunks/0.js

I have tried with req.rawHeaders. But my console returns nothing till the 15th trial:

    req.rawHeaders path in next.server.js :

    req.rawHeaders path in next.server.js :

    req.rawHeaders path in next.server.js :

    req.rawHeaders path in next.server.js :

    req.rawHeaders path in next.server.js :

    req.rawHeaders path in next.server.js :

    req.rawHeaders path in next.server.js :

    req.rawHeaders path in next.server.js :

    req.rawHeaders path in next.server.js :

    req.rawHeaders path in next.server.js :

    req.rawHeaders path in next.server.js :

    req.rawHeaders path in next.server.js :

    req.rawHeaders path in next.server.js :

    req.rawHeaders path in next.server.js :

    req.rawHeaders path in next.server.js :

    req.rawHeaders path in next.server.js : /pathTargeted // work ! but a little bit in late ..

I have also tried with req.headers.referer but even, the first path returns is not the path I have entered in the URL.

The result is that I fall in a 404 error. So how avoid this and always fetch the real address entered in the browser ? That exactly my problem.

Here my reactjs snippet:

import React, {Component} from "react"; 
import style from "./BlogHubTemplate.module.css";

import storeWrapper from "../../HOC/storeWrapper/storeWrapper"
import {connect} from 'react-redux';

import Router from 'next/router'


class BlogHubTemplate extends Component { 

    redirectPost = (postCategory, postTitle) => { 
        Router.replace(`/${postCategory}/${postTitle}`) 
    }

here my custom next.server js:

app.prepare().then(() => {
 createServer((req, res) => {
 // Be sure to pass `true` as the second argument to `url.parse`.
 // This tells it to parse the query portion of the URL.
 const parsedUrl = parse(req.url, true)
 const { pathname, query } = parsedUrl; 

 console.log("req.headers in next.server.js : ", req.headers.referer.substr(22))
 console.log("req.rawHeaders path in next.server.js : ", req.rawHeaders[11].substr(22))

Any hint would be great, thanks
