import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';


const Haneco = () => {
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
                Conducted cold outreach to potential clients through email and phone, managing leads and tracking outreach using CRM systems.
                This process helped establish sales pipelines and generate new business opportunities.
            </div>
            <div style={{ marginTop: "15px" }}>
                <FontAwesomeIcon style={{ color: "#00538C" }} icon={faExternalLink} />&nbsp;<a className="hyperlink-social" href="https://www.haneco.ca/" target="_blank">Learn more about Haneco</a>
            </div>
        </div>
    );
};

export default Haneco;