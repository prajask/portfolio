import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import dark_mode_icon from "../../icons/dark_mode.svg";
import light_mode_icon from "../../icons/light_mode.svg";
import menu_icon from "../../icons/menu.svg";
import close_menu_icon from "../../icons/close.svg";

export default function Navbar() {

    const LINKS = [
        {
            label: "Home",
            link: "/"
        },
        {
            label: "Projects",
            link: "/projects"
        },

        {
            label: "Photography",
            link: "/photography"
        }
    ];

    let [navOpen, setnavOpen] = useState(false);
    let [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        let themeToSet = theme === "light" ? "dark" : "light";

        const root = window.document.documentElement;
        root.classList.remove(theme);
        root.classList.add(themeToSet);

        setTheme(themeToSet);
    };

    return (
        <header
            className="fixed top-0 left-0 z-30
            w-screen py-3
            bg-gray/80 backdrop-blur-sm drop-shadow-md
            dark:bg-dark-gray/80"
        >
            <nav
                className="w-4/5 mx-auto z-20
                flex justify-between items-center
                lg:w-[90%]
                2xl:w-4/5"
            >

                <NavLink to={"/"} exact="true">
                    <h1 className="nav_logo
                        py-1
                        text-5xl font-semibold text-primary
                        dark:text-primary"
                    >
                        Prajas
                    </h1>
                </NavLink>

                <div
                    className="flex items-center flex-row gap-5
                    md:gap-10"
                >
                    <ul
                        className={
                            `fixed top-0 left-0 z-10 
                            w-full my-20 py-4 
                            bg-gray/80 backdrop-blur-sm
                            flex flex-col items-center gap-10
                            transition-transform ${navOpen ? "translate-y-0" : "translate-y-[-300%]"} duration-200
                            md:static
                            md:w-auto md:my-0 md:py-0
                            md:bg-transparent md:backdrop-blur-none
                            md:flex-row md:translate-y-0
                            dark:bg-dark-gray/80
                            md:dark:bg-transparent`
                        }
                    >

                        {
                            LINKS.map((link) => (
                                <li key={link.link}>
                                    <NavLink
                                        to={link.link}
                                        className={
                                            (state) => state.isActive
                                                ? `font-bold text-primary
                                                duration-100
                                                hover:text-primary
                                                dark:text-gray
                                                dark:hover:text-primary`
                                                : `font-bold
                                                duration-100
                                                hover:text-primary
                                                dark:text-gray
                                                dark:hover:text-primary`
                                        }
                                    >

                                        {link.label}

                                    </NavLink>
                                </li>
                            ))
                        }

                    </ul>

                    <button
                        type="button"
                        onClick={() => setnavOpen(!navOpen)}
                        className="w-6
                        md:hidden"
                    >
                        <img
                            className="dark:invert"
                            src={navOpen ? close_menu_icon : menu_icon}
                            alt="Menu"
                        />
                    </button>

                    <button
                        onClick={toggleTheme}
                        className="w-6"
                    >

                        <img
                            className="transition-transform duration-150 ease-out rotate-0
                            dark:rotate-90
                            dark:invert"
                            src={theme === "dark" ? light_mode_icon : dark_mode_icon}
                            alt="Change Theme"
                        />
                    </button>

                </div>

            </nav>
        </header>
    );
}