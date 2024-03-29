import React from "react";

function Footer() {
	return (
		<footer className="footer">
			<div>
				<a
					href="https://github.com/Tai106"
					target="_blank"
					rel=""
				>
					<img
						src={require("../../assets/logos/github-logo.png")}
						alt="Github"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://www.linkedin.com/in/taivon-edwards-0823b5b0"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../assets/logos/linkedin-logo.png")}
						alt="LinkedIn"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://taivonedwards1@gmail.com"
					target="email"
					rel=""
				>
					<img
						src={require("../../assets/logos/email-logo.png")}
						alt="Email"
						className="logo"
					></img>
				</a>
			</div>
		</footer>
	);
}

export default Footer;