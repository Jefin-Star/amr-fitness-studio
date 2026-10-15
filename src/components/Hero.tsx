import React from 'react';
import { ArrowRight, Sparkles, Shield, Dumbbell, Users, CheckCircle2 } from 'lucide-react';
import { GYM_DETAILS, getLiveStatus } from '../data/gymData';
import heroImg from '../assets/images/hero_gym_dark_1792057626252.jpg';

interface HeroProps {
  onJoinNowClick: () => void;
  onViewPlansClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onJoinNowClick, onViewPlansClick }) => {
  const status = getLiveStatus();

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Scrim and Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="AMR Fitness Studio Interior"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-in motion-safe:fade-in duration-700"
        />
        {/* Measured contrast scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/60" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-neutral-950/40 to-neutral-950" />
        {/* Subtle crimson ambient glow highlight */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-600/10 blur-[140px] pointer-events-none rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        {/* Live Status Kicker */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-xs text-neutral-300 backdrop-blur-md mb-6 shadow-lg">
          <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-neutral-500'}`} />
          <span className="font-semibold text-white tracking-wide uppercase text-[11px]">
            {status.statusText}
          </span>
          <span className="text-neutral-500">·</span>
          <span className="text-neutral-400 text-[11px] hidden sm:inline">
            {status.nextSlot}
          </span>
        </div>

        {/* Primary Gym Title */}
        <div className="flex flex-col items-center justify-center space-y-2 mb-4">
          <span className="text-red-500 font-extrabold uppercase tracking-[0.25em] text-xs sm:text-sm">
            Apex Muscle Realm
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold text-white tracking-tight uppercase leading-[0.95] max-w-4xl mx-auto">
            AMR <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-white">FITNESS STUDIO</span>
          </h1>
        </div>

        {/* Powerful Fitness Tagline */}
        <p className="text-xl sm:text-2xl md:text-3xl font-display font-semibold text-neutral-200 tracking-wide mb-6">
          "Build Your Strength. Transform Your Life."
        </p>

        {/* Body intro description */}
        <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-10 text-balance">
          Kerala’s premier strength training destination. Engineered with competition-grade
          Olympic barbells, custom squat racks, dumbbell arsenals, and personalized coaching
          to forge peak physical resilience.
        </p>

        {/* Primary & Secondary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-16">
          <button
            onClick={onJoinNowClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-red-600 hover:bg-red-500 active:scale-95 text-white font-bold text-sm uppercase tracking-wider px-8 py-3.5 rounded-lg shadow-xl shadow-red-950/60 transition-all duration-150 cursor-pointer group"
          >
            <span>Join Now</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onViewPlansClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-neutral-900/90 hover:bg-neutral-800 text-neutral-200 hover:text-white font-semibold text-sm uppercase tracking-wider px-7 py-3.5 rounded-lg border border-neutral-700/80 transition-all duration-150 cursor-pointer"
          >
            <span>View Membership Plans</span>
          </button>
        </div>

        {/* 4-Item Feature Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-6 border-t border-neutral-800/80 text-left">
          <div className="p-3 sm:p-4 rounded-xl bg-neutral-900/60 backdrop-blur border border-neutral-800/80">
            <div className="text-red-500 font-display font-bold text-2xl sm:text-3xl tabular-nums">5 AM</div>
            <div className="text-xs text-neutral-400 mt-0.5">Early Bird Shift</div>
            <div className="text-[11px] text-neutral-500">5:00 AM – 11:00 AM</div>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-neutral-900/60 backdrop-blur border border-neutral-800/80">
            <div className="text-white font-display font-bold text-2xl sm:text-3xl tabular-nums">4:30 PM</div>
            <div className="text-xs text-neutral-400 mt-0.5">Evening Grind Shift</div>
            <div className="text-[11px] text-neutral-500">4:30 PM – 11:00 PM</div>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-neutral-900/60 backdrop-blur border border-neutral-800/80">
            <div className="text-red-500 font-display font-bold text-2xl sm:text-3xl tabular-nums">₹2,000</div>
            <div className="text-xs text-neutral-400 mt-0.5">Starting Plans</div>
            <div className="text-[11px] text-neutral-500">1 Mo / 3 Mo / 1 Yr</div>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-neutral-900/60 backdrop-blur border border-neutral-800/80">
            <div className="text-white font-display font-bold text-2xl sm:text-3xl tabular-nums">2-IN-1</div>
            <div className="text-xs text-neutral-400 mt-0.5">Buddy Packages</div>
            <div className="text-[11px] text-neutral-500">Save up to ₹14,000</div>
          </div>
        </div>
      </div>
    </section>
  );
};
