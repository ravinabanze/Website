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
} from './icons';
import type { ReactNode } from "react";

// --- HELPER COMPONENTS ---

function StoryBlock({
  icon: Icon,
  title,
  bullets,
  children, ctas, id,
}: {
  icon: any;
  title: string;
  bullets: string[];
  children: ReactNode;
  ctas?: { text: string; href: string; target?: string }[];
  id?: string;
}) {
  return (
    <section id={id} className="w-full">
      <div
        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
      >
        <div className="mb-3 flex items-center gap-2 text-slate-600">
          <Icon className="h-5 w-5" aria-hidden="true" />
          <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
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
                    onClick={() => navigateTo('contact')} 
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
                <StoryBlock
          icon={GraduationCapIcon}
          title="University of Massachusetts: Research Fellow (STEM & Equity) (October 2024-May 2025)"
          bullets={[
            "MSc in Computational Social Science.",
            "NSF climate migration project: predictive models, ArcGIS mapping, SQL pipelines.",
            "A/B tests on LMS (+15% engagement); automated reporting (−40% time).",
            "Social Media Lead: grew applicant conversion by 30%.",
          ]}
        >
          Research met product thinking: we built tools, tested features, and shipped insights back into decisions.
        </StoryBlock>

        <StoryBlock
          icon={StethoscopeIcon}
          title="Liberty System & Analytics — Summer Intern (2023)"
          bullets={[
            "Built predictive models and dashboards with CDC/CMS/NIH data.",
            "Insights influenced 5 features, guided $1M digital investment.",
          ]}
        >
          Healthcare is complex—but good models reveal the simplest next step.
        </StoryBlock>

        <StoryBlock
          icon={DatabaseIcon}
          title="SEWA — Primary Data Analyst (2021)"
          bullets={[
            "Org‑wide Data Strategy Framework: +45% data quality, −30% reporting lag.",
            "Redesigned mobile/digital tools; built interactive D3.js dashboards.",
            "Analytics guiding programs for 2.9M members.",
          ]}
        >
          Turning scattered data into living systems that field teams could use.
        </StoryBlock>

        <StoryBlock
          icon={LineChartIcon}
          title="Analytics Foundation — MSEPP & Ketto (2019–2020)"
          bullets={[
            "PG Diploma in Business Analytics — MSEPP.",
            "Ketto intern: influencer tool, experiments, brand workshops for 80+ staff.",
            "Social Media Analyst: lead‑gen spider network, optimized campaigns, +15% donations.",
          ]}
        >
          This was where impact met experimentation—testing funnels, creatives, and measuring results.
        </StoryBlock>

        <StoryBlock
          icon={MegaphoneIcon}
          title="CSR Programs — iVolunteer & USL‑Diageo (2018–2019)"
          bullets={[
            "Launched employee giving & volunteering program.",
            "Supported state‑level CSR in water, sanitation, road safety, women's empowerment.",
          ]}
        >
          I saw how data and logistics can mobilize entire organizations toward social change.
        </StoryBlock>

        <StoryBlock
          icon={BookOpenIcon}
          title="IL&FS Education + Pratham Books (2017)"
          bullets={[
            "Built inclusive K–12 digital content.",
            "Refined content with Pratham Books to scale impact.",
          ]}
        >
          This was my first bridge between equity and technology in education.
        </StoryBlock>

        <StoryBlock
          icon={Globe2Icon}
          title="The Land of Wanderlust (2016–2017)"
          bullets={[
            "Backpacked across India with TLOW.",
            "Created content, learned SEO, digital marketing, and vlogging.",
          ]}
        >
          A year on the road taught me adaptability, storytelling, and resilience.
        </StoryBlock>

        <StoryBlock
          icon={BookOpenIcon}
          title="Akanksha & Pratham Internships (2014–2015)"
          bullets={[
            "Akanksha: school assessments, interviews, frameworks for outcomes.",
            "Pratham: grant writing, CSR reports, annual giving reports.",
          ]}
        >
          Early internships showed me how listening and data can shape better learning environments.
        </StoryBlock>
        
        <StoryBlock
          icon={GraduationCapIcon}
          title="College Years (2013–2016)"
          bullets={[
            "BA in Sociology & Anthropology (minor in Economics) at St. Xavier's, Mumbai.",
            "Social Service League: ASER report work; research on informal markets.",
            "Feminist literature & cultural anthropology shaped how I think.",
          ]}
        >
          In 2013, I dove into Sociology, Anthropology, and Economics at St. Xavier's—splitting time between fieldwork, fest organizing, and languages.
        </StoryBlock>
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
      </div>

      {/* Footer / Contact */}

        <StoryBlock
          icon={StethoscopeIcon}
          title="Liberty System & Analytics — Summer Intern (2023)"
          imageHint="Healthcare dashboards"
          bullets={[
            "Built predictive models and dashboards with CDC/CMS/NIH data.",
            "Insights influenced 5 features, guided $1M digital investment.",
          ]}
        >
          Healthcare is complex—but good models reveal the simplest next step.
        </StoryBlock>

        <StoryBlock
          icon={DatabaseIcon}
          title="SEWA — Primary Data Analyst (2021)"
          imageHint="Dashboards"
          bullets={[
            "Org‑wide Data Strategy Framework: +45% data quality, −30% reporting lag.",
            "Redesigned mobile/digital tools; built interactive D3.js dashboards.",
            "Analytics guiding programs for 2.9M members.",
          ]}
        >
          Turning scattered data into living systems that field teams could use.
        </StoryBlock>

        <StoryBlock
          icon={LineChartIcon}
          title="Analytics Foundation — MSEPP & Ketto (2019–2020)"
          imageHint="Dashboards/workshop"
          bullets={[
            "PG Diploma in Business Analytics — MSEPP.",
            "Ketto intern: influencer tool, experiments, brand workshops for 80+ staff.",
            "Social Media Analyst: lead‑gen spider network, optimized campaigns, +15% donations.",
          ]}
        >
          This was where impact met experimentation—testing funnels, creatives, and measuring results.
        </StoryBlock>

        <StoryBlock
          icon={MegaphoneIcon}
          title="CSR Programs — iVolunteer & USL‑Diageo (2018–2019)"
          imageHint="CSR event"
          bullets={[
            "Launched employee giving & volunteering program.",
            "Supported state‑level CSR in water, sanitation, road safety, women’s empowerment.",
          ]}
        >
          I saw how data and logistics can mobilize entire organizations toward social change.
        </StoryBlock>

        <StoryBlock
          icon={BookOpenIcon}
          title="IL&FS Education + Pratham Books (2017)"
          imageHint="K–12 content"
          bullets={[
            "Built inclusive K–12 digital content.",
            "Refined content with Pratham Books to scale impact.",
          ]}
        >
          This was my first bridge between equity and technology in education.
        </StoryBlock>

        <StoryBlock
          icon={Globe2Icon}
          title="The Land of Wanderlust (2016–2017)"
          imageHint="Travel collage"
          bullets={[
            "Backpacked across India with TLOW.",
            "Created content, learned SEO, digital marketing, and vlogging.",
          ]}
        >
          A year on the road taught me adaptability, storytelling, and resilience.
        </StoryBlock>

        <StoryBlock
          icon={BookOpenIcon}
          title="Akanksha & Pratham Internships (2014–2015)"
          imageHint="School visits and reports"
          bullets={[
            "Akanksha: school assessments, interviews, frameworks for outcomes.",
            "Pratham: grant writing, CSR reports, annual giving reports.",
          ]}
        >
          Early internships showed me how listening and data can shape better learning environments.
        </StoryBlock>
        
        <StoryBlock
          icon={GraduationCapIcon}
          title="College Years (2013–2016)"
          imageHint="Campus photo or Malhar/Ithaka shot"
          bullets={[
            "BA in Sociology & Anthropology (minor in Economics) at St. Xavier’s, Mumbai.",
            "Social Service League: ASER report work; research on informal markets.",
            "Feminist literature & cultural anthropology shaped how I think.",
          ]}
        >
          In 2013, I dove into Sociology, Anthropology, and Economics at St. Xavier’s—splitting time between fieldwork, fest organizing, and languages.
        </StoryBlock>
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