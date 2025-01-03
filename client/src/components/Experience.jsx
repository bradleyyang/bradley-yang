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
                            navigate(-1);
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
            <h3 className="subheading-homepage">Experience</h3>
            <div onClick={() => { navigate("/experience/haneco") }} className="subheading-overview">
                <p className="subheading-title">Haneco Lighting Canada Inc.</p>
                <p className="job-title">Sales and Marketing Intern</p>
                <p>Cold called potential clients and scheduled lighting/EV charging audits for commercial facilities.</p>
            </div>
        </div>
    );
};

export default Experience;