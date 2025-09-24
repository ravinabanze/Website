import React from 'react';
import { MailIcon, LinkedinIcon, GithubIcon, CalendarIcon, MapPinIcon } from './icons';

const ContactPage: React.FC = () => {
    return (
        <div className="container mx-auto px-6 py-12 md:py-20 animate-fade-in">
            <div className="max-w-4xl mx-auto">
                <section id="contact" className="py-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                        Let's Connect
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                        Let's talk
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-x-8 gap-y-6 text-lg font-medium">
                        <a href="mailto:ravina82@gmail.com" className="group flex items-center gap-3 text-slate-800 transition-colors hover:text-purple-600">
                            <MailIcon className="h-6 w-6 text-slate-500 transition-colors group-hover:text-purple-500" />
                            Email
                        </a>
                        <span className="hidden sm:block text-slate-300">|</span>
                        <a href="https://www.linkedin.com/in/ravinamb" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-slate-800 transition-colors hover:text-purple-600">
                            <LinkedinIcon className="h-6 w-6 text-slate-500 transition-colors group-hover:text-purple-500" />
                            LinkedIn
                        </a>
                        <span className="hidden sm:block text-slate-300">|</span>
                        <a href="https://github.com/ravinabanze" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-slate-800 transition-colors hover:text-purple-600">
                            <GithubIcon className="h-6 w-6 text-slate-500 transition-colors group-hover:text-purple-500" />
                            GitHub
                        </a>
                        <span className="hidden sm:block text-slate-300">|</span>
                        <a href="https://calendar.app.google/qbsyUDiNPU7hAG149" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-slate-800 transition-colors hover:text-purple-600">
                            <CalendarIcon className="h-6 w-6 text-slate-500 transition-colors group-hover:text-purple-500" />
                            Book a call
                        </a>
                    </div>
                    <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-500">
                        <MapPinIcon className="h-4 w-4" />
                        Based in Boston, MA
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ContactPage;
