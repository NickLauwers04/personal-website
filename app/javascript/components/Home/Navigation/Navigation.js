import React, { Component } from 'react'
import NavigationItem from './NavigationItem'
import { CSSTransition } from 'react-transition-group'

class Navigation extends Component { 

	constructor(props) { 
		super(props)
	}

	render() {

		const appear = this.props.appear

		const navigation_items = this.props.navigation_items.map( (data) => {
			return <NavigationItem key={data.id} 
														 list_id={data.id} 
														 title={data.title}
														 appear={appear}/>
		})

		return (
			<div className="row">
				<ol className="navigation-items">
					{navigation_items}
				</ol>
			</div>
		)
	}
}

export default Navigation