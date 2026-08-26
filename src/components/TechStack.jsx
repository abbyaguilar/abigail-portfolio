import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TechStack() {
    const sections = [
        {
            title: "Languages",
            tools: [
                "Python",
                "JavaScript",
                "TypeScript",
                "C++",
            ],
        },

        {
            title: "Frontend",
            tools: [
                "React",
                "React Native",
                "HTML5",
                "CSS3",
                "Tailwind CSS",
                "Vite",
            ],
        },

        {
            title: "Backend & Databases",
            tools: [
                "Node.js",
                "Flask",
                "Firebase",
                "Firestore",
                "MongoDB",
                "SQLite",
                "PostgreSQL",
                "REST APIs",
            ],
        },

        {
            title: "Machine Learning & Computer Vision",
            tools: [
                "scikit-learn",
                "pandas",
                "OpenCV",
                "face_recognition",
            ],
        },

        {
            title: "Testing & Browser Development",
            tools: [
                "Selenium",
                "Robot Framework",
                "Chrome Extension APIs",
            ],
        },

        {
            title: "Platforms & Integrations",
            tools: [
                "Git",
                "GitHub",
                "Vercel",
                "Expo",
                "Google Maps API",
                "yfinance",
                "PayPal",
            ],
        },
    ];

    const [openSection, setOpenSection] = useState(0);

    return (
        <section
            id="tools"
            className="mx-auto max-w-4xl px-8 py-36"
        >
            {/* Section Intro */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center"
            >
                <p className="mb-6 text-xs uppercase tracking-[0.35em] !text-gray-500">
                    Technology
                </p>

                <h2 className="font-mono text-3xl font-medium tracking-tight !text-black sm:text-4xl md:text-5xl">
                    if (code.works) {"{"}
                    <br className="sm:hidden" /> trace(stack);
                    {"}"}
                </h2>
            </motion.div>

            {/* Stack Categories */}
            <div className="mt-16 space-y-4">
                {sections.map((section, index) => {
                    const isOpen = openSection === index;

                    return (
                        <motion.div
                            key={section.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.05,
                            }}
                            whileHover={{ y: -2 }}
                            className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
                        >
                            <button
                                type="button"
                                onClick={() =>
                                    setOpenSection(isOpen ? null : index)
                                }
                                aria-expanded={isOpen}
                                className="flex w-full items-center justify-between px-6 py-6 text-left"
                            >
                                <span className="text-lg font-medium !text-black">
                                    {section.title}
                                </span>

                                <motion.span
                                    animate={{
                                        rotate: isOpen ? 90 : 0,
                                    }}
                                    transition={{
                                        duration: 0.25,
                                    }}
                                    className="shrink-0 font-mono text-xl !text-gray-400"
                                    aria-hidden="true"
                                >
                                    →
                                </motion.span>
                            </button>

                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        initial={{
                                            height: 0,
                                            opacity: 0,
                                        }}
                                        animate={{
                                            height: "auto",
                                            opacity: 1,
                                        }}
                                        exit={{
                                            height: 0,
                                            opacity: 0,
                                        }}
                                        transition={{
                                            duration: 0.3,
                                        }}
                                    >
                                        <div className="flex flex-wrap gap-3 border-t border-gray-100 px-6 py-6">
                                            {section.tools.map((tool) => (
                                                <motion.span
                                                    key={tool}
                                                    whileHover={{ y: -2 }}
                                                    className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm !text-gray-700 transition duration-200 hover:bg-white hover:shadow-sm"
                                                >
                                                    {tool}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}