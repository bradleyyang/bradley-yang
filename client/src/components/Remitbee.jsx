import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';


const Remitbee = () => {
    const navigate = useNavigate();
    return (
        <div>
            <nav className="navbar">
                <button className="back-button" onClick={() => {
                    navigate(-1);
                }}>
                    Back
                </button>
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
            <div>
                Working on an AI stock/currency predictor dashboard.
            </div>
            <div style={{ marginTop: "15px" }}>
                <FontAwesomeIcon style={{ color: "#00538C" }} icon={faExternalLink} />&nbsp;<a className="hyperlink-social" href="https://www.remitbee.com/" target="_blank">Learn more about Remitbee</a>
            </div>
        </div>
    );
};

export default Remitbee;