import React from 'react';
import { View } from '../types';

interface SidebarProps {
  view: View;
  setView: (view: View) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ view, setView, isOpen, setIsOpen }) => {
    
  const handleItemClick = (newView: View) => {
    setView(newView);
    if (window.innerWidth < 768) { // md breakpoint
        setIsOpen(false);
    }
  };

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '' },
    { id: 'liveCalls', label: 'Live Calls', icon: '' },
    { id: 'analytics', label: 'Analytics', icon: '' },
    { id: 'socialMedia', label: 'Social Media', icon: '' },
    { id: 'swot', label: 'Business Intelligence', icon: '' },
    { id: 'askAI', label: 'Ask AI', icon: '' },
    { id: 'settings', label: 'Settings', icon: '' },
    { id: 'profile', label: 'Profile', icon: '' }
  ];

  const sidebarClasses = `
    fixed md:relative inset-y-0 left-0 z-30
    w-64 bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-slate-700
    transform transition-transform duration-300 ease-in-out
    ${isOpen ? 'translate-x-0' : '-translate-x-full'}
    md:translate-x-0
    flex flex-col shadow-lg
  `;

  return (
    <>
      <div className={sidebarClasses}>
        {/* Logo Section */}
        <div className="flex items-center justify-center h-16 flex-shrink-0 border-b border-gray-200 dark:border-slate-700">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <h1 className="text-xl font-bold ml-3 text-gray-900 dark:text-white">SentiMind</h1>
          </div>
        </div>
        
        {/* Subtitle */}
        <div className="px-4 py-3 border-b border-gray-200 dark:border-slate-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Emotion Intelligence Platform</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
          <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
            Main Navigation
          </div>
          {menuItems.map((item) => {
            const isActive = view === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id as View)}
                className={`w-full flex items-center px-3 py-2.5 rounded-lg transition-all duration-200 group ${
                  isActive
                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border-l-4 border-blue-600'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 dark:border-slate-700">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
              <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">AJ</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-white truncate">Alex Johnson</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">CX Analyst</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;