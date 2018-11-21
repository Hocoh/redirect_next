import React, { Component } from "react";
import style from "./PaginationMain.module.css"

import storeWrapper from "../../../../../HOC/storeWrapper/storeWrapper"
import { connect } from 'react-redux';
import Router from "next/router"

class PaginationMain extends Component {

        changePage= (pageTargeted) => {
            // window.location.pathname = `blog/page/${pageTargeted}`
          Router.push(decodeURIComponent(`blog/page/${pageTargeted}`))


        }

        static getDerivedStateFromProps(props, state){
            console.log("typeof pagetargeted: ", typeof(props.blog.pageTargeted))
            return props
        }

    render(){

        this.props.blog.pageTargeted === "undefined" ? this.props.blog.pageTargeted =1 : null;

    if(this.props.blog.pageTargeted == 1 ){

        console.log( "ONE")

        return(<div className={style.pagination_main_list} >
            <span
            className={style.page_details} >
            </span>
            <span
            className={style.current} >
                {this.props.blog.pageTargeted}
            </span>
            <a
             onClick={() => this.changePage(this.props.blog.pageTargeted+1)}
            className={style.page} >
                {this.props.blog.pageTargeted +1}
            </a >

            <a
            onClick={() => this.changePage(this.props.blog.pageTargeted+2)}
            className={style.page} >
                {this.props.blog.pageTargeted+2}
            </a >
            <a
            onClick={() => this.changePage(this.props.blog.pageTargeted+3)}
            className={style.page} >
                {this.props.blog.pageTargeted+3}
            </a >
            <a
            onClick={() => this.changePage(this.props.blog.pageTargeted+4)}
            className={style.page} >
                {this.props.blog.pageTargeted+4}
            </a >
        </div>)
    }

    else if(this.props.blog.pageTotal === 2 ){

        console.log( "TWO")

        return (<div className={style.pagination_main_list} >
            <span className={style.page_details} >
            </span>
             <a
             onClick={() => this.changePage(this.props.blog.pageTargeted -1)}
             className={style.page} >
                {this.props.blog.pageTargeted -1}
            </a>

            <span
            className={style.current} >
                {this.props.blog.pageTargeted}
            </span>

             <a
             onClick={() => this.changePage(this.props.blog.pageTargeted +1)}
             className={style.page} >
                {this.props.blog.pageTargeted +1}
            </a>
            <a
            onClick={() => this.changePage(this.props.blog.pageTargeted +2)}
            className={style.page} >
                {this.props.blog.pageTargeted +2}
            </a >
            <a
            onClick={() => this.changePage(this.props.blog.pageTargeted +3)}
            className={style.page} >
                {this.props.blog.pageTargeted +3}
            </a >
        </div>)
    }

    else if((this.props.blog.pageTotal - this.props.blog.pageTargeted) === 1 ){

        console.log( "THREE")

        return(
        <div  className={style.pagination_main_list} >
               <span className={style.page_details} >
            </span>
              <a
              onClick={() => this.changePage(this.props.blog.pageTargeted-3)}
              className={style.page} >
                {this.props.blog.pageTargeted-3}
            </a >

            <a
            onClick={() => this.changePage(this.props.blog.pageTargeted-2)}
            className={style.page} >
                {this.props.blog.pageTargeted-2}
            </a >

             <a
             onClick={() => this.changePage(this.props.blog.pageTargeted -1)}
             className={style.page} >
                {this.props.blog.pageTargeted-1}
            </a>


             <span
            className={style.current} >
                {this.props.blog.pageTargeted}
            </span>


             <a
             onClick={() => this.changePage(this.props.blog.pageTargeted+1)}
             className={style.page} >
                {this.props.blog.pageTargeted+1}
            </a>

        </div>)
    }

    else if((this.props.blog.pageTotal - this.props.blog.pageTargeted) === 0 ){

        console.log( "FOUR")


        return(
        <div  className={style.pagination_main_list} >
               <span className={style.page_details} >
            </span>
              <a
              onClick={() => this.changePage(this.props.blog.pageTargeted-4)}
              className={style.page} >
                {this.props.blog.pageTargeted-4}
            </a >

            <a
            onClick={() => this.changePage(this.props.blog.pageTargeted-3)}
            className={style.page} >
                {this.props.blog.pageTargeted-3}
            </a >

             <a
             onClick={() => this.changePage(this.props.blog.pageTargeted-2)}
             className={style.page} >
                {this.props.blog.pageTargeted-2}
            </a>



             <a
             onClick={() => this.changePage(this.props.blog.pageTargeted-1)}
             className={style.page} >
                {this.props.blog.pageTargeted-1}
            </a>

             <span
            className={style.current} >
                {this.props.blog.pageTargeted}
            </span>

        </div>)
    }
    // pageNumber - currentPage

    // else  if((currentPage >= 3 || (pageNumber - currentPage)===2 )
    //          && (currentPage - pageNumber) !== 1 ){

        else  if(this.props.blog.pageTargeted >= 3 || (this.props.blog.pageTotal - this.props.blog.pageTargeted)===2){

                console.log( "ONE")

        console.log("main pagination style reached")
        return(
        <div className={style.pagination_main_list} >
            <span className={style.page_details} >
            </span>
            <a
            onClick={() => this.changePage(this.props.blog.pageTargeted-2)}
            className={style.page} >
                {this.props.blog.pageTargeted-2}
            </a >

             <a
             onClick={() => this.changePage(this.props.blog.pageTargeted-1)}
             className={style.page} >
                {this.props.blog.pageTargeted-1}
            </a>

            <span
            className={style.current} >
                {this.props.blog.pageTargeted}
            </span>


             <a
             onClick={() => this.changePage(this.props.blog.pageTargeted +1)}
             className={style.page} >
                {this.props.blog.pageTargeted+1}
            </a>
            <a
            onClick={() => this.changePage(this.props.blog.pageTargeted+2)}
            className={style.page} >
                {this.props.blog.pageTargeted+2}
            </a >
        </div>)
    }

    else {
        return <p>loading</p>
    }
}}

const mapStateToProps = (state) => {
    return {
      blog:  state.blogReducer
    }
  }

const paginationMainContainer = connect(mapStateToProps)(PaginationMain)
export default storeWrapper(paginationMainContainer)
