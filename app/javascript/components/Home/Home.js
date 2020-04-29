import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Introduction from './Introduction/Introduction'
import Navigation from './Navigation/Navigation'

class Home extends Component { 

	constructor() { 

		super()

		this.state = {
			appear: true,
			navigation_items: [
				{ id: 1, title: 'MY WORK' },
				{ id: 2, title: 'ABOUT ME' },
				{ id: 3, title: 'MY FOCUSES' },
				{ id: 4, title: 'CONTACT INFO' }
			]
		}
	}

	toggleAppearance = () => {
		this.setState({
			appear: !this.state.appear
		})
	}

	render() {

		const {appear, navigation_items} = this.state

		return (
			<div className="page">
				<Introduction appear={appear}/>
				<Navigation appear={appear} navigation_items={navigation_items}/>
			</div>
		)
	}
}

export default Home
// https://medium.com/@jakemacnaughton/restful-routing-in-react-a90ea9e3a2fc