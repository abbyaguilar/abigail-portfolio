import { motion } from "framer-motion";

export default function About() {
    return (
        <section
            id="story"
            className="mx-auto max-w-5xl px-8 py-40"
        >
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center"
            >

                {/* Label */}
                <p className="mb-6 text-xs uppercase tracking-[0.35em] text-gray-500">
                    Beyond the Code
                </p>


                {/* Heading */}
                <h2 className="text-5xl font-semibold tracking-tight md:text-6xl">
                    Building ideas
                    <br />
                    into reality.
                </h2>


                {/* Paragraph One */}
                <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-gray-600">
                    My journey has always been centered around building.
                    Before software, I created and grew my own wellness-focused
                    brand, developing products, creating digital experiences,
                    and building a community through creativity and connection.
                    That experience taught me how ideas become something people
                    believe in.
                </p>


                {/* Paragraph Two */}
                <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-gray-600">
                    Today, I bring that same founder mindset into technology.
                    I combine software development, design thinking, and
                    problem-solving to create products that are not only
                    functional, but meaningful and centered around real people.
                </p>


                {/* Paragraph Three */}
                <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-gray-600">
                    From building Vendor Map to help local businesses become
                    more discoverable, to creating decision-support platforms
                    and wellness experiences, I enjoy transforming ideas into
                    digital products that help businesses, communities, and
                    people move forward.
                </p>


            </motion.div>
        </section>
    );
}