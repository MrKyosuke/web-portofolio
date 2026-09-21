import DataImage from "../data";

const Hero = () => {
  return (
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
  );
};

export default Hero;
