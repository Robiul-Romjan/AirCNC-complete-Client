import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";
import ToggleTheme from "../components/Shared/ToggleTheme/ToggleTheme";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Main = () => {
  const {theme} = useContext(AuthContext)
  return (
    <div className={`relative h-full w-full ${theme ? "dark" : "bg-white text-black"}`}>
      <Navbar />
      <div className="pt-28 pb-20">
        <Outlet />
      </div>
      <div className="fixed top-3/4 right-3">
        <ToggleTheme />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
