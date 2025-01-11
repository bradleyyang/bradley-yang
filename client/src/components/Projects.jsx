import { useNavigate } from 'react-router-dom';

const Projects = () => {
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
            <h3 className="subheading-homepage">Projects</h3>
            <div onClick={() => { navigate("/stock-predictor") }} className="subheading-overview">
                <p className="subheading-title">Stock Predictor</p>
                <p>Building a stock predictor with scikit-learn and Python.</p>
            </div>
        </div>
    );
};

export default Projects;