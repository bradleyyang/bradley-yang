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
                During my internship at Haneco, I focused on business development by reaching out to potential clients through cold emails and phone calls.
                Collaborating with a team, I enhanced my communication and prospecting skills, particularly in negotiating with facility and operations managers.
                I also utilized CRM systems to manage leads and track outreach efforts, helping to establish pipelines that generated significant business opportunities.
            </div>
            <div style={{ marginTop: "15px" }}>
                <FontAwesomeIcon style={{ color: "#00538C" }} icon={faExternalLink} />&nbsp;<a className="hyperlink-social" href="https://www.haneco.ca/" target="_blank">Learn more about Haneco</a>
            </div>
        </div>
    );
};

export default Haneco;