import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section
            id="contact"
            className="mx-auto max-w-5xl px-8 py-40"
        >
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="rounded-3xl bg-black px-8 py-20 text-center md:px-16"
            >

                {/* Small Heading */}
                <p className="mb-6 text-xs uppercase tracking-[0.35em] !text-gray-400">
                    Let's Connect
                </p>



                {/* Main Heading */}
                <h2 className="text-5xl font-semibold tracking-tight !text-white md:text-6xl">
                    Let's build something meaningful.
                </h2>



                {/* Description */}
                <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 !text-gray-300">
                    Whether you're creating a new product, growing a business,
                    or bringing an idea to life, I enjoy helping turn concepts
                    into thoughtful experiences.
                </p>



                {/* Buttons */}
                <div className="mt-12 flex flex-wrap justify-center gap-5">

                    <a
                        href="mailto:abbyaaguilar@gmail.com"
                        className="rounded-full bg-white px-8 py-4 font-medium !text-black transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                        Start a Conversation →
                    </a>



                    <a
                        href="https://github.com/abbyaguilar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-white px-8 py-4 font-medium !text-white transition duration-300 hover:-translate-y-1 hover:bg-white hover:!text-black"
                    >
                        GitHub →
                    </a>

                </div>

            </motion.div>
        </section>
    );
}