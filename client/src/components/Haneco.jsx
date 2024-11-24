import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';

const Haneco = () => {
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
            <div>
                My internship at Haneco involved reaching out to businesses by means of cold emails and phone calls.
                I collaborated and worked with 5 interns and we managed to secure over 200 appointments (both lighting and EV charging audits combined)
                over the span of 4 months. I developed communication and prospecting skills, especially with how to effectively negotiate with facility/operations managers.
                Furthermore, I worked with CRM systems in order to track calls and prospective leads. Ultimately, my outreach efforts established pipelines leading to business opportunities valued at hundreds of thousands of dollars.
            </div>
            <div style={{marginTop: "15px"}}>
                <FontAwesomeIcon style={{ color: "#00538C" }} icon={faExternalLink} />&nbsp;<a className="hyperlink-social" href="https://www.haneco.ca/" target="_blank">Learn more about Haneco</a>
            </div>
        </div>
    );
};

export default Haneco;