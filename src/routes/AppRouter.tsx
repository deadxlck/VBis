import { Link, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Layout from "../components/Layout/Layout";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";
import Contact from "../pages/Contact/Contact";

export default function AppRouter() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="*"
          element={
            <section
              style={{
                minHeight: "60vh",
                display: "grid",
                placeItems: "center",
                padding: "48px 24px",
                textAlign: "center",
              }}
            >
              <div>
                <p
                  style={{
                    color: "#7468ed",
                    fontWeight: 700,
                    letterSpacing: ".14em",
                  }}
                >
                  404 · PAGE NOT FOUND
                </p>
                <h1
                  style={{ marginTop: 12, fontSize: "clamp(36px, 7vw, 64px)" }}
                >
                  This page took a wrong turn.
                </h1>
                <p style={{ marginTop: 12 }}>
                  The link may be outdated, or the page may have moved.
                </p>
                <Link
                  to="/"
                  style={{
                    display: "inline-flex",
                    marginTop: 24,
                    padding: "12px 18px",
                    borderRadius: 10,
                    color: "white",
                    background: "#7468ed",
                    fontWeight: 700,
                  }}
                >
                  Back to home
                </Link>
              </div>
            </section>
          }
        />
      </Route>
    </Routes>
  );
}
