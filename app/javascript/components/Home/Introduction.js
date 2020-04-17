import React, { Component } from 'react'
import MyImage from 'images/profile.png'

const Introduction = () => {
	return (
		<div>
			<div className="row">

				<div className="col-md-6">

					<h1>HELLO.</h1>

					<h2>
						I'm <strong>Nick Lauwers</strong>, an <strong>Engineer</strong>,
						<strong>Pilot</strong>, and <strong>Fitness Fanatic</strong> based
						in San Francisco.
					</h2>
				</div>

				<div className="col-md-6">
					<img src={MyImage} />
				</div>
			</div>
		</div>
	)
}

export default Introduction