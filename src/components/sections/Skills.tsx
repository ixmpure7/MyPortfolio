import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { skillsData } from '../../data/skillsData';

const Skills: React.FC = () => {
  const { darkMode } = useTheme();

  return (
    <section 
      id="skills" 
      className={`py-20 ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold font-mono mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Technical <span className="text-emerald-500">Skills</span>
          </h2>
          <p className={`text-lg ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            My expertise in game development technologies and tools.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Game Engines */}
          <div>
            <h3 className={`text-xl font-bold mb-6 pb-2 border-b ${
              darkMode ? 'text-white border-gray-700' : 'text-gray-900 border-gray-200'
            }`}>
              Game Engines & Frameworks
            </h3>
            
            <div className="space-y-6">
              {skillsData.gameEngines.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className={`font-medium ${
                      darkMode ? 'text-gray-200' : 'text-gray-800'
                    }`}>
                      {skill.name}
                    </span>
                    <span className={`${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className={`w-full h-2 rounded-full ${
                    darkMode ? 'bg-gray-700' : 'bg-gray-200'
                  }`}>
                    <div 
                      className="h-2 rounded-full bg-emerald-500"
                      style={{ width: `${skill.level}%`, 
                        transition: 'width 1s ease-in-out',
                        boxShadow: darkMode ? '0 0 8px rgba(16, 185, 129, 0.5)' : 'none'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Programming */}
          <div>
            <h3 className={`text-xl font-bold mb-6 pb-2 border-b ${
              darkMode ? 'text-white border-gray-700' : 'text-gray-900 border-gray-200'
            }`}>
              Programming Languages
            </h3>
            
            <div className="space-y-6">
              {skillsData.programming.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className={`font-medium ${
                      darkMode ? 'text-gray-200' : 'text-gray-800'
                    }`}>
                      {skill.name}
                    </span>
                    <span className={`${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className={`w-full h-2 rounded-full ${
                    darkMode ? 'bg-gray-700' : 'bg-gray-200'
                  }`}>
                    <div 
                      className="h-2 rounded-full bg-blue-500"
                      style={{ width: `${skill.level}%`, 
                        transition: 'width 1s ease-in-out',
                        boxShadow: darkMode ? '0 0 8px rgba(59, 130, 246, 0.5)' : 'none'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Other Skills */}
        <div className="mt-16">
          <h3 className={`text-xl font-bold mb-8 text-center ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Other Skills
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {skillsData.otherSkills.map((skill, index) => (
              <div 
                key={index}
                className={`px-4 py-2 rounded-full ${
                  darkMode 
                    ? 'bg-gray-700 text-gray-200 border border-gray-600' 
                    : 'bg-gray-100 text-gray-800 border border-gray-200'
                } transition-transform hover:scale-105`}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;