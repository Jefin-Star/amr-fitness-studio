import React, { useState } from 'react';
import { Phone, Mail, Instagram, MapPin, Copy, Check, ExternalLink, MessageCircle } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

export const ContactSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 bg-neutral-950 relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-red-500 uppercase tracking-widest mb-3">
            <span>Direct Channels</span>
            <span aria-hidden="true">·</span>
            <span>Always Responsive</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase tracking-tight text-white mb-6">
            Contact & Studio Location
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            Have questions about workout batches, buddy rates, or facilities? Get in touch with our team
            directly or visit us on the training floor.
          </p>
        </div>

        {/* 2-Column Contact Cards & Google Maps Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Channels */}
          <div className="lg:col-span-5 space-y-4">
            {/* WhatsApp Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-emerald-700/60 transition-all duration-200">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-emerald-950/70 border border-emerald-700/70 flex items-center justify-center text-emerald-400">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block">
                      Instant WhatsApp Chat
                    </span>
                    <a
                      href={`https://wa.me/91${GYM_DETAILS.whatsappNumber}?text=Hi%20AMR%20Fitness%20Studio!%20I%20would%20like%20information%20on%20joining.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base sm:text-lg font-bold text-white hover:text-emerald-400 font-mono transition-colors"
                    >
                      {GYM_DETAILS.whatsappFormatted}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => copyToClipboard(GYM_DETAILS.whatsappNumber, 'whatsapp')}
                    title="Copy number"
                    className="p-2 text-neutral-400 hover:text-white bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors cursor-pointer"
                  >
                    {copiedField === 'whatsapp' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                  <a
                    href={`https://wa.me/91${GYM_DETAILS.whatsappNumber}?text=Hi%20AMR%20Fitness%20Studio!%20I%20would%20like%20information%20on%20joining.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-neutral-400 hover:text-emerald-400 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-red-900/60 transition-all duration-200">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-red-950/70 border border-red-700/70 flex items-center justify-center text-red-500">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block">
                      Email Inquiries
                    </span>
                    <a
                      href={`mailto:${GYM_DETAILS.email}`}
                      className="text-sm sm:text-base font-bold text-white hover:text-red-400 transition-colors break-all"
                    >
                      {GYM_DETAILS.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => copyToClipboard(GYM_DETAILS.email, 'email')}
                    title="Copy email"
                    className="p-2 text-neutral-400 hover:text-white bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors cursor-pointer"
                  >
                    {copiedField === 'email' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                  <a
                    href={`mailto:${GYM_DETAILS.email}`}
                    className="p-2 text-neutral-400 hover:text-red-400 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Instagram Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-fuchsia-900/60 transition-all duration-200">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-fuchsia-950/70 border border-fuchsia-700/70 flex items-center justify-center text-fuchsia-400">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block">
                      Instagram Official
                    </span>
                    <a
                      href={GYM_DETAILS.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base sm:text-lg font-bold text-white hover:text-fuchsia-400 transition-colors"
                    >
                      {GYM_DETAILS.instagramHandle}
                    </a>
                  </div>
                </div>

                <a
                  href={GYM_DETAILS.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-neutral-400 hover:text-fuchsia-400 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Studio Address Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center text-red-500 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block">
                    Gym Location
                  </span>
                  <div className="text-white font-semibold text-sm sm:text-base mt-0.5">
                    Apex Muscle Realm (AMR)
                  </div>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    Thrissur District, Kerala, India
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <a
                      href="https://maps.google.com/?q=Apex+Muscle+Realm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-red-400 hover:text-red-300 uppercase tracking-wider"
                    >
                      <span>Get Driving Directions</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Embed Frame */}
          <div className="lg:col-span-7 bg-neutral-900 rounded-3xl border border-neutral-800 overflow-hidden shadow-2xl p-2 sm:p-3 relative group">
            <div className="relative w-full h-[450px] sm:h-[480px] rounded-2xl overflow-hidden bg-neutral-950">
              <iframe
                src={GYM_DETAILS.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Apex Muscle Realm Google Maps Location"
                className="w-full h-full filter contrast-105"
              />
            </div>
            <div className="px-4 py-3 flex items-center justify-between text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-500" />
                <span>Apex Muscle Realm · Verified Google Maps Listing</span>
              </div>
              <a
                href="https://maps.google.com/?q=Apex+Muscle+Realm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 hover:text-red-300 font-semibold"
              >
                Expand Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
