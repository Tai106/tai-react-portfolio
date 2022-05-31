import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'Book Browser',
			description:
				'Application which allows users to search for a book (using its ISBN#, title, author, or genre) through Book Browser, they will receive information to make an educated decision before selecting their next read',
			image: 'Book-Browser.JPG',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'WebApi',
				'jquery',
			],
			github: 'https://github.com/glgberat/project1.git',
			deployed: 'https://glgberat.github.io/project1/',
		},
		{
			name: 'Dinnection',
			description:
				'Dinnection is a full-stack social media web app for artists to be able to showcase their work, get connected to others in the industry, and be up to date with the latest designs.',
			image: 'dinnection.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Amazon s3',
				'Handlebars.js',
                'Node.js',
				'Express & Sequelize',
                'Mysql',
				
			],
			github: 'https://github.com/Sensus0/dinnection.git',
			deployed: 'https://nameless-harbor-84311.herokuapp.com/',
		},
		{
			name: 'Travela',
			description:
				'This project provides a desired trip location itinerary for the user. That information will then display the Hotels, Restuarants, Attractions, and ratings for multiple locations using info from external APIs.',
			image: 'travela.JPG',
			technologies: [
				'REACT', 
			    'JavaScript', 
				'MongoDB', 
			    'Mongoose', 
				'PWA', 
				'MERN',

			],
			github: 'https://github.com/AlessandroB96/Travela.git',
			deployed: 'http://travelamap.herokuapp.com/',
		},
		{
			name: 'Tech Stack Blog',
			description:
				'This application allows users to create an account. additionally the user is able to create, update, delete, and view posts. The user also has the option to comment on posts.',
			image: 'tech-stack-blg.jpg',
			technologies: [
				'JavaScript',
				'Mysql',
				'Node.js',
				'Express-handlebars',
                'Sequelize',
                'Heroku',
			],
			github: 'https://github.com/Tai106/tech-stack-blog.git',
			deployed: 'https://tech-stack-blg.herokuapp.com/',
		},
		{
			name: 'Finance Budget Tracker',
			description:
				'This application allows its users to track their money both online and offline.',
			image: 'budget-tracker.JPG',
			technologies: [
                'Node.js', 
                'JavaScript',
                'Mongoose',
                'MongoDB',
                'Express.js',
                'Manifest',
                'IndexDB',
                'PWA',
            ],
			github: 'https://github.com/Tai106/finance-budget-tracker.git',
			deployed: 'https://fast-temple-54089.herokuapp.com/',
		},
		{
			name: 'Password Generator',
			description:
				'An application that generates a random password based on criteria the user selected. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript.',
			image: 'password-gen.jpg',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/Tai106/password-generator.git',
			deployed: 'https://tai106.github.io/password-generator/',
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