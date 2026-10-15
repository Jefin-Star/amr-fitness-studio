import React from 'react';
import { AmrLogo } from './AmrLogo';
import { MessageCircle, Mail, Instagram, MapPin, ArrowUp, ShieldCheck } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

interface FooterProps {
  onOpenRegistrations?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRegistrations }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 text-neutral-400 text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-neutral-900">
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-1 space-y-4">
            <AmrLogo size="sm" />
            <p className="text-neutral-400 leading-relaxed text-xs">
              AMR FITNESS STUDIO (Apex Muscle Realm). Premium strength training, modern facilities,
              and dedicated coaching to help you build unyielding physical strength.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://wa.me/91${GYM_DETAILS.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-emerald-700/80 flex items-center justify-center text-neutral-300 hover:text-emerald-400 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={GYM_DETAILS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-fuchsia-700/80 flex items-center justify-center text-neutral-300 hover:text-fuchsia-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${GYM_DETAILS.email}`}
                className="w-8 h-8 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-red-700/80 flex items-center justify-center text-neutral-300 hover:text-red-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-display font-bold uppercase tracking-wider text-white text-sm">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Our Studio
                </a>
              </li>
              <li>
                <a href="#plans" className="hover:text-white transition-colors">
                  Membership Plans & Pricing
                </a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-white transition-colors">
                  Gym Hours & Shift Timings
                </a>
              </li>
              <li>
                <a href="#register" className="hover:text-white transition-colors">
                  Online Registration
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Directions & Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Operating Shifts */}
          <div className="space-y-3">
            <h4 className="font-display font-bold uppercase tracking-wider text-white text-sm">
              Studio Timings
            </h4>
            <div className="space-y-2 text-neutral-400">
              <div>
                <span className="text-white font-medium block">Monday – Saturday</span>
                <span className="text-[11px]">Morning: 5:00 AM – 11:00 AM</span>
                <br />
                <span className="text-[11px]">Evening: 4:30 PM – 11:00 PM</span>
              </div>
              <div className="pt-1">
                <span className="text-red-400 font-medium block">Sunday</span>
                <span className="text-[11px]">Closed for Recovery & Deep Sanitization</span>
              </div>
            </div>
          </div>

          {/* Col 4: Contact Recap & Back to Top */}
          <div className="space-y-3">
            <h4 className="font-display font-bold uppercase tracking-wider text-white text-sm">
              Get in Touch
            </h4>
            <div className="space-y-1.5 text-neutral-400">
              <p className="font-mono text-white text-xs">{GYM_DETAILS.whatsappFormatted}</p>
              <p className="break-all">{GYM_DETAILS.email}</p>
              <p>{GYM_DETAILS.locationName}</p>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 text-xs font-medium transition-colors cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Admin view trigger */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500">
          <div>
            © {new Date().getFullYear()} AMR FITNESS STUDIO (Apex Muscle Realm). All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            {onOpenRegistrations && (
              <button
                onClick={onOpenRegistrations}
                className="hover:text-neutral-300 transition-colors text-[11px] underline cursor-pointer"
              >
                View Saved Registrations
              </button>
            )}
            <span>·</span>
            <span>Made with passion for fitness & strength</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
