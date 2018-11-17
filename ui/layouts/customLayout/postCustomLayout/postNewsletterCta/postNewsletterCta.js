import React, { Component } from 'react';
import style from "./postNewsletterCta.module.css";

import axios from "axios";

const mailBlue = "/static/assets/illustration/post/mail_blue.png"
export default class postNewsletterCta extends Component {

    state = { 
        name:"",
        email:""
    }

    onChange= (e)=>{ 
        e.preventDefault();
        this.setState({[e.target.name] : e.target.value})
    }

    confirmForm = (e) => { 
        e.preventDefault();
        var listName = "Newsletter";
        var email_address = this.state.email
        axios.post("https://hoco-server.herokuapp.com/mailchimp/addmember", {  
            email_address,
            listName
        })
        this.setState({email:""});
        Object.keys(this.state).map((key, index) => {
            this.setState({[key] : ""});
        });  
    }

    render() {
        return (
            <div className={style.newsletter_layout_grid} >
                <div className={style.newsletter_text} >
                    <div className={style.headline} >
                            Vous souhaitez davantage de contenu ? 
                    </div>
                    <div className={style.paragraph} >
                           Recevez un récit hebodomadaire pour vous maintenir en forme sur le chemin
                           du marketing digital ! 
                    </div>
                    <form onSubmit={this.confirmForm} className={style.form}>
                            <input 
                            onChange={this.onChange}
                            value={this.state.name}
                            type="text" 
                            name="name" 
                            placeholder="name" 
                            className={style.form_name} />
                                
                            <input 
                            onChange={this.onChange}
                            value={this.state.email}
                            type="text" 
                            name="email" 
                            placeholder="email" 
                            className={style.form_email} />
    
                                <input type="submit" value="I'm ready!" name="submit" id={style.form_confirm} />
                            
                    </form>
                </div>

                <div className={style.newsletter_image_container} >
                        <img className={style.newsletter_image_content}  src={mailBlue} alt="mail image: join our newsletter !"/>
                </div>
            </div>
        );
    }
}
 