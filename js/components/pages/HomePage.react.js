/*
 * HomePage
 * This is the first thing users see of our App
 */

import { asyncChangeProjectName, asyncChangeOwnerName } from '../../actions/AppActions';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


class Post extends Component {
    generateUrl() {
	var preUrl = this.props.title,
	    postUrl = preUrl.replace(/\s+/g, '-').toLowerCase();
	
	this.setState({url: postUrl})	
    }
    generateDate() {
	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	    preDate = this.props.date,
	    postDate = preDate.split(/\s*\-\s*/g),
	    monthNumber = parseInt(postDate[1]) -1,
	    monthName = months[monthNumber],
	    day = postDate[2].split('T'),
	    day = day[0];
	
	var postDate = monthName + ' ' + day + ', ' + postDate[0]; 
	console.log('finish  ', postDate);
	this.setState({date: postDate})
    }
    generateContent() {
	var preContent = this.props.content,
	    postContent = preContent.slice(0,450);
	this.setState({content: postContent});
    }
    getInitialState() {
	return {url: '',
		date: '',
		content: ''};
    }
    render() {
	return (
	    	<div class="main">
		<div class="posts">
		<ul class="blogsList">
		<li class="menuItem col-md-2">
		<a href={this.state.url}>
		<h2>{this.props.title}</h2>
		</a>
		<h3>{this.props.subtitle}</h3>
		<span>{this.state.date}</span>
		<span>comments</span>
		<span>more</span>
		<div>{this.state.url}</div>
		<p>{this.state.content}</p>
		
	    </li>
	        </ul>
		</div>
		</div>
	)
    }
}


class PostList extends Component {
    render() {
	var blogPosts = this.props.data.map(function(post, index){
	    
	    return (
		    <Post title={post.title} subtitle={post.subtitle} date={post.date} content={post.content}/>
	    );
	});
    }
}

class HomePage extends Component {
    loadPostsFromServer() {
	$.ajax({
	    url: 'http://localhost:3005/blogapi/posts',
	    dataType: 'json',
	    cash: false,
	    success: function(data) {
		this.setState({data: data});
	    }.bind(this),
	    error: function(xhr, status, err) {
		console.error(this.props.url, status, err.toString())
	    }.bind(this)
	});
    }
    getInitialState() {
	return {data: []};
    }
    componentDidMount() {
	this.loadPostsFromServer();
    }
    render() {
    const dispatch = this.props.dispatch;
    const { projectName, ownerName } = this.props.data;
    return (
      <div>
        <h1>Hello World!</h1>
        <h2>This is the demo for the <span className="home__text--red">{ projectName }</span> by <a href={'https://twitter.com/' + ownerName} >@{ ownerName }</a></h2>
        <label className="home__label">Change to your project name:
          <input className="home__input" type="text" onChange={(evt) => { dispatch(asyncChangeProjectName(evt.target.value)); }} defaultValue="React.js Boilerplate" value={projectName} />
        </label>
        <label className="home__label">Change to your name:
          <input className="home__input" type="text" onChange={(evt) => { dispatch(asyncChangeOwnerName(evt.target.value)); }} defaultValue="mxstbr" value={ownerName} />
        </label>
            <Link className="btn" to="/readme">Setup</Link>

	<PostList />
      </div>
    );
  }
}

// REDUX STUFF

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(HomePage);
