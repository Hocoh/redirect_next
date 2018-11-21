import { Component } from 'react';
import axios from 'axios';
// import BlogTemplate from "../components/BlogTemplate/BlogTemplate"
import { connect } from 'react-redux';
import ContainerBlogHubTemplate from '../components/BlogHubTemplate/BlogHubTemplate';
import storeWrapper from '../HOC/storeWrapper/storeWrapper';


import {
  clearBlogPageTargetedAction,
  setBlogPageTargetedAction,
  setBlogPageTotalAction,
  setPostsFetchedAction,
} from '../state/actions';


class Blog extends Component {
  state= {
    headline: {
      title: 'Blog',
      subtitle: 'De la ressource pour vos idées',
      abstract: 'Prenez une pause à base de marketing digital, de brand identity ainsi que de design.',
    },
    // blog posts state
    posts: '',
    count: '',
    currentPage: '',
  }


  componentDidMount() {
    let pageTargeted = decodeURIComponent(window.location.pathname).substr(11);
    pageTargeted = Number(pageTargeted);
    pageTargeted === 0 ? pageTargeted = 1 : null;
    this.props.setBlogPageTargetedAction(pageTargeted);

    const url = decodeURIComponent(`https://hoco-server.herokuapp.com/blog/page/"${pageTargeted}"`);
    const scope = this;
    axios.get(url)
      .then((res) => {
        const { postsTotal, posts } = res.data;
        // var currentPage = window.location.pathname.substr(11);
        let pageTotal;
        postsTotal <= 8 ? pageTotal = 1 : pageTotal = (postsTotal / 8);
        pageTotal = Math.ceil(pageTotal);

        scope.props.setBlogPageTotalAction(pageTotal);
        scope.props.setPostsFetchedAction(posts);
        // this.props.setPostFetchedAction()
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentWillUnmount = () => {
    this.props.clearBlogPageTargetedAction();
  }


  render() {
    return (
        <div>
            <ContainerBlogHubTemplate/>
        </div>
    );
  }
}


const mapStateToProps = state => ({
  headline: state.headline,
  blog: state.blogReducer,
});

const mapDispatchToProps = {

  // set blog posts data
  setBlogPageTargetedAction,
  setBlogPageTotalAction,
  setPostsFetchedAction,

  // clear blog post targeted => return to undefined
  clearBlogPageTargetedAction,
};

const blogContainer = connect(mapStateToProps, mapDispatchToProps)(Blog);
export default storeWrapper(blogContainer);
