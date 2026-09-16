const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
        <h1 className="text-2xl font-bold">Portofolio</h1>
        <div className="flex gap-7 flex-wrap justify-center">
            <a href="#about" className="hover:text-blue-400">About</a>
            <a href="#skills-tools" className="hover:text-blue-400">Skills</a>
            <a href="#experience" className="hover:text-blue-400">Experience</a>
            <a href="#projects" className="hover:text-blue-400">Projects</a>
            <a href="#contacts" className="hover:text-blue-400">Contacts</a>
        </div>
        <div className="flex items-center gap-3">
            <a href="https://github.com/MrKyosuke">
                <i className="ri-github-fill ri-2x"></i>
            </a>
             <a href="https://www.instagram.com/kenneth_matthew_74?igsh=Yjllc3NqamxnbmU3">
                <i className="ri-instagram-fill ri-2x"></i>
            </a>
             <a href="https://www.linkedin.com/in/kennethmatthew74">
                <i className="ri-linkedin-fill ri-2x"></i>
            </a>
        </div>
    </div>
  )
}

export default Footer