import { useState, useEffect } from "react";

const Navbar = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150){
                setActive(true);
            }else{
                setActive(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

  return (
    <div className="navbar py-7 flex items-center justify-between">
        <div className="logo">
            <h1 className="text-3xl font-bold bg-white text-black p-1 md:bg-transparent md:text-blue-400">MyPortofolio</h1>
        </div>
        <ul 
        className={`menu flex items-center justify-center sm:gap-8 gap-2.5 md:static fixed left-1/2 
        -translate-x-1/2 md:-translate-x-0 md:opacity-100 bg-white/30 backdrop-blur-md p-3 sm:p-4 
        rounded-b-2xl md:bg-transparent transition-all md:transition-none z-40 w-[96%] max-w-max flex-wrap ${
                active ? "top-0 opacity-100" : "-top-10 opacity-0"
        }`}>
             <li>
                <a href="#about" className="md:text-lg sm:text-base text-[0.85rem] font-medium hover:text-blue-400">About</a>
            </li>
             <li>
                <a href="#skills-tools" className="md:text-lg sm:text-base text-[0.85rem] font-medium hover:text-blue-400">Skills</a>
            </li>
             <li>
                <a href="#experience" className="md:text-lg sm:text-base text-[0.85rem] font-medium hover:text-blue-400">Experience</a>
            </li>
             <li>
                <a href="#projects" className="md:text-lg sm:text-base text-[0.85rem] font-medium hover:text-blue-400">Projects</a>
            </li>
             <li>
                <a href="#contacts" className="md:text-lg sm:text-base text-[0.85rem] font-medium hover:text-blue-400">Contacts</a>
            </li>
        </ul>
    </div>
  )
}

export default Navbar;