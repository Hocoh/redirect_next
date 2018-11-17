import React from "react"; 
import "../../reset.css"
import style from "./postCustomLayout.module.css"

import {connect} from 'react-redux';

 const  postCustomLayout = ({children, sideMenuActive}) =>  ( 

    <div className={sideMenuActive ? style.body_hidden: style.body_displayed}
    >
            <div className={style.children}>
                {children}
            </div>
    </div>
) 

export default postCustomLayout