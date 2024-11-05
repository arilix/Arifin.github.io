import React, { useState, useEffect } from 'react';

const MatrixPortfolio = () => {
  const [characters, setCharacters] = useState([]);
  
  useEffect(() => {
    const katakana = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const alphabet = katakana + latin + nums;
    
    const generateColumn = () => {
      const column = [];
      const columnHeight = Math.floor(Math.random() * 20) + 10;
      
      for (let i = 0; i < columnHeight; i++) {
        column.push(alphabet[Math.floor(Math.random() * alphabet.length)]);
      }
      
      return column;
    };
    
    const columns = Array.from({ length: 40 }, generateColumn);
    setCharacters(columns);
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-500 p-8">
      {/* Matrix Rain Background */}
      <div className="fixed top-0 left-0 w-full h-full opacity-20 z-0">
        {characters.map((column, i) => (
          <div key={i} className="absolute text-xs animate-matrix-fall" style={{ left: `${(i / 40) * 100}%` }}>
            {column.map((char, j) => (
              <div key={j} className="whitespace-pre">{char}</div>
            ))}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Nama Anda</h1>
          <p className="text-xl">Software Developer | Full Stack Engineer</p>
        </header>

        {/* About Section */}
        <section className="max-w-2xl mx-auto mb-12 bg-black/50 p-6 rounded-lg border border-green-500">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="mb-4">
            Welcome to my Matrix-themed portfolio. I am a passionate developer with expertise in
            web development and software engineering.
          </p>
        </section>

        {/* Projects Section */}
        <section className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-bold mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((project) => (
              <div key={project} className="border border-green-500 p-4 rounded-lg hover:bg-green-900/20 transition-colors">
                <h3 className="text-xl font-bold mb-2">Project {project}</h3>
                <p className="mb-4">Description of project {project}. Add your real project details here.</p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 text-sm border border-green-500 rounded">React</span>
                  <span className="px-2 py-1 text-sm border border-green-500 rounded">Node.js</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'JavaScript', 'React', 'Node.js', 'Python',
              'SQL', 'Git', 'AWS', 'Docker'
            ].map((skill) => (
              <div key={skill} className="border border-green-500 p-2 text-center rounded-lg">
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Contact</h2>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/yourusername" className="hover:text-green-300">GitHub</a>
            <a href="https://linkedin.com/in/yourusername" className="hover:text-green-300">LinkedIn</a>
            <a href="mailto:your.email@example.com" className="hover:text-green-300">Email</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MatrixPortfolio;
