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
					<div style={{ textDecoration: "none", color: "inherit" }}>
						Bradley Yang
					</div>
				</div>
				<div className="menu">
					<button style={{ marginRight: "5px" }}
						onClick={() => {
							navigate("/experience");
						}}>
						Experience
					</button>

					<button id="projects-button"
						onClick={() => {
							navigate("/projects");
						}}
					>
						Projects
					</button>
				</div>
			</nav>
			<hr style={{ marginTop: "15px", marginBottom: "15px" }} />
			<div style={{ fontSize: "large" }}>
				Math student at University of Waterloo
			</div>
			<div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "5px", marginTop: "10px" }}>
				<FontAwesomeIcon icon={faEnvelope} />
				<div>
					bradley (dot) yang023 (at) gmail (dot) com
				</div>
			</div>
			<div className="socials-intro">
				<div>
					<FontAwesomeIcon style={{ color: "#00538C" }} icon={faExternalLink} />&nbsp;<a className="hyperlink-social" href="https://www.linkedin.com/in/bradley-yang/" target="_blank">LinkedIn</a>
				</div>
				<div>
					<FontAwesomeIcon style={{ color: "#00538C" }} icon={faExternalLink} />&nbsp;<a className="hyperlink-social" href="https://www.github.com/bradleyyang" target="_blank">GitHub</a>
				</div>
			</div>
			<div className="overview-topics">
				<h3 className="subheading-homepage">Experience</h3>
				<div onClick={() => { navigate("/remitbee") }} className="subheading-overview">
					<p className="subheading-title">Remitbee Inc.</p>
					<p className="job-title">AI Research Intern</p>
					<p>Developed AI models to forecast financial markets.</p>
				</div>
				<div onClick={() => { navigate("/haneco") }} className="subheading-overview">
					<p className="subheading-title">Haneco Lighting Canada Inc.</p>
					<p className="job-title">Sales and Marketing Intern</p>
					<p>Learned a lot about business development, client outreach, and creating sales pipelines using CRM systems.</p>
				</div>
				<div className="see-more">
					<div onClick={() => { navigate("/experience") }} className="see-more-button">
						See More
					</div>
				</div>
			</div>
			<div className="footer">
				<p>&copy; 2025 Bradley Yang</p>
				<p className="socials">
					<a target="_blank" href="https://github.com/bradleyyang"><FontAwesomeIcon icon={faGithub} /></a>
					<a target="_blank" href="https://linkedin.com/in/bradley-yang"><FontAwesomeIcon icon={faLinkedin} /></a>
				</p>
			</div>
		</div>
	);
};

export default Home;
