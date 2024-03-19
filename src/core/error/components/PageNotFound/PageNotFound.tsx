import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg mb-8">Sorry, The page you are looking for does not exist.</p>
        <button onClick={goToHome} className="bg-[#1B0757] text-white font-bold py-2 px-4 rounded">Go to Home</button>
    </div>
  );
};

export default PageNotFound;