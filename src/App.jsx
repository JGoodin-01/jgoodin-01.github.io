import React from "react";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      {/* Hero / About Me */}
      <header className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Jacob Goodin</h1>
        <p className="text-xl max-w-xl mx-auto">
          Computer Science Graduate | Machine Learning | Software Developer
        </p>
      </header>

      {/* Projects Section */}
      <section className="py-16 px-8 max-w-5xl mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard
            title="Machine Learning Material Design"
            description="Optimized material properties using ML pipelines during NASA internship."
            link="#"
          />
          <ProjectCard
            title="Portfolio Website"
            description="Built with React + Vite + Tailwind, hosted on GitHub Pages."
            link="#"
          />
          <ProjectCard
            title="GraphQL Diagnostic API"
            description="Linked multiple endpoints and queries in a robust GraphQL platform."
            link="#"
          />
          <ProjectCard
            title="Other Projects"
            description="Showcase your other side projects or open-source contributions here."
            link="#"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-100 py-16 px-8 text-center">
        <h2 className="text-4xl font-semibold mb-8">Contact</h2>
        <p className="mb-4">Email: <a href="mailto:you@example.com" className="text-blue-600 underline">you@example.com</a></p>
        <p>
          GitHub: <a href="https://github.com/username" className="text-blue-600 underline">github.com/username</a> | 
          LinkedIn: <a href="https://linkedin.com/in/username" className="text-blue-600 underline">linkedin.com/in/username</a>
        </p>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Jacob Goodin. All rights reserved.
      </footer>
    </div>
  );
}

function ProjectCard({ title, description, link }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="mb-4">{description}</p>
      <a
        href={link}
        className="text-blue-600 font-semibold hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project
      </a>
    </div>
  );
}

export default App;
