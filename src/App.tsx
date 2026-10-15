/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { MembershipPlans } from './components/MembershipPlans';
import { ScheduleSection } from './components/ScheduleSection';
import { RegistrationForm } from './components/RegistrationForm';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { RegistrationsDrawer } from './components/RegistrationsDrawer';

export default function App() {
  const [selectedPlanId, setSelectedPlanId] = useState<string>('ind-3m');
  const [isRegistrationsOpen, setIsRegistrationsOpen] = useState(false);

  const scrollToRegistration = (planId?: string) => {
    if (planId) {
      setSelectedPlanId(planId);
    }
    const element = document.getElementById('register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPlans = () => {
    const element = document.getElementById('plans');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-red-600 selection:text-white antialiased">
      {/* Top Bar Navigation */}
      <Navbar onOpenRegister={() => scrollToRegistration()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onJoinNowClick={() => scrollToRegistration()}
          onViewPlansClick={scrollToPlans}
        />

        {/* 2. About Our Gym Section */}
        <About />

        {/* 3. Membership Plans Section */}
        <MembershipPlans onSelectPlan={(planId) => scrollToRegistration(planId)} />

        {/* Studio Operating Hours & Shifts */}
        <ScheduleSection />

        {/* 4. Membership Registration Form Section */}
        <RegistrationForm
          selectedPlanId={selectedPlanId}
          onClearPlanSelection={() => setSelectedPlanId('ind-3m')}
        />

        {/* 5. Contact Us Section */}
        <ContactSection />
      </main>

      {/* 6. Footer */}
      <Footer onOpenRegistrations={() => setIsRegistrationsOpen(true)} />

      {/* Floating Instant Action (WhatsApp) */}
      <FloatingActions />

      {/* Saved Registrations Drawer */}
      <RegistrationsDrawer
        isOpen={isRegistrationsOpen}
        onClose={() => setIsRegistrationsOpen(false)}
      />
    </div>
  );
}
