import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { MEMBERSHIP_PLANS } from '../data/gymData';
import buddyImg from '../assets/images/buddy_training_workout_1792057628089.jpg';
import ptImg from '../assets/images/personal_training_session_1792057627173.jpg';

interface MembershipPlansProps {
  onSelectPlan: (planId: string) => void;
}

export const MembershipPlans: React.FC<MembershipPlansProps> = ({ onSelectPlan }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'individual' | 'couple' | 'pt'>('all');

  const filteredPlans = activeTab === 'all'
    ? MEMBERSHIP_PLANS
    : MEMBERSHIP_PLANS.filter((plan) => plan.category === activeTab);

  return (
    <section id="plans" className="py-24 bg-neutral-900/50 relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-red-500 uppercase tracking-widest mb-3">
            <span>Flexible & Transparent Pricing</span>
            <span aria-hidden="true">·</span>
            <span>No Hidden Admission Fees</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase tracking-tight text-white mb-6">
            Membership Plans & Packages
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            Choose the ideal membership tailored to your personal goals. From solo strength progression
            to duo buddy savings and dedicated 1-on-1 personal coaching.
          </p>
        </div>

        {/* Filter Segmented Control Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 max-w-2xl mx-auto bg-neutral-950/80 border border-neutral-800 rounded-xl mb-14">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-150 whitespace-nowrap cursor-pointer ${
              activeTab === 'all'
                ? 'bg-red-600 text-white shadow-md shadow-red-950/50'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
            }`}
          >
            All Plans (8)
          </button>
          <button
            onClick={() => setActiveTab('individual')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-150 whitespace-nowrap cursor-pointer ${
              activeTab === 'individual'
                ? 'bg-red-600 text-white shadow-md shadow-red-950/50'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
            }`}
          >
            Individual (1M / 3M / 1Y)
          </button>
          <button
            onClick={() => setActiveTab('couple')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-150 whitespace-nowrap cursor-pointer ${
              activeTab === 'couple'
                ? 'bg-red-600 text-white shadow-md shadow-red-950/50'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
            }`}
          >
            Couple / Buddy (2 Persons)
          </button>
          <button
            onClick={() => setActiveTab('pt')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-150 whitespace-nowrap cursor-pointer ${
              activeTab === 'pt'
                ? 'bg-red-600 text-white shadow-md shadow-red-950/50'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
            }`}
          >
            Personal Trainer (1-on-1)
          </button>
        </div>

        {/* Grid of Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {filteredPlans.map((plan) => {
            const isFeatured = plan.popular || plan.category === 'pt';
            return (
              <div
                key={plan.id}
                className={`flex flex-col justify-between rounded-2xl p-6 sm:p-7 transition-all duration-300 relative ${
                  isFeatured
                    ? 'bg-gradient-to-b from-neutral-900 to-neutral-950 border-2 border-red-600/90 shadow-2xl shadow-red-950/30'
                    : 'bg-neutral-950/90 border border-neutral-800 hover:border-neutral-700'
                }`}
              >
                {/* Category & Badge header */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                      {plan.categoryLabel}
                    </span>
                    {plan.popular && (
                      <span className="text-[11px] font-bold text-red-400 bg-red-950/70 border border-red-800/80 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        Most Popular
                      </span>
                    )}
                    {plan.savings && !plan.popular && (
                      <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-800/80 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        {plan.savings}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-display font-extrabold text-white uppercase tracking-wide mb-1">
                    {plan.name}
                  </h3>
                  <div className="text-xs text-neutral-400 mb-6">
                    Duration: <span className="text-neutral-200 font-semibold">{plan.duration}</span>
                  </div>

                  {/* Price Block */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-display font-black text-white tracking-tight tabular-nums">
                        {plan.price}
                      </span>
                      {plan.originalPrice && (
                        <span className="text-neutral-500 line-through text-sm sm:text-base tabular-nums">
                          {plan.originalPrice}
                        </span>
                      )}
                    </div>
                    {plan.savings && plan.popular && (
                      <div className="text-xs font-semibold text-emerald-400 mt-1">
                        {plan.savings}
                      </div>
                    )}
                    <p className="text-xs text-neutral-400 mt-3 leading-relaxed">
                      {plan.description}
                    </p>
                  </div>
                </div>

                {/* Card Join Action */}
                <div className="pt-2">
                  <button
                    onClick={() => onSelectPlan(plan.id)}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer ${
                      isFeatured
                        ? 'bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-950/50'
                        : 'bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700'
                    }`}
                  >
                    <span>Join Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Banner: Buddy & PT Spotlight */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Buddy Spotlight */}
          <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
            <div className="sm:w-1/2 space-y-3">
              <div className="text-xs font-bold text-red-400 uppercase tracking-wider">
                Partner Training Advantage
              </div>
              <h4 className="text-xl sm:text-2xl font-display font-extrabold uppercase text-white tracking-wide">
                Train Together, Save Together
              </h4>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Bring a buddy, spouse, or gym partner. Share the weights, elevate your intensity,
                and enjoy rates as low as ₹916/month per person with the 1-year buddy tier!
              </p>
              <button
                onClick={() => {
                  setActiveTab('couple');
                  onSelectPlan('buddy-1m');
                }}
                className="text-xs font-bold text-red-400 hover:text-red-300 inline-flex items-center gap-1.5 uppercase tracking-wider pt-1 cursor-pointer"
              >
                <span>Select Buddy Package</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="sm:w-1/2 w-full h-44 rounded-xl overflow-hidden border border-neutral-800">
              <img
                src={buddyImg}
                alt="AMR Buddy Training"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Personal Trainer Spotlight */}
          <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
            <div className="sm:w-1/2 space-y-3">
              <div className="text-xs font-bold text-red-400 uppercase tracking-wider">
                1-on-1 Transformation
              </div>
              <h4 className="text-xl sm:text-2xl font-display font-extrabold uppercase text-white tracking-wide">
                Certified Personal Trainer
              </h4>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Fast-track muscle growth, athletic performance, or fat loss with 100% dedicated 1-on-1 coaching, form mastery, and nutrition support for ₹10,000/month.
              </p>
              <button
                onClick={() => {
                  setActiveTab('pt');
                  onSelectPlan('pt-1m');
                }}
                className="text-xs font-bold text-red-400 hover:text-red-300 inline-flex items-center gap-1.5 uppercase tracking-wider pt-1 cursor-pointer"
              >
                <span>Book Personal Trainer</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="sm:w-1/2 w-full h-44 rounded-xl overflow-hidden border border-neutral-800">
              <img
                src={ptImg}
                alt="AMR Personal Training Session"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
