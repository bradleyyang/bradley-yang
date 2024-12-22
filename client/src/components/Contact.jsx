import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../Contact.css";
import "../App.css";
import axios from "axios";


const Contact = () => {
    const navigate = useNavigate();

    const [buttonText, setButtonText] = useState("Submit");

    const [formData, setFormData] = useState({
        email: "",
        name: "",
        message: "",
    });



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setButtonText("Submitted");

        const API_URL = process.env.REACT_APP_API_URL || "https://bradley-yang.onrender.com";
        console.log("API URL:", API_URL);
        axios.post(`${API_URL}/contact`, formData)
            .then(function (response) {
                console.log("Response:", response.data);
            })
            .catch(function (error) {
                console.error("Error:", error.response ? error.response.data : error.message);
            });

        setFormData({
            email: "",
            name: "",
            message: "",
        });

        setTimeout(() => {
            setButtonText("Submit");
        }, 1000);
    };





    return (
        <div className="contact-page">
            <nav className="navbar">
                <button className="back-button" onClick={() => {
                    navigate("/");
                }}>
                    Home
                </button>
                <div className="menu">
                    <button style={{ marginRight: "5px" }} onClick={() => navigate("/experience")}>
                        Experience
                    </button>
                    <button style={{ marginRight: "5px" }} onClick={() => navigate("/projects")}>
                        Projects
                    </button>
                    <button style={{ marginRight: "5px" }} className="active">Contact</button>
                </div>
            </nav>
            <hr style={{ marginTop: "15px", marginBottom: "15px" }} />
            <div className="form-container">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                        className="input-field"
                        placeholder="Email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required="true"
                        style={{ height: "25px" }}
                    />
                    <input
                        className="input-field"
                        placeholder="Name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required="true"
                        style={{ height: "25px" }}
                    />
                    <textarea
                        className="input-field"
                        placeholder="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required="true"
                        style={{ minHeight: "100px", height: "100px", resize: "vertical" }}
                    ></textarea>
                    <button className="submit-button" type="submit">
                        {buttonText}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;