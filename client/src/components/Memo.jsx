import { useNavigate } from "react-router-dom";
import memodemo from "../assets/images/memodemo.jpg";
import memoscreenshot from "../assets/images/memoscreenshot.jpg";
import memologo from "../assets/images/memologo.jpg";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                <h1 style={{ display: "flex", justifyContent: "center" }}>
                    Memo Project
                </h1>
                <div style={{marginBottom: "10px"}}>
                    <FontAwesomeIcon icon={faGithub} />
                    &nbsp;
                    <a className="repo-link" href="https://www.github.com/bradleyyang/McHacksApp" target="_blank">GitHub Repository</a>
                </div>
                <div style={{ marginBottom: "20px" }}>The inspiration for an app like Memo stems from a desire to address common challenges people face in budgeting and expense tracking.
                    The idea originates from observing the inconvenience of manual data entry or the difficulty in keeping an accurate record of daily expenses.
                    Additionally, the increasing reliance on digital receipts and the need for a more intuitive and efficient solution to manage finances are key motivators.
                </div>
            </div>
            <div>
                <img src={memodemo} alt="memo-demo" style={{width: "50%"}}/>
                <div style={{marginTop: "20px", marginBottom: "20px"}}>
                    Memo takes snapshots of receipts using the webcam, processing the data and returning insightful feedback on spending habits.
                    Details include time and location of purchases, price of purchases, and name of stores.
                    Memo then displays the information in a visually appealing user interface for users to easily analyze their spending.
                </div>

                <img src={memoscreenshot} alt="memo-screenshot" style={{width: "50%"}}/>
            </div>
        </div>
    );
};

export default Memo;