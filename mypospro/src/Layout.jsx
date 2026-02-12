import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from './utils';
import { Button } from '@/components/ui/button';
import { Menu, X, ShoppingCart, User, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Prodotti", hasDropdown: true },
    { label: "Tutti i POS mobili", hasDropdown: true },
    { label: "Tipi di attività", hasDropdown: true },
    { label: "Prezzi" },
    { label: "Risorse", hasDropdown: true }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">POS</span>
              </div>
              <span className="font-bold text-xl text-slate-900 hidden sm:block">myPOS</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  className="flex items-center gap-1 px-4 py-2 text-slate-700 hover:text-blue-600 font-medium transition-colors rounded-lg hover:bg-slate-50"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </button>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <button className="hidden sm:flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors">
                <User className="w-5 h-5" />
              </button>
              <Button className="hidden sm:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                <ShoppingCart className="w-4 h-4" />
                <span>Iscriviti</span>
              </Button>
              
              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-slate-100"
            >
              <div className="px-4 py-6 space-y-2">
                {navItems.map((item, index) => (
                  <button
                    key={index}
                    className="w-full flex items-center justify-between px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-lg font-medium"
                  >
                    {item.label}
                    {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </button>
                ))}
                <div className="pt-4 border-t border-slate-100">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Iscriviti
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="pt-16 lg:pt-20">
        {children}
      </main>
    </div>
  );
}