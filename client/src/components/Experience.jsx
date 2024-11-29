import { useNavigate } from "react-router-dom";

const Experience = () => {
    const navigate = useNavigate();
    return (
        <div>
            <nav className="navbar">
                <button className="back-to-home" onClick={() => {
                    navigate("/");
                }}>
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
            <h3 className="subheading-homepage">Experience</h3>
            <div onClick={() => { navigate("/experience/aethoslabs") }} className="subheading-overview">
                <p className="subheading-title">Aethos Labs</p>
                <p className="job-title">Software Developer Intern</p>
                <p>Incoming full stack developer intern for Winter 2025.</p>
            </div>
            <div onClick={() => { navigate("/experience/haneco") }} className="subheading-overview">
                <p className="subheading-title">Haneco Lighting Canada Inc.</p>
                <p className="job-title">Sales and Marketing Intern</p>
                <p>Cold called potential clients and scheduled lighting/EV charging audits for commercial facilities.</p>
            </div>
        </div>
    );
};

export default Experience;