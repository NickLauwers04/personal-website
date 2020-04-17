import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Introduction from './Introduction'

class Home extends Component { 

	constructor() { 

		super()

		this.state = {
			navigation_items: [
				{ id: 1, title: 'MY WORK' },
				{ id: 2, title: 'ABOUT ME' },
				{ id: 3, title: 'MY FOCUSES' },
				{ id: 4, title: 'CONTACT INFO' }
			]
		}
	}

	render() {
		return (
			<div>

				<Introduction/>

				<Link to="/" className="index-button">
	         index
	      </Link>
	      
				<Link to="/login" className="login-button">            
				  <div className="login">Log In</div>
				</Link>
			</div>
		)
	}
}

export default Home
// https://medium.com/@jakemacnaughton/restful-routing-in-react-a90ea9e3a2fc