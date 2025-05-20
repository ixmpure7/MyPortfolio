import React, { useState } from 'react';
import Button from '../ui/Button';
import { ExternalLink, Github } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { projectsData } from '../../data/projectsData';

const Projects: React.FC = () => {
  const { darkMode } = useTheme();
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);
    
  return (
    <section 
      id="projects" 
      className={`py-20 ${
        darkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold font-mono mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Featured <span className="text-emerald-500">Projects</span>
          </h2>
          <p className={`text-lg ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Explore my portfolio of game development work, from indie titles to AAA collaborations.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {['all', 'unity', 'unreal', 'mobile', 'vr'].map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-all ${
                  filter === category
                    ? 'bg-emerald-500 text-white'
                    : darkMode
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}

                console.log('Projects to render:', filteredProjects);
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className={`group rounded-lg overflow-hidden transition-all duration-300 ${
                darkMode 
                  ? 'bg-gray-800 hover:bg-gray-750 border border-gray-700' 
                  : 'bg-white hover:bg-gray-50 border border-gray-200'
              } hover:shadow-xl hover:shadow-emerald-500/5`}
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex gap-3">
                    {project.links.demo && (
                      <a 
                        href={project.links.demo} 
                        className="w-9 h-9 rounded-full bg-white/90 text-gray-900 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                    {project.links.github && (
                      <a 
                        href={project.links.github} 
                        className="w-9 h-9 rounded-full bg-white/90 text-gray-900 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} />
                      </a>
                    )}
                  </div>
                </div>
                <div className="absolute top-3 right-3">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full capitalize ${
                    project.category === 'unity' ? 'bg-blue-500 text-white' :
                    project.category === 'unreal' ? 'bg-purple-500 text-white' :
                    project.category === 'mobile' ? 'bg-green-500 text-white' :
                    'bg-orange-500 text-white'
                  }`}>
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>
                <p className={`mb-4 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className={`text-xs px-2 py-1 rounded ${
                        darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                      }`}
                    >
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
        
        <div className="text-center mt-16">
          <Button href="#" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;