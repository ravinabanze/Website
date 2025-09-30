import React, { useState, useEffect } from 'react';
import { DownloadIcon, SearchIcon, HandshakeIcon } from './icons';

interface CTAButtonProps {
    href?: string;
    onClick?: () => void;
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    icon: React.ReactNode;
}

const CTAButton: React.FC<CTAButtonProps> = ({ href, onClick, children, variant = 'primary', icon }) => {
    const baseClasses = "group w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3 font-semibold text-center rounded-2xl transition-all duration-300 ease-in-out shadow-md focus:outline-none focus:ring-4";
    const variantClasses = {
        primary: "bg-purple-600 text-white hover:bg-purple-700 hover:shadow-lg hover:-translate-y-0.5 focus:ring-purple-300",
        secondary: "bg-white text-slate-800 border border-slate-300 hover:bg-slate-100 hover:shadow-lg hover:-translate-y-0.5 focus:ring-slate-200",
    };
    
    const commonProps = {
        className: `${baseClasses} ${variantClasses[variant]}`,
        onClick,
    };

    if (href) {
        return <a href={href} {...commonProps}>{icon}{children}</a>;
    }

    return <button {...commonProps}>{icon}{children}</button>;
}

interface HomePageProps {
    navigateTo: (page: 'home' | 'journey' | 'media' | 'contact') => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigateTo }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`container mx-auto px-6 py-12 md:py-20 transition-opacity duration-1000 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-4xl mx-auto flex flex-col gap-12 md:gap-16">
        <header className="text-center flex flex-col items-center gap-4">
          <h1 className="text-4xl md:text-6xl font-semibold text-slate-800 tracking-tight">
            Bridging Innovation, Impact and Marketing
          </h1>
          <h2 className="text-lg md:text-xl font-medium text-purple-700 tracking-wide">
            Product Builder | Growth Strategist | Social Impact Innovator
          </h2>
          
          <div className="my-8">
            <div className="rounded-full overflow-hidden border-4 border-white shadow-lg bg-slate-100 w-40 h-40 md:w-48 md:h-48 mx-auto">
              <img 
                src="/images/ravina-profile.jpg" 
                alt="Ravina Banze - Professional headshot"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          
          <div className="max-w-3xl mt-4 text-base md:text-lg text-slate-600 leading-relaxed space-y-4">
            <p>
              Hello, I am Ravina Banze! Welcome to my corner of the internet.
              Over the past decade, I've been designing campaigns, building products, and shaping strategies where technology, fundraising, and social good meet. My work has helped nonprofits raise significant funds, scale their programs, and turn data into real, measurable impact.
            </p>
            <p>
              Along the way, I co-authored a{' '}
              <button 
                onClick={() => navigateTo('media')}
                className="text-purple-600 hover:text-purple-700 underline underline-offset-2 font-medium transition-colors duration-200"
              >
                book on crowdfunding
              </button>
              , built a reward-based crowdfunding platform, and led multi-stakeholder partnerships bringing together corporations, nonprofits, and governments. I work with nonprofits & academic institutions to design tech-enabled solutions that are both innovative and equitable, and I partner with tech companies to build tools that truly meet the needs of the social sector.
            </p>
          </div>
        </header>

        <footer className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
           <CTAButton onClick={() => navigateTo('journey')} variant="secondary" icon={<SearchIcon className="w-5 h-5" />}>
              Explore My Work
           </CTAButton>
           <CTAButton
  onClick={() => window.open('https://drive.google.com/file/d/12sjp3yj2iTEgCccFj082Mqf23LcNoq1g/view?usp=sharing', '_blank')}
  variant="primary"
  icon={<DownloadIcon className="w-5 h-5" />}
>
  Download Resume
</CTAButton>
           <CTAButton onClick={() => navigateTo('contact')} variant="secondary" icon={<HandshakeIcon className="w-5 h-5" />}>
              Let's Collaborate
           </CTAButton>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
