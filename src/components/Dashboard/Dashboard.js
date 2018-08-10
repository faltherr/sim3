import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            search: ''
        }
        this.onInputChange = this.onInputChange.bind(this)
    }

    onInputChange(event) {
        this.setState({ search: event.target.value })
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.fetchPosts(this.state.search)
        this.setState({ search: '' })
    }

    render() {
        // const posts = this.props.posts.map( post => {
        //     return (
        //         <Link to = {`/posts/${post.id}`}>

        //     )
        // })
        return (
            <div> Dashboard
                <form onSubmit={this.onFormSubmit} className="form-holder">
                    <input placeholder="search for posts"
                        className="form-input"
                        value={this.state.search}
                        onChange={this.onInputChange}
                    />
                    <button type="submit"> Search </button>
                    <button> Reset </button>
                </form>
                <input type="checkbox"></input>
                <div className="all-post-container">
                    {this.props.posts.map(post => {
                        return (
                            <Link to={`/posts/${post.id}`}>
                                <div key={post.id}>
                                    <h1> {post.title} </h1>
                                    {/* <p> {post.username} </p>
                                    <img> {user.profile_pic </img>} */}
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts,
        userposts: state.userposts
    }
}



export default connect(mapStateToProps)(Dashboard)