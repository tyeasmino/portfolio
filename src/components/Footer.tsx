import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t border-gray-300 py-4 mt-10">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600 text-center md:text-left">
                <p>&copy; {new Date().getFullYear()} Tamima Yeasmin. All rights reserved.</p>
                <div className="flex gap-4">
                    <a
                        href="https://github.com/tyeasminos"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black transition-colors dark:hover:text-white"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://linkedin.com/in/tyeasminos"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black transition-colors  dark:hover:text-white"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="mailto:tyeasminos@gmail.com"
                        className="hover:text-black transition-colors  dark:hover:text-white"
                    >
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
