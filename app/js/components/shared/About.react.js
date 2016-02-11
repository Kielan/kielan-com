import React, { Component } from 'react';
import { copyToClipboardMsg } from '../../actions/AppActions';

class About extends Component {
    attachListener() {
	document.getElementById("copyButton").addEventListener("click", function() {
	    copyToClipboardMsg(document.getElementById("copyTargetAdress"), "msg");
});
    }
    componentDidMount() {
	this.attachListener();
    }
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
		<a target="_blank" aria-label="Twitter" href="https://twitter.com/KielanLemons"><i className="fa fa-twitter-square"></i></a>
		<a target="_blank" aria-label="Instagram" href="https://www.instagram.com/kielan_lemons/"><i className="fa fa-instagram"></i></a>
		<a target="_blank" aria-label="Github" href="https://github.com/Kielan"><i className="fa fa-github-square"></i></a>
		<span id="copyTargetAdress">ki.lemons@gmail.com</span> <button aria-label="mail" id="copyButton"><i className="fa fa-envelope"></i></button>
	    </div>
	    </div>
	)
    }
}

export default About;
