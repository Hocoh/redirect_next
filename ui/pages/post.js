import React, { Component } from 'react'

import storeWrapper from "../HOC/storeWrapper/storeWrapper"
// import {connect} from 'react-redux';

import PostTemplate from "../components/PostTemplate/PostTemplate"


import Head from 'next/head'

import axios from "axios"

const localImage =  "/static/assets/illustration/city_night.jpg"

 class Post extends Component {

  state= { 
    category:"",
    date:"" ,
    headline:"",
    abstract:"here an abstract",
    image_id:"",
    image_name:"",
    title:"",
    body:""    
  }

    componentDidMount(){       
      var postFullPath = window.location.pathname.substr(1) ; 
      var slashIndex=  (postFullPath.indexOf('/')) +1;
      var articleTitle =  postFullPath.substr(slashIndex)  

      let scope = this; 
      
      axios.get(`https://hoco-server.herokuapp.com/post/${articleTitle}`)
          .then(function (res) {        
              var {date, headline, abstract, image_id, image_name, text: { title, body}, category} = res.data[0]
              scope.setState({
                date,
                headline,
                abstract, 
                image_id,
                image_name,
                title,
                body,
                category
              })
            })
          .catch(function (error) {
               (error);
          });
    }

  PostTemplate = ()=> ( 
    <div>
        {this.state.body}
    </div>
  )

  render() {
    return ( 

      <div>
          
          <Head prefix="og: http://ogp.me/ns#"> 
                
          {/*
            og:url, 
            og:type, 
            og:title, 
            og:image, 
            og:description, 
            fb:app_id
          */}
 

      <title> Test 02 </title> 
      <meta property="og:type" content="article" />       
      <meta property="og:title" content="Your website is your GQ - Horizon Coding" /> 
      <meta property="og:url" content="https://hoco-next.herokuapp.com/digital-marketing/website-digital-gq" />
      <meta property="og:description" 
        content="Build a memorable digital marketing in your website and growth your business ;) !" />
      <meta property="og:site_name" content="IMDb" />
       <meta property="og:locale" content="en_US" />
      
      <meta property="og:locale:alternate" content="en_GB" />
      <meta property="og:locale:alternate" content="fr_FR" />
      <meta property="og:image" content={localImage} />
      <meta property="og:image:width" content="1600" />
      <meta property="og:image:height" content="800" /> 
      <meta property="og:image:alt" content="A city light in night" />

      <meta property="og:site_name" content="Horizon Coding : build awesome business hubs" />
      <meta property="article:section" content="Your digital website is our GQ" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@hoco-next" />
      <meta name="twitter:title" content="Your website is your GQ - Horizon Coding" />
      <meta name="twitter:description" content="Build a memorable digital marketing in your website and growth your business ;) !" />
      <meta name="twitter:image" content={localImage}/>

      {/* 
      <meta property="og:image:secure_url" content="https://secure.example.com/ogp.jpg" />
      <meta property="og:image:type" content="image/jpeg" /> 
       */}  
    
    </Head>
        <div>
              {this.state.body ? 
                  // <div> here a blog </div>
              <PostTemplate
                  category={this.state.category}
                  date={this.state.date}
                  headline={this.state.headline}
                  abstract={this.state.abstract}
                  image_id={this.state.image_id}
                  image_name={this.state.image_name}
                  title={this.state.title}
                  body={this.state.body}
              /> 
                : 
                <div> loading ...</div>}
        </div> 

        </div>
    )
  }
}
 
export default storeWrapper(Post)