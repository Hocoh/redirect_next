import React from 'react'
import style from "./PaginationDetails.module.css"

import storeWrapper from "../../../../../HOC/storeWrapper/storeWrapper"
import {connect} from 'react-redux';

// const PaginationDetails = (props)=> {

//   return (<div className={style.pagination_nav} >
//             <span 
//             className={style.page_details} >
//               details -  page {props.blog.pageTargeted} of {props.blog.pageTargeted}
//             </span>  
//         </div>
//   )
// }

const PaginationDetails = ({blog})=> {

  return (<div className={style.pagination_nav} >
            <span 
            className={style.page_details} >
              Page {blog.pageTargeted} of {blog.pageTotal}
            </span>  
        </div>
  )
}



const mapStateToProps = (state) => {
  return { 
    blog:  state.blogReducer
  }
}

const paginationDetailsContainer = connect(mapStateToProps)(PaginationDetails)
export default storeWrapper(paginationDetailsContainer)