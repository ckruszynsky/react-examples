import React, { Component } from 'react';


class About extends Component {
  render() {
    const { name, phone, website, bio, address, resumedownload } = this.props.data;

    return (
    <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src="images/profilepic.jpg" alt="" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{bio}
            </p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						        <span>{ name }</span><br/>
						        <span>{address.street}<br/>
                      {address.city}, {address.state} {address.zip}
                     </span><br/>
						   <span>{ phone }</span><br/>
                <span>{ website }</span>
					   </p>

               </div>

               <div className="columns download">
                  <p>
                     <a href={ resumedownload } className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>
   </section>      
    );
  }
}

export default About;
