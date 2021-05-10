import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles'
import './index.css'
import profileImage from './assets/images.jpg'

class App extends Component {
   state = { cFlag: false };

   toggle = () => {
      this.setState({ cFlag: !this.state.cFlag });
   }
   render() {

      return (
         <div>
            <img src={profileImage} alt='profile Image' className='profileImage'></img>
            <h1>Hello !!</h1>
            <p>I'm Soundarakumar Ponnusami, Working as a Software Engineer</p>
            {this.state.cFlag ? (<div> <p>I started my career as a Trainee in the year of 2016 after completing Bachelor of Engineering from KPR Institute of Engineering and Technology, Coimbatore</p>
               <p>On the personal front, I was born and bought up in Coimbatore, Currently living with my parents and elder brother.</p>
               <p>In my free time you will find me playing a sport, cycling and to explore new place. </p>
               <button onClick={this.toggle}>Show Less</button></div>) : (<button onClick={this.toggle}>Show More</button>)}
         <hr />
         <Projects />
         <hr />
         <SocialProfiles />
         </div>

      )
   }
}

export default App;