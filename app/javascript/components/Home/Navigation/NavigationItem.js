import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'

const NavigationItem = (props) => {

	const delay = 1000 * (props.list_id)

	return (

		<li className="col-md-3 navigation-item">

			<CSSTransition in={props.appear}
										 appear={true}
										 timeout={1500}
										 classNames="navigation-translate">
				<span className="navigation-item-id" style={{transitionDelay: `${delay}ms`}}><strong>0{props.list_id}</strong></span>
			</CSSTransition>

			<span className="navigation-item-title"><strong>{props.title}</strong></span>
		</li>
	)
}

export default NavigationItem