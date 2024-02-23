import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "./Avatar";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

// eslint-disable-next-line react/prop-types
const MenuDropdown = ({ theme }) => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  //   const toggleOpen = useCallback(() => {
  //     setIsOpen(value => !value)
  //   }, [])

  const signOut = () => {
    logOut();
  };
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        {/* Aircnc btn */}
        <div
          className={`hidden md:block text-sm font-semibold py-3 px-4 rounded-full ${
            theme ? "hover:bg-black" : "hover:bg-neutral-100"
          } transition cursor-pointer`}
        >
          AirCNC your home
        </div>
        {/* Dropdown btn */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className={`absolute rounded-xl shadow-md w-[40vw] md:w-3/4 ${
            theme ? "dark" : "bg-white"
          } overflow-hidden right-0 top-12 text-sm`}
        >
          <div className="flex flex-col cursor-pointer">
            <Link
              to="/"
              className={`block md:hidden px-4 py-3 ${
                theme ? "hover:bg-black" : "hover:bg-neutral-100"
              } transition font-semibold`}
            >
              Home
            </Link>
            {user ? (
              <>
                <Link 
                to="dashboard"
                  className={`px-4 py-3 ${
                    theme ? "hover:bg-black" : "hover:bg-neutral-100"
                  } transition font-semibold cursor-pointer`}
                >
                  Dashboard
                </Link>
                <div
                  onClick={signOut}
                  className={`px-4 py-3 ${
                    theme ? "hover:bg-black" : "hover:bg-neutral-100"
                  } transition font-semibold cursor-pointer`}
                >
                  Logout
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className={`px-4 py-3  ${
                    theme ? "hover:bg-black" : "hover:bg-neutral-100"
                  } transition font-semibold`}
                >
                  Login
                </Link>
                <Link
                  to="/sign-up"
                  className={`px-4 py-3  ${
                    theme ? "hover:bg-black" : "hover:bg-neutral-100"
                  } transition font-semibold`}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuDropdown;
