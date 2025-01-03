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

					<button
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
				Math @ UWaterloo
			</div>
			<div className="socials-intro">
				<div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "10px"}}>
					<FontAwesomeIcon icon={faEnvelope} />
					<div>
						bradley.yang023@gmail.com
					</div>
				</div>
				<div>
					<FontAwesomeIcon style={{ color: "#00538C" }} icon={faExternalLink} />&nbsp;<a className="hyperlink-social" href="https://www.linkedin.com/in/bradley-yang/" target="_blank">LinkedIn</a>
				</div>
				<div>
					<FontAwesomeIcon style={{ color: "#00538C" }} icon={faExternalLink} />&nbsp;<a className="hyperlink-social" href="https://www.github.com/bradleyyang" target="_blank">GitHub</a>
				</div>
			</div>
			<div className="overview-topics">
				<h3 className="subheading-homepage">Experience</h3>
				<div onClick={() => { navigate("/experience/haneco") }} className="subheading-overview">
					<p className="subheading-title">Haneco Lighting Canada Inc.</p>
					<p className="job-title">Sales and Marketing Intern</p>
					<p>Cold called potential clients and scheduled lighting/EV charging audits for commercial facilities.</p>
				</div>
				<div className="see-more">
					<div onClick={() => { navigate("/experience") }} className="see-more-button">
						See More
					</div>
				</div>

				<h3 className="subheading-homepage">Projects</h3>
				<div onClick={() => { navigate("/projects/memo") }} className="subheading-overview">
					<p className="subheading-title">Memo</p>
					<p>
						Automates budget tracking by saving receipts with a snapshot of your camera.
						Built with Python and OpenCV, it uses Python-tesseract to read text from a picture.
						This project won the best beginner prize at McGill University's annual hackathon.
					</p>
				</div>
				<div onClick={() => { navigate("/projects/sparksense") }} className="subheading-overview">
					<p className="subheading-title">SparkSense</p>
					<p>Predicts likelihood of wildfires for cities in Canada and sends warnings via Twilio's SMS messaging API. It leverages the power of the Gemini LLM.</p>
				</div>
				<div className="see-more">
					<div onClick={() => { navigate("/projects") }} className="see-more-button">
						See More
					</div>
				</div>


			</div>
			<div className="footer">
				<p>&copy; 2025 Bradley Yang</p>
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
