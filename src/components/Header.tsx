import { FC, useRef } from "react";
import { AppLogo, DropDownWhite, MenuBar } from "../assets";
import { NavLink } from "react-router-dom";
import { useWindowWidth } from "../utils/useWindowWidth";

export const NavBar: FC = () => {

    const windowWidth = useWindowWidth()
    const navLinksRef = useRef<HTMLUListElement>(null);

    const showMenu = () => {
        if (navLinksRef.current) {
            navLinksRef.current.classList.toggle("open");
        }
    };

    return (
        <>
            <header className="app__header">
                <nav className="app__header__nav">
                    <AppLogo />
                    <ul ref={navLinksRef} className="app__header__nav__links">
                        <li>
                            <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about-us">About Us</NavLink>
                        </li>
                        <li>
                            <NavLink to="/services" className="dropdown">
                                <span>Products and Services</span>
                                <DropDownWhite />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/sustainability">Sustainability</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact-us">Contact Us</NavLink>
                        </li>
                    </ul>
                    {windowWidth <= 850 ?
                        <div onClick={showMenu} className="menubar">
                            <MenuBar />
                        </div>
                        : null
                    }
                </nav>
            </header>
        </>
    )
}