import React from 'react';
import imageUrl from './hero-bg.jpg';

 function About() {
  return (
    <React.Fragment>
        <div style={aboutStyle}>
        
        <p>This is a small project build using React. This is featured with default todo list items. New items could be added. You could delete the items and check for the completed items</p>
        </div>
       
    </React.Fragment>
  )
}


const aboutStyle={

 
  backgroundImage:'url('+ imageUrl +')',
  backgroundSize: 'cover',
  overflow: 'hidden',
  textAlign: 'center',
  marginTop: '150px',
  top: '50%',
  left: '50%',
  fontSize: '20px'

}
export default About;
