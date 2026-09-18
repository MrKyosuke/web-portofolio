import { useState, useRef } from "react";
import DataImage from "./data"
import { listTools, listProyek } from "./data";

function App() {
  const [showDetails, setShowDetails] = useState(false);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - (clientWidth * 0.8) : scrollLeft + (clientWidth * 0.8);
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="max-w-[1200px] mx-auto pt-24 pb-16 px-4 lg:px-0" id="about">
        <div className="hero-box bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-[32px] p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 lg:gap-12 items-center">

          <div className="order-2 lg:order-1 animate__animated animate__fadeInUp animate__delay-3s text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="flex sm:inline-flex items-center sm:items-start gap-2.5 bg-white/5 border border-white/10 rounded-2xl sm:rounded-full py-2.5 sm:py-2 px-4 sm:px-4 text-[0.75rem] sm:text-[0.82rem] font-semibold text-[#9aa0ac] mb-6 w-full sm:w-auto">
              <svg viewBox="0 0 24 24" fill="none" className="w-[15px] h-[15px] stroke-[#4f8dff] shrink-0 mt-0.5 sm:mt-0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M3 8h18" /></svg>
              <span className="leading-snug sm:leading-normal">"Testing leads to failure, and failure leads to understanding"</span>
            </div>

            <h1 className="text-[2.4rem] md:text-[3rem] font-extrabold leading-[1.15] tracking-tight mb-5">
              Hello! I'm<span className="block text-[#4f8dff] mt-1">Kenneth Matthew</span>
            </h1>

            <p className="text-[1rem] leading-[1.75] text-[#9aa0ac] max-w-[500px] mb-8">
              Fullstack Developer who's a fresh graduate in Computer Science, with a focus on Web and Mobile
              App Development. I aim to build scalable, efficient, and user-friendly applications that solve
              real problems people face in their daily lives, and I'm always looking for the next thing to learn.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
              <a href="/CV Kenneth Matthew.pdf" download="CV_Kenneth_Matthew.pdf" className="inline-flex items-center gap-2 bg-[#4f8dff] hover:bg-[#3f7bef] text-white py-3 px-5 rounded-full text-[0.9rem] font-bold transition-colors">
                Download CV <svg viewBox="0 0 24 24" fill="none" stroke="#fff" className="w-[15px] h-[15px]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" /></svg>
              </a>
              <a href="#projects" className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-[#eef0f4] border border-white/10 py-3 px-5 rounded-full text-[0.9rem] font-bold transition-colors">
                View Projects <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-[15px] h-[15px]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m0 0l-6-6m6 6l-6 6" /></svg>
              </a>
            </div>

            <div className="flex gap-8 justify-center lg:justify-start">
              <div className="flex flex-col pl-4 border-l-2 border-white/10">
                <div className="text-[1.7rem] font-extrabold leading-none">8<span className="text-[#c9ab7c]">+</span></div>
                <div className="text-[0.8rem] text-[#9aa0ac] mt-1.5">Finished Projects</div>
              </div>
              <div className="flex flex-col pl-4 border-l-2 border-white/10">
                <div className="text-[1.7rem] font-extrabold leading-none">1<span className="text-[#c9ab7c]">+</span></div>
                <div className="text-[0.8rem] text-[#9aa0ac] mt-1.5">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate__animated animate__fadeInUp animate__delay-4s mb-2 lg:mb-0">
            <div className="w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] lg:w-[340px] lg:h-[340px] rounded-full overflow-hidden border-2 border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
              <img src={DataImage.ProfileImage} alt="Profile" className="w-full h-full object-cover rounded-full block" loading="lazy" />
            </div>
          </div>

        </div>
      </div>

      <div className="tools mt-32" id="skills-tools">
        <h1 className="text-center text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000"
          data-aos-delay="300" data-aos-once="true">Technical Skills & Tools</h1>
        <p className="text-center mx-auto xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50 mb-10"
          data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Here are the lists of tools i used to
          make some Websites and Applications</p>

        {!showDetails ? (
          <div
            className="tools-panel cursor-pointer pt-11 pb-8 mb-10 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.03)] animate__animated animate__fadeIn"
            onClick={() => setShowDetails(true)}
            title="Click to view details"
          >
            {/* Technical Skills Marquee */}
            <div className="flex items-center justify-center gap-3 mx-10 mb-6 relative z-10">
              <span className="section-rule"></span>
              <span className="text-[0.8rem] font-bold py-1.5 px-4 rounded-full whitespace-nowrap text-[#bcd8ff] bg-[rgba(91,157,255,0.12)] border border-[rgba(91,157,255,0.35)]">Technical Skills</span>
              <span className="section-rule"></span>
            </div>

            <div className="marquee-mask mb-8 relative z-10">
              <div className="flex w-max animate-marquee py-1 gap-4 px-2 hover:pause-on-hover">
                {/* First set */}
                <div className="flex gap-4 items-center">
                  {listTools.filter(cat => cat.type === "Skills").map((cat, catIdx) => (
                    cat.tools.map((tool, idx) => (
                      <div key={`marquee1-skills-${catIdx}-${idx}`} className="tool-card flex flex-col items-center gap-2.5 p-4 rounded-[14px]" style={{ "--glow": tool.glow || "rgba(91,157,255,0.45)" }}>
                        <div className="w-[44px] h-[44px] rounded-[11px] flex items-center justify-center font-extrabold text-[0.95rem] shrink-0" style={{ background: tool.bg || 'rgba(255,255,255,0.06)' }}>
                          {tool.gambar ? (
                            <img src={tool.gambar} alt={tool.nama} className="w-6 h-6 object-contain" loading="lazy" />
                          ) : (
                            <i className={`${tool.iconClass} text-2xl ${tool.dark ? 'text-[#0a0b0f]' : 'text-[#cfd3dc]'}`}></i>
                          )}
                        </div>
                        <span className="tool-name text-[0.76rem] text-center leading-tight">{tool.nama}</span>
                      </div>
                    ))
                  ))}
                </div>
                {/* Second set */}
                <div className="flex gap-4 items-center">
                  {listTools.filter(cat => cat.type === "Skills").map((cat, catIdx) => (
                    cat.tools.map((tool, idx) => (
                      <div key={`marquee2-skills-${catIdx}-${idx}`} className="tool-card flex flex-col items-center gap-2.5 p-4 rounded-[14px]" style={{ "--glow": tool.glow || "rgba(91,157,255,0.45)" }}>
                        <div className="w-[44px] h-[44px] rounded-[11px] flex items-center justify-center font-extrabold text-[0.95rem] shrink-0" style={{ background: tool.bg || 'rgba(255,255,255,0.06)' }}>
                          {tool.gambar ? (
                            <img src={tool.gambar} alt={tool.nama} className="w-6 h-6 object-contain" loading="lazy" />
                          ) : (
                            <i className={`${tool.iconClass} text-2xl ${tool.dark ? 'text-[#0a0b0f]' : 'text-[#cfd3dc]'}`}></i>
                          )}
                        </div>
                        <span className="tool-name text-[0.76rem] text-center leading-tight">{tool.nama}</span>
                      </div>
                    ))
                  ))}
                </div>
              </div>
            </div>

            {/* Tools Marquee */}
            <div className="flex items-center justify-center gap-3 mx-10 mb-6 relative z-10">
              <span className="section-rule"></span>
              <span className="text-[0.8rem] font-bold py-1.5 px-4 rounded-full whitespace-nowrap text-[#b9f5df] bg-[rgba(51,209,154,0.12)] border border-[rgba(51,209,154,0.35)]">Tools Used</span>
              <span className="section-rule"></span>
            </div>

            <div className="marquee-mask relative z-10">
              <div className="flex w-max animate-marquee-reverse py-1 gap-4 px-2 hover:pause-on-hover">
                {/* First set */}
                <div className="flex gap-4 items-center">
                  {listTools.filter(cat => cat.type === "Tools").map((cat, catIdx) => (
                    cat.tools.map((tool, idx) => (
                      <div key={`marquee1-tools-${catIdx}-${idx}`} className="tool-card flex flex-col items-center gap-2.5 p-4 rounded-[14px]" style={{ "--glow": tool.glow || "rgba(51,209,154,0.45)" }}>
                        <div className="w-[44px] h-[44px] rounded-[11px] flex items-center justify-center font-extrabold text-[0.95rem] shrink-0" style={{ background: tool.bg || 'rgba(255,255,255,0.06)' }}>
                          {tool.gambar ? (
                            <img src={tool.gambar} alt={tool.nama} className="w-6 h-6 object-contain" loading="lazy" />
                          ) : (
                            <i className={`${tool.iconClass} text-2xl ${tool.dark ? 'text-[#0a0b0f]' : 'text-[#cfd3dc]'}`}></i>
                          )}
                        </div>
                        <span className="tool-name text-[0.76rem] text-center leading-tight">{tool.nama}</span>
                      </div>
                    ))
                  ))}
                </div>
                {/* Second set */}
                <div className="flex gap-4 items-center">
                  {listTools.filter(cat => cat.type === "Tools").map((cat, catIdx) => (
                    cat.tools.map((tool, idx) => (
                      <div key={`marquee2-tools-${catIdx}-${idx}`} className="tool-card flex flex-col items-center gap-2.5 p-4 rounded-[14px]" style={{ "--glow": tool.glow || "rgba(51,209,154,0.45)" }}>
                        <div className="w-[44px] h-[44px] rounded-[11px] flex items-center justify-center font-extrabold text-[0.95rem] shrink-0" style={{ background: tool.bg || 'rgba(255,255,255,0.06)' }}>
                          {tool.gambar ? (
                            <img src={tool.gambar} alt={tool.nama} className="w-6 h-6 object-contain" loading="lazy" />
                          ) : (
                            <i className={`${tool.iconClass} text-2xl ${tool.dark ? 'text-[#0a0b0f]' : 'text-[#cfd3dc]'}`}></i>
                          )}
                        </div>
                        <span className="tool-name text-[0.76rem] text-center leading-tight">{tool.nama}</span>
                      </div>
                    ))
                  ))}
                </div>
              </div>
            </div>

            <p className="text-center text-[0.85rem] font-semibold text-[#5b9dff] mt-8 hover:underline relative z-10 transition-all cursor-pointer">
              Click to see detailed categories
            </p>
          </div>
        ) : (
          <div className="animate__animated animate__fadeIn">
            <div className="flex justify-end mb-8">
              <button onClick={() => setShowDetails(false)} className="back-btn">
                <i className="ri-arrow-go-back-line"></i> Back to simple view
              </button>
            </div>

            <div className="grid lg:grid-cols-[1.35fr_1fr] gap-7 items-start">

              {/* Technical Skills Column */}
              <div className="flex flex-col">
                <div className="flex items-baseline gap-3 mb-6">
                  <h1 className="text-[1.7rem] font-extrabold m-0 tracking-[-0.02em] text-[#5b9dff]">Technical Skills</h1>
                  <span className="col-head-rule"></span>
                </div>

                {listTools.filter(cat => cat.type === "Skills").map((cat, catIdx) => (
                  <div key={`skills-detail-${catIdx}`} className="detail-category" style={{ "--accent": "#5b9dff" }}>
                    <h2 className="detail-category-title">{cat.category}</h2>
                    <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-2.5">
                      {cat.tools.map((tool) => (
                        <div className="detail-item" key={`tool-detail-${tool.id}`} style={{ "--glow": tool.glow || "rgba(91,157,255,0.4)" }}>
                          <div className="detail-item-icon" style={{ background: tool.bg || 'rgba(255,255,255,0.06)' }}>
                            {tool.gambar ? (
                              <img src={tool.gambar} alt={tool.nama} className="w-4 h-4 object-contain" loading="lazy" />
                            ) : (
                              <i className={`${tool.iconClass} text-[1.1rem] ${tool.dark ? 'text-[#0a0b0f]' : 'text-white'}`}></i>
                            )}
                          </div>
                          <span className="text-[0.82rem] font-semibold text-[#eef0f4] whitespace-nowrap overflow-hidden text-ellipsis" title={tool.nama}>{tool.nama}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tools Column */}
              <div className="flex flex-col">
                <div className="flex items-baseline gap-3 mb-6">
                  <h1 className="text-[1.7rem] font-extrabold m-0 tracking-[-0.02em] text-[#33d19a]">Tools & Systems</h1>
                  <span className="col-head-rule"></span>
                </div>

                {listTools.filter(cat => cat.type === "Tools").map((cat, catIdx) => (
                  <div key={`tools-detail-${catIdx}`} className="detail-category" style={{ "--accent": "#33d19a" }}>
                    <h2 className="detail-category-title">{cat.category}</h2>
                    <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-2.5">
                      {cat.tools.map((tool) => (
                        <div className="detail-item" key={`tool-detail-${tool.id}`} style={{ "--glow": tool.glow || "rgba(51,209,154,0.4)" }}>
                          <div className="detail-item-icon" style={{ background: tool.bg || 'rgba(255,255,255,0.06)' }}>
                            {tool.gambar ? (
                              <img src={tool.gambar} alt={tool.nama} className="w-4 h-4 object-contain" loading="lazy" />
                            ) : (
                              <i className={`${tool.iconClass} text-[1.1rem] ${tool.dark ? 'text-[#0a0b0f]' : 'text-white'}`}></i>
                            )}
                          </div>
                          <span className="text-[0.82rem] font-semibold text-[#eef0f4] whitespace-nowrap overflow-hidden text-ellipsis" title={tool.nama}>{tool.nama}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        )}
      </div>

      {/* About Section */}

      {/* Experience Section */}
      <div className="experience mt-32 py-10" id="experience">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          Experience</h1>
        <p className="text-base/loose text-center opacity-50 mb-14" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
          My professional work experience.
        </p>

        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg mb-8" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
          <h2 className="text-2xl font-bold mb-1">Software Engineer</h2>
          <h3 className="text-xl text-blue-400 mb-4">WZ Technology</h3>
          <p className="text-sm opacity-75 mb-6"><i className="ri-calendar-line"></i> December 2025 - June 2026</p>
          <ul className="list-disc list-outside ml-5 text-base/loose space-y-2 opacity-80">
            <li>Delivered the Budgeting sub-feature within a Fintech Management application used by GA, Finance & Supplier teams, enabling users to view uploaded Excel-based budgeting lists, export data to CSV, and receive cell-level validation feedback with error messages for invalid upload entries. Built fullstack using Docker, SQLyog, Yii Framework, JS, and PHP.</li>
            <li>Built a mobile version of the web application from scratch, covering 3 main pages: Dashboard (data summary & notifications), Request Page (approval workflow with role-based access controlled by the Backend team), and Profile (theme settings, cache clearing, logout). Worked as Frontend developer using Expo, React Native, TypeScript, JS, and Firebase API.</li>
          </ul>
        </div>

        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true">
          <h2 className="text-2xl font-bold mb-1">Business Analyst</h2>
          <h3 className="text-xl text-blue-400 mb-4">PT Bank Central Asia</h3>
          <p className="text-sm opacity-75 mb-6"><i className="ri-calendar-line"></i> February 2024 - February 2025</p>
          <ul className="list-disc list-outside ml-5 text-base/loose space-y-2 opacity-80">
            <li>Designing Functional Flows for multiple projects to ensure clear communication of the requirements and expected system behaviours.</li>
            <li>Designing User Flows to visually represent the end-user experience to ensure that the application process would align well with the business needs.</li>
            <li>Iterating mockups based on multiple feedbacks given by the stakeholders, vendors and product managers to ensure alignment with business objectives.</li>
          </ul>
        </div>
      </div>
      {/* Experience Section */}

      {/* Projects */}
      <div className="project mt-32 py-10" id="projects">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          Projects</h1>
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
      {/* Projects */}

      {/* Contacts */}
      <div className="contacts mt-32 sm:p-10 p-0" id="contacts">
        <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Contacts</h1>
        <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000"
          data-aos-delay="300" data-aos-once="true">
          You can contact me through here</p>
        <form action="https://formsubmit.co/kenmattxd@gmail.com" method="POST"
          className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off"
          data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Name</label>
              <input type="text" name="Name" placeholder="Enter your name..." className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input type="email" name="Email" placeholder="Enter your Email Address..." className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">Subject & Message</label>
              <textarea name="pesan" id="Message" cols="45" rows="7" placeholder="Leave a message here..." className="border border-zinc-500 p-2 rounded-md" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-blue-500 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-blue-400">Send</button>
            </div>
          </div>
        </form>
      </div>

      {/* Contacts */}
    </>
  );
}

export default App
