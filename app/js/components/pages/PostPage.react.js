/*
Posts Page
*/
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';


class PostPage extends Component {
    constructor(props) {
	super(props)
	this.state = {
	    data: [],
	    date: '',
	    content: ''
	}
    }
    generateDate() {
	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	    preDate = this.state.date;
	    var postDate = preDate.split(/\s*\-\s*/g),
	    monthNumber = parseInt(postDate[1]) -1,
	    monthName = months[monthNumber],
	    day = postDate[2].split('T'),
	    day = day[0];
	
	var postDate = monthName + ' ' + day + ', ' + postDate[0]; 
	this.setState({date: postDate})
    }
    generateContent() {
	console.log(this.state.content);
	var preContent = this.state.content;

	    //preContent.replace(/(\r\n|\n|\r)/gm, '</p><p>');
	
	//this.setState({content: postContent})
    }
    fetchPost() {
	var postUrl = this.props.params.urlParam,
	    fetchUrl = 'http://localhost:3005/blogapi/post/' + postUrl;
	$.ajax({
	    url: fetchUrl,
	    dataType: 'json',
	    cash: false,
	    success: function(doc) {
		console.log(doc)
		this.setState({data: doc});
		this.setState({date: doc.data});
		this.setState({content: doc.content});
		this.generateDate();
		this.generateContent();
	    }.bind(this),
	    error: function(xhr, status, err) {
		console.error(this.props.url, status, err.toString())
	    }.bind(this)
	})

    }
    
    componentDidMount() {
	this.fetchPost();
    }
    
    render() {

	return (	    
	    	<div className="main row">
		<div className="posts col-md-6 col-md-offset-3">
		<ul className="blogsList">
		<li className="menuItem">

		<h1>{this.state.data.title}</h1>

		<h3>{this.state.data.subtitle}</h3>
		<p>{this.state.date}</p><br />
		<div className="post-content">
		<ReactMarkdown source={this.state.data.content} />
		</div>

		<div className="spot-im-frame-inpage" data-post-id={this.state.url}></div>
		</li>
	        </ul>
		</div>
		</div>

	)
    }
}

export default PostPage;
