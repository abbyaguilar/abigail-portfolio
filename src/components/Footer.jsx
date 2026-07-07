export default function Footer() {
    return (
        <footer className="border-t border-gray-200 px-8 py-10">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-sm md:flex-row">
                <p className="!text-gray-500">
                    © {new Date().getFullYear()} Abigail Aguilar
                </p>

                <div className="flex gap-8">
                    <a
                        href="https://github.com/abbyaguilar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="!text-gray-500 transition duration-300 hover:!text-black"
                    >
                        GitHub
                    </a>

                    <a
                        href="mailto:abbyaaguilar@gmail.com"
                        className="!text-gray-500 transition duration-300 hover:!text-black"
                    >
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
}