import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {

    const { scrollY } = useScroll();

    const greetingOpacity = useTransform(
        scrollY,
        [0, 120],
        [1, 0]
    );

    const greetingY = useTransform(
        scrollY,
        [0, 120],
        [0, -40]
    );

    const scrollOpacity = useTransform(
        scrollY,
        [0, 150],
        [1, 0]
    );


    return (
        <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden px-6 pt-32">

            {/* Background Glow */}
            <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
                <motion.div
                    animate={{
                        scale: [1, 1.08, 1],
                        opacity: [0.35, 0.6, 0.35],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="h-[700px] w-[700px] rounded-full bg-emerald-200/30 blur-3xl"
                />
            </div>


            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mx-auto flex max-w-5xl translate-y-6 flex-col items-center text-center"
            >


                {/* Personal Greeting */}
                <motion.p
                    style={{
                        opacity: greetingOpacity,
                        y: greetingY,
                    }}
                    className="text-sm !text-gray-500"
                >
                    hi, i'm abby
                </motion.p>



                {/* Professional Identity */}
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className="mt-5 text-xs uppercase tracking-[0.35em] !text-gray-500"
                >
                    Full Stack Developer & Product Builder
                </motion.p>



                {/* Main Statement */}
                <motion.h1
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 text-6xl font-semibold leading-[0.95] tracking-tight !text-black sm:text-7xl md:text-8xl"
                >
                    Building
                    <br />
                    thoughtful
                    <br />
                    digital products.
                </motion.h1>



                {/* Supporting Message */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-10 max-w-2xl text-lg leading-8 !text-gray-600"
                >
                    I create software, websites, and digital experiences
                    that help ideas become real products through technology,
                    design, and human-centered thinking.
                </motion.p>



                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.75 }}
                    className="mt-12 flex flex-wrap justify-center gap-5"
                >

                    <a
                        href="#work"
                        className="rounded-full bg-black px-8 py-3 !text-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                        View My Work →
                    </a>


                    <a
                        href="#contact"
                        className="rounded-full border border-black px-8 py-3 !text-black transition duration-300 hover:-translate-y-1 hover:bg-black hover:!text-white"
                    >
                        Contact
                    </a>

                </motion.div>



                {/* Scroll Indicator */}
                <motion.div
                    style={{
                        opacity: scrollOpacity,
                    }}
                    animate={{
                        y: [0, 8, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                    }}
                    className="mt-20 !text-gray-400"
                >
                    ↓
                </motion.div>


            </motion.div>

        </section>
    );
}