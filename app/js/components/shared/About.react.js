import React, { Component } from 'react';

class About extends Component {
    render() {
	return (
		<div className="about col-md-3 hidden-xs">

		<img className="profilePic" src="img/kielan.jpg" alt="Kielan Lemons"></img>

		<h1>Kielan Lemons</h1>
		<div className="bio"></div>
		<div className="bio-quote">
		<p>"Imagination is its own form of courage"</p>
		<p>-Frank Underwood</p>
		</div>
		<div className="about-links">
		<a aria-label="Twitter" href="https://twitter.com/KielanLemons"><i className="fa fa-twitter-square"></i></a>
		<a aria-label="Instagram" href="https://www.instagram.com/kielan_lemons/"><i className="fa fa-instagram"></i></a>
		<a aria-label="Github" href="https://github.com/Kielan"><i className="fa fa-github-square"></i></a>
		</div>
	    </div>
	)
    }
}

export default About;
