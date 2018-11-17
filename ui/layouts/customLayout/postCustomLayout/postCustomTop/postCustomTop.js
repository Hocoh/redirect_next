import React from "react"; 
import style from "./postCustomTop.module.css"

import Menu from "../../../layoutComponent/Menu/Menu"; 
import Signature from "../../../layoutComponent/AboveFold/Signature/Signature"; 
import NewsletterCta from "../../../layoutComponent/Newsletter/Newsletter"

export default () => {
  return (
    <div className={style.layout_grid} >

        <div className={style.menu} >
            <Menu />
        </div>
        <div className={style.headline}> 
            <Signature
            className={style.signature}
            />
            <p className={style.story_grabber}>
                Taste a good story 
            </p>

            <div className={style.newsletter_cta} >
                <NewsletterCta/>
            </div>

        </div>    
    </div>
  )
}

