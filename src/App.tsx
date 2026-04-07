/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { View } from './types';
import { 
  LandingPage, 
  Sidebar, 
  Dashboard, 
  SubmitComplaint, 
  ComplaintList, 
  AdminPanel 
} from './components/Views';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShieldCheck } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('landing');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigate = (view: View) => {
    setCurrentView(view);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  if (currentView === 'landing') {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="landing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <LandingPage onNavigate={handleNavigate} />
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <div className="flex min-h-screen bg-slate-50 relative">
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar currentView={currentView} onNavigate={handleNavigate} />
      </div>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div 
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 z-50 md:hidden"
            >
              <Sidebar 
                currentView={currentView} 
                onNavigate={handleNavigate} 
                onClose={() => setIsMobileMenuOpen(false)} 
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main className="flex-1 overflow-y-auto">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between p-4 bg-white border-b border-slate-200 sticky top-0 z-30">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
              <ShieldCheck className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Resolve</span>
          </div>
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 text-slate-600 hover:bg-slate-50 rounded-lg"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="min-h-full flex flex-col"
          >
            {currentView === 'dashboard' && <Dashboard onNavigate={handleNavigate} />}
            {currentView === 'submit' && <SubmitComplaint />}
            {currentView === 'list' && <ComplaintList />}
            {currentView === 'admin' && <AdminPanel />}
            {currentView === 'profile' && (
              <div className="p-8 max-w-4xl mx-auto w-full text-center py-20">
                <h1 className="text-3xl font-bold text-slate-900 mb-4">User Profile</h1>
                <p className="text-slate-500">Profile settings and account management coming soon.</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}


