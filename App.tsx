import React, { useState } from 'react';
import HomePage from './HomePage';
import MyJourneyPage from './MyJourneyPage';
import ContactPage from './ContactPage';
import MediaPage from './MediaPage';

const NavLink: React.FC<{
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out relative ${
      isActive
        ? 'text-slate-900'
        : 'text-slate-500 hover:text-slate-800'
    }`}
  >
    {label}
    {isActive && (
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-purple-500 rounded-full"></span>
    )}
  </button>
);

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'journey' | 'media' | 'contact'>('home');

  const navigateTo = (page: 'home' | 'journey' | 'media' | 'contact') => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-purple-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-50"></div>
      <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/3 w-[200vw] h-[200vh] bg-gradient-to-br from-violet-200 via-purple-100 to-fuchsia-50 -z-10 opacity-50 blur-3xl"></div>

      {/* Header */}
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md">
          <div className="container mx-auto px-6 h-16 flex items-center justify-between border-b border-slate-200/80">
              <button className="flex items-center gap-3 font-bold text-slate-800 text-lg group" onClick={() => navigateTo('home')}>
                  <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-slate-200 shadow-sm bg-slate-100 transition-transform duration-200 group-hover:scale-105">
                      <img 
                          src="/images/ravina-profile.jpg" 
                          alt="Ravina Banze"
                          className="w-full h-full object-cover"
                      />
                  </div>
                  Ravina Banze
              </button>
              <div className="flex items-center gap-2">
                  <NavLink label="My Journey" isActive={currentPage === 'journey'} onClick={() => navigateTo('journey')} />
                  <NavLink label="Media" isActive={currentPage === 'media'} onClick={() => navigateTo('media')} />
                  <NavLink label="Contact" isActive={currentPage === 'contact'} onClick={() => navigateTo('contact')} />
              </div>
          </div>
      </nav>

      {/* Page Content */}
      <main>
        {currentPage === 'home' && <HomePage navigateTo={navigateTo} />}
        {currentPage === 'journey' && <MyJourneyPage navigateTo={navigateTo} />}
        {currentPage === 'media' && <MediaPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>
      
      <footer className="text-center py-8 text-sm text-slate-500 border-t border-slate-200/80 mt-16">
        <div className="container mx-auto px-6">
            <p>&copy; {new Date().getFullYear()} Ravina Banze. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
