import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { timelineData } from '../../data/timelineData';

const Timeline: React.FC = () => {
  const { darkMode } = useTheme();

  return (
    <section 
      id="timeline" 
      className={`py-20 ${
        darkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold font-mono mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Professional <span className="text-emerald-500">Journey</span>
          </h2>
          <p className={`text-lg ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            My career pathway and experience in the game development industry.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-700"></div>
          
          {timelineData.map((item, index) => (
            <div 
              key={index}
              className={`relative mb-16 ${index % 2 === 0 ? 'left-timeline' : 'right-timeline'}`}
            >
              <div className={`flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-10' : 'pl-10'}`}>
                  <div className={`mb-2 text-sm font-mono ${
                    darkMode ? 'text-emerald-400' : 'text-emerald-600'
                  }`}>
                    {item.period}
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {item.title}
                  </h3>
                  <p className={`mb-2 font-medium ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {item.company}
                  </p>
                  <p className={`${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {item.description}
                  </p>
                  
                  {item.achievements && (
                    <ul className={`mt-3 list-disc list-inside text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {item.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                </div>
                
                <div className="relative z-10 w-2/12 flex justify-center">
                  <div className={`w-8 h-8 rounded-full ${
                    darkMode ? 'bg-gray-800' : 'bg-white'
                  } flex items-center justify-center border-4 ${
                    darkMode ? 'border-gray-700' : 'border-gray-200'
                  }`}>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  </div>
                </div>
                
                <div className="w-5/12"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;