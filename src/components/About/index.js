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
				Solution-driven Full Stack web Developer, with a background in architectural design, familiar with a wide range of programming utilities and languages. Knowledgeable of backend and frontend development requirements.
				I recently obtained a certificate in full stack web development from Columbia University where I developed my skills in HTML, CSS, JavaScript, React.js, APIs, Node.js, Express.js, and MySQL. On a recent project with a  
				team of 3, I applied my knowlege of JavaScript, HTML, CSS, Express.js, Node, APIs, and Heroku to create a web application dedicated to artist, that helps to showcase their work, connect with fellow artist in the industry, 
				and stay updated on the latest designs. As a proud team player focused on achieving project objectives with speed and accuracy, I am eager to utilize my skills, and join a team where I am able to further my knowledge and contribute to company success. 
				</p>
				
			</div>
		</section>
	);
}

export default About;