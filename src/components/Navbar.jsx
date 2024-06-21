import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1
        className="h-14 p-5 flex items-center text-3xl font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
        Jotter
      </h1>
    </>
  );
};

export default Navbar;
