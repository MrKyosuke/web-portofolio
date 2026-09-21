import { useState } from "react";
import { listTools } from "../data";

const Skills = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
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
  );
};

export default Skills;
