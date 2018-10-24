import React from 'react';

const HomePageComponent = () => {
    return (
      <div>
 <div className="split left">
        <div className="centered">
        <h3>  <span style= {{fontFamily: 'GT-W-Normal'}}>YouX</span>Portfolios</h3>
        <p style={{color: '#3F71AE'}}>Feedback tailored for your design portfolio by professional experts. </p>
        <br></br>
        <button className="buttonLearn"> Learn More</button>

 </div>

        </div>
        <div className="split right">
          <figure className="tabBlock">
          <ul className="tabBlock-tabs">
            <li className="tabBlock-tab is-active">Sign Up</li>
            <li className="tabBlock-tab">Sign In</li>
          </ul>
          <div className="tabBlock-content">
            <div className="tabBlock-pane">
           <h1>Create an account</h1>
           <h2>You're on your way to creating a stellar portfolio!</h2>
           <input className= "leftTextInput"type="text" name="first"  placeholder="First Name"/>
           <input className= "rightTextInput"type="text" name="last" placeholder="Last Name"/>
           <input className="emailTextInput" type="text" name="email" placeholder="Email Address"/>
           <input className="leftTextInput" type="text" name="password" placeholder="Password"/>
           <input className="rightTextInput" type="text" name="password" placeholder="Confirm Password"/>
          <button className="buttonSign"> Sign Up</button>

            </div>
            <div className="tabBlock-pane">
            <h1>Sign on to your account</h1>
           <h2>Sign in to view the progress of your portfolio and design
principles and receive feedback from professionals.</h2>
<input className="emailTextInput" type="text" name="email" placeholder="Email Address"/>
<input className="emailTextInput" type="text" name="email" placeholder="Password"/>
<button className="buttonSign"> <a href= "/portfolios">Log In</a></button>


            </div>
          </div>
        </figure>

      </div>
      </div>
    );
}
export default HomePageComponent;