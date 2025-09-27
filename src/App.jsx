import React, { useState } from "react"
import { motion } from "framer-motion"

export default function App() {
  const [dark, setDark] = useState(false)

  return (
    <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      {/* Background Animated Circles */}
      <motion.div
        animate={{ x: [0, 150, -120, 0], y: [0, 100, -100, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "15%",
          left: "10%",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, #60a5fa, #2563eb)",
          filter: "blur(120px)",
          zIndex: -1,
        }}
      />
      <motion.div
        animate={{ x: [0, -150, 100, 0], y: [0, -100, 120, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          bottom: "10%",
          right: "10%",
          width: "50vw",
          height: "50vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, #f472b6, #db2777)",
          filter: "blur(140px)",
          zIndex: -1,
        }}
      />

      {/* Main Content */}
      <main
        style={{
          fontFamily: "Inter, sans-serif",
          width: "100%",
          minHeight: "100vh",
          padding: "5vw",
          color: dark ? "#f1f5f9" : "#1e293b",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "3rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <motion.h1
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            style={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              borderRight: "3px solid #0070f3",
              display: "inline-block",
              fontSize: "clamp(1.5rem, 5vw, 3rem)",
              fontWeight: "bold",
            }}
          >
            Anava Bayu Nusantara
          </motion.h1>

          <button
            onClick={() => setDark((d) => !d)}
            style={{
              padding: "8px 16px",
              borderRadius: 8,
              border: "none",
              cursor: "pointer",
              background: dark ? "#334155" : "#cbd5e1",
              color: dark ? "#f8fafc" : "#1e293b",
            }}
          >
            {dark ? "☀️ Light" : "🌙 Dark"}
          </button>
        </motion.header>

        {/* About Section */}
        <motion.section
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          style={{ marginBottom: "3rem" }}
        >
          <h2>About Me</h2>
          <p>
            Undergraduate student in <b>Biology Education</b> at the University of
            Jember (GPA 3.71). Passionate about STEM education, technology
            integration, and creative digital projects. Experienced in student
            organizations and content creation with Canva, Adobe Photoshop, and
            Premiere Pro.
          </p>
        </motion.section>

        {/* Experience */}
        <motion.section
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          style={{ marginBottom: "3rem" }}
        >
          <h2>Experience</h2>
          <div style={{ display: "grid", gap: 20 }}>
            {[
              { role: "Head of Bureau", place: "BPM FKIP UNEJ", time: "Feb 2023 – Jun 2024" },
              { role: "Head of Department", place: "BEM FKIP UNEJ", time: "Feb 2022 – Dec 2022" },
              { role: "Apprentice Moderator", place: "Brainly", time: "Oct 2020 – Jan 2021" },
            ].map((exp, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 200 }}
                style={{
                  padding: 20,
                  borderRadius: 16,
                  boxShadow: "0 12px 32px rgba(0,0,0,0.2)",
                  background: dark ? "#1e293b" : "#fff",
                }}
              >
                <h3>{exp.role}</h3>
                <p>
                  {exp.place} · {exp.time}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          style={{ marginBottom: "3rem" }}
        >
          <h2>Contact</h2>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/anava-bayu-nusantara-b9489a220/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/anava-bayu-nusantara
            </a>
          </p>
          <p>Email: you@example.com</p>
        </motion.section>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1 }}
          style={{ marginTop: 48, textAlign: "center" }}
        >
          © {new Date().getFullYear()} Anava Bayu Nusantara
        </motion.footer>
      </main>
    </div>
  )
}
