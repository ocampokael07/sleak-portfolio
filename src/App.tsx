import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

import { ArrowRight, Github, Linkedin, Twitter, Mail } from "lucide-react";

function App() {
  const [showTop, setShowTop] = useState(false);
  const [activeSkill, setActiveSkill] = useState<
    | "all"
    | "frontend"
    | "backend"
    | "security"
    | "cloud"
    | "tools"
    | "ecommerce"
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
            <span className="block text-lg md:text-xl font-medium mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Full Stack Developer • CRM & eCommerce
            </span>
          </h1>

          <p className="text-gray-400 max-w-lg mb-10">
            I build scalable web applications using .NET Core, React, and
            TypeScript while also creating CRM and automation solutions for lead
            management, integrations, and business workflows. Focused on
            performance, security, and systems that help businesses grow.
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
        {/* <a href="#" className="hover:text-cyan-400">
          <Twitter size={18} />
        </a> */}
        <a
          href="https://www.linkedin.com/in/michael-ocampo-53777516a"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400"
        >
          <Linkedin size={18} />
        </a>
        <a
          href="https://github.com/ocampokael07"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400"
        >
          <Github size={18} />
        </a>
        <a href="mailto:ocampokael07@gmail.com" className="hover:text-cyan-400">
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
                  { id: "ecommerce", label: "eCommerce / CRM" },
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
                {/* eCommerce / CRM */}
                {(activeSkill === "all" || activeSkill === "ecommerce") &&
                  [
                    "Shopify (Theme Customization, Liquid Basics)",
                    "Shopify App Integration",
                    "GoHighLevel (GHL) Automation Basics",
                    "CRM & Funnel Setup (GHL)",
                    "HubSpot (CRM & Workflows Basics)",
                    "Email Marketing Automation",
                    "Lead Management",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 hover:border-orange-400/40 transition"
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
          I’m a Full Stack Developer specializing in .NET Core and React
          (TypeScript), with experience building scalable, secure, and modular
          web applications for enterprise environments. I develop feature-based
          systems based on business requirements, including API integrations,
          authentication, and real-time applications using SignalR. I also
          implement background processing and automation using Hangfire, along
          with Windows Services for high-volume file processing and data
          handling. I have hands-on experience with SAML SSO integrations
          (PingOne, OneLogin, Okta) and working with enterprise data sources
          such as SQL Server, AWS S3, and MySQL. In addition, I’ve built
          internal tools and documentation platforms, including a responsive
          web-based guide for some of my previous projects. Alongside full stack
          development, I also work with CRM and automation tools (GHL, HubSpot,
          Shopify basics), focusing on integrations, workflows, and improving
          business processes. Overall, I focus on building reliable systems that
          are secure, scalable, and aligned with real business needs.
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
              desc: "Worked as a Full Stack Developer using .NET Core, React, and TypeScript. Focused on building secure authentication flows, implementing SAML SSO (Okta, OneLogin), and integrating multiple enterprise data sources. Developed scalable APIs and improved system performance for secure, real-time data access.",
              url: "https://www.dataradar.io/",
              private: false,
              image: "/images/DataRadar.png",
            },
            {
              title: "DataRadar Documentation Portal",
              desc: "Designed and developed a modular documentation portal using React and .NET Core. Implemented secure shared-token authentication, dynamic content modules, and seamless integration with the main DataRadar platform to ensure consistent and secure user access.",
              url: "https://www.dataradar.io/",
              private: true,
              image: "/images/DataRadar.png",
            },
            {
              title: "Confie Inquiry Portal (Internal System)",
              desc: "Built a full-stack internal system using .NET Core, React, and TypeScript for managing enterprise inquiries. Implemented authentication, role-based access control, workflow automation, and reporting features to streamline internal operations and improve data visibility.",
              url: "#",
              private: true,
              image: "/images/ConfieIQ.png",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="group relative bg-[#121625] rounded-2xl p-6 border border-white/10 hover:border-cyan-400/40 transition"
            >
              {/* Thumbnail */}
              <div className="h-40 mb-5 overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

              {/* Description with clamp + tooltip */}
              <div className="relative group/desc mb-4">
                <p className="text-sm text-gray-400 line-clamp-2 cursor-default">
                  {item.desc}
                </p>

                {/* Tooltip */}
                <div className="absolute left-0 top-full mt-2 w-64 p-3 text-xs text-white bg-black/90 rounded-lg opacity-0 group-hover/desc:opacity-100 transition pointer-events-none z-20 shadow-lg">
                  {item.desc}
                </div>
              </div>

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
          href="mailto:ocampokael07@gmail.com"
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
