import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';


const AethosLabs = () => {
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
            <div>
                I will be working as a full stack developer intern at Aethos Labs this Winter 2025.
            </div>
            <div style={{ marginTop: "15px" }}>
                <FontAwesomeIcon style={{ color: "#00538C" }} icon={faExternalLink} />&nbsp;<a className="hyperlink-social" href="https://www.aethoslabs.com/" target="_blank">Learn more about Aethos Labs</a>
            </div>
        </div>
    );
};

export default AethosLabs;