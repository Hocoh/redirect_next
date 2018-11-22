import React from 'react';
import '../../reset.css';

import { connect } from 'react-redux';


import Head from 'next/head';
import style from './blogCustomLayout.module.css';


const blogCustomLayout = ({ children, title = 'title', sideMenuActive }) => (
  <div className={sideMenuActive ? style.body_hidden : style.body_displayed}>
    <div className={style.grid_wrapper}>

      <div className={style.layout_template_grid}>
        <Head>
          <title>
            {' '}
            {title}
            {' '}
          </title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>


        <div className={style.children}>
          {children}
        </div>

      </div>
    </div>
  </div>
);

export default blogCustomLayout;
