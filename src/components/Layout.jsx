import PropTypes from "prop-types";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-[1300px]">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
