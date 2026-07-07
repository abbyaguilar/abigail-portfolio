import { motion } from "framer-motion";

export default function ProjectCard({ project, reverse }) {

    return (

        <motion.article
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid items-center gap-14 lg:grid-cols-2"
        >


            {/* Image */}
            <motion.div

                whileHover={{ y: -8 }}

                transition={{
                    duration: 0.3,
                }}

                className={`group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:shadow-2xl ${reverse ? "lg:order-2" : ""
                    }`}

            >

                <div className="aspect-[16/10] overflow-hidden">

                    <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                </div>

            </motion.div>




            {/* Content */}

            <div className={`${reverse ? "lg:order-1" : ""}`}>

                <p className="mb-5 text-xs uppercase tracking-[0.35em] !text-gray-500">
                    {project.category}
                </p>



                <h3 className="text-4xl font-semibold tracking-tight !text-black md:text-5xl">
                    {project.title}
                </h3>



                <p className="mt-6 text-lg leading-8 !text-gray-600">
                    {project.description}
                </p>




                {/* Tech */}

                <div className="mt-8 flex flex-wrap gap-3">

                    {project.tech.map((item) => (

                        <span
                            key={item}
                            className="rounded-full border border-gray-300 px-4 py-2 text-sm !text-gray-700"
                        >
                            {item}
                        </span>

                    ))}

                </div>




                {/* Buttons */}

                <div className="mt-10 flex flex-wrap gap-5">


                    {project.live && (

                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full bg-black px-6 py-3 text-sm !text-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            {project.liveLabel || "Explore →"}
                        </a>

                    )}



                    {project.secondaryLink && (

                        <a
                            href={project.secondaryLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border border-black px-6 py-3 text-sm !text-black transition duration-300 hover:-translate-y-1 hover:bg-black hover:!text-white"
                        >
                            {project.secondaryLabel}
                        </a>

                    )}



                    {project.github && (

                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border border-black px-6 py-3 text-sm !text-black transition duration-300 hover:-translate-y-1 hover:bg-black hover:!text-white"
                        >
                            {project.githubLabel || "Code →"}
                        </a>

                    )}


                </div>


            </div>


        </motion.article>

    );
}