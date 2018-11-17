import React from 'react';
import style from "./PostTemplate.module.css";
import copy from 'copy-to-clipboard';

const facebook = "/static/assets/social/icon_general/facebook.svg";
const twitter = "/static/assets/social/icon_general/twitter.svg"
const hyperlink = "/static/assets/social/icon_post/hyperlink.png";



import moment from "moment"
 
export default ({ date, image_id, image_name,  title, body, category}) => { 

var background_image={ 
    backgroundImage: "url( "+  `https://drive.google.com/uc?export=view&id=${image_id}`  +" )"
}

var bodyStringified = body.toString()

const createMarkup ={ 
    dangerouslySetInnerHTML:  {__html: bodyStringified}
}
 
var copyArticleUrl=  () => {
        const toCopy =window.location.href;
        copy(toCopy);
        console.log(toCopy + " copied");
  }
 
  return (
    <div className={style.post_grid} >
          
        <div         
        className={style.post_image_container}
        style={background_image}
        > 
        </div>

        <div className={style.post_extra} >
            <div className={style.post_extra_date}> {moment(date).format('D. MMM.  YYYY')} </div>  
            <div className={style.post_extra_social} > 
            <a 
            target="_blank"
            href={`https://twitter.com/intent/tweet?text=${title}, un article fort intéressant pour affiner votre marketing digital avec Horizon Coding http://horizoncoding.fr/${category}/${title}!`}>
                    <img 
                    className={style.post_social_icon}
                    src={twitter} alt="twitter"/>     </a> {/* social media sharing API  */}   
            <a 
            target="_blank"
            href={`https://www.facebook.com/sharer/sharer.php?u=https://hoco-next.herokuapp.com/post`}>
                    <img 
                    className={style.post_social_icon}
                    src={facebook} alt="facebook"/>             
            </a>

                <img 
                onClick={copyArticleUrl} 
                className={style.post_social_icon} 
                src={hyperlink} 
                alt="hyperlink"/>
             
                  
            </div>
        </div>

        <div className={style.post_text} > 
            <div            
            className={style.post_body}
            {...createMarkup} />              
        </div>
        <div className={style.post_bottom_social} >  
            <a 
            target="_blank"
            href={`https://twitter.com/intent/tweet?text=${title}, un article fort intéressant pour affiner votre marketing digital avec Horizon Coding http://horizoncoding.fr/${category}/${title}!`}>

                    <img 
                    className={style.post_social_icon}
                    src={twitter} 
                    alt="twitter"/> 
            </a>
            <a 
            target="_blank"
            href="">
                    <img 
                    className={style.post_social_icon}
                    src={facebook} 
                    alt="facebook"/>                    
            </a>


    
                <img 
                onClick={copyArticleUrl} 
                className={style.post_social_icon} 
                id={hyperlink}
                src={hyperlink} 
                alt="hyperlink"/>
             
 
                  
        </div>
    </div>
  )
}