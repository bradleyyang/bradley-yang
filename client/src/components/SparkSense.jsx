import { useNavigate } from "react-router-dom";
import sparksenseDashboard from "../assets/images/sparksense-dashboard.png";
import sparksenseDemo from "../assets/images/sparksense-demo.png";

const SparkSense = () => {
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
                SparkSense project
            </div>
            <div>
                <img src={sparksenseDashboard} alt="sparksense dashboard" />
                <img src={sparksenseDemo} alt="sparksense demo" />
            </div>
        </div>
    );
};

export default SparkSense;