import React, { useState } from 'react';
import {
  RocketIcon,
  LineChartIcon,
  BookOpenIcon,
  AwardIcon,
  MegaphoneIcon,
  Globe2Icon,
  GraduationCapIcon,
  DatabaseIcon,
  StethoscopeIcon,
  DownloadIcon,
  BriefcaseIcon,
  HandshakeIcon,
} from './icons';
import type { ReactNode } from "react";

// --- HELPER COMPONENTS ---

function StoryBlock({
  icon: Icon,
  title,
  customTitle,
  bullets,
  children, ctas, id, logoSrc, dateInfo,
}: {
  icon?: any;
  title?: string;
  customTitle?: ReactNode;
  bullets: string[];
  children: ReactNode;
  ctas?: { text: string; href: string; target?: string }[];
  id?: string;
  logoSrc?: string;
  dateInfo?: string;
}) {
  return (
    <section id={id} className="w-full">
      <div
        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm relative"
      >
        <div className="mb-3">
          {customTitle ? (
            customTitle
          ) : (
            <>
              <div className="flex items-center gap-2 text-slate-600 mb-2">
                {logoSrc ? (
                  <img 
                    src={logoSrc} 
                    alt={`${title || 'Company'} logo`}
                    className="h-6 w-6 rounded object-contain"
                  />
                ) : (
                  Icon && <Icon className="h-5 w-5" aria-hidden="true" />
                )}
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
            </>
          )}
        </div>
        <div className="prose prose-slate max-w-none text-slate-600">
          <p>{children}</p>
        </div>
        <ul className="mt-4 grid list-disc gap-2 pl-5 text-slate-700 marker:text-slate-400">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        {ctas?.length ? (
          <div className="mt-4 flex flex-wrap gap-3">
            {ctas.map(({ text, href, target }) => (
              <a
                key={text}
                href={href}
                target={target || "_self"}
                className="inline-flex items-center rounded-full border border-slate-300 px-4 py-1.5 text-sm font-medium text-slate-800 transition hover:bg-slate-50"
              >
                {text} →
              </a>
            ))}
          </div>
        ) : null}
        {dateInfo && (
          <div className="absolute bottom-4 right-4">
            <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
              {dateInfo}
            </span>
          </div>
        )}
      </div>
    </section>
  );
}

function CertificationsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const certifications = [
    { title: "Graduate Certification in Public Policy", subtitle: "The Takshashila Institution, Bengaluru", logoSrc: "/images/takshashila-logo.png" },
    { title: "Human Research – Social & Behavioral Research", subtitle: "CITI Program", logoSrc: "/images/citi-logo.png" },
    { title: "Responsible Conduct of Research for Engineers", subtitle: "CITI Program", logoSrc: "/images/citi-logo.png" },
    { title: "DELF A1 & A2", subtitle: "Alliance Française de Bombay", logoSrc: "/images/alliance-francaise-logo.png" },
    { title: "Social Norms, Social Change I & II", subtitle: "UNICEF & University of Pennsylvania", logoSrc: "/images/unicef-upenn-logo.png" },
    { title: "Computational Social Science Specialization", subtitle: "UC Davis", logoSrc: "/images/uc-davis-logo.png" },
    // Add more certifications here as needed
  ];

  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(certifications.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {certifications
                  .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                  .map((cert, index) => (
                    <div key={slideIndex * itemsPerSlide + index}>
                      <BadgeCard 
                        logoSrc={cert.logoSrc}
                        title={cert.title} 
                        subtitle={cert.subtitle} 
                      />
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Arrows */}
      {totalSlides > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white border border-slate-200 rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-200 hover:bg-slate-50"
            aria-label="Previous certifications"
          >
            <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white border border-slate-200 rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-200 hover:bg-slate-50"
            aria-label="Next certifications"
          >
            <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}
      
      {/* Dots Indicator */}
      {totalSlides > 1 && (
        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex ? 'bg-slate-600' : 'bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function StXaviersPhotoCarousel() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const photos = [
    { 
      src: "/images/st-xaviers/campus.jpg", 
      alt: "St. Xavier's College Campus",
      caption: "The beautiful St. Xavier's campus"
    },
    { 
      src: "/images/st-xaviers/fest.jpg", 
      alt: "College Festival",
      caption: "Fest organizing and cultural events"
    },
    { 
      src: "/images/st-xaviers/fieldwork.jpg", 
      alt: "Fieldwork Experience",
      caption: "Sociology fieldwork and research"
    },
    { 
      src: "/images/st-xaviers/library.jpg", 
      alt: "College Library",
      caption: "Studying in the library"
    }
  ];

  const openImage = (index: number) => {
    setSelectedImage(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % photos.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + photos.length) % photos.length);
    }
  };

  if (photos.length === 0) {
    return null;
  }

  return (
    <div className="mt-6">
      {/* Thumbnail Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {photos.map((photo, index) => (
          <div 
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-lg border border-slate-200 hover:border-slate-300 transition-all duration-200"
            onClick={() => openImage(index)}
          >
            <div className="aspect-square">
              <img 
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                onError={(e) => {
                  e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f1f5f9'/%3E%3Ctext x='50' y='50' text-anchor='middle' dy='.3em' fill='%2394a3b8' font-family='Arial' font-size='12'%3EPhoto%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for enlarged image */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-8"
          onClick={closeImage}
        >
          <div className="relative max-w-2xl max-h-[70vh] bg-white rounded-lg shadow-2xl overflow-hidden">
            {/* Close button */}
            <button
              onClick={closeImage}
              className="absolute top-3 right-3 z-10 bg-gray-800/80 hover:bg-gray-800 rounded-full p-1.5 text-white transition-colors duration-200"
              aria-label="Close image"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Main image container */}
            <div className="relative w-full h-full flex items-center justify-center bg-gray-100">
              <img 
                src={photos[selectedImage].src}
                alt={photos[selectedImage].alt}
                className="w-full h-full object-cover"
                onClick={(e) => e.stopPropagation()}
                onError={(e) => {
                  // Show a better placeholder for modal view
                  e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='200' y='140' text-anchor='middle' dy='.3em' fill='%23374151' font-family='Arial' font-size='16'%3EImage not available%3C/text%3E%3Ctext x='200' y='160' text-anchor='middle' dy='.3em' fill='%236b7280' font-family='Arial' font-size='12'%3E" + photos[selectedImage].caption + "%3C/text%3E%3C/svg%3E";
                }}
              />
              
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm font-medium text-center">{photos[selectedImage].caption}</p>
              </div>
            </div>

            {/* Navigation arrows */}
            {photos.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-gray-800/80 hover:bg-gray-800 rounded-full p-2 text-white transition-colors duration-200"
                  aria-label="Previous image"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-gray-800/80 hover:bg-gray-800 rounded-full p-2 text-white transition-colors duration-200"
                  aria-label="Next image"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* Image counter */}
            <div className="absolute top-3 left-3 bg-gray-800/80 text-white px-3 py-1 rounded-full text-xs font-medium">
              {selectedImage + 1} / {photos.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function BadgeCard({ icon: Icon, title, subtitle, logoSrc }: { icon?: any; title: string; subtitle: string; logoSrc?: string }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white/60 backdrop-blur-sm p-4 shadow-sm">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/70">
        {logoSrc ? (
          <img 
            src={logoSrc} 
            alt={`${title} logo`}
            className="h-8 w-8 rounded-lg object-contain"
          />
        ) : (
          Icon && <Icon className="h-5 w-5 text-slate-700" aria-hidden="true" />
        )}
      </div>
      <div>
        <h4 className="font-semibold text-slate-800">{title}</h4>
        <p className="text-sm text-slate-500">{subtitle}</p>
      </div>
    </div>
  );
}


// --- MAIN PAGE COMPONENT ---
interface MyJourneyPageProps {
  navigateTo: (page: 'home' | 'journey' | 'media' | 'contact') => void;
}

const MyJourneyPage: React.FC<MyJourneyPageProps> = ({ navigateTo }) => {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 animate-fade-in">
      {/* Hero */}
      <section className="relative">
        <div>
          <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-5xl">
            Tech for Social Impact
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            I build and scale solutions that drive impact, turning ideas into tools that empower people, grow communities, and create measurable change
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Product Strategy",
              "GTM & Positioning",
              "Growth Experiments",
              "A/B Testing",
              "SQL • Python • R",
              "Tableau / GA4 / R Shiny",
            ].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700 shadow-sm"
              >
                {chip}
              </span>
            ))}
          </div>
           <div className="mt-8">
                <button 
                    onClick={() => window.open('https://drive.google.com/file/d/12sjp3yj2iTEgCccFj082Mqf23LcNoq1g/view?usp=sharing', '_blank')}
                    className="group w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3 font-semibold text-center rounded-2xl transition-all duration-300 ease-in-out shadow-md focus:outline-none focus:ring-4 bg-purple-600 text-white hover:bg-purple-700 hover:shadow-lg hover:-translate-y-0.5 focus:ring-purple-300"
                >
                    <DownloadIcon className="w-5 h-5" />
                    Download Resume
                </button>
            </div>
        </div>
      </section>

      {/* Academic Journey Section */}
      <section className="mt-10 bg-white/60 backdrop-blur-sm border border-slate-200/80 rounded-3xl p-8 shadow-sm">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Academic Journey</h2>
        </div>
        
        {/* Education */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <GraduationCapIcon className="h-5 w-5 text-slate-600" />
            Education
          </h3>
          <div className="grid gap-4 sm:grid-cols-3">
            <BadgeCard logoSrc="/images/umass-logo.png" title="University of Massachusetts" subtitle="MSc Computational Social Science (2022–2024)" />
            <BadgeCard logoSrc="/images/msepp-logo.png" title="Mumbai School of Economics & Public Policy" subtitle="PG Diploma Business Analytics (2019)" />
            <BadgeCard logoSrc="/images/st-xaviers-logo.png" title="St. Xavier's College, Mumbai" subtitle="BA Sociology & Anthropology (2013–2016)" />
          </div>
        </div>
        
        {/* Certifications */}
        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <AwardIcon className="h-5 w-5 text-slate-600" />
            Certifications
          </h3>
          <CertificationsCarousel />
        </div>
      </section>

      {/* Story sections */}
      <div className="mt-16 space-y-16">
        {/* Timeline Year 2025 */}
        <div className="flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">2025</h2>
            <div className="w-24 h-0.5 bg-slate-300 mx-auto"></div>
          </div>
        </div>
        
        {/* 2025 - Single column layout */}
        <div className="space-y-8">
          <StoryBlock
            icon={BriefcaseIcon}
            customTitle={
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <img 
                    src="/images/daanveda-logo.png" 
                    alt="DaanVeda logo"
                    className="h-6 w-6 rounded object-contain"
                  />
                  <h3 className="text-lg font-bold text-slate-900">Head of Partnerships (North America)</h3>
                </div>
                <a 
                  href="https://www.daanveda.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-base font-medium text-purple-600 hover:text-purple-700 underline underline-offset-2 transition-colors duration-200"
                >
                  DaanVeda
                </a>
              </div>
            }
            dateInfo="Aug 2025 - Present"
            bullets={[
              "Leading North American growth for an AI-powered fundraising intelligence platform, reaching 50+ nonprofits in first quarter",
              "Driving product demos and closing strategic partnerships with nonprofit executives, resulting in 20% pipeline growth",
              "Shaping go-to-market strategy to expand adoption across U.S. nonprofits, building a foundation for scalable revenue"
            ]}
          >
            <div className="mb-4">
              Driving innovation in charitable giving and community impact through AI-powered fundraising solutions and strategic partnerships.
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {["Partnership Building", "Go-to-Market Strategy", "AI for Fundraising", "Strategic Sales", "Nonprofit Ecosystem"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </StoryBlock>

          <StoryBlock
            icon={BriefcaseIcon}
            customTitle={
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <img 
                    src="/images/ketto-logo.png" 
                    alt="Ketto logo"
                    className="h-6 w-6 rounded object-contain"
                  />
                  <h3 className="text-lg font-bold text-slate-900">Partnerships & Sales (North America)</h3>
                </div>
                <a 
                  href="https://www.ketto.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-base font-medium text-purple-600 hover:text-purple-700 underline underline-offset-2 transition-colors duration-200"
                >
                  Ketto
                </a>
              </div>
            }
            dateInfo="June 2025 - July 2025"
            bullets={[
              "Built 10+ partnerships with CSR teams and foundations to pilot Ketto's AI fundraising automation",
              "Generated consistent sales pipeline through product demos, proposals, and relationship management",
              "Represented Ketto at NIO Summit 2025, engaging with 650+ nonprofit leaders and gathering market insights"
            ]}
          >
            <div className="mb-4">
              Scaling AI-powered fundraising solutions and connecting nonprofits to transformative giving technology.
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {["Business Development", "AI Solutions", "Nonprofit Sales", "Conference Networking", "Client Engagement"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </StoryBlock>

          <StoryBlock
            icon={BriefcaseIcon}
            customTitle={
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <img 
                    src="/images/starfish-foundation-logo.png" 
                    alt="Starfish Foundation logo"
                    className="h-6 w-6 rounded object-contain"
                  />
                  <h3 className="text-lg font-bold text-slate-900">Strategy Consultant (Data & Programs)</h3>
                </div>
                <a 
                  href="https://www.thestarfishchange.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-base font-medium text-purple-600 hover:text-purple-700 underline underline-offset-2 transition-colors duration-200"
                >
                  The Starfish Foundation
                </a>
              </div>
            }
            dateInfo="Jan 2025 - May 2025"
            bullets={[
              "Designed program evaluation dashboards improving visibility into student outcomes by 30%",
              "Conducted data audits that streamlined operations and reduced reporting time by 15%",
              "Delivered actionable strategy recommendations adopted by leadership for 2026 expansion plan"
            ]}
          >
            <div className="mb-4">
              Strengthening nonprofit programs through data-driven insights and strategy.
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {["Data Analysis", "Program Evaluation", "Impact Measurement", "Dashboard Design", "Strategic Consulting"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </StoryBlock>
        </div>

        {/* Timeline Year 2024 */}
        <div className="flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">2024</h2>
            <div className="w-24 h-0.5 bg-slate-300 mx-auto"></div>
          </div>
        </div>

        {/* 2024 - Single column layout */}
        <div className="space-y-8">
          <StoryBlock
            icon={GraduationCapIcon}
            logoSrc="/images/umass-logo.png"
            customTitle={
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <img 
                    src="/images/umass-logo.png" 
                    alt="University of Massachusetts logo"
                    className="h-6 w-6 rounded object-contain"
                  />
                  <h3 className="text-lg font-bold text-slate-900">Research Fellow</h3>
                </div>
                <a 
                  href="https://www.umass.edu/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-base font-medium text-purple-600 hover:text-purple-700 underline underline-offset-2 transition-colors duration-200"
                >
                  University of Massachusetts Amherst
                </a>
              </div>
            }
            dateInfo="October 2024 - May 2025"
            bullets={[
              "Built SQL databases with 50,000+ records and performed regression analysis on climate migration trends",
              "Developed predictive models that improved policy recommendations for 3 New England states",
              "Created interactive dashboards that increased stakeholder engagement with research outputs"
            ]}
          >
            <div className="mb-4">
              Applying computational social science to solve real-world challenges in education and migration.
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {["SQL", "Python (Pandas, NumPy)", "QGIS", "Predictive Modeling", "Data Visualization", "Research Translation"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </StoryBlock>
        </div>

        {/* Timeline Year 2023 */}
        <div className="flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">2023</h2>
            <div className="w-24 h-0.5 bg-slate-300 mx-auto"></div>
          </div>
        </div>

        <StoryBlock
          icon={StethoscopeIcon}
          customTitle={
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <img 
                  src="/images/liberty-systems-logo.png" 
                  alt="Liberty Systems logo"
                  className="h-6 w-6 rounded object-contain"
                />
                <h3 className="text-xl font-bold text-slate-900">Summer Intern (Data Analyst)</h3>
              </div>
              <a 
                href="https://libertysystems.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lg font-medium text-purple-600 hover:text-purple-700 underline underline-offset-2 transition-colors duration-200"
              >
                Liberty Systems & Analytics
              </a>
            </div>
          }
          dateInfo="2023"
          bullets={[
            "Analyzed 100K+ health records from CDC, CMS, and NIH to identify care disparities",
            "Built R Shiny dashboards that reduced time-to-insight for stakeholders by 40%",
            "Collaborated with interdisciplinary teams to improve predictive models for patient outcomes"
          ]}
        >
          <div className="mb-4">
            Supporting healthcare research with predictive modeling and data visualization.
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {["R Shiny", "Healthcare Analytics", "Predictive Modeling", "ETL", "Cross-Functional Collaboration"].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700 shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </StoryBlock>

        {/* Timeline Year 2021 */}
        <div className="flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">2021</h2>
            <div className="w-24 h-0.5 bg-slate-300 mx-auto"></div>
          </div>
        </div>

        <StoryBlock
          icon={DatabaseIcon}
          customTitle={
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <img 
                  src="/images/sewa-logo.png" 
                  alt="SEWA logo"
                  className="h-6 w-6 rounded object-contain"
                />
                <h3 className="text-xl font-bold text-slate-900">Primary Data Analyst (Consultant)</h3>
              </div>
              <a 
                href="https://www.sewa.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lg font-medium text-purple-600 hover:text-purple-700 underline underline-offset-2 transition-colors duration-200"
              >
                SEWA Bharat
              </a>
            </div>
          }
          dateInfo="2021"
          bullets={[
            "Secured $100K Rockefeller Foundation grant through creation of Data Strategy Framework",
            "Redesigned mobile tools used by 10,000+ field workers, improving data accuracy by 25%",
            "Built interactive dashboards with D3.js enabling faster decision-making for leadership"
          ]}
        >
          <div className="mb-4">
            Designing data systems to support 1.9M+ farmers and drive evidence-based decision-making.
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Qualitative Research", "Grant Strategy", "Data Pipeline Design", "Mobile Tool Redesign", "Data Visualization"].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700 shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </StoryBlock>

        {/* Timeline Year 2018-2019 */}
        <div className="flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">2018-2019</h2>
            <div className="w-24 h-0.5 bg-slate-300 mx-auto"></div>
          </div>
        </div>

        <StoryBlock
          icon={MegaphoneIcon}
          customTitle={
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-6 w-6 rounded bg-slate-100 border border-slate-200 flex items-center justify-center">
                  <span className="text-xs text-slate-400">iV</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Associate – CSR Programs (Secondment)</h3>
              </div>
              <a 
                href="https://www.diageoindia.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lg font-medium text-purple-600 hover:text-purple-700 underline underline-offset-2 transition-colors duration-200"
              >
                iVolunteer / USL-Diageo
              </a>
            </div>
          }
          dateInfo="2018-2019"
          bullets={[
            "Executed 50+ CSR programs across women empowerment, road safety, WASH, and environment",
            "Built Pan-India employee volunteering program that engaged 1,200+ employees",
            "Created impact measurement tools increasing CSR reporting efficiency by 20%"
          ]}
        >
          <div className="mb-4">
            Scaling CSR initiatives and employee engagement across India.
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {["CSR Strategy", "Employee Engagement", "Program Design", "Impact Reporting", "Stakeholder Management"].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700 shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </StoryBlock>

        {/* Timeline Year 2017 */}
        <div className="flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">2017</h2>
            <div className="w-24 h-0.5 bg-slate-300 mx-auto"></div>
          </div>
        </div>

        <StoryBlock
          icon={BookOpenIcon}
          customTitle={
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-6 w-6 rounded bg-slate-100 border border-slate-200 flex items-center justify-center">
                  <span className="text-xs text-slate-400">IL</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Researcher (CSR & Education)</h3>
              </div>
              <a 
                href="https://www.schoolnetindia.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lg font-medium text-purple-600 hover:text-purple-700 underline underline-offset-2 transition-colors duration-200"
              >
                IL&FS Education and Technology Services
              </a>
            </div>
          }
          dateInfo="2017"
          bullets={[
            "Produced CBSE-aligned learning content used in 100+ classrooms",
            "Designed CSR program frameworks for corporate clients serving 5,000+ students",
            "Conducted market research that informed future education product launches"
          ]}
        >
          <div className="mb-4">
            Supporting education and corporate clients through research and content development.
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Curriculum Development", "CSR Program Design", "Market Research", "Content Strategy", "Education Analytics"].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700 shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </StoryBlock>

        {/* Timeline Year 2016-2017 */}
        <div className="flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">2016-2017</h2>
            <div className="w-24 h-0.5 bg-slate-300 mx-auto"></div>
          </div>
        </div>

        <StoryBlock
          icon={Globe2Icon}
          customTitle={
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-6 w-6 rounded bg-slate-100 border border-slate-200 flex items-center justify-center">
                  <span className="text-xs text-slate-400">TW</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Travel Writer</h3>
              </div>
              <a 
                href="https://thelandofwanderlust.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lg font-medium text-purple-600 hover:text-purple-700 underline underline-offset-2 transition-colors duration-200"
              >
                The Land of Wanderlust
              </a>
            </div>
          }
          dateInfo="2016-2017"
          bullets={[
            "Traveled across 20+ states, generating high-engagement photo/video content",
            "Led 12+ backpacking trips, curating unique offbeat travel experiences",
            "Grew online readership and community through storytelling and social media"
          ]}
        >
          <div className="mb-4">
            Creating experiential travel stories and leading adventures across India.
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Storytelling", "Content Creation", "Community Building", "Travel Operations", "Photography"].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700 shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </StoryBlock>

        {/* Timeline Year 2014-2015 */}
        <div className="flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">2014-2015</h2>
            <div className="w-24 h-0.5 bg-slate-300 mx-auto"></div>
          </div>
        </div>

        <div className="space-y-8">
          <StoryBlock
            icon={BookOpenIcon}
            customTitle={
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-6 w-6 rounded bg-slate-100 border border-slate-200 flex items-center justify-center">
                    <span className="text-xs text-slate-400">AK</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">HR Intern</h3>
                </div>
                <a 
                  href="https://akanksha.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-purple-600 hover:text-purple-700 underline underline-offset-2 transition-colors duration-200"
                >
                  Akanksha Foundation
                </a>
              </div>
            }
            dateInfo="2014-2015"
            bullets={[
              "Conducted 50+ candidate interviews for Akanksha & Teach for India schools",
              "Coordinated multiple teacher training workshops improving onboarding experience",
              "Collected staff feedback to improve engagement and reduce turnover"
            ]}
          >
            <div className="mb-4">
              Supporting teacher recruitment and staff engagement for education programs.
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {["Recruitment", "Stakeholder Coordination", "Training Support", "Needs Assessment", "HR Operations"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </StoryBlock>

          <StoryBlock
            icon={BookOpenIcon}
            customTitle={
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-6 w-6 rounded bg-slate-100 border border-slate-200 flex items-center justify-center">
                    <span className="text-xs text-slate-400">PR</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Program Intern</h3>
                </div>
                <a 
                  href="https://www.pratham.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-purple-600 hover:text-purple-700 underline underline-offset-2 transition-colors duration-200"
                >
                  Pratham Education Foundation
                </a>
              </div>
            }
            dateInfo="2014-2015"
            bullets={[
              "Collected program data from 20+ government schools in Maharashtra",
              "Created implementation reports that informed program decisions for pilot scale-up",
              "Monitored summer school program and documented learnings for future cohorts"
            ]}
          >
            <div className="mb-4">
              Collecting, monitoring, and reporting data to strengthen education programs.
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {["Field Research", "Monitoring & Evaluation", "Report Writing", "Data Collection", "Education Insights"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </StoryBlock>
        </div>
      </div>

      {/* Footer / Contact */}
      <footer className="mt-14 text-center">
          <a href="#contact" onClick={(e) => { e.preventDefault(); navigateTo('contact'); }} className="text-sm font-medium text-slate-900 underline underline-offset-4">
            Get in touch →
          </a>
      </footer>
    </main>
  );
}

export default MyJourneyPage;
