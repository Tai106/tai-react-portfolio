import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					src={require('../../assets/images/profile-pic.jpg')}
					alt="about-me"
					className="photo"
				/>
			</div>
			<div>
				<p>
				Solution-driven Full Stack Developer, with a background in architectural design, familiar with a wide range of programming utilities and languages. 
                Knowledgeable of backend and frontend development requirements, and a collaborative team player with excellent technical abilities.
				</p>
				<p>
					
				</p>
			</div>
		</section>
	);
}

export default About;