import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function Projects({ images, videos }) {
    const projects = [
        {
            title: "No Advice",
            category: "Paper Trading & Agentic Market Research",
            description:
                "An agentic trading research platform that continuously monitors the market, evaluates opportunities against consistent research and risk rules, and records every decision in an inspectable paper portfolio. Users can run transparent trading simulations, review why assets qualified or were rejected, and explore strategy behavior without putting real capital at risk.",
            tech: [
                "Agentic AI",
                "Paper Trading",
                "Market Research",
                "Risk Controls",
                "Portfolio Simulation",
            ],
            image: images.noAdvice,
            live: "https://noadvice.trade/",
            liveLabel: "Explore Platform →",
        },

        {
            title: "Vendor Map",
            category: "Local Commerce Web App",
            description:
                "A location-based platform that helps customers discover local vendors and see when they are actively selling. Built with vendor profiles, saved businesses, authentication, and a live location feature that allows vendors to share their current location on the map.",
            tech: [
                "React",
                "Vite",
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
                "An interactive longevity and financial planning platform combining a research-based lifestyle assessment with an educational insurance planning toolkit. Users can explore personalized longevity projections and interactive estimates for term life, whole life, cash value planning, and annuities through a responsive financial planning interface.",
            tech: [
                "React",
                "JavaScript",
                "Flask",
                "Python",
                "Statistical Analysis",
                "SQLite",
            ],
            image: images.decideToLive,
            live: "https://www.decidetolive.co/",
            github: "https://github.com/abbyaguilar/DecideToLive",
            secondaryLink: "https://life-insuance-app.vercel.app/",
            secondaryLabel: "Insurance Calculator →",
            liveLabel: "Explore Platform →",
            githubLabel: "View Code →",
        },

        {
            title: "NotAvailable",
            category: "Chrome Extension • Senior Capstone",
            description:
                "A Chrome extension that helps users understand their browsing habits by collecting browsing history, tracking time spent on websites, and presenting activity through a web interface with most-visited sites and usage breakdowns.",
            tech: [
                "JavaScript",
                "React",
                "Node.js",
                "Chrome Extension APIs",
            ],
            image: images.notAvailable,
            github: "https://github.com/abbyaguilar/NotAvailable",
            githubLabel: "View Code →",
        },

        {
            title: "Income Predictor",
            category: "Machine Learning Web App",
            description:
                "A machine learning application that predicts salary using age, education, job title, gender, and years of experience. Built a preprocessing pipeline with missing-value imputation and categorical encoding before applying Bayesian Ridge regression.",
            tech: [
                "Python",
                "Flask",
                "scikit-learn",
                "pandas",
                "Machine Learning",
                "Bayesian Ridge",
            ],
            image: images.incomePredictor,
            github: "https://github.com/abbyaguilar/Income-Predictor",
            githubLabel: "View Code →",
        },

        {
            title: "Stock Price Forecasting App",
            category: "Machine Learning & Data Application",
            description:
                "A Streamlit application that forecasts stock open and close prices using historical market data from Yahoo Finance. The application extracts calendar-based features, trains Gradient Boosting Regressors, and uses GridSearchCV to optimize model parameters before generating future predictions and visualizing historical versus forecasted prices.",
            tech: [
                "Python",
                "Streamlit",
                "yfinance",
                "pandas",
                "scikit-learn",
                "Gradient Boosting",
                "GridSearchCV",
            ],
            video: videos.stockPredictor,
            github: "https://github.com/abbyaguilar/stock-predictor",
            githubLabel: "View Code →",
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
            github: "https://github.com/abbyaguilar/sproutjourmind",
            liveLabel: "View Experience →",
            githubLabel: "View Code →",
        },

        {
            title: "Software Testing",
            category: "QA Automation • Group Project",
            description:
                "A quality assurance project focused on testing an Odoo hospital module. Led the creation and execution of automated test cases covering workflows including user login and patient creation using Python, Selenium, Robot Framework, and PostgreSQL.",
            tech: [
                "Python",
                "Selenium",
                "Robot Framework",
                "PostgreSQL",
                "QA Automation",
            ],
            video: videos.softwareTesting,
            github: "https://github.com/abbyaguilar",
            githubLabel: "View GitHub →",
        },

        {
            title: "Celebrity Lookalike",
            category: "Computer Vision Application",
            description:
                "A real-time computer vision application that uses facial encoding and a trained classifier to identify which celebrity a user most closely resembles through a webcam.",
            tech: [
                "Python",
                "OpenCV",
                "face_recognition",
                "scikit-learn",
            ],
            image: images.celebLookalike,
            github: "https://github.com/abbyaguilar/celeb-lookalike",
            githubLabel: "View Code →",
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
                    Digital products, applications, and technical projects
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
