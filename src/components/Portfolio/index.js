import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: '',
			description:
				'',
			image: '',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Node.js',
				'Express & NoSQL',
				'React.js',
				'MERN Stack',
			],
			github: '',
			deployed: '',
		},
		{
			name: '',
			description:
				'',
			image: '',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Node.js',
				'Handlebars.js',
				'Express & Sequelize',
				
			],
			github: '',
			deployed: '',
		},
		{
			name: '',
			description:
				'',
			image: '',
			technologies: ['HTML/CSS', 'JavaScript', 'jQuery'],
			github: '',
			deployed: '',
		},
		{
			name: '',
			description:
				'',
			image: '',
			technologies: [
				'JavaScript',
				'MongoDB',
				'Node.js',
				'Express',
			],
			github: '',
			deployed: '',
		},
		{
			name: '',
			description:
				'',
			image: '',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: '',
			deployed: '',
		},
		{
			name: '',
			description:
				'',
			image: 'password-generator-image.png',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: '',
			deployed: '',
		},
		{
			name: '',
			description:
				'',
			image: '',
			technologies: ['HTML/CSS', 'JavaScript', 'Express.js'],
			github: '',
			deployed: '',
		},
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[5]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;