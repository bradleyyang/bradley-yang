import { useNavigate } from "react-router-dom";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StockPredictor = () => {
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
            <h1 style={{ display: "flex", justifyContent: "center" }}>Stock Predictor</h1>
            <div style={{ marginBottom: "10px" }}>
                <FontAwesomeIcon icon={faGithub} />
                &nbsp;
                <a className="repo-link" href="https://github.com/bradleyyang/stock-predictor" target="_blank">GitHub Repository</a>
            </div>
            <div style={{ marginBottom: "20px" }}>
                Building a stock predictor with scikit-learn and Python.
            </div>
        </div>
    );
};

export default StockPredictor;