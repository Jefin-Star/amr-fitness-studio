export interface MembershipPlan {
  id: string;
  name: string;
  category: 'individual' | 'couple' | 'pt';
  categoryLabel: string;
  duration: string;
  price: string;
  numericPrice: number;
  originalPrice?: string;
  savings?: string;
  popular?: boolean;
  description: string;
  features: string[];
}

export const GYM_DETAILS = {
  name: "AMR FITNESS STUDIO",
  brandSubtitle: "APEX MUSCLE REALM",
  tagline: "Build Your Strength. Transform Your Life.",
  whatsappNumber: "9995711447",
  whatsappFormatted: "+91 99957 11447",
  email: "apexmusclerealm@gmail.com",
  instagramUrl: "https://www.instagram.com/apexmusclerealm?mdxt=MW1vc2ZmNTJzdmU1dQ==",
  instagramHandle: "@apexmusclerealm",
  locationName: "Apex Muscle Realm, Kerala",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.2681505891483!2d76.2167686!3d10.569984999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ef004e9c97a5%3A0x50b5f9ca51148ebf!2sApex%20Muscle%20Realm!5e1!3m2!1sen!2sin!4v1792057534684!5m2!1sen!2sin",
  mapsDirectionsUrl: "https://maps.google.com/?q=Apex+Muscle+Realm"
};

export const OPERATING_SCHEDULE = [
  { day: "Monday", morning: "5:00 AM – 11:00 AM", evening: "4:30 PM – 11:00 PM", isOpen: true },
  { day: "Tuesday", morning: "5:00 AM – 11:00 AM", evening: "4:30 PM – 11:00 PM", isOpen: true },
  { day: "Wednesday", morning: "5:00 AM – 11:00 AM", evening: "4:30 PM – 11:00 PM", isOpen: true },
  { day: "Thursday", morning: "5:00 AM – 11:00 AM", evening: "4:30 PM – 11:00 PM", isOpen: true },
  { day: "Friday", morning: "5:00 AM – 11:00 AM", evening: "4:30 PM – 11:00 PM", isOpen: true },
  { day: "Saturday", morning: "5:00 AM – 11:00 AM", evening: "4:30 PM – 11:00 PM", isOpen: true },
  { day: "Sunday", morning: "Closed", evening: "Closed", isOpen: false }
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  // Individual Plans
  {
    id: "ind-1m",
    name: "One Month",
    category: "individual",
    categoryLabel: "Individual",
    duration: "1 Month",
    price: "₹2,000",
    numericPrice: 2000,
    description: "Ideal for short-term fitness goals, trying out the facility, or monthly flexibility.",
    features: [
      "Full access to strength floor & cardio",
      "Locker room & shower amenities",
      "Complimentary fitness assessment",
      "Morning & evening training access",
      "Free workout schedule guidance"
    ]
  },
  {
    id: "ind-3m",
    name: "Three Months",
    category: "individual",
    categoryLabel: "Individual",
    duration: "3 Months",
    price: "₹5,000",
    numericPrice: 5000,
    originalPrice: "₹6,000",
    savings: "Save ₹1,000",
    popular: true,
    description: "The ideal transformation runway. See real body recomposition and strength progression.",
    features: [
      "Everything in One Month plan",
      "Personalized workout split guidance",
      "Diet & supplement counseling",
      "Bi-weekly progress checks",
      "Guaranteed trainer floor assistance"
    ]
  },
  {
    id: "ind-1y",
    name: "One Year",
    category: "individual",
    categoryLabel: "Individual",
    duration: "1 Year",
    price: "₹18,000",
    numericPrice: 18000,
    originalPrice: "₹24,000",
    savings: "Save ₹6,000",
    description: "The ultimate commitment to strength. Best yearly value at just ₹1,500/month.",
    features: [
      "Full 365-day studio access",
      "Freeze membership option (up to 30 days)",
      "Exclusive AMR training merchandise",
      "Quarterly body composition analysis",
      "Priority equipment & locker allocation"
    ]
  },

  // Couple / Buddy Package
  {
    id: "buddy-1m",
    name: "Buddy 1 Month",
    category: "couple",
    categoryLabel: "Couple / Buddy",
    duration: "1 Month (2 Persons)",
    price: "₹3,500",
    numericPrice: 3500,
    savings: "₹1,750 / person",
    description: "Train together with your workout partner, spouse, or friend with shared motivation.",
    features: [
      "Full studio access for two partners",
      "Simultaneous workout slots",
      "Partner workout routines provided",
      "Floor trainer support for both",
      "Access to all strength equipment"
    ]
  },
  {
    id: "buddy-3m",
    name: "Buddy 3 Months",
    category: "couple",
    categoryLabel: "Couple / Buddy",
    duration: "3 Months (2 Persons)",
    price: "₹9,000",
    numericPrice: 9000,
    originalPrice: "₹10,500",
    savings: "Save ₹1,500",
    popular: true,
    description: "Consistently hit PRs together. Unbeatable value for serious training partners.",
    features: [
      "Full 3-month access for 2 members",
      "Custom dual progression programs",
      "Shared progress tracking",
      "Nutrition recommendations for both",
      "Dedicated partner workout coaching"
    ]
  },
  {
    id: "buddy-6m",
    name: "Buddy 6 Months",
    category: "couple",
    categoryLabel: "Couple / Buddy",
    duration: "6 Months (2 Persons)",
    price: "₹15,000",
    numericPrice: 15000,
    originalPrice: "₹21,000",
    savings: "Save ₹6,000",
    description: "Half-year committed partner fitness journey with maximum savings per person.",
    features: [
      "Full 6-month access for 2 members",
      "Membership freeze privilege",
      "Comprehensive bodybuilding split",
      "Partner milestone celebrations",
      "Complete studio equipment access"
    ]
  },
  {
    id: "buddy-1y",
    name: "Buddy 1 Year",
    category: "couple",
    categoryLabel: "Couple / Buddy",
    duration: "1 Year (2 Persons)",
    price: "₹22,000",
    numericPrice: 22000,
    originalPrice: "₹36,000",
    savings: "Save ₹14,000 (Best Value)",
    description: "Unmatched annual value for couples or gym besties. Less than ₹920/mo per person!",
    features: [
      "Full 365 days access for two people",
      "Up to 45 days membership freeze",
      "Complimentary AMR studio gear",
      "Priority assistance during peak hours",
      "VIP member status & invite events"
    ]
  },

  // Personal Trainer
  {
    id: "pt-1m",
    name: "Personal Trainer (1 Month)",
    category: "pt",
    categoryLabel: "Personal Training",
    duration: "1 Month Dedicated",
    price: "₹10,000",
    numericPrice: 10000,
    popular: true,
    description: "1-on-1 personalized transformation coaching, form correction, and tailored nutrition plan.",
    features: [
      "Dedicated 1-on-1 certified trainer",
      "Customized macro & calorie nutrition chart",
      "Form precision & injury prevention focus",
      "Daily motivation & habit tracking",
      "Weekly measurements & body fat metrics",
      "Fast-track weight loss or muscle hypertrophy"
    ]
  }
];

