import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "./Avatar";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import HostRequestModal from "../../Modals/HostRequestModal";
import useAuth from "../../../hooks/useAuth";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";

// eslint-disable-next-line react/prop-types
const MenuDropdown = ({ theme }) => {
  const { user, logOut, currentUser, setCurrentUser, loadingNav } =
    useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const { makeUserHost } = useAuth();

  const signOut = () => {
    logOut();
    setCurrentUser(null);
  };

  const handleModal = (email) => {
    makeUserHost(email);
    setModal(false);
  };

  const handleRole = () => {
    if(!user){
     return toast("You must be login or register first")
    }else{
      setModal(true)
    }
    
  }

  if (loadingNav) {
    return <BeatLoader color="red" />;
  }

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        {/* Aircnc btn */}

        <div
          className={`hidden md:block text-sm font-semibold py-3 px-6 rounded-full ${
            theme ? "hover:bg-black" : "hover:bg-neutral-100"
          } transition`}
        >
          {currentUser?.role === "Host" ? (
            ""
          ) : (
            <button
              className="cursor-pointer"
              onClick={handleRole}
            >
              AirCNC your home
            </button>
          )}
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
      {modal && (
        <HostRequestModal
          modalHandler={handleModal}
          isOpen={modal}
          closeModal={setModal}
          email={user?.email}
        />
      )}
    </div>
  );
};

export default MenuDropdown;
