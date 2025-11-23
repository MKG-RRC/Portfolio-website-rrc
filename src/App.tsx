import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { Contact } from "./pages/Contact/Contact";
import { DeveloperSetup } from "./pages/DeveloperSetup/DeveloperSetup";
import { Home } from "./pages/Home/Home";
import { Resources } from "./pages/Resources/Resources";
import { Skills } from "./pages/Skills/Skills";
import { Work } from "./pages/Work/Work";
import { ScrollToHash } from "./ScrollToHash";

function App() {
  return (
    <Router>
      {/* Handles scrolling when clicking navbar links */}
      <ScrollToHash />

      {/* Global site navigation */}
      <Navbar />

      <Routes>
        {/* MAIN PAGE */}
        <Route
          path="/"
          element={
            <main>
              <section id="home">
                <Home />
              </section>

              <section id="work">
                <Work />
              </section>

              <section id="skills">
                <Skills />
              </section>

              <section id="resources">
                <Resources />
              </section>

              <section id="developer">
                <DeveloperSetup />
              </section>
            </main>
          }
        />

        {/* CONTACT PAGE */}
        <Route path="/contact" element={<Contact />} />

        {/* OPTIONAL 404 */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>

      {/* Site footer (consistent across all pages) */}
      <Footer />
    </Router>
  );
}

export default App;
