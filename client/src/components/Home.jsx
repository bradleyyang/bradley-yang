import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
					navigate('/contact');
				}}
      >
        Go to Contact
      </button>
    </div>
  );
};

export default Home;
