"use client";
import React from "react";

export default function BusinessCard() {
  return (
    <div className="w-[380px] bg-white dark:bg-[#0B0F1A] rounded-[24px] p-6 shadow-2xl border border-gray-100 dark:border-white/5 transition-all cursor-default overflow-hidden">
        <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
                <span className="text-[14px] font-bold text-black dark:text-white uppercase tracking-tight">Business</span>
            </div>
            <div className="flex gap-3">
                {['Portfolio', 'Launch'].map(t => <span key={t} className="text-[10px] text-gray-400 font-medium cursor-pointer hover:text-blue-600">{t}</span>)}
            </div>
        </div>

        <div className="bg-gray-50 dark:bg-white/5 rounded-[12px] p-3 flex items-center justify-between mb-5 border border-gray-100 dark:border-white/5">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-600/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                </div>
                <div>
                    <p className="text-[11px] font-bold text-black dark:text-white">KYC Verification</p>
                    <p className="text-[9px] text-gray-400">Complete a simple KYC process</p>
                </div>
            </div>
            <span className="px-2.5 py-1 rounded-full border border-green-500/30 text-green-500 text-[9px] font-bold">Completed</span>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-6">
            {[
                { label: 'Capital Allocated', val: '$20,000', color: 'bg-blue-50 dark:bg-[#00174D]' },
                { label: 'Funds Raised', val: '$20,000', color: 'bg-gray-50 dark:bg-white/5' },
                { label: 'Returns', val: '219.6%', color: 'bg-gray-50 dark:bg-white/5' }
            ].map((s, i) => (
                <div key={i} className={`${s.color} p-3 rounded-[12px] flex flex-col justify-between h-[80px] border border-gray-100/50 dark:border-white/5`}>
                    <p className="text-[8px] text-gray-500 font-bold uppercase leading-tight">{s.label}</p>
                    <p className="text-[13px] font-bold text-black dark:text-white">{s.val}</p>
                </div>
            ))}
        </div>

        <div className="flex items-center justify-between mb-4">
            <h4 className="text-[13px] font-bold text-black dark:text-white">Participated Campaigns</h4>
            <div className="flex gap-1.5">
                {['My Campaigns', 'Claim'].map((t, i) => (
                    <button key={t} className={`px-2 py-1 rounded-md text-[8px] font-bold border transition-colors ${i === 0 ? 'bg-blue-600 border-blue-600 text-white shadow-sm' : 'border-gray-200 dark:border-white/10 text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5'}`}>{t}</button>
                ))}
            </div>
        </div>

        <div className="space-y-2">
            <div className="grid grid-cols-[1.5fr_1fr_1fr] px-2 text-[8px] text-gray-400 font-bold uppercase tracking-widest">
                <span>Campaigns</span>
                <span className="text-center">Raised</span>
                <span className="text-right">Status</span>
            </div>
            {[
                { name: 'Product Launch', raised: '$12,000', status: 'Active', sColor: 'bg-blue-600' },
                { name: 'Marketing Exp.', raised: '$9,500', status: 'Completed', sColor: 'bg-green-500' },
                { name: 'New Office', raised: '$20,000', status: 'Inprogress', sColor: 'bg-orange-500' }
            ].map((c, i) => (
                <div key={i} className="grid grid-cols-[1.5fr_1fr_1fr] items-center px-2 py-3 bg-gray-50/50 dark:bg-white/[0.02] rounded-lg border border-gray-100 dark:border-white/5 hover:translate-x-1 transition-transform">
                    <span className="text-[10px] font-bold text-black dark:text-white flex items-center gap-2">
                         <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                         {c.name}
                    </span>
                    <span className="text-[10px] text-center font-bold text-black dark:text-white tabular-nums">{c.raised}</span>
                    <div className="flex justify-end">
                        <span className={`${c.sColor} text-white text-[7px] px-2 py-0.5 rounded-full font-black uppercase tracking-widest`}>{c.status}</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}