export function getLiveStatus() {
  // Current time in IST (India UTC+5:30)
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const istDate = new Date(utc + (3600000 * 5.5));
  
  const dayIndex = istDate.getDay(); // 0 is Sunday
  const hour = istDate.getHours();
  const minute = istDate.getMinutes();
  const timeInMinutes = hour * 60 + minute;

  // Sunday closed
  if (dayIndex === 0) {
    return {
      isOpen: false,
      statusText: "Closed Today (Sunday)",
      nextSlot: "Opens Monday at 5:00 AM",
      badgeColor: "bg-neutral-800 text-neutral-400 border-neutral-700"
    };
  }

  // Morning slot: 5:00 AM (300m) to 11:00 AM (660m)
  // Evening slot: 4:30 PM (990m) to 11:00 PM (1380m)
  const morningStart = 5 * 60; // 300
  const morningEnd = 11 * 60; // 660
  const eveningStart = 16 * 60 + 30; // 990
  const eveningEnd = 23 * 60; // 1380

  if (timeInMinutes >= morningStart && timeInMinutes < morningEnd) {
    return {
      isOpen: true,
      statusText: "Open Now (Morning Session)",
      nextSlot: "Morning session open until 11:00 AM",
      badgeColor: "bg-emerald-950/80 text-emerald-400 border-emerald-800/80"
    };
  } else if (timeInMinutes >= eveningStart && timeInMinutes < eveningEnd) {
    return {
      isOpen: true,
      statusText: "Open Now (Evening Session)",
      nextSlot: "Evening session open until 11:00 PM",
      badgeColor: "bg-emerald-950/80 text-emerald-400 border-emerald-800/80"
    };
  } else if (timeInMinutes < morningStart) {
    return {
      isOpen: false,
      statusText: "Opening Soon",
      nextSlot: "Morning session starts at 5:00 AM",
      badgeColor: "bg-amber-950/80 text-amber-400 border-amber-800/80"
    };
  } else if (timeInMinutes >= morningEnd && timeInMinutes < eveningStart) {
    return {
      isOpen: false,
      statusText: "Midday Break",
      nextSlot: "Evening session begins at 4:30 PM",
      badgeColor: "bg-neutral-800 text-neutral-300 border-neutral-700"
    };
  } else {
    return {
      isOpen: false,
      statusText: "Closed for the Night",
      nextSlot: "Opens tomorrow at 5:00 AM",
      badgeColor: "bg-neutral-800 text-neutral-400 border-neutral-700"
    };
  }
}
