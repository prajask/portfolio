import Link from "next/link";

export const Header = () => {
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
            link: "https://drive.google.com/file/d/1uANbyX8WE2Yf8HpvtaeaRQpGiL6-Aek0/view?usp=drive_link",
            target: "_blank"
        }
    ];

  return (
    <header
        className="w-full
        bg-dark text-light"
    >
        <nav
            className="content-container h-20
            flex justify-between items-center"
        >

            <Link href={"/"} exact="true">
                <h1 className="ptsans text-xl font-bold"
                >
                    Prajas K.
                </h1>
            </Link>
            
            <ul
                className="flex flex-row items-center gap-10
                nunito"
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
