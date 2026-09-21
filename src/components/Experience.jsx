import { listExperience } from "../data";

const Experience = () => {
  return (
    <div className="experience mt-32 py-10" id="experience">
      <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        Experience
      </h1>
      <p className="text-base/loose text-center opacity-50 mb-14" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
        My professional work experience.
      </p>

      {listExperience.map((exp) => (
        <div key={exp.id} className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg mb-8" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={exp.delay} data-aos-once="true">
          <h2 className="text-2xl font-bold mb-1">{exp.role}</h2>
          <h3 className="text-xl text-blue-400 mb-4">{exp.company}</h3>
          <p className="text-sm opacity-75 mb-6"><i className="ri-calendar-line"></i> {exp.date}</p>
          <ul className="list-disc list-outside ml-5 text-base/loose space-y-2 opacity-80">
            {exp.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;
