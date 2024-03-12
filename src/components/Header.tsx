import { FC, useRef, useState } from "react";
import { AppLogo, DropDownWhite, MenuBar } from "../assets";
import { Link, NavLink } from "react-router-dom";
import { useWindowWidth } from "../utils/useWindowWidth";
import { services } from "../data/services";
import { ServiceLinks } from "../utils/interface";

export const NavBar: FC = () => {

    const windowWidth = useWindowWidth()
    const navLinksRef = useRef<HTMLUListElement>(null);
    const [showServices, setShowServices] = useState<boolean>(false)

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
                            <NavLink onClick={showMenu} className={({ isActive }) => isActive ? "active" : ""} to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={showMenu} to="/about">About Us</NavLink>
                        </li>
                        <li onClick={() => setShowServices(!showServices)} className="dropdown__links">
                            <NavLink to="/services" className="dropdown">
                                <span>Products and Services</span>
                                <DropDownWhite />
                            </NavLink>
                            {windowWidth >= 850 ?
                                <div className="services__dropdown__desktop">
                                    {services.map((service: ServiceLinks, index: number) =>
                                        <Link key={index} to={`${service.url}`}>{service.name}</Link>
                                    )}
                                </div>
                                : null
                            }
                        </li>
                        {windowWidth < 850 ?
                            <>
                                {showServices ?
                                    <div className="services__dropdown__mobile">
                                        {services.map((service: ServiceLinks, index: number) =>
                                            <Link onClick={() => {
                                                setShowServices(!showServices)
                                                showMenu()
                                            }} key={index} to={`${service.url}`}>{service.name}</Link>
                                        )}
                                    </div>
                                    : null
                                }
                            </>
                            : null
                        }
                        <li>
                            <a onClick={showMenu}>Sustainability</a>
                        </li>
                        <li>
                            <NavLink onClick={showMenu} to="/contact">Contact Us</NavLink>
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