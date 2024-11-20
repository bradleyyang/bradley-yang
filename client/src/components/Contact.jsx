import { useNavigate } from "react-router-dom";

const Contact = () => {
    const navigate = useNavigate();

    return (
        <div>
            <button
                onClick={() => {
                    navigate('/');
                }}
            >
                Go to home
            </button>
        </div>
    );
};

export default Contact;
