import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

import { ArrowRight, Github, Linkedin, Twitter, Mail } from "lucide-react";

function App() {
  const [showTop, setShowTop] = useState(false);
  const [activeSkill, setActiveSkill] = useState<
    "all" | "frontend" | "backend" | "security" | "cloud" | "tools"
  >("all");

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0d14] text-white overflow-hidden">
      {/* Gradient Orbs Background */}
      <div className="absolute inset-y-0 right-0 w-[35%] hidden lg:flex items-center justify-center">
        <div className="relative">
          {/* Glow */}
          <div className="absolute inset-0 bg-cyan-500/40 blur-3xl rounded-full scale-125" />

          {/* Profile Image */}
          <img
            src="/images/MyPic.jpg"
            alt="Michael Ocampo"
            className="relative w-80 h-80 xl:w-96 xl:h-96 rounded-full object-cover border-4 border-cyan-400 shadow-2xl"
          />
        </div>
      </div>
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="font-extrabold text-xl tracking-wide"></div>

        <nav className="hidden md:flex gap-6 text-sm text-gray-300">
          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>
          <a href="#works" className="hover:text-cyan-400 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 pt-28 pb-40 grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 font-medium mb-3">Hi, I’m</p>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Michael Ocampo
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Full Stack Engineer
            </span>
          </h1>

          <p className="text-gray-400 max-w-lg mb-10">
            I design and build fast, accessible, and highly interactive web
            experiences using modern technologies, focusing on performance,
            security, scalability, and exceptional user experience.
          </p>

          <div className="flex gap-4">
            <motion.button
              onClick={() => {
                document
                  .getElementById("works")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              whileHover={{
                scale: 1.08,
                boxShadow: "0px 0px 25px rgba(34,211,238,0.8)",
              }}
              whileTap={{ scale: 0.95 }}
              className="relative px-6 py-3 rounded-xl bg-cyan-500 text-black font-medium shadow-lg shadow-cyan-500/30 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 hover:opacity-30 transition" />

              <span className="relative z-10">View Work</span>
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-6 py-3 rounded-xl border border-white/20 hover:border-cyan-400 transition"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Social Dock */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-6 px-6 py-3 bg-[#121625]/80 backdrop-blur rounded-full border border-white/10 z-50">
        <a href="#" className="hover:text-cyan-400">
          <Twitter size={18} />
        </a>
        <a href="#" className="hover:text-cyan-400">
          <Linkedin size={18} />
        </a>
        <a href="#" className="hover:text-cyan-400">
          <Github size={18} />
        </a>
        <a href="#contact" className="hover:text-cyan-400">
          <Mail size={18} />
        </a>
      </div>
      <section id="skills" className="max-w-5xl mx-auto px-8 py-36">
        {" "}
        {/* Visual Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* <div className="relative bg-gradient-to-br from-[#141826] to-[#0f1220] rounded-3xl p-8 border border-white/10 shadow-2xl">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10" />

            <div className="relative space-y-4">
              <h3 className="text-xl font-semibold">Current Stack</h3>

              <div className="flex flex-wrap gap-3 text-sm">
                {[
                  "React",
                  "TypeScript",
                  "JavaScript",
                  ".NET Core",
                  "ASP.NET Web API",
                  "Hangfire",
                  "SignalR",
                  "ServiceNow API",
                  "PingOne SSO",
                  "OneLogin SSO",
                  "Okta SSO",
                  "Power Platform",
                  "SQL Server",
                  "MySQL",
                  "AWS S3",
                  "Azure",
                  "Git",
                  "REST APIs",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400/40 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div> */}
          {/* <div className="relative bg-gradient-to-br from-[#141826] to-[#0f1220] rounded-3xl p-8 border border-white/10 shadow-2xl">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10" />

            <div className="relative space-y-6">
              <h3 className="text-xl font-semibold">Technical Skills</h3>
 
              <div>
                <h4 className="text-sm font-semibold text-cyan-400 mb-2">
                  Frontend
                </h4>

                <div className="flex flex-wrap gap-2 text-sm">
                  {[
                    "React",
                    "TypeScript",
                    "JavaScript",
                    "Tailwind CSS",
                    "Responsive Design",
                    "Accessibility (WCAG)",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400/40 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
 
              <div>
                <h4 className="text-sm font-semibold text-purple-400 mb-2">
                  Backend
                </h4>

                <div className="flex flex-wrap gap-2 text-sm">
                  {[
                    ".NET Core",
                    "ASP.NET Web API",
                    "Hangfire",
                    "SignalR",
                    "REST APIs",
                    "Windows Services",
                    "Authentication & Authorization",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 hover:border-purple-400/40 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
 
              <div>
                <h4 className="text-sm font-semibold text-pink-400 mb-2">
                  Security & SSO
                </h4>

                <div className="flex flex-wrap gap-2 text-sm">
                  {[
                    "PingOne SAML",
                    "OneLogin SSO",
                    "Okta SSO",
                    "OAuth 2.0",
                    "JWT",
                    "Role-Based Access",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 hover:border-pink-400/40 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
 
              <div>
                <h4 className="text-sm font-semibold text-green-400 mb-2">
                  Cloud & Data
                </h4>

                <div className="flex flex-wrap gap-2 text-sm">
                  {[
                    "Azure",
                    "AWS S3",
                    "SQL Server",
                    "MySQL",
                    "Database Design",
                    "ETL & File Processing",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 hover:border-green-400/40 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
 
              <div>
                <h4 className="text-sm font-semibold text-yellow-400 mb-2">
                  Tools & Platform
                </h4>

                <div className="flex flex-wrap gap-2 text-sm">
                  {[
                    "Git",
                    "Azure DevOps",
                    "CI/CD",
                    "Power Platform",
                    "ServiceNow API",
                    "Agile / Scrum",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 hover:border-yellow-400/40 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div> */}
          <div className="relative bg-gradient-to-br from-[#141826] to-[#0f1220] rounded-3xl p-8 border border-white/10 shadow-2xl">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10" />

            <div className="relative space-y-6">
              <h3 className="text-xl font-semibold">Technical Skills</h3>

              {/* Filters */}
              <div className="flex flex-wrap gap-3">
                {[
                  { id: "all", label: "All" },
                  { id: "frontend", label: "Frontend" },
                  { id: "backend", label: "Backend" },
                  { id: "security", label: "SSO" },
                  { id: "cloud", label: "Cloud" },
                  { id: "tools", label: "Tools" },
                ].map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveSkill(filter.id as any)}
                    className={`px-4 py-1.5 rounded-full text-sm border transition ${
                      activeSkill === filter.id
                        ? "bg-cyan-500 text-black border-cyan-400"
                        : "bg-white/5 text-gray-300 border-white/10 hover:border-cyan-400/40"
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>

              {/* Skills Grid */}
              <div className="flex flex-wrap gap-2 text-sm">
                {/* Frontend */}
                {(activeSkill === "all" || activeSkill === "frontend") &&
                  [
                    "React",
                    "TypeScript",
                    "JavaScript",
                    "Tailwind CSS",
                    "Responsive Design",
                    "Accessibility (WCAG)",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400/40 transition"
                    >
                      {skill}
                    </span>
                  ))}

                {/* Backend */}
                {(activeSkill === "all" || activeSkill === "backend") &&
                  [
                    ".NET Core",
                    "ASP.NET Web API",
                    "Hangfire",
                    "SignalR",
                    "REST APIs",
                    "Windows Services",
                    "Authentication & Authorization",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 hover:border-purple-400/40 transition"
                    >
                      {skill}
                    </span>
                  ))}

                {/* Security */}
                {(activeSkill === "all" || activeSkill === "security") &&
                  [
                    "PingOne SAML",
                    "OneLogin SSO",
                    "Okta SSO",
                    "OAuth 2.0",
                    "JWT",
                    "Role-Based Access",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 hover:border-pink-400/40 transition"
                    >
                      {skill}
                    </span>
                  ))}

                {/* Cloud */}
                {(activeSkill === "all" || activeSkill === "cloud") &&
                  [
                    "Azure",
                    "AWS S3",
                    "SQL Server",
                    "MySQL",
                    "Database Design",
                    "ETL & File Processing",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 hover:border-green-400/40 transition"
                    >
                      {skill}
                    </span>
                  ))}

                {/* Tools */}
                {(activeSkill === "all" || activeSkill === "tools") &&
                  [
                    "Git",
                    "Azure DevOps",
                    "CI/CD",
                    "Power Platform",
                    "ServiceNow API",
                    "Agile / Scrum",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 hover:border-yellow-400/40 transition"
                    >
                      {skill}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      {/* About */}
      <section id="about" className="max-w-5xl mx-auto px-8 py-36">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold mb-8"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 leading-relaxed text-lg"
        >
          I’m a Software Engineer specializing in .NET Core and React
          (TypeScript), with strong experience in building scalable, modular web
          applications and enterprise systems. I develop feature-based modules
          based on business requirements using .NET Core and React, and
          implement background automation with Hangfire. I have created Windows
          Services for high-volume file processing, handling thousands of files
          daily and storing structured data in databases. I am experienced in
          building real-time applications using SignalR and in creating
          comprehensive technical documentation, including a responsive
          web-based user guide for our application, DataRadar. I have hands-on
          experience integrating SAML SSO solutions such as PingOne, OneLogin,
          and Okta, as well as connecting enterprise data sources including SQL
          Server, AWS S3, and MySQL. Overall, I have strong expertise in
          designing, developing, and maintaining modern web applications using
          the .NET Core and React (TypeScript/JavaScript) technology stack.
        </motion.p>
      </section>

      {/* Projects */}
      <section id="works" className="max-w-7xl mx-auto px-8 py-36">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold mb-16"
        >
          Selected Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "DataRadar",
              desc: "Worked as a Full Stack Developer focusing on authentication, SAML SSO integration, and connecting multiple enterprise data sources for secure and scalable access.",
              url: "https://www.dataradar.io/",
              private: false,
            },
            {
              title: "DataRadar Documentation Portal",
              desc: "Designed and maintained a secure, module-based documentation web application for DataRadar, using shared-token authentication and seamless integration with the main platform.",
              url: "https://www.dataradar.io/",
              private: true,
            },
            {
              title: "Confie Inquiry Portal (Internal System)",
              desc: "Full-stack development of a private enterprise inquiry management system using .NET Core and React, including authentication, workflow automation, and reporting modules.",
              url: "#",
              private: true,
            },
            {
              title: "Enterprise Web App",
              desc: "Built a full-stack React and .NET Core system with secure authentication, scalable APIs, and modular architecture.",
              url: "https://your-enterprise-app.com",
              private: false,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="group relative bg-[#121625] rounded-2xl p-6 border border-white/10 hover:border-cyan-400/40 transition"
            >
              {/* Thumbnail / Banner */}
              <div className="h-40 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 mb-5" />

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

              {/* Description */}
              <p className="text-sm text-gray-400 mb-4">{item.desc}</p>

              {/* Action Button */}
              <a
                href={item.url}
                target={item.private ? undefined : "_blank"}
                rel={item.private ? undefined : "noopener noreferrer"}
                className={`inline-flex items-center gap-2 text-sm hover:underline ${
                  item.private
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-cyan-400"
                }`}
              >
                {item.private ? "Confidential" : "Visit Website"}
                {!item.private && <ArrowRight size={14} />}
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="max-w-4xl mx-auto px-8 py-36 text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold mb-6"
        >
          Let’s Build Something Together
        </motion.h2>

        <p className="text-gray-400 mb-10">
          Have a project in mind or looking for a developer? Feel free to reach
          out.
        </p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          href="mailto:youremail@example.com"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-black font-medium shadow-lg"
        >
          <Mail size={18} /> Get in Touch
        </motion.a>
      </section>
      {/* Scroll To Top Button */}
      {showTop && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          whileHover={{
            scale: 1.15,
            boxShadow: "0 0 25px rgba(34,211,238,0.9)",
          }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-24 right-8 z-50 p-4 rounded-full bg-cyan-500 text-black shadow-xl shadow-cyan-500/40"
        >
          <ArrowUp size={22} />
        </motion.button>
      )}
      {/* Footer */}
      <footer className="text-center py-8 text-gray-500 text-sm border-t border-white/5">
        © {new Date().getFullYear()} Michael Ocampo. Crafted with React &
        TypeScript.
      </footer>
    </div>
  );
}

export default App;
