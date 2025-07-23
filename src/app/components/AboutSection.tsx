import Image from 'next/image';
export function AboutSection() {
  return (
    <section id="about" className="min-h-screen container mx-auto px-8 md:px-24">
      <h2 className="text-4xl text-gray-300 font-bold mb-8">I. About Me</h2>

      <div className="flex flex-col md:flex-row gap-6 about-layout">
        <div className="md:w-1/3 flex justify-center md:justify-start">
          <Image
            src="/images/avatar.jpg"
            alt="Avatar"
            width={300}
            height={300}
            className="w-64 h-64 object-cover rounded-full border-2 border-gray-300 shadow-md"
          />
        </div>


        <div className="md:w-2/3">
          <p className="leading-relaxed mb-6 text-justify">
            Hello! I’m <span className="text-blue-300">Vo Thi Bich Chi</span>, a passionate <span className="text-blue-300">Software Developer</span> with over 3 years of industry experience. I specialize in crafting clean, efficient, and user-focused solutions. I hold a degree in <span className="text-blue-300">WEB Engineering</span> from Phu Yen University, graduating with a <span className="text-blue-300">Good classification (GPA 3.38/4)</span>.
          </p>

          <h3 className="text-2xl text-gray-400 mb-4">My Expertise & Focus</h3>

          <p className="leading-relaxed mb-6 text-justify">
            As a <span className="text-blue-300">full-stack developer</span>, I bring strong expertise in <span className="text-blue-300">.NET technologies</span> including ASP.NET MVC, Web API, Entity Framework, and Identity. I also have solid frontend experience with <span className="text-blue-300">Angular (2 years)</span>, and work confidently with <span className="text-blue-300">ReactJS and NextJS</span> to build modern, responsive interfaces. My backend work is complemented by strong database skills (MS SQL Server, MySQL, PostgreSQL) and robust API design.
          </p>

          <p className="leading-relaxed mb-6 text-justify">
            I work comfortably across multiple technologies such as Blazor, Laravel, Supabase, and design systems using HTML/CSS and Tailwind CSS. I also integrate cloud-based solutions using Microsoft Power Platform and Azure Active Directory. With a solid grasp of Agile/Scrum methodology, I focus on building scalable, maintainable software with real-world impact — and I’m always striving to grow and improve.
          </p>
        </div>

      </div>
    </section >
  )
}
