import React, { Component } from 'react';
import './Home.css';
class Home extends Component {
   
    render(){
         let heading = "Soaring to new heights";
         let subheading = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, se do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
        return (
            <div>
         <section className="hero">
         <div className="hero-body">
         <div className="container">
         <h1 className="tittle">{ heading }</h1>
         <div className="is-two-thirds column is-paddingless">
         <h2 className="subtittle is-4">{ subheading }</h2>
         </div>
         <a className="button is-large is-primary" id="learn">Learn more</a>
         </div>
         </div>
         </section>
        </div>
        );
    }
}

export default Home;