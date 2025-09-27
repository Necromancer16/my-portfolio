import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function App() {
  const [dark, setDark] = useState(false)
  const canvasRef = useRef(null)

  // Parallax starfield background
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    let stars = []

    function initStars() {
      stars = []
      for (let i = 0; i < 200; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * canvas.width,
        })
      }
    }

    function animate() {
      ctx.fillStyle = dark ? "#0f172a" : "#f8fafc"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = dark ? "#f8fafc" : "#0f172a"

      stars.forEach((star) => {
        star.z -= 0.5
        if (star.z <= 0) star.z = canvas.width

        const k = 128.0 / star.z
        const px = star.x * k + canvas.width / 2
        const py = star.y * k + canvas.height / 2

        if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
          const size = (1 - star.z / canvas.width) * 3
          ctx.beginPath()
          ctx.arc(px, py, size, 0, Math.PI * 2)
          ctx.fill()
        }
      })
      requestAnimationFrame(animate)
    }

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    initStars()
    animate()

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initStars()
    })
  }, [dark])

  const skills = [
    { name: "Canva", img: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/canva-icon.png" },
    { name: "Adobe Photoshop", img: "https://cdn.worldvectorlogo.com/logos/adobe-photoshop-2.svg" },
    { name: "Adobe Premiere Pro", img: "https://cdn.worldvectorlogo.com/logos/premiere-pro-cc.svg" },
    { name: "Excel", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt__gdZwhO3aSPCNy6b8HwnR5E5AARVCA1wQ&s" },
  ]

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        padding: "0 16px", // adaptif padding untuk hp/tablet
      }}
    >
      {/* Animated Parallax Background */}
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />

      <main
        style={{
          fontFamily: "Inter, sans-serif",
          width: "100%",
          maxWidth: 960,
          margin: "0 auto",
          padding: "24px",
          background: dark ? "rgba(15,23,42,0.85)" : "rgba(248,250,252,0.85)",
          color: dark ? "#f1f5f9" : "#1e293b",
          minHeight: "100vh",
          transition: "all 0.5s ease",
          position: "relative",
          zIndex: 10,
          borderRadius: 16,
          boxShadow: "0 0 40px rgba(0,0,0,0.2)",
          boxSizing: "border-box",
        }}
      >
        {/* Header / Hero */}
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 40,
            flexWrap: "wrap",
          }}
        >
          <h1 style={{ margin: 0, fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}>Anava Bayu Nusantara</h1>
          <button
            onClick={() => setDark((d) => !d)}
            style={{
              padding: "6px 12px",
              borderRadius: 8,
              border: "none",
              cursor: "pointer",
              background: dark ? "#334155" : "#cbd5e1",
              color: dark ? "#f8fafc" : "#1e293b",
              marginTop: 12,
            }}
          >
            {dark ? "☀️ Light" : "🌙 Dark"}
          </button>
        </motion.header>

        {/* About Section */}
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <h2>About Me</h2>
          <p style={{ fontSize: "clamp(0.9rem, 2vw, 1.1rem)", lineHeight: 1.6 }}>
            Undergraduate student in <b>Biology Education</b> at the University of
            Jember (GPA 3.71). Passionate about STEM education, technology
            integration, and creative digital projects. Experienced in student
            organizations and content creation with tools such as Canva, Adobe
            Photoshop, and Premiere Pro.
          </p>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginTop: 40 }}
        >
          <h2>Experience</h2>
          <div style={{ display: "grid", gap: 20 }}>
            {[
              {
                role: "Head of Bureau",
                place: "BPM FKIP UNEJ",
                time: "Feb 2023 – Jun 2024",
              },
              {
                role: "Head of Department",
                place: "BEM FKIP UNEJ",
                time: "Feb 2022 – Dec 2022",
              },
              {
                role: "Apprentice Moderator",
                place: "Brainly",
                time: "Oct 2020 – Jan 2021",
              },
            ].map((exp, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                style={{
                  padding: 20,
                  borderRadius: 16,
                  boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
                  background: dark ? "#1e293b" : "#fff",
                }}
              >
                <h3 style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)" }}>{exp.role}</h3>
                <p style={{ fontSize: "clamp(0.85rem, 2vw, 1rem)" }}>
                  {exp.place} · {exp.time}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{ marginTop: 40 }}
        >
          <h2>Education</h2>
          <div
            style={{
              padding: 20,
              borderRadius: 16,
              boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
              background: dark ? "#1e293b" : "#fff",
            }}
          >
            <h3>University of Jember</h3>
            <p>Undergraduate, Biology Education (2021 – 2025)</p>
            <p>
              <b>GPA:</b> 3.71
            </p>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1 }}
          style={{ marginTop: 40 }}
        >
          <h2>Skills</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
              gap: 16,
            }}
          >
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, rotate: 2 }}
                style={{
                  padding: "16px",
                  borderRadius: 12,
                  background: dark ? "#334155" : "#e2e8f0",
                  textAlign: "center",
                  fontWeight: "500",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                }}
              >
                <img src={skill.img} alt={skill.name} style={{ width: 40, height: 40 }} />
                <span style={{ fontSize: "clamp(0.75rem, 2vw, 1rem)" }}>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Fun Fact */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginTop: 40 }}
        >
          <h2>Fun Fact</h2>
          <p>🍜 I really like <b>mie ayam</b>!</p>
        </motion.section>

        {/* Contact */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{ marginTop: 40 }}
        >
          <h2>Contact</h2>
          <p>
            LinkedIn: {" "}
            <a
              href="https://www.linkedin.com/in/anava-bayu-nusantara-b9489a220/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/anava-bayu-nusantara
            </a>
          </p>
          <p>Email: anavabayu16@gmail.com</p>
        </motion.section>

        {/* Footer */}
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
