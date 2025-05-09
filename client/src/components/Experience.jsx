import { useNavigate } from "react-router-dom";


const Experience = () => {
    const navigate = useNavigate();
    return (
        <div>
            <nav className="navbar">
                <button className="back-button" onClick={() => {
                    navigate("/");
                }}>
                    Home
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
        </div>
    );
};

export default Experience;