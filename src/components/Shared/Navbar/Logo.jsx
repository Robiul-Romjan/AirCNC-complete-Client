import { Link } from "react-router-dom";
import logoImg from "../../../assets/images/logo.png"

const Logo = () => {
    return (
        <Link className="hidden md:block" to="/">
            <img src={logoImg} alt="" height="100" width="100" />
        </Link>
    );
};

export default Logo;