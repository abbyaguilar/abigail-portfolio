import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <header
            className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${scrolled
                ? "bg-[#FAFAF8]/70 backdrop-blur-xl border-b border-black/5 py-4"
                : "bg-transparent py-7"
                }`}
        >

            <nav className="mx-auto flex max-w-6xl items-center justify-between px-8">

                {/* Logo */}
                <motion.a
                    href="#"
                    className="text-lg font-medium tracking-tight text-black"
                >
                    <motion.span
                        key={scrolled ? "AA" : "ABIGAIL AGUILAR"}
                        initial={{
                            opacity: 0,
                            y: -8,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.25,
                        }}
                    >
                        {scrolled ? "AA" : "ABIGAIL AGUILAR"}
                    </motion.span>
                </motion.a>


                {/* Navigation */}
                <div className="hidden items-center gap-12 text-xs font-medium tracking-[0.18em] md:flex">

                    <a
                        href="#work"
                        className="text-black transition duration-300 hover:opacity-50"
                    >
                        WORK
                    </a>


                    <a
                        href="#story"
                        className="text-black transition duration-300 hover:opacity-50"
                    >
                        MY STORY
                    </a>
                    <a
                        href="#tools"
                        className="text-black transition duration-300 hover:opacity-50"
                    >
                        TOOLS
                    </a>

                    <a
                        href="#contact"
                        className="text-black transition duration-300 hover:opacity-50"
                    >
                        CONTACT
                    </a>

                </div>

            </nav>

        </header>
    );
}