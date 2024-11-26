import { useNavigate } from "react-router-dom";
import memodemo from "../assets/images/memodemo.jpg";
import memoscreenshot from "../assets/images/memoscreenshot.jpg";
import memologo from "../assets/images/memologo.jpg";

const Memo = () => {
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
                Memo project
            </div>
            <img src={memodemo} alt="memo-demo" />
            <img src={memoscreenshot} alt="memo-screenshot" />
            <img src={memologo} alt="memo-logo" />
        </div>
    );
};

export default Memo;