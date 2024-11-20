import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="navbar">
        <div className="logo">Bradley</div>
        <div className="menu">
          <button
            onClick={() => {
              navigate("/contact");
            }}
          >
            Contact
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
      <div className="introduction">
        Hello, introduction paragraph
      </div>
    </div>
  );
};

export default Home;
