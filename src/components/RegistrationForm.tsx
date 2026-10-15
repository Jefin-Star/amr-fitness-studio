import React, { useState, useEffect } from 'react';
import { CheckCircle2, Send, MessageSquare, AlertCircle, Calendar, Mail, Phone, User, Dumbbell, ArrowRight } from 'lucide-react';
import { MEMBERSHIP_PLANS, GYM_DETAILS } from '../data/gymData';

interface RegistrationFormProps {
  selectedPlanId?: string;
  onClearPlanSelection?: () => void;
}

interface FormState {
  fullName: string;
  phone: string;
  email: string;
  planId: string;
  startDate: string;
  fitnessGoals: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  planId?: string;
  startDate?: string;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({
  selectedPlanId,
  onClearPlanSelection,
}) => {
  // Get tomorrow's date formatted as YYYY-MM-DD
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const defaultDateStr = tomorrow.toISOString().split('T')[0];

  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    phone: '',
    email: '',
    planId: selectedPlanId || 'ind-3m',
    startDate: defaultDateStr,
    fitnessGoals: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormState | null>(null);

  // Sync if selectedPlanId changes from outside
  useEffect(() => {
    if (selectedPlanId) {
      setFormData((prev) => ({ ...prev, planId: selectedPlanId }));
    }
  }, [selectedPlanId]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name (at least 2 characters).';
    }

    // Phone validation: allows digits, +, spaces, dashes, min 8 digits
    const cleanedPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!cleanedPhone || cleanedPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone or WhatsApp number.';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.planId) {
      newErrors.planId = 'Please select a membership plan.';
    }

    if (!formData.startDate) {
      newErrors.startDate = 'Please choose your preferred starting date.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Save to localStorage for persistence
    setTimeout(() => {
      try {
        const stored = localStorage.getItem('amr_registrations');
        const existingList = stored ? JSON.parse(stored) : [];
        const newRecord = {
          ...formData,
          id: Date.now().toString(),
          timestamp: new Date().toISOString(),
        };
        localStorage.setItem('amr_registrations', JSON.stringify([newRecord, ...existingList]));
      } catch (err) {
        console.error('Failed to save registration locally', err);
      }

      setSubmittedData({ ...formData });
      setIsSubmitted(true);
      setIsSubmitting(false);
    }, 600);
  };

  const getSelectedPlanDetails = (id: string) => {
    return MEMBERSHIP_PLANS.find((p) => p.id === id) || MEMBERSHIP_PLANS[0];
  };

  const currentPlan = getSelectedPlanDetails(submittedData?.planId || formData.planId);

  // WhatsApp formatted message link
  const constructWhatsAppUrl = (data: FormState) => {
    const plan = getSelectedPlanDetails(data.planId);
    const message = `Hello AMR Fitness Studio!%0A%0AI would like to register for a membership.%0A%0A*Name:* ${encodeURIComponent(
      data.fullName
    )}%0A*Phone:* ${encodeURIComponent(data.phone)}%0A*Email:* ${encodeURIComponent(
      data.email
    )}%0A*Selected Plan:* ${encodeURIComponent(
      plan.name + ' (' + plan.price + ')'
    )}%0A*Preferred Start Date:* ${encodeURIComponent(
      data.startDate
    )}%0A*Fitness Goals:* ${encodeURIComponent(data.fitnessGoals || 'General fitness and strength')}%0A%0APlease let me know the next steps!`;

    return `https://wa.me/91${GYM_DETAILS.whatsappNumber}?text=${message}`;
  };

