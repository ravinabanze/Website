import React from 'react';
import { ExternalLinkIcon, BookOpenIcon, DownloadIcon, SearchIcon } from './icons';

const MediaPage: React.FC = () => {
    return (
        <div className="container mx-auto px-6 py-12 md:py-20 animate-fade-in">
            <div className="max-w-4xl mx-auto flex flex-col gap-12 md:gap-16">
                <header className="text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                        Media & Publications
                    </h1>
                </header>

                {/* Book Section */}
                <section className="bg-white/60 backdrop-blur-sm border border-slate-200/80 rounded-3xl p-8 shadow-sm grid md:grid-cols-2 gap-8 items-center">
                    <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100">
                        <img 
                            src="/images/book-cover.jpg" 
                            alt="Crowdfunding: The Story of People - Book cover showing multiple formats including physical book, digital version, and inside pages"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h2 className="text-2xl font-bold text-slate-800">Crowdfunding: The Story of People</h2>
                        <p className="mt-2 text-slate-600 leading-relaxed">
                            The book explores the impact of crowdfunding in India and the USA, blending data-driven insights with powerful anecdotal storytelling
                        </p>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-start gap-4 mt-6">
                            <a 
                                href="https://books.google.com/books/about/Crowdfunding_The_Story_of_People.html?id=6CoVEAAAQBAJ&source=kp_author_description"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center gap-2.5 px-5 py-2.5 font-semibold text-center rounded-xl transition-all duration-300 ease-in-out shadow-md focus:outline-none focus:ring-4 bg-slate-800 text-white hover:bg-slate-900 hover:shadow-lg hover:-translate-y-0.5 focus:ring-slate-300 text-sm"
                            >
                                <ExternalLinkIcon className="w-4 h-4" />
                                View on Google Books
                            </a>
                             <a 
                                href="https://projectnile.in/wp-content/uploads/2022/09/Crowdfunding-The-Story-of-People.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                                className="group flex items-center justify-center gap-2.5 px-5 py-2.5 font-semibold text-center rounded-xl transition-all duration-300 ease-in-out shadow-md focus:outline-none focus:ring-4 bg-white text-slate-800 border border-slate-300 hover:bg-slate-100 hover:shadow-lg hover:-translate-y-0.5 focus:ring-slate-200 text-sm"
                            >
                                <DownloadIcon className="w-4 h-4" />
                                Download e-book
                            </a>
                            <a 
                                href="https://scholar.google.com/scholar?oi=bibs&hl=en&cites=11298323285074916402"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center gap-2.5 px-5 py-2.5 font-semibold text-center rounded-xl transition-all duration-300 ease-in-out shadow-md focus:outline-none focus:ring-4 bg-white text-slate-800 border border-slate-300 hover:bg-slate-100 hover:shadow-lg hover:-translate-y-0.5 focus:ring-slate-200 text-sm"
                            >
                                <SearchIcon className="w-4 h-4" />
                                See who’s citing it
                            </a>
                        </div>
                    </div>
                </section>

                {/* Media Links Section */}
                <section>
                    <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">
                        Featured In
                    </h2>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <MediaLink 
                            href="https://www.bbc.com/news/world-asia-india-57981252" 
                            title="Finding Help for Indians in Need During COVID-19" 
                            outlet="BBC" 
                            thumbnail="/images/bbc-logo.png"
                        />
                        <MediaLink 
                            href="https://www.youtube.com/watch?v=0kpOe0bJZ08" 
                            title="Can Technology Bridge India's Healthcare Divide?" 
                            outlet="Al Jazeera" 
                            thumbnail="/images/aljazeera-logo.png"
                        />
                        <MediaLink 
                            href="https://www.thehindubusinessline.com/opinion/crowd-funding-platforms-connecting-ngos-with-donors/article33956054.ece" 
                            title="Connecting NGOs with Donors" 
                            outlet="The Hindu BusinessLine" 
                            thumbnail="/images/hindu-businessline-logo.png"
                        />
                        <MediaLink 
                            href="https://health.economictimes.indiatimes.com/news/industry/medical-crowdfunding-has-emerged-as-an-alternate-method-of-financing-healthcare-irfan-bashir-co-author-of-the-book-crowdfunding-the-story-of-people/81284893" 
                            title="Medical Crowdfunding as Alternate Financing" 
                            outlet="The Economic Times" 
                            thumbnail="/images/economic-times-logo.png"
                        />
                        <MediaLink 
                            href="https://www.youtube.com/watch?v=flFdLB4Vd_8" 
                            title="The What, Why and How of Online Crowdfunding" 
                            outlet="Milaap" 
                            thumbnail="/images/milaap-logo.png"
                        />
                        <MediaLink 
                            href="https://www.theestablished.com/culture/living/this-cookbook-featuring-heirloom-recipes-shows-how-crowdfunding-and-self-publishing-arent-always-daunting" 
                            title="How Crowdfunding and Self-Publishing Aren't Always Daunting" 
                            outlet="The Established" 
                            thumbnail="/images/the-established-logo.png"
                        />
                    </div>
                </section>
            </div>
        </div>
    );
};

const MediaLink: React.FC<{ href: string; title: string; outlet: string; thumbnail?: string }> = ({ href, title, outlet, thumbnail }) => (
    <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="group bg-white/60 backdrop-blur-sm border border-slate-200/80 rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
        <div className="flex gap-4 items-start">
            {thumbnail && (
                <div className="flex-shrink-0">
                    <img 
                        src={thumbnail} 
                        alt={`${outlet} thumbnail`}
                        className="w-16 h-16 object-cover rounded-lg border border-slate-200"
                    />
                </div>
            )}
            <div className="flex-1 min-w-0">
                <p className="font-semibold text-slate-800 text-lg leading-tight">{title}</p>
                <p className="text-slate-500 mt-1">{outlet}</p>
            </div>
            <div className="flex-shrink-0">
                <ExternalLinkIcon className="w-5 h-5 text-slate-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
        </div>
    </a>
);


export default MediaPage;