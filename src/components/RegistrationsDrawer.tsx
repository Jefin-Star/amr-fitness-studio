import React, { useState, useEffect } from 'react';
import { X, Trash2, Download, UserCheck, Phone, Mail, Calendar, Dumbbell } from 'lucide-react';
import { MEMBERSHIP_PLANS } from '../data/gymData';

interface RegistrationRecord {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  planId: string;
  startDate: string;
  fitnessGoals: string;
  timestamp: string;
}

interface RegistrationsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegistrationsDrawer: React.FC<RegistrationsDrawerProps> = ({ isOpen, onClose }) => {
  const [records, setRecords] = useState<RegistrationRecord[]>([]);

  useEffect(() => {
    if (isOpen) {
      loadRecords();
    }
  }, [isOpen]);

  const loadRecords = () => {
    try {
      const data = localStorage.getItem('amr_registrations');
      if (data) {
        setRecords(JSON.parse(data));
      } else {
        setRecords([]);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear all stored registrations?')) {
      localStorage.removeItem('amr_registrations');
      setRecords([]);
    }
  };

  const handleExportCSV = () => {
    if (records.length === 0) return;
    const headers = ['Full Name', 'Phone', 'Email', 'Plan', 'Start Date', 'Fitness Goals', 'Registered At'];
    const rows = records.map((r) => {
      const plan = MEMBERSHIP_PLANS.find((p) => p.id === r.planId)?.name || r.planId;
      return [
        `"${r.fullName}"`,
        `"${r.phone}"`,
        `"${r.email}"`,
        `"${plan}"`,
        `"${r.startDate}"`,
        `"${(r.fitnessGoals || '').replace(/"/g, '""')}"`,
        `"${r.timestamp}"`,
      ].join(',');
    });

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `AMR_Registrations_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-neutral-950 border border-neutral-800 rounded-2xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <UserCheck className="w-5 h-5 text-red-500" />
            <h3 className="font-display font-bold uppercase tracking-wider text-white text-lg">
              Saved Registrations ({records.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-900 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="p-5 overflow-y-auto flex-1 space-y-3">
          {records.length === 0 ? (
            <div className="text-center py-12 text-neutral-500 text-sm">
              <Dumbbell className="w-8 h-8 mx-auto mb-3 opacity-30" />
              No registrations submitted yet. When visitors submit the registration form, their details will appear here.
            </div>
          ) : (
            records.map((record) => {
              const plan = MEMBERSHIP_PLANS.find((p) => p.id === record.planId);
              return (
                <div
                  key={record.id}
                  className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2 text-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-sm">{record.fullName}</span>
                    <span className="text-[11px] font-semibold text-red-400 bg-red-950/60 border border-red-900/60 px-2 py-0.5 rounded-full">
                      {plan ? `${plan.name} (${plan.price})` : record.planId}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-neutral-300">
                    <div className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                      <a href={`tel:${record.phone}`} className="hover:text-red-400 font-mono">
                        {record.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                      <a href={`mailto:${record.email}`} className="hover:text-red-400 truncate">
                        {record.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                      <span>Start Date: {record.startDate}</span>
                    </div>
                    <div className="text-neutral-500 text-[11px]">
                      {new Date(record.timestamp).toLocaleString()}
                    </div>
                  </div>

                  {record.fitnessGoals && (
                    <div className="pt-1 text-neutral-400 border-t border-neutral-800/60 italic">
                      Goals: {record.fitnessGoals}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Footer actions */}
        <div className="p-4 border-t border-neutral-800 bg-neutral-900/50 flex items-center justify-between gap-3">
          <button
            onClick={handleClearAll}
            disabled={records.length === 0}
            className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-red-400 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear Storage</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleExportCSV}
              disabled={records.length === 0}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
