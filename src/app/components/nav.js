
import Link from "next/link";

export default function Nav(){

    const LINKS = [
        // {
        //     label: "Home",
        //     link: "/"
        // },
        {
            label: "Projects",
            link: "/projects"
        },
        // {
        //     label: "Photography",
        //     link: "/photography"
        // },
        {
            label: "About Me",
            link: "/about_me"
        }
    ];

    return(
    <header
            className="fixed top-0 z-50
            w-full
            bg-light-primary
            border-b border-b-dark-primary"
        >
            <nav
                className="w-[90%] h-[70px] m-auto
                flex justify-between items-center"
            >

                <Link href={"/"} exact="true">
                    <h1 className="text-xl text-dark-primary font-bold"
                    >
                        Prajas K.
                    </h1>
                </Link>

                {/* <div
                    className="flex items-center flex-row gap-10"
                > */}
                    <ul
                        className="flex flex-row items-center gap-10"
                    >

                        {
                            LINKS.map((link) => (
                                <li key={link.link}>
                                    <Link
                                        href={link.link}
                                        className="font-bold
                                                duration-100
                                                hover:text-primary"
                                    >

                                        {link.label}

                                    </Link>
                                </li>
                            ))
                        }

                        <li key="resume">
                            <Link
                                href={"https://drive.google.com/file/d/1ocelu07ibbNIW1LFPQh1XrK2nzLsJXkd/view?usp=sharing"}
                                target="_blank"
                                className="font-bold
                                        duration-100
                                        hover:text-primary"
                            >
                                Resume
                            </Link>
                        </li>

                    </ul>

                    {/* <button
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
                    </button> */}

                    {/* <button
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
                    </button> */}

                {/* </div> */}

            </nav>
        </header>
    )
}