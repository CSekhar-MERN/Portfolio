"use client";
import Image from "next/image";

function Header() {
    // Smooth scroll handler
    const handleScroll = (
        e: React.MouseEvent<HTMLElement>,
        id: string
    ) => {
        e.preventDefault();
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };


    const navItems = ["Services", "Projects", "Tech Stack", "Contact"];

    return (
        <header className="sticky top-0 z-50 w-full bg-slate-950/80 border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
                {/* Logo */}
                {/* <a className="flex items-center gap-3 cursor-pointer" onClick={(e) => handleScroll(e, "home")}>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center text-slate-950 font-bold shadow-[0_0_25px_rgba(168,85,247,0.6)]">
                        CN
                    </div>
                    <span className="text-white font-semibold tracking-wide hidden md:block">
                        Chandrasekhar Narwal
                    </span>
                </a> */}
                <Image
                    src="/logo.png"
                    alt="logo"
                    width={100}
                    height={100}
                    className="w-16 md:w-20 h-auto cursor-pointer"
                    onClick={(e) => handleScroll(e, "home")}
                />



                {/* Nav Links */}
                <nav className="hidden md:flex items-center gap-8 text-slate-300">
                    {navItems.map((item) => {
                        const id = item.toLowerCase().replace(" ", "");
                        return (
                            <a
                                key={item}
                                href={`#${id}`}
                                onClick={(e) => handleScroll(e, id)}
                                className="relative group hover:text-white transition"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-purple-500 transition-all group-hover:w-full" />
                            </a>
                        );
                    })}
                </nav>

                {/* CTA */}
                <a
                    href="#contact"
                    onClick={(e) => handleScroll(e, "contact")}
                    className="px-5 py-2.5 rounded-xl bg-purple-600 text-white font-semibold text-sm md:text-base
                     hover:bg-purple-500 transition
                     shadow-[0_0_25px_rgba(168,85,247,0.6)]"
                >
                    Get Started
                </a>
            </div>
        </header>
    );
}

export default Header;
