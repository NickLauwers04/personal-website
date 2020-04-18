import React, { Component } from 'react'
import MyImage from 'images/profile.png'

const Introduction = () => {
	return (
		<div>
			<div className="row">

				<div className="col-md-6">

					<div>
						<div className="introduction-title">

							<div className="introduction-title-container">
								<span className="introduction-text">HE</span>
								<span className="introduction-text">LLO.</span>
							</div>

							<div className="underline"></div>
						</div>
					</div>
					
					<span class="secondary-span">I'm </span>
					<span class="primary-span">Nick Lauwers</span>
					<span class="secondary-span">, an </span>
					<span class="primary-span">Engineer</span>
					<span class="secondary-span">, </span>
					<span class="primary-span">Pilot</span>
					<span class="secondary-span">, and </span>
					<span class="primary-span">Fitness Enthusiast </span>
					<span class="secondary-span">based in San Francisco</span>
				</div>

				<div className="col-md-6">
					<img src={MyImage} />
				</div>
			</div>
		</div>
	)
}

export default Introduction