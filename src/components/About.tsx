import React from 'react';
import { Dumbbell, Target, Users, Zap, HeartHandshake, Award } from 'lucide-react';
import facilityImg from '../assets/images/about_gym_facility_1792057627275.jpg';
import ptImg from '../assets/images/personal_training_session_1792057627173.jpg';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-neutral-950 relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-red-500 uppercase tracking-widest mb-3">
            <span>Discover The Realm</span>
            <span aria-hidden="true">·</span>
            <span>Est. Strength Culture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase tracking-tight text-white mb-6">
            About AMR Fitness Studio
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed text-balance">
            AMR FITNESS STUDIO (Apex Muscle Realm) is built on a simple philosophy:
            genuine strength is forged through dedicated discipline, progressive overload,
            and an electric, supportive gym environment where everyone strives for greatness.
          </p>
        </div>

        {/* 2-Column Story & Facility Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column: Visual Grid */}
          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl group">
              <img
                src={facilityImg}
                alt="AMR Fitness Studio Equipment and Facility"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-1">
                  Strength Floor
                </div>
                <div className="text-lg font-bold text-white font-display uppercase tracking-wide">
                  Heavy Plate-Loaded & Free Weight Arena
                </div>
              </div>
            </div>

            {/* Micro feature bar */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800">
                <div className="text-red-500 font-display font-bold text-xl tabular-nums">100%</div>
                <div className="text-[11px] text-neutral-400 font-medium">Iron Atmosphere</div>
              </div>
              <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800">
                <div className="text-white font-display font-bold text-xl tabular-nums">2 Shifts</div>
                <div className="text-[11px] text-neutral-400 font-medium">Morning & Evening</div>
              </div>
              <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800">
                <div className="text-red-500 font-display font-bold text-xl tabular-nums">1-on-1</div>
                <div className="text-[11px] text-neutral-400 font-medium">Personal Coaching</div>
              </div>
            </div>
          </div>

          {/* Right Column: Values & Highlights */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-display font-bold uppercase text-white tracking-wide">
                Where Dedication Meets Modern Gym Facilities
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                Whether you are stepping into a gym for the first time or training for competitive
                physique and powerlifting goals, AMR Fitness Studio provides the perfect ecosystem.
                We eliminate the overcrowding, broken machines, and intimidation found in commercial
                gyms, replacing them with immaculate equipment and genuine coaching encouragement.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-red-900/60 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-red-950/60 border border-red-900/60 flex items-center justify-center text-red-500 mb-3">
                  <Dumbbell className="w-5 h-5" />
                </div>
                <h4 className="text-white font-semibold text-sm mb-1">Elite Free Weights</h4>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Heavy dumbbell racks, Olympic bars, bumper plates, and rigid squat racks.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-red-900/60 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-red-950/60 border border-red-900/60 flex items-center justify-center text-red-500 mb-3">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="text-white font-semibold text-sm mb-1">Supportive Brotherhood</h4>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  A high-energy, respectful environment where lifters push and celebrate each other.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-red-900/60 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-red-950/60 border border-red-900/60 flex items-center justify-center text-red-500 mb-3">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="text-white font-semibold text-sm mb-1">Form & Precision</h4>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Certified floor trainers ensure safe biomechanics, proper tempo, and injury prevention.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-red-900/60 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-red-950/60 border border-red-900/60 flex items-center justify-center text-red-500 mb-3">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h4 className="text-white font-semibold text-sm mb-1">Couple & Buddy Synergy</h4>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Exclusive duo packages tailored for training partners who want mutual consistency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
