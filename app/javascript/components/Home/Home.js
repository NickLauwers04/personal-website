import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import Introduction from './Introduction'
import Navigation from './Navigation/Navigation'

class Home extends Component { 

	constructor() { 

		super()

		this.state = {
			appear_line: true,
			navigation_items: [
				{ id: 1, title: 'MY WORK' },
				{ id: 2, title: 'ABOUT ME' },
				{ id: 3, title: 'MY FOCUSES' },
				{ id: 4, title: 'CONTACT INFO' }
			]
		}
	}

	toggleAppear = () => {
		this.setState({
			appear_line: !this.state.appear_line
		})
	}

	render() {

		const {appear_line, navigation_items} = this.state

		return (
			<div className="page">

				<CSSTransition
					in={appear_line}
					appear={true}
					timeout={1000}
					classNames="fade">
					<Introduction appear_line={appear_line}/>
				</CSSTransition>

				<Navigation navigation_items={navigation_items}/>
			</div>
		)
	}
}

export default Home
// https://medium.com/@jakemacnaughton/restful-routing-in-react-a90ea9e3a2fc