  // Mailto formatted link
  const constructMailtoUrl = (data: FormState) => {
    const plan = getSelectedPlanDetails(data.planId);
    const subject = encodeURIComponent(`New Membership Registration: ${data.fullName} - ${plan.name}`);
    const body = encodeURIComponent(
      `Hi AMR Fitness Studio,\n\nI have registered online for membership at Apex Muscle Realm.\n\nDetails:\n- Name: ${data.fullName}\n- Phone: ${data.phone}\n- Email: ${data.email}\n- Plan: ${plan.name} (${plan.price})\n- Preferred Start Date: ${data.startDate}\n- Fitness Goals: ${data.fitnessGoals || 'Strength & Conditioning'}\n\nLooking forward to beginning my training!`
    );
    return `mailto:${GYM_DETAILS.email}?subject=${subject}&body=${body}`;
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      planId: 'ind-3m',
      startDate: defaultDateStr,
      fitnessGoals: '',
    });
    setErrors({});
    if (onClearPlanSelection) onClearPlanSelection();
  };

  return (
    <section id="register" className="py-24 bg-neutral-900/40 relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-red-500 uppercase tracking-widest mb-3">
            <span>Online Registration</span>
            <span aria-hidden="true">·</span>
            <span>Instant Confirmation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase tracking-tight text-white mb-6">
            Membership Registration Form
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            Reserve your spot at AMR FITNESS STUDIO today. Fill out your details below and
            connect with our coaches directly on WhatsApp or email to activate your pass.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {!isSubmitted ? (
            <div className="bg-neutral-950 border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
              {/* Subtle crimson accent line */}
              <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent" />

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                      }}
                      placeholder="e.g. Rahul Nair"
                      className={`w-full bg-neutral-900 border rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-600 transition-colors ${
                        errors.fullName ? 'border-red-500 bg-red-950/20' : 'border-neutral-800'
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Phone & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2"
                    >
                      Phone / WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: undefined });
                        }}
                        placeholder="e.g. 99957 11447"
                        className={`w-full bg-neutral-900 border rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-600 transition-colors ${
                          errors.phone ? 'border-red-500 bg-red-950/20' : 'border-neutral-800'
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="e.g. athlete@example.com"
                        className={`w-full bg-neutral-900 border rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-600 transition-colors ${
                          errors.email ? 'border-red-500 bg-red-950/20' : 'border-neutral-800'
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Membership Plan (Dropdown) */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label
                      htmlFor="planId"
                      className="block text-xs font-bold uppercase tracking-wider text-neutral-300"
                    >
                      Membership Plan <span className="text-red-500">*</span>
                    </label>
                    <span className="text-xs text-neutral-400">
                      Selected: <strong className="text-red-400">{currentPlan.price}</strong>
                    </span>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                      <Dumbbell className="w-4 h-4" />
                    </div>
                    <select
                      id="planId"
                      value={formData.planId}
                      onChange={(e) => {
                        setFormData({ ...formData, planId: e.target.value });
                        if (errors.planId) setErrors({ ...errors, planId: undefined });
                      }}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-xl pl-10 pr-10 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-red-600 transition-colors cursor-pointer appearance-none"
                    >
                      <optgroup label="Individual Plans">
                        <option value="ind-1m">One Month — ₹2,000</option>
                        <option value="ind-3m">Three Months — ₹5,000 (Popular)</option>
                        <option value="ind-1y">One Year — ₹18,000 (Best Value)</option>
                      </optgroup>
                      <optgroup label="Couple / Buddy Packages (2 Persons)">
                        <option value="buddy-1m">Buddy 1 Month — ₹3,500</option>
                        <option value="buddy-3m">Buddy 3 Months — ₹9,000</option>
                        <option value="buddy-6m">Buddy 6 Months — ₹15,000</option>
                        <option value="buddy-1y">Buddy 1 Year — ₹22,000 (Maximum Savings)</option>
                      </optgroup>
                      <optgroup label="Dedicated Coaching">
                        <option value="pt-1m">Personal Trainer 1 Month — ₹10,000</option>
                      </optgroup>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-neutral-400">
                      ▼
                    </div>
                  </div>
                  {errors.planId && (
                    <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.planId}</span>
                    </p>
                  )}
                </div>

                {/* Preferred Start Date */}
                <div>
                  <label
                    htmlFor="startDate"
                    className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2"
                  >
                    Preferred Start Date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <input
                      type="date"
                      id="startDate"
                      value={formData.startDate}
                      onChange={(e) => {
                        setFormData({ ...formData, startDate: e.target.value });
                        if (errors.startDate) setErrors({ ...errors, startDate: undefined });
                      }}
                      className={`w-full bg-neutral-900 border rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-red-600 transition-colors ${
                        errors.startDate ? 'border-red-500 bg-red-950/20' : 'border-neutral-800'
                      }`}
                    />
                  </div>
                  {errors.startDate && (
                    <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.startDate}</span>
                    </p>
                  )}
                </div>

                {/* Message / Fitness Goals */}
                <div>
                  <label
                    htmlFor="fitnessGoals"
                    className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2"
                  >
                    Message / Fitness Goals <span className="text-neutral-500 font-normal lowercase">(optional)</span>
                  </label>
                  <div className="relative">
                    <textarea
                      id="fitnessGoals"
                      rows={3}
                      value={formData.fitnessGoals}
                      onChange={(e) => setFormData({ ...formData, fitnessGoals: e.target.value })}
                      placeholder="e.g. Muscle gain, fat loss, powerlifting, prep for competition, training with my partner..."
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-xl p-3.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-600 transition-colors"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-red-600 hover:bg-red-500 active:scale-[0.99] text-white font-bold text-sm uppercase tracking-wider transition-all duration-150 flex items-center justify-center gap-2 shadow-xl shadow-red-950/60 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Processing Registration...
                      </span>
                    ) : (
                      <>
                        <span>Submit Registration</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-neutral-400 text-center mt-3">
                    Fast activation · Pay at desk or via UPI · Free workout guidance included
                  </p>
                </div>
              </form>
            </div>
          ) : (
            /* Success Confirmation State */
            <div className="bg-neutral-950 border border-emerald-900/60 rounded-3xl p-6 sm:p-10 shadow-2xl relative text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-600 flex items-center justify-center text-emerald-400 mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="inline-block text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/60 border border-emerald-800/80 px-3 py-1 rounded-full mb-3">
                Registration Confirmed!
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold uppercase text-white mb-3">
                Welcome to AMR Fitness Studio, {submittedData?.fullName}!
              </h3>

              <p className="text-sm text-neutral-300 max-w-lg mx-auto leading-relaxed mb-8">
                Your registration has been successfully logged. Connect with us directly on WhatsApp to finalize your start date, get pass details, or ask any training questions.
              </p>

              {/* Summary Card */}
              {submittedData && (
                <div className="bg-neutral-900/90 rounded-2xl p-5 border border-neutral-800 text-left max-w-lg mx-auto mb-8 space-y-2.5 text-xs">
                  <div className="flex justify-between items-center py-1 border-b border-neutral-800/80">
                    <span className="text-neutral-400">Athlete Name:</span>
                    <span className="text-white font-semibold">{submittedData.fullName}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-neutral-800/80">
                    <span className="text-neutral-400">Selected Plan:</span>
                    <span className="text-red-400 font-bold">
                      {currentPlan.name} ({currentPlan.price})
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-neutral-800/80">
                    <span className="text-neutral-400">Contact Phone:</span>
                    <span className="text-white font-mono">{submittedData.phone}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-neutral-800/80">
                    <span className="text-neutral-400">Target Start Date:</span>
                    <span className="text-white font-medium">{submittedData.startDate}</span>
                  </div>
                  {submittedData.fitnessGoals && (
                    <div className="py-1">
                      <span className="text-neutral-400 block mb-0.5">Goals:</span>
                      <span className="text-neutral-200 italic">{submittedData.fitnessGoals}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Direct Instant Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-lg mx-auto mb-6">
                <a
                  href={submittedData ? constructWhatsAppUrl(submittedData) : '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-emerald-950/50"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </a>

                <a
                  href={submittedData ? constructMailtoUrl(submittedData) : '#'}
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-white font-semibold text-xs sm:text-sm uppercase tracking-wider py-3.5 px-6 rounded-xl border border-neutral-700 transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send via Email</span>
                </a>
              </div>

              <button
                onClick={handleReset}
                className="text-xs text-neutral-400 hover:text-white underline transition-colors cursor-pointer"
              >
                Register another member or change details
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
