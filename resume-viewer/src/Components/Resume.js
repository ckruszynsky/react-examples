import React, { Component } from 'react';


class Resume extends Component {


  mapEducationToListItem(e){
    return  <div key={e.school} className="row item">
               <div className="twelve columns">
                  <h3>{e.school}</h3>
                  <p className="info">{e.degree} <span>&bull;</span> <em className="date">{e.graduated}</em></p>
                  <p>
                    {e.description}
                  </p>
               </div>
            </div>
  }

  mapWorkToListItem(e){
    return  <div key={e.company} className="row item">
               <div className="twelve columns">
                  <h3>{e.company}</h3>
                  <p className="info">{e.title} <span>&bull;</span> <em className="date">{e.years}</em></p>
                  <p>
                    {e.description}
                  </p>
               </div>
            </div>
  }

  render() {
    const { education, work } = this.props.data;
    let educationListItem = education.map((e) => this.mapEducationToListItem(e));
    let workListItem = work.map((w) => this.mapWorkToListItem(w));

    return (
      <section id="resume">
          <div className="row education">
              <div className="three columns header-col">
                 <h1><span>Education</span></h1>
              </div>
              <div className="nine columns main-col">
               { educationListItem }
              </div>
           </div>
      <div className="row work">
         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>
         <div className="nine columns main-col">
            { workListItem }
         </div>
      </div> 
      <div className="row skill">
         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>
         <div className="nine columns main-col">

            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
            </p>

				<div className="bars">
				   <ul className="skills">
					   <li><span className="bar-expand photoshop"></span><em>Photoshop</em></li>
             <li><span className="bar-expand illustrator"></span><em>Illustrator</em></li>
						<li><span className="bar-expand wordpress"></span><em>Wordpress</em></li>
						<li><span className="bar-expand css"></span><em>CSS</em></li>
						<li><span className="bar-expand html5"></span><em>HTML5</em></li>
            <li><span className="bar-expand jquery"></span><em>jQuery</em></li>
					</ul>
				</div>
			</div> 
      </div>
   </section>     
    );
  }
}

export default Resume;
