import React, {Component} from 'react'
 import style from "./Pagination.module.css";
import storeWrapper from "../../../../HOC/storeWrapper/storeWrapper"
import {connect} from 'react-redux';

import exenv from "exenv"
import PaginationMainContainer from "./PaginationMain/PaginationMain";
import PaginationDetailsContainer from "./PaginationDetails/PaginationDetails";

class Pagination extends Component {

    changePage= (pageTargeted) => {  
        window.location.pathname = `blog/page/${pageTargeted}`
    }

    firstPage = ()  => {
        if(this.props.blog.pageTotal > 5 && (this.props.blog.pageTargeted - 1) > 2){ 
        return <div id={style.bounday_first} className={style.pagination_boundaries} onClick={ () =>  this.changePage(1)}>  ◀ first </div>
    }}

    lastPage  = ()  => { 
        if(this.props.blog.pageTotal > 5 && (this.props.blog.pageTotal - this.props.blog.pageTargeted) > 2){ 
        return <div  id={style.bounday_last} className={style.pagination_boundaries} onClick={ () =>  this.changePage(this.props.blog.pageTotal)} > last ▶ </div>
    }}

    paginationMainRender = ()=> {
        return (
        <div className={style.paginationMainRender} >
            {exenv.canUseDOM ?  this.firstPage() : <p>loading</p> }

            <PaginationMainContainer />

            {exenv.canUseDOM ?  this.lastPage() : <p>loading</p> }

        </div>
    )
}
    render(){       
        return (<div className={style.pagination_nav}  >  
                    <PaginationDetailsContainer
                    className={style.pagination_details}
                    />
                    { 
                        this.props.blog.pageTotal > 1 ? 
                            this.paginationMainRender() 
                            : 
                            null
                                    
                    }
                </div>
        )
    }  
}
 
const mapStateToProps = (state) => {
    return { 
      blog:  state.blogReducer
    }
  }
  
const paginationContainer = connect(mapStateToProps)(Pagination)
export default storeWrapper(paginationContainer)