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
            <h3 className="subheading-homepage">Projects</h3>
            <div onClick={() => { navigate("/projects/memo") }} className="subheading-overview">
                <p className="subheading-title">Memo</p>
                <p>
                    Automates budget tracking by saving receipts with a snapshot of your camera.
                    Built with Python and OpenCV, it uses Python-tesseract to read text from a picture.
                    This project won the best beginner prize at McGill University's annual hackathon.
                </p>
            </div>
            <div onClick={() => { navigate("/projects/sparksense") }} className="subheading-overview">
                <p className="subheading-title">SparkSense</p>
                <p>Predicts likelihood of wildfires for cities in Canada and sends warnings via Twilio's SMS messaging API. It leverages the power of the Gemini LLM.</p>
            </div>
        </div>
    );
};

export default Projects;