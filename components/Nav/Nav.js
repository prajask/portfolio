import React from 'react';

import Link from 'next/link';

const Nav = () => {
    const LINKS = [
        {
            label: "Work",
            link: "/#work",
            target: "_self",
        },
        {
            label: "About",
            link: "/about",
            target: "_self",
        },
        {
            label: "Resume",
            link: "https://drive.google.com/file/d/1uANbyX8WE2Yf8HpvtaeaRQpGiL6-Aek0/view?usp=sharing",
            target: "_blank"
        }
    ];

  return (
    <header
        className="fixed top-0 z-99
        w-full
        bg-background
        border-b border-b-text-primary"
    >
        <nav
            className="w-11/12 h-20
            max-w-7xl
            mx-auto
            flex justify-between items-center"
        >

            <Link href={"/"} exact="true">
                <h1 className="text-xl font-bold"
                >
                    Prajas K.
                </h1>
            </Link>
            
            <ul
                className="flex flex-row items-center gap-10"
            >

                {
                    LINKS.map((link) => (
                        <li key={link.link}>
                            <Link
                                className="font-medium
                                        duration-100
                                        hover:text-primary"

                                href={link.link}
                                target={link.target}
                            >

                                {link.label}

                            </Link>
                        </li>
                    ))
                }

            </ul>
        </nav>
    </header>
  )
}

export default Nav