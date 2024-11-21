import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faExternalLink } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
	const navigate = useNavigate();
	return (
		<div className="homepage">
			<nav className="navbar">
				<div className="logo">
					<a href="/" style={{ textDecoration: "none", color: "inherit" }}>
						Bradley Yang
					</a>
				</div>
				<div className="menu">
					<button style={{ marginRight: "5px" }}
						onClick={() => {
							navigate("/experience");
						}}>
						Experience
					</button>

					<button style={{ marginRight: "5px" }}
						onClick={() => {
							navigate("/projects");
						}}
					>
						Projects
					</button>
					<button
						onClick={() => {
							navigate("/contact");
						}}
					>
						Contact
					</button>
				</div>
			</nav>
			<hr style={{marginTop: "15px"}}/>
			<div className="introduction">
				<p>Hi, I'm&nbsp;</p>
				<p className="text-effect">Bradley Yang</p>
			</div>
			<div>
				Math @ UWaterloo, incoming Software Developer at &nbsp;<FontAwesomeIcon style={{color: "#00538C"}} icon={faExternalLink} />&nbsp;<a className="hyperlink-social" href="https://www.aethoslabs.com/" target="_blank">Aethos Labs</a>.
			</div>
			<div className="socials-intro">
				<FontAwesomeIcon icon={faEnvelope} /> &nbsp; bradley.yang023@gmail.com &nbsp; &nbsp; <FontAwesomeIcon style={{color: "#00538C"}} icon={faExternalLink} />&nbsp;<a className="hyperlink-social" href="https://www.linkedin.com/in/bradley-yang/" target="_blank">LinkedIn</a>
				&nbsp; &nbsp; <FontAwesomeIcon style={{color: "#00538C"}} icon={faExternalLink} />&nbsp;<a className="hyperlink-social" href="https://www.github.com/bradleyyang" target="_blank">GitHub</a>
			</div>
			<div className="overview-topics">
				<h3 className="subheading-homepage">Projects</h3>
				<ul className="listoverview-projects">
					<li>Memo</li>
					<li>SparkSense</li>
					<li>Restaurant Roulette</li>
					<li>Distractisaurus</li>
					<li>lfkjdslkf</li>
					<li>fdlksjfds</li>
					<li>lkdfjslj</li>
					<li>fldksjflds</li>
					<li>flkdsjfls</li>
				</ul>
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
