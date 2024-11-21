import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
	const navigate = useNavigate();
	return (
		<div className="homepage">
			<nav className="navbar">
				<div className="logo">
					<a href="/" style={{textDecoration: "none", color: "inherit"}}>
						Bradley Yang
					</a>
				</div>
				<div className="menu">
					<button style={{marginRight: "5px"}}
						onClick={() => {
							navigate("/contact");
						}}
					>
						Contact
					</button>
					<button style={{marginRight: "5px"}}
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
				<p className="text-effect">Bradley Yang.</p>
			</div>
			<div>
				Math student at the University of Waterloo | Incoming Software Developer at Aethos Labs
			</div>
			<div className="footer">
				<p>&copy; 2024 Bradley Yang</p>
				<p className="socials">
					<a href="mailto: bradley.yang023@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
					<a target="_blank" href="https://github.com/bradleyyang"><FontAwesomeIcon icon={faGithub} /></a>
					<a target="_blank" href="https://linkedin.com/in/bradley-yang"><FontAwesomeIcon icon={faLinkedin} /></a>
				</p>
			</div>
		</div>
	);
};

export default Home;
