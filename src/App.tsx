import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import Timeline from './components/sections/Timeline';
import Contact from './components/sections/Contact';
import CursorEffect from './components/ui/CursorEffect';
import Button from './components/ui/Button';
import { ExternalLink, Github } from 'lucide-react';

function App() {
  // ข้อมูล Projects
  const projectsData = [
    {
      title: 'Cyber Nexus',
      description: 'An immersive cyberpunk RPG with dynamic storytelling and advanced AI systems.',
      image: '/images/poster__CardlandConquest.png',
      category: 'unity',
      technologies: ['Unreal Engine 5', 'Blueprint', 'C++', 'Niagara VFX'],
      links: { demo: 'https://example.com/demo', github: 'https://github.com/example' },
    },
    {
      title: 'Astral Voyage',
      description: 'A space exploration game with procedurally generated planets and lifeforms.',
      image: 'https://images.pexels.com/photos/1341279/pexels-photo-1341279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'unity',
      technologies: ['Unity 3D', 'C#', 'Shader Graph', 'Procedural Generation'],
      links: { demo: 'https://example.com/demo' },
    },
    {
      title: 'Rune Quest',
      description: 'A mobile adventure game with innovative touch controls and magic rune system.',
      image: 'https://images.pexels.com/photos/3964136/pexels-photo-3964136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'mobile',
      technologies: ['Unity 2D', 'C#', 'Firebase', 'iOS/Android'],
      links: { demo: 'https://example.com/demo', github: 'https://github.com/example' },
    },
  ];

  const [filter, setFilter] = useState<'all' | 'unity' | 'unreal' | 'mobile' | 'vr'>('all');
  const filteredProjects = filter === 'all' ? projectsData : projectsData.filter(p => p.category === filter);

  return (
    <ThemeProvider>
      <CursorEffect />
      <Layout>
        <Hero />

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4 text-gray-900 dark:text-white">
                Featured <span className="text-emerald-500">Projects</span>
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Explore my portfolio of game development work, from indie titles to AAA collaborations.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                {['all', 'unity', 'unreal', 'mobile', 'vr'].map(category => (
                  <button
                    key={category}
                    onClick={() => setFilter(category as 'all' | 'unity' | 'unreal' | 'mobile' | 'vr')}
                    className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-all ${
                      filter === category
                        ? 'bg-emerald-500 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div key={index} className="group rounded-lg overflow-hidden transition-all duration-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:shadow-emerald-500/5">
                  <div className="relative overflow-hidden aspect-video">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                    <p className="mb-4 text-gray-700 dark:text-gray-300">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Button href={project.links.demo || project.links.github} variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Skills />
        <Timeline />
        <Contact />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
