import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

export const FloatingActions: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Quick WhatsApp Float */}
      <a
        href={`https://wa.me/91${GYM_DETAILS.whatsappNumber}?text=Hi%20AMR%20Fitness%20Studio!%20I'm%20interested%20in%20joining.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wide px-4 py-3 rounded-full shadow-2xl shadow-emerald-950/80 transition-all duration-200 transform hover:scale-105 active:scale-95 group border border-emerald-400/40"
      >
        <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
        <span className="hidden sm:inline">Chat on WhatsApp</span>
      </a>
    </div>
  );
};
