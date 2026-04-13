'use client';
import { useState, useEffect } from "react";
import { ChevronDown, X } from "lucide-react";
import Image from "next/image";

export default function Cookie() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const nav = document.querySelector('nav');
    if (nav) nav.style.display = isModelOpen ? 'none' : 'block';
  }, [isModelOpen]);

  if (!mounted) return null;

  return (
    <>
    <div className="fixed right-10 bottom-10 z-[10001] cursor-pointer">
        {!isOpen ? (
          <button onClick={() => setIsOpen(true)} className="transition-transform hover:scale-110 active:scale-95 duration-200">
            <Image src="/cookie.svg" alt="Cookie" width={56} height={56} />
          </button>
        ) : (
          <div className="rounded-2xl bg-[#0B1121] border border-white/10 p-5 flex flex-col md:flex-row md:items-center justify-between shadow-2xl w-full md:min-w-[600px] animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="flex items-center gap-4">
              <Image src="/cookie.svg" alt="Cookie" width={36} height={36} />
              <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-[380px]">
                We use third-party cookies to provide you the best user experience and for analytics.
              </p>
            </div>
            <div className="flex items-center justify-end gap-3 mt-4 md:mt-0">
              <button
                onClick={() => setIsModelOpen(true)}
                className="bg-[#2323FF] text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-95"
              >
                Accept
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="border border-white/10 rounded-xl w-10 h-10 flex items-center justify-center text-white hover:bg-white/5 transition-colors"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        )}
      </div>

      {isModelOpen && (
        <div className="fixed inset-0 z-[10002] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 transition-all duration-300">
          <div className="w-full max-w-[600px] bg-[#06080E] rounded-[32px] border border-white/10 shadow-3xl overflow-hidden animate-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/5 px-8 h-20">
              <h2 className="text-xl font-bold text-white tracking-tight">Cookies Settings</h2>
              <button onClick={() => setIsModelOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="px-8 py-6 space-y-4 max-h-[50vh] overflow-y-auto custom-scrollbar">
              <CookieSettingItem
                title="Essential"
                description="Required to enable basic website functionality. You may not disable essential cookies."
                isLocked
              />
              <CookieSettingItem
                title="Targeted Advertising"
                description="Used to deliver relevant ads to you and track conversion."
                defaultEnabled
              />
              <CookieSettingItem
                title="Personalisation"
                description="Allows the site to remember choices you make (such as language)."
              />
              <CookieSettingItem
                title="Analytics"
                description="Help us understand how visitors interact with our site."
                defaultEnabled
              />
            </div>

            <div className="flex items-center justify-between border-t border-white/5 px-8 h-24 mb-0">
              <button className="text-sm font-semibold text-slate-500 hover:text-white transition-colors uppercase tracking-wider">
                Cookies Policy
              </button>
              <button
                onClick={() => { setIsModelOpen(false); setIsOpen(false); }}
                className="bg-[#2323FF] text-white px-10 py-3 rounded-2xl text-sm font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/30 active:scale-95"
              >
                Confirm choice
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
function CookieSettingItem({ title, description, isLocked = false, defaultEnabled = false }) {
  const [isEnabled, setIsEnabled] = useState(defaultEnabled || isLocked);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-[#0B1121] rounded-2xl border border-white/5 overflow-hidden transition-all hover:border-white/10">
      <div
        className="flex justify-between items-center p-5 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-3">
          <ChevronDown
            size={16}
            className={`text-blue-500 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
          />
          <span className="text-[15px] font-bold text-slate-100">{title}</span>
        </div>
        <label className={`relative inline-flex items-center ${isLocked ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`} onClick={(e) => e.stopPropagation()}>
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isEnabled}
            onChange={() => !isLocked && setIsEnabled(!isEnabled)}
            disabled={isLocked}
          />
          <div className="w-11 h-6 bg-slate-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2323FF]"></div>
        </label>
      </div>

      {isExpanded && description && (
        <div className="px-12 pb-5 -mt-1 animate-in slide-in-from-top-2 duration-300">
          <p className="text-xs text-slate-500 leading-relaxed font-normal border-l border-white/10 pl-4">
            {description}
          </p>
        </div>
      )}
    </div>
  );
}