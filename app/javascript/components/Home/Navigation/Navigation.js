import React, { Component } from 'react'
import NavigationItem from './NavigationItem'

class Navigation extends Component { 

	constructor(props) { 
		super(props)
	}

	render() {

		const navigation_items = this.props.navigation_items.map( (data) => {
			return <NavigationItem key={data.id} list_id={data.id} title={data.title}/>
		})

		return (
			<ol className="navigation-items">
				{navigation_items}
			</ol>
		)
	}
}

export default Navigation