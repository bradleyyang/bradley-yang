import { useNavigate } from "react-router-dom";

const AethosLabs = () => {
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
                aethos labs experience
            </div>
        </div>
    );
};

export default AethosLabs;