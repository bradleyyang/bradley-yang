import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Contact = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
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
            <div style={{width: "100%"}}>
                <form style={{display: "flex", flexDirection: "column", width: "80%", justifyContent: "center"}}>
                    <input placeholder="Email" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <input placeholder="Name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <input placeholder="Message" type="text" value={name} onChange={(e) => setName(e.target.value)} />

                    <button style={{height: "20px", width: "200px"}}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
