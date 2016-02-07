/*
Posts Page
*/
import React, { Component } from 'react';


class PostPage extends Component {
    constructor(props) {
	super(props)
	this.state = {
	    //params: '',
	    data: []
	}
    }
    
    fetchPost() {
	var postUrl = this.props.params.urlParam,
	    fetchUrl = 'http://localhost:3005/blogapi/post/' + postUrl;
	$.ajax({
	    url: fetchUrl,
	    dataType: 'json',
	    cash: false,
	    success: function(data) {
		console.log('booga booga' + data.date)
		this.setState({data: data});
	    }.bind(this),
	    error: function(xhr, status, err) {
		console.error(this.props.url, status, err.toString())
	    }.bind(this)
	})
		//console.log("booga booga" + this.state.data.date) 
    }
    renderDate() {

    }
    componentDidMount() {
	this.fetchPost();
	this.renderDate();
    }
    
    render() {
	//var post = this.props.pzfzmx

	return (	    
	    	<div className="main row">
		<div className="posts col-md-6 col-md-offset-3">
		<ul className="blogsList">
		<li className="menuItem">

		<h1>{this.state.data.title}</h1>

		<h3>{this.state.data.subtitle}</h3>
		<span>{this.state.data.date}</span><br />
		<span className="post-content">{this.state.data.content}</span>

		<div className="spot-im-frame-inpage" data-post-id={this.state.url}></div>
		</li>
	        </ul>
		</div>
		</div>

	)
    }

}

export default PostPage;
