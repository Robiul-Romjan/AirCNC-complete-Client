import { useContext } from "react";
import Container from "../Container";
import Logo from "./Logo";
import MenuDropdown from "./MenuDropdown";
import Search from "./Search";
import { AuthContext } from "../../../providers/AuthProvider";


const Navbar = () => {
    const {theme} = useContext(AuthContext);

    return (
        <div className={`fixed w-full z-10 shadow-md ${theme ? "dark" : "bg-white text-black"}`}>
            <div className='py-4 border-b-[1px]'>
                <Container>
                    <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
                      <Logo />
                      <Search />
                      <MenuDropdown theme={theme} />
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Navbar;