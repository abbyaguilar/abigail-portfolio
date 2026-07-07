import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TechStack() {
    const sections = [
        {
            title: "Frontend",
            tools: [
                "React",
                "JavaScript",
                "TypeScript",
                "Tailwind CSS",
                "Vite",
                "HTML5",
                "CSS3",
            ],
        },
        {
            title: "Backend & Databases",
            tools: [
                "Python",
                "Flask",
                "Firebase",
                "Firestore",
                "SQL",
                "REST APIs",
                "Git & GitHub",
            ],
        },
        {
            title: "AI & Data",
            tools: [
                "OpenAI API",
                "Machine Learning",
                "Regression Models",
                "Data Analysis",
                "Survey Design",
            ],
        },
        {
            title: "Product & Design",
            tools: [
                "Canva",
                "Adobe Creative Cloud",
                "UX/UI Design",
                "Brand Strategy",
                "Content Creation",
                "iMovie",
            ],
        },
        {
            title: "Business & Integrations",
            tools: [
                "Shopify",
                "Zapier",
                "Tally",
                "Google Analytics",
                "Google Maps API",
                "PayPal",
            ],
        },
    ];

    const [openSection, setOpenSection] = useState(null);

    return (
        <section
            id="tools"
            className="mx-auto max-w-3xl px-8 py-36"
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center"
            >
                <p className="mb-5 text-xs uppercase tracking-[0.35em] text-gray-500">
                    Capabilities
                </p>

                <h2 className="text-5xl font-semibold tracking-tight">
                    Tools I Build With
                </h2>

                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
                    Technologies, platforms, and creative tools I've used to
                    design, build, and launch digital products.
                </p>
            </motion.div>

            <div className="mt-16 space-y-4">
                {sections.map((section, index) => {
                    const isOpen = openSection === index;

                    return (
                        <motion.div
                            key={section.title}
                            whileHover={{ y: -2 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
                        >
                            <button
                                onClick={() =>
                                    setOpenSection(isOpen ? null : index)
                                }
                                className="flex w-full items-center justify-between px-6 py-5 text-left"
                            >
                                <span className="text-lg font-medium">
                                    {section.title}
                                </span>

                                <motion.span
                                    animate={{
                                        rotate: isOpen ? 90 : 0,
                                    }}
                                    transition={{
                                        duration: 0.25,
                                    }}
                                    className="text-xl text-gray-400"
                                >
                                    ›
                                </motion.span>
                            </button>

                            <AnimatePresence>
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
                                                <span
                                                    key={tool}
                                                    className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700"
                                                >
                                                    {tool}
                                                </span>
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