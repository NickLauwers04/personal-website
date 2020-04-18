import React, { Component } from 'react'

const NavigationItem = (props) => {
	return (
		<li>
			<span className="navigation-item-id"><strong>0{props.list_id}</strong></span>
			<span className="navigation-item-title"><strong>{props.title}</strong></span>
		</li>
	)
}

export default NavigationItem