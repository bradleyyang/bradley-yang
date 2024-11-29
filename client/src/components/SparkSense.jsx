import { useNavigate } from "react-router-dom";
import sparksenseDashboard from "../assets/images/sparksense-dashboard.png";
import sparksenseDemo from "../assets/images/sparksense-demo.png";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SparkSense = () => {
    const navigate = useNavigate();
    return (
        <div>
            <nav className="navbar">
                <button className="back-to-home"
                    onClick={() => {
                        navigate('/');
                    }}
                >
                    Back to home
                </button>
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
            <hr style={{ marginTop: "15px", marginBottom: "15px" }} />
            <h1 style={{ display: "flex", justifyContent: "center" }}>SparkSense Project</h1>
            <div style={{marginBottom: "10px"}}>
                    <FontAwesomeIcon icon={faGithub} />
                    &nbsp;
                    <a className="repo-link" href="https://github.com/bradleyyang/SparkSense" target="_blank">GitHub Repository</a>
                </div>
            <div style={{ marginBottom: "20px" }}>
                SparkSense is an early wildfire detection tool that informs and alerts first responders to take action with ease.
                It expedites the process of responding to emergency wildfires.
            </div>
            <div style={{display: "flex", flexDirection: "row"}}>
                <img style={{width: "48%", marginRight: "4%"}} src={sparksenseDashboard} alt="sparksense dashboard" />
                <img style={{width: "48%"}} src={sparksenseDemo} alt="sparksense demo" />
            </div>
        </div>
    );
};

export default SparkSense;