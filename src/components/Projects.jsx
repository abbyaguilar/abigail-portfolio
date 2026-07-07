import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function Projects({ images }) {

    const projects = [
        {
            title: "Vendor Map",
            category: "Local Commerce Web App",
            description:
                "A location-based discovery platform designed to connect customers with small businesses, pop-up vendors, and independent sellers. Vendor Map explores how real-time visibility can help local businesses become easier to discover while creating better ways for communities to support them.",
            tech: [
                "React",
                "Firebase",
                "Firestore",
                "Google Maps API",
            ],
            image: images.vendorMap,
            live: "https://vendor-map-mu.vercel.app/",
            github: "https://github.com/abbyaguilar/vendor-map",
            liveLabel: "Explore Product →",
            githubLabel: "View Code →",
        },


        {
            title: "Decide To Live",
            category: "Longevity & Financial Planning Platform",
            description:
                "A full-stack platform combining a personalized longevity assessment with educational financial planning tools. Users receive tailored wellness insights and can explore life insurance concepts through an interactive calculator built to simplify complex financial decisions.",
            tech: [
                "React",
                "Flask",
                "Python",
                "Machine Learning",
                "SQLite",
            ],
            image: images.decideToLive,
            live: "https://www.decidetolive.co/",
            github: "https://github.com/abbyaguilar/DecideToLive",
            secondaryLink:
                "https://life-insuance-app.vercel.app/",
            secondaryLabel:
                "Life Insurance Tool →",
            liveLabel:
                "Explore Platform →",
            githubLabel:
                "View Code →",
        },


        {
            title: "Sprout Jourmind",
            category: "Wellness Brand & Digital Product",
            description:
                "A mindfulness brand and guided journal experience created from concept to publication. Sprout Jourmind combines product development, branding, and web design to create an interactive digital experience supporting reflection, intentional living, and personal growth.",
            tech: [
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Firebase",
                "PayPal Integration",
            ],
            image: images.sproutJourmind,
            live: "https://tarot-site-c111d.web.app/",
            github:
                "https://github.com/abbyaguilar/sproutjourmind",
            liveLabel:
                "View Experience →",
            githubLabel:
                "View Code →",
        },
    ];


    return (
        <section
            id="work"
            className="mx-auto max-w-6xl px-8 py-32"
        >

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mb-24 text-center"
            >

                <p className="mb-5 text-xs uppercase tracking-[0.35em] !text-gray-500">
                    Selected Work
                </p>


                <h2 className="text-5xl font-semibold tracking-tight !text-black">
                    Products & Experiences
                </h2>


                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 !text-gray-600">
                    Digital products, platforms, and brand experiences
                    built around real problems, ideas, and people.
                </p>

            </motion.div>



            <div className="space-y-32">

                {projects.map((project, index) => (

                    <ProjectCard
                        key={project.title}
                        project={project}
                        reverse={index % 2 !== 0}
                    />

                ))}

            </div>


        </section>
    );
}