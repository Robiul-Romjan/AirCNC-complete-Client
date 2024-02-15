import { BiSolidUserCircle } from "react-icons/bi";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const Avatar = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            {
                user ? <img className="w-8 h-8 rounded-full" src={user && user.photoURL ? user.photoURL : "" } alt="user" /> :<BiSolidUserCircle className="w-8 h-8" />
            }
            
        </div>
    );
};

export default Avatar;