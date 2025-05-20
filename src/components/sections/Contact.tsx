import React, { useState } from 'react';
import Button from '../ui/Button';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const Contact: React.FC = () => {
  const { darkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thanks for your message! This is a demo form, so no message was actually sent.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <section 
      id="contact" 
      className={`py-20 ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold font-mono mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Get In <span className="text-emerald-500">Touch</span>
          </h2>
          <p className={`text-lg ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Interested in working together? I'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <div className={`p-6 rounded-lg ${
              darkMode ? 'bg-gray-700' : 'bg-gray-50'
            }`}>
              <h3 className={`text-xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className={`w-10 h-10 rounded-lg ${
                    darkMode ? 'bg-gray-600' : 'bg-gray-200'
                  } flex items-center justify-center mr-4`}>
                    <Mail className={`w-5 h-5 ${
                      darkMode ? 'text-emerald-400' : 'text-emerald-600'
                    }`} />
                  </div>
                  <div>
                    <h4 className={`text-sm font-medium ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      Email
                    </h4>
                    <a 
                      href="mailto:contact@example.com" 
                      className={`text-base font-medium hover:underline ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      contact@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className={`w-10 h-10 rounded-lg ${
                    darkMode ? 'bg-gray-600' : 'bg-gray-200'
                  } flex items-center justify-center mr-4`}>
                    <Phone className={`w-5 h-5 ${
                      darkMode ? 'text-emerald-400' : 'text-emerald-600'
                    }`} />
                  </div>
                  <div>
                    <h4 className={`text-sm font-medium ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      Phone
                    </h4>
                    <a 
                      href="tel:+11234567890" 
                      className={`text-base font-medium hover:underline ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      +1 (123) 456-7890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className={`w-10 h-10 rounded-lg ${
                    darkMode ? 'bg-gray-600' : 'bg-gray-200'
                  } flex items-center justify-center mr-4`}>
                    <MapPin className={`w-5 h-5 ${
                      darkMode ? 'text-emerald-400' : 'text-emerald-600'
                    }`} />
                  </div>
                  <div>
                    <h4 className={`text-sm font-medium ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      Location
                    </h4>
                    <p className={`text-base font-medium ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      San Francisco, CA, USA
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className={`text-base font-medium mb-4 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Available For
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    darkMode ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-100 text-emerald-700'
                  }`}>
                    Full-time Positions
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    darkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-700'
                  }`}>
                    Freelance Projects
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    darkMode ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-700'
                  }`}>
                    Consulting
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg ${
                      darkMode 
                        ? 'bg-gray-700 text-white border-gray-600 focus:border-emerald-500' 
                        : 'bg-gray-50 text-gray-900 border-gray-300 focus:border-emerald-500'
                    } border focus:ring-2 focus:ring-emerald-500/20 outline-none transition-colors`}
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="email" 
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg ${
                      darkMode 
                        ? 'bg-gray-700 text-white border-gray-600 focus:border-emerald-500' 
                        : 'bg-gray-50 text-gray-900 border-gray-300 focus:border-emerald-500'
                    } border focus:ring-2 focus:ring-emerald-500/20 outline-none transition-colors`}
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label 
                  htmlFor="subject" 
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg ${
                    darkMode 
                      ? 'bg-gray-700 text-white border-gray-600 focus:border-emerald-500' 
                      : 'bg-gray-50 text-gray-900 border-gray-300 focus:border-emerald-500'
                  } border focus:ring-2 focus:ring-emerald-500/20 outline-none transition-colors`}
                />
              </div>
              
              <div className="mb-6">
                <label 
                  htmlFor="message" 
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg ${
                    darkMode 
                      ? 'bg-gray-700 text-white border-gray-600 focus:border-emerald-500' 
                      : 'bg-gray-50 text-gray-900 border-gray-300 focus:border-emerald-500'
                  } border focus:ring-2 focus:ring-emerald-500/20 outline-none transition-colors`}
                ></textarea>
              </div>
              
              <Button type="submit" size="lg">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;