import { useRef } from "react";
import { listProyek } from "../data";

const Projects = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - (clientWidth * 0.8) : scrollLeft + (clientWidth * 0.8);
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="project mt-32 py-10" id="projects">
      <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        Projects
      </h1>
      <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
        Here are some projects that i've worked on.
      </p>
      
      <div className="relative group mt-14">
        <button onClick={() => scroll('left')} className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 bg-zinc-800/90 hover:bg-[#4f8dff] text-white w-12 h-12 rounded-full items-center justify-center border border-white/10 backdrop-blur-sm transition-all shadow-xl opacity-0 group-hover:opacity-100" aria-label="Previous Project">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
        </button>
        <button onClick={() => scroll('right')} className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 bg-zinc-800/90 hover:bg-[#4f8dff] text-white w-12 h-12 rounded-full items-center justify-center border border-white/10 backdrop-blur-sm transition-all shadow-xl opacity-0 group-hover:opacity-100" aria-label="Next Project">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
        </button>

        <div ref={scrollRef} className="project-box flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar">
          {listProyek.map(proyek =>
          <div key={proyek.id} className="p-5 bg-zinc-800 rounded-2xl snap-center shrink-0 w-[90vw] md:w-[400px] flex flex-col" data-aos="fade-up" data-aos-duration="1000"
            data-aos-delay={proyek.dad} data-aos-once="true">
            <div className="aspect-[16/10] w-full rounded-xl overflow-hidden bg-black/20 mb-5">
              <img src={proyek.gambar} alt="Project Images" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="flex flex-col flex-grow">
              <h1 className="text-2xl font-bold mb-3">{proyek.nama}</h1>
              <p className="text-[0.95rem] leading-[1.7] opacity-75 mb-6 flex-grow">{proyek.desk}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {proyek.tools.map((tool, index) => (
                  <span className="py-1 px-3 border border-zinc-600 bg-zinc-700/50 rounded-full font-semibold text-[0.8rem] text-zinc-300" key={index}>{tool}</span>
                ))}
              </div>

              {proyek.github && proyek.github !== "#" ? (
                <a href={proyek.github} target="_blank" rel="noopener noreferrer" className="mt-auto w-full flex items-center justify-center gap-2 bg-[#4f8dff]/10 hover:bg-[#4f8dff] text-[#4f8dff] hover:text-white border border-[#4f8dff]/30 hover:border-[#4f8dff] py-3 px-5 rounded-xl font-bold transition-all duration-300">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"></path></svg>
                  View on Github
                </a>
              ) : (
                <div className="mt-auto w-full flex items-center justify-center gap-2 bg-zinc-700/30 text-zinc-500 border border-zinc-700/50 py-3 px-5 rounded-xl font-bold cursor-not-allowed">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  Confidential Project
                </div>
              )}
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
