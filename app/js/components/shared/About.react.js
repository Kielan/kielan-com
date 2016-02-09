import React, { Component } from 'react';

class About extends Component {
    render() {
	return (
		<div className="about">

		<img className="profilePic" src="img/kielan.jpg" alt="Kielan Lemons"></img>

		<h1>Kielan Lemons</h1>
		<div className="bio"></div>
		<div className="bio-quote">
		<p>"Imagination is its own form of courage"</p>
		<p>-Frank Underwood</p>
		</div>
		<div className="about-links">
		<a href="https://www.instagram.com/kielan_lemons/"><i className="fa fa-instagram"></i><span>Instagram</span></a>
		<a href="https://twitter.com/KielanLemons"><i className="fa fa-twitter-square"></i><span>Twitter</span></a>
		<a href="https://github.com/Kielan"><i className="fa fa-github-square"></i><span>Github</span></a>
		</div>
	    </div>
	)
    }
}

export default About;
