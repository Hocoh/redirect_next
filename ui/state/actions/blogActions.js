import { 
    SET_BLOG_PAGE_TARGETED,
    CLEAR_BLOG_PAGE_TARGETED,
    SET_BLOG_PAGE_TOTAL,
    SET_POSTS_FETCHED
} from "../actionTypes"; 
 
 


export const setBlogPageTargetedAction= (pageTargeted) => { 
    return {
        type: SET_BLOG_PAGE_TARGETED,
        pageTargeted
      }
}

export const clearBlogPageTargetedAction= () => { 
    return {
        type: CLEAR_BLOG_PAGE_TARGETED
      }
}


 
export const setBlogPageTotalAction= (pageTotal) => { 
    return {
        type: SET_BLOG_PAGE_TOTAL,
        pageTotal
      }
}


export const setPostsFetchedAction= (postsFetched) => { 
    return {
        type: SET_POSTS_FETCHED,
        postsFetched
      }
}
