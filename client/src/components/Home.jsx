import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
	const navigate = useNavigate();
	return (
		<div className="homepage">
			<nav className="navbar">
				<div className="logo">Bradley</div>
				<div className="menu">
					<button
						onClick={() => {
							navigate("/contact");
						}}
					>
						Contact
					</button>
					<button
						onClick={() => {
							navigate("/projects");
						}}
					>
						Projects
					</button>
					<button
						onClick={() => {
							navigate("/experience");
						}}>
						Experience
					</button>
				</div>
			</nav>
			<div className="introduction">
				<p>Hi, I'm&nbsp;</p>
				<p className="colorful-text">Bradley Yang</p>
			</div>
			<div>
				<p>I'm a second year math student at the University of Waterloo.</p>
				<p>I'm currently working at Aethos Labs as a Software Developer.</p>
			</div>
			<div className="footer">
				<p>&copy; 2024 Bradley Yang</p>
				<p className="socials">
					<a target="_blank" href="https://github.com/bradleyyang"><FontAwesomeIcon icon={faGithub} /></a>
					<a target="_blank" href="https://linkedin.com/in/bradley-yang"><FontAwesomeIcon icon={faLinkedin} /></a>
				</p>
			</div>
		</div>
	);
};

export default Home;
