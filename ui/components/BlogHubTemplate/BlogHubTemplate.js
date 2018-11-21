import React, {Component} from "react";
import style from "./BlogHubTemplate.module.css";
import Link from 'next/link';

import storeWrapper from "../../HOC/storeWrapper/storeWrapper"
import { connect } from 'react-redux';

import Router from 'next/router'

import exenv from "exenv"

import PaginationContainer from "./utils/Pagination/Pagination"

class BlogHubTemplate extends Component {



  componentDidMount(){
    console.log("router push reached: ", window.location.href )
    if (exenv.canUseDOM) {
      if(this.props.blog.pageTargeted > this.props.blog.pageTotal){
        // return window.location.pathname = "/blog"
        Router.push(decodeURIComponent(`/blog`));
      }
    }
  }

  redirectPost = (postCategory, postTitle) => {
    console.log("here category and posts: ", postCategory, postTitle)
    // return window.location.href = "http://localhost:3000/digital-marketing/website-digital-gq"
    // return window.location.pathname = `/${postCategory}/${postTitle}`

    Router.push(decodeURIComponent(`/${postCategory}/${postTitle}`));
    // <Link href={{pathname:`/${postCategory}/${postTitle}`}}></Link>
  }

  render(){
    return(
      <div className={style.blog_template_grid} >
  <div className={style.posts_grid}>
    {



      this.props.blog.postsFetched ? this.props.blog.postsFetched.map((post,index)=> {
          return(
            <article className={style.post_container} key={index}>
          <img
          onClick={() => this.redirectPost(post.category, post.text.title)}
          className={style.post_image}
          src={`https://drive.google.com/uc?export=view&id=${post.image_id}`}
          // href={post.image_id}
          />
          <h2 className={style.post_category}> {post.category} </h2>
          <h3
          onClick={() => this.redirectPost(post.category, post.text.title)}
          className={style.post_headline} > {post.headline}
        </h3>
          </article>
        )
        })
        :
    <p> blog loading </p>




    }
  </div>
    <div className={style.pagination} >
  <PaginationContainer/>
    </div>
    </div>
  )
  }
}

const mapStateToProps = (state) => {
  return {
    blog:  state.blogReducer
  }
}

const blogHubContainer = connect(mapStateToProps)(BlogHubTemplate)
export default storeWrapper(blogHubContainer)
