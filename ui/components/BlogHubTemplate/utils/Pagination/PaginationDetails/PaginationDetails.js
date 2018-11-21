import React from 'react';
import { connect } from 'react-redux';
import style from './PaginationDetails.module.css';

import storeWrapper from '../../../../../HOC/storeWrapper/storeWrapper';

// const PaginationDetails = (props)=> {

//   return (<div className={style.pagination_nav} >
//             <span
//             className={style.page_details} >
//               details -  page {props.blog.pageTargeted} of {props.blog.pageTargeted}
//             </span>
//         </div>
//   )
// }

const PaginationDetails = ({ blog }) => (<div className={style.pagination_nav}>
  <span
    className={style.page_details}
  >
              Page
    {' '}
    {blog.pageTargeted}
    {' '}
of
    {' '}
    {blog.pageTotal}
  </span>
</div>
);


const mapStateToProps = state => ({
  blog: state.blogReducer,
});

const paginationDetailsContainer = connect(mapStateToProps)(PaginationDetails);
export default storeWrapper(paginationDetailsContainer);
