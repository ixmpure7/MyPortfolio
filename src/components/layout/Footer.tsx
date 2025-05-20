import React from 'react';
import { Github, Linkedin, Twitter, Mail, TowerControl as GameController } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const Footer: React.FC = () => {
  const { darkMode } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-12 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} border-t ${
      darkMode ? 'border-gray-800' : 'border-gray-200'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <GameController className={`w-6 h-6 ${darkMode ? 'text-emerald-400' : 'text-emerald-600'} mr-2`} />
            <span className={`font-mono font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              DEV<span className={`${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>GAMES</span>
            </span>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="#" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
              <Mail size={20} />
              <span className="sr-only">Email</span>
            </a>
          </div>
          
          <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            © {currentYear} Game Developer Portfolio. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;