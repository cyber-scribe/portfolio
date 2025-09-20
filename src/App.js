import './App.css';
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, ExternalLink } from "lucide-react";

const projects = [
  { id: 1, title: "Word Scramble Game", img: "A.png", github: "https://github.com/cyber-scribe/wordScrambleGame", live: "https://cyber-scribe.github.io/wordScrambleGame/" },
  { id: 2, title: "Link to QR Generator", img: "B.png", github: "https://github.com/cyber-scribe/prac_projects/tree/main/Link2QR", live: "https://link2qr-qzej.onrender.com" },
  { id: 3, title: "E-Learning Management", img: "C.png", github: "https://github.com/cyber-scribe/MiniProject", live: "https://cyber-scribe.github.io/MiniProject/" },
  { id: 4, title: "Password Analyzer", img: "D.png", github: "https://github.com/cyber-scribe/prac_projects/tree/main/Password_Analyzer", live: "https://pass-o-meter-a22o.onrender.com" },
  { id: 5, title: "Temperature Convertor", img: "E.png", github: "https://github.com/cyber-scribe/prac_projects/tree/main/Temp%20converter", live: "https://temp-calc-m1vm.onrender.com" },
  { id: 6, title: "Weather App", img: "F.png", github: "https://github.com/cyber-scribe/prac_projects/tree/main/weather_api_project", live: "https://weather-fetch-9g05.onrender.com"},
];

const skills = {
  "Languages": [
    "C", "Python", "Java", "SQL", "HTML5", "CSS3", "JavaScript", "TypeScript"
  ],
  "Frameworks": [
    "React.js", "Express.js", "Tailwind CSS", "Bootstrap"
  ],
  "Tools": [
    "Git", "GitHub"
  ],
};

const experience = [
  {
    role: "Full Stack Developer Intern",
    company: "EVO-A",
    duration: "Jul 2025 – Sep 2025",
    details: [
      "Enhanced UI and application logic for 021 AI, an AI that acts as a Startup Advisor.",
      "Developed responsive and interactive interfaces using React, Tailwind CSS, and TypeScript.",
      "Collaborated with the development team using Git & GitHub for version control and workflow management.",
    ],
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
const [dark, setDark] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const theme = {
    bg: dark ? "bg-zinc-900" : "bg-white",
    text: dark ? "text-amber-500" : "text-amber-700",
    textAlt: dark ? "text-amber-200" : "text-amber-600",
    border: dark ? "border-amber-400/30" : "border-amber-600/30",
    hover: dark ? "hover:bg-amber-500/20" : "hover:bg-amber-200/70",
    cardBg: dark ? "bg-zinc-800/60" : "bg-amber-50",
    glow: dark ? "shadow-amber-400/40" : "shadow-amber-600/40",
  };

  return (
    <div className={`min-h-screen ${theme.bg} ${dark ? "text-gray-100" : "text-gray-900"} font-mono`}>
      {/* NAVBAR */}
      <header className={`sticky top-0 z-40 ${theme.bg}/80 backdrop-blur border-b ${theme.border}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#hero" className={`${theme.text} font-bold text-lg tracking-widest`}>
            &lt;VaidehiDubey/&gt;
          </a>
          <nav className="hidden md:flex gap-8 text-sm items-center">
      {["About", "Skills", "Experience", "Projects", "Contact"].map((label) => (
        <a
          key={label}
          href={`#${label.toLowerCase()}`}
          className={`relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-amber-400 hover:after:w-full after:transition-all`}
        >
          {label}
        </a>
      ))}
      <button
        onClick={() => setDark(!dark)}
        className={`px-2 py-1 rounded-full border ${theme.border} ${theme.textAlt} ${theme.hover}`}
      >
        {dark ? "☀" : "☾"}
      </button>
    </nav>

    <div className="md:hidden">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex flex-col gap-1.5 z-50 relative"
      >
        <motion.span
          animate={menuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
          className={`block h-0.5 w-6 rounded bg-current ${theme.text}`}
        />
        <motion.span
          animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
          className={`block h-0.5 w-6 rounded bg-current ${theme.text}`}
        />
        <motion.span
          animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
          className={`block h-0.5 w-6 rounded bg-current ${theme.text}`}
        />
      </button>
    </div>
  </div>

  <motion.div
    initial={{ x: "100%" }}
    animate={{ x: menuOpen ? 0 : "100%" }}
    transition={{ duration: 0.3 }}
    className={` fixed top-14 h-fit w-full md:hidden overflow-hidden backdrop-blur ${theme.bg} shadow-lg`}
  >
    <div className="flex flex-col items-center py-4 gap-4">
      {["About", "Skills", "Experience", "Projects", "Contact"].map((label) => (
        <a
          key={label}
          href={`#${label.toLowerCase()}`}
          onClick={() => setMenuOpen(false)} 
          className={`${theme.text} hover:text-amber-400 transition `}
        >
          {label}
        </a>
      ))}
      <button
        onClick={() => setDark(!dark)}
        className={`px-2 py-1 rounded-full border ${theme.border} ${theme.textAlt} ${theme.hover}`}
      >
        {dark ? "☀" : "☾"}
      </button>
    </div>
  </motion.div>
      </header>

      <main id="about" className="max-w-6xl mx-auto px-6 py-16">
        {/* ABOUT */}
        <section className="mt-24 md:mt:0 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`text-4xl md:text-6xl font-extrabold ${theme.text}`}
            >
              &gt; Vaidehi Dubey
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className={`mt-4 text-lg ${theme.textAlt}`}
            >
              <h3 className='font-bold text-xl mb-2'>Full-stack Developer</h3>
              <p>I enjoy problem-solving, turning ideas into practical solutions, and contributing in collaborative environments. Curious learner who see challenges as opportunities to learn and create impact.</p>
            </motion.p>
            <a
              href="https://drive.google.com/file/d/1o-szm1iXZ_QTCMSvnBky87Roq4L_YLtR/view?usp=sharing"
              download
              className={`mt-6 inline-block px-6 py-2 rounded-lg border ${theme.border} ${theme.textAlt} ${theme.hover} transition`}
            >
              Download Resume
            </a>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-64 flex items-center justify-center text-gray-400">
              <img src='pfp.jpeg' className='rounded-full' alt='profile'></img>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="mt-24 scroll-mt-24">
  <h2 className={`text-3xl font-bold ${theme.text} text-center`}>
    Skills
  </h2>

  <div className="mt-12 grid md:grid-cols-3 gap-10">
    {Object.entries(skills).map(([category, list]) => (
      <motion.div
        key={category}
        whileHover={{
          scale: 1.02,
          boxShadow: `2px 2px 6px ${dark ? "#f59e0b" : "#b45309"}`,
        }}
        transition={{ type: "spring", stiffness: 200 }}
        className={`p-8 rounded-2xl ${theme.cardBg} border ${theme.border} shadow-lg flex flex-col`}
      >
        <h3 className={`text-xl font-semibold mb-6 ${theme.text} text-center`}>
          {category}
        </h3>

        <div className="grid grid-cols-2 gap-3">
          {list.map((skill) => (
            <motion.div
              key={skill}
              whileHover={{ scale: 1.08 }}
              className={`px-3 py-2 text-center rounded-lg border ${theme.border} ${theme.bg} ${theme.textAlt} shadow-sm cursor-default`}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>
    ))}
  </div>
</section>


        {/* EXPERIENCE */}
        <section id="experience" className="mt-24 scroll-mt-24">
          <h2 className={`text-2xl font-bold ${theme.text} text-center mb-10`}>Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.02, boxShadow: `5px 5px 10px ${dark ? "#f59e0b" : "#b45309"}` }}
                className={`p-6 rounded-xl ${theme.cardBg} border ${theme.border} shadow`}
              >
                <h3 className={`text-xl font-semibold ${theme.text}`}>{exp.role} — {exp.company}</h3>
                <p className={`text-sm mb-4 ${theme.textAlt}`}>{exp.duration}</p>
                <ul className="list-disc list-inside space-y-2">
                  {exp.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mt-24 scroll-mt-24">
          <h2 className={`text-2xl font-bold ${theme.text} text-center`}>Projects</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, showMore ? projects.length : 3).map((p, idx) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`group relative rounded-xl overflow-hidden border ${theme.border} hover:shadow-amber-400/60`}
                whileHover={{ scale: 1.03, boxShadow: `2px 2px 5px ${dark ? "#f59e0b" : "#b45309"}` }}
              >
                <img src={p.img} alt={p.title} className="w-full h-48 object-cover group-hover:blur-sm transition" />
                <div className={`absolute inset-0 ${theme.bg}/90 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center`}>
                  <h3 className={`text-lg font-bold text-amber-600 mb-4`}>{p.title}</h3>
                  <div className="flex gap-4">
                    <a 
                      href={p.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`flex items-center gap-2 px-2 py-2 font-bold ${theme.cardBg} border ${theme.border} ${theme.text} rounded-full ${theme.hover} transition`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a 
                      href={p.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`flex items-center gap-2 px-2 py-2 font-bold ${theme.cardBg} border ${theme.border} ${theme.text} rounded-full ${theme.hover} transition`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {projects.length > 3 && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowMore(!showMore)}
                className={`px-6 py-2 rounded-lg border ${theme.border} ${theme.textAlt} ${theme.hover} transition`}
              >
                {showMore ? "View Less <<" : "View More >>"}
              </button>
            </div>
          )}
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-24 text-center">
          <h2 className={`text-2xl font-bold ${theme.text} mb-6`}>Contact</h2>
          <p className="mb-6">Let's connect and collaborate!</p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a href="https://github.com/cyber-scribe" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full ${theme.cardBg} ${theme.hover}`}>
              <Github className={`w-6 h-6 ${theme.text}`} />
            </a>
            <a href="https://www.linkedin.com/in/vaidehidubey/" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full ${theme.cardBg} ${theme.hover}`}>
              <Linkedin className={`w-6 h-6 ${theme.text}`} />
            </a>
          </div>
        </section>        
      </main>

      <footer className={` py-6 text-center text-xs ${theme.text} border-t ${theme.border}`}>
          &copy; {new Date().getFullYear()} Vaidehi Dubey. All rights reserved.
        </footer>
    </div>
  );
}