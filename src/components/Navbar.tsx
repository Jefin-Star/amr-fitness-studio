import React, { useState, useEffect } from 'react';
import { AmrLogo } from './AmrLogo';
import { Menu, X, Phone, Clock } from 'lucide-react';
import { GYM_DETAILS, getLiveStatus } from '../data/gymData';

interface NavbarProps {
  onOpenRegister: (planId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [status, setStatus] = useState(getLiveStatus());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    const interval = setInterval(() => {
      setStatus(getLiveStatus());
    }, 60000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Plans & Pricing', href: '#plans' },
    { label: 'Timings', href: '#schedule' },
    { label: 'Location & Map', href: '#contact' },
    { label: 'Register', href: '#register' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800 shadow-xl py-3'
          : 'bg-neutral-950/70 backdrop-blur-sm border-b border-neutral-800/50 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single element) */}
          <a
            href="#"
            className="flex items-center gap-2 text-slate-100 whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded"
          >
            <AmrLogo size="sm" />
          </a>

          {/* Zone 2: 4-5 single-line nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-white transition-colors duration-150 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-600 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Quick Live indicator for desktop */}
            <div className="hidden lg:flex items-center gap-1.5 text-xs text-neutral-400 font-mono pr-2">
              <span
                className={`w-2 h-2 rounded-full ${
                  status.isOpen ? 'bg-emerald-500' : 'bg-neutral-600'
                }`}
                title={status.statusText}
              />
              <span className="text-[11px] font-sans tracking-wide">
                {status.isOpen ? 'Open Now' : 'Closed'}
              </span>
            </div>

            <button
              onClick={() => onOpenRegister()}
              className="bg-red-600 hover:bg-red-500 active:scale-95 text-white font-semibold text-xs uppercase tracking-wider px-5 py-2.5 rounded-lg shadow-md shadow-red-950/40 transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:ring-2 focus-visible:ring-red-400"
            >
              Join Now
            </button>

            {/* Mobile menu hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-300 hover:text-white hover:bg-neutral-900 rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-950 border-b border-neutral-800 px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200 shadow-2xl">
          <div className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-neutral-200 hover:bg-neutral-900 hover:text-red-400 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-neutral-800 flex flex-col gap-2">
              <a
                href={`https://wa.me/91${GYM_DETAILS.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-neutral-900 text-neutral-200 hover:text-emerald-400 py-2.5 rounded-lg text-sm font-medium transition-colors border border-neutral-800"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                WhatsApp: {GYM_DETAILS.whatsappFormatted}
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRegister();
                }}
                className="w-full bg-red-600 hover:bg-red-500 text-white py-2.5 rounded-lg text-sm font-semibold uppercase tracking-wider transition-colors shadow-lg shadow-red-950/40"
              >
                Join Now — Start Today
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
