import React, { useEffect, useRef } from 'react';
import Button from '../ui/Button';
import { ArrowDown, Github, Linkedin, Monitor, TowerControl as GameController } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const Hero: React.FC = () => {
  const { darkMode } = useTheme();
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;

    const letters = title.innerText.split('');
    title.innerHTML = '';
    
    letters.forEach((letter, i) => {
      const span = document.createElement('span');
      span.innerText = letter;
      span.style.animationDelay = `${i * 0.05}s`;
      span.className = 'inline-block animate-fade-in';
      title.appendChild(span);
    });
  }, []);

  return (
    <section 
      id="home"
      className={`min-h-screen pt-20 pb-10 flex flex-col justify-center relative overflow-hidden ${
        darkMode ? 'text-white' : 'text-gray-900'
      }`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-2/3 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-6 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
              <GameController size={14} className="mr-2" />
              Game Developer
            </div>
            
            <h1 
              ref={titleRef} 
              className="text-4xl md:text-6xl font-bold font-mono mb-4 leading-tight"
            >
              Creating <span className="text-emerald-400">Immersive</span> Game Experiences
            </h1>
            
            <p className={`text-lg md:text-xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'} max-w-xl`}>
              I craft engaging and innovative games that push the boundaries of gameplay and storytelling.
              Specialized in Unity and Unreal Engine development.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <Button href="#projects" size="lg">
                View Projects
              </Button>
              <Button href="#contact" variant="outline" size="lg">
                Get In Touch
              </Button>
            </div>
            
            <div className={`flex gap-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                <Monitor size={24} />
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative border-2 border-gray-800/50 rounded-lg overflow-hidden shadow-xl bg-gradient-to-br from-gray-900 to-gray-800 aspect-video">
              <img 
                src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Game development showcase" 
                className="w-full h-full object-cover opacity-80 mix-blend-lighten"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 bg-emerald-500/90 text-white text-sm font-medium rounded mb-3">
                  Featured Project
                </span>
                <h3 className="text-xl font-bold text-white mb-2">Cyber Nexus</h3>
                <p className="text-gray-300 text-sm">
                  An immersive cyberpunk RPG with dynamic storytelling and advanced AI systems.
                </p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-500/20 rounded-full blur-xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a
            href="#projects"
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-700'
            }`}
          >
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;