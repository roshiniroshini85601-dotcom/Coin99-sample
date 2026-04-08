import { FaTwitter, FaGithub, FaYoutube, FaInstagram } from 'react-icons/fa';
import { Copyright } from "lucide-react";
import Grid99 from './Grid99';

const Footer = () => {
    return (
        <footer className="relative bg-[#EAEEF2] pt-24 pb-16 px-10 font-sans overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-20">
                
                <div className="flex flex-col max-w-sm">
                    <h2 className="text-4xl font-black text-black tracking-tighter mb-8 italic">
                        COIN<span className="text-blue-600">99</span>
                    </h2>
                    <p className="text-slate-500 text-[16px] leading-relaxed mb-12 font-medium">
                        Coin99 brings together token creation, launchpads, trading, payments, and 
                        blockchain infrastructure into a single powerful ecosystem.
                    </p>
                    
                    <div className="flex gap-4 mb-10">
                        <div className="w-10 h-10 rounded-full bg-slate-200/50 flex items-center justify-center text-slate-800 hover:bg-slate-300/50 cursor-pointer transition-all">
                           <FaTwitter size={18} />
                        </div>
                        <div className="w-10 h-10 rounded-full bg-slate-200/50 flex items-center justify-center text-slate-800 hover:bg-slate-300/50 cursor-pointer transition-all">
                           <FaGithub size={18} />
                        </div>
                        <div className="w-10 h-10 rounded-full bg-slate-200/50 flex items-center justify-center text-slate-800 hover:bg-slate-300/50 cursor-pointer transition-all">
                           <FaYoutube size={18} />
                        </div>
                        <div className="w-10 h-10 rounded-full bg-slate-200/50 flex items-center justify-center text-slate-800 hover:bg-slate-300/50 cursor-pointer transition-all">
                           <FaInstagram size={18} />
                        </div>
                    </div>

                    <Grid99 className="opacity-[0.3] scale-90 -ml-2 mb-6" color="bg-slate-300" />
                    
                    <div className="flex items-center gap-1.5 text-slate-400 text-[13px] font-medium tracking-tight">
                        <Copyright size={13} />
                        <p>2026 — Copyright, All Rights reserved</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-16 md:gap-28 lg:pr-10">
                    
                    <div className="space-y-5">
                        <h3 className="font-bold text-slate-900 text-[18px] mb-4">Products</h3>
                        <a href="#" className="block text-slate-500 text-[15px] font-medium hover:text-blue-600 transition-colors">C99 Token</a>
                        <a href="#" className="block text-slate-500 text-[15px] font-medium hover:text-blue-600 transition-colors">FundMe</a>
                        <a href="#" className="block text-slate-500 text-[15px] font-medium hover:text-blue-600 transition-colors">Business</a>
                        <a href="#" className="block text-slate-500 text-[15px] font-medium hover:text-blue-600 transition-colors">Exchange</a>
                        <a href="#" className="block text-slate-500 text-[15px] font-medium hover:text-blue-600 transition-colors">99 Pay</a>
                    </div>

                    <div className="space-y-5">
                        <h3 className="font-bold text-slate-900 text-[18px] mb-4">Resources</h3>
                        <a href="#" className="block text-slate-500 text-[15px] font-medium hover:text-blue-600 transition-colors">Documentation</a>
                        <a href="#" className="block text-slate-500 text-[15px] font-medium hover:text-blue-600 transition-colors">Blog</a>
                        <a href="#" className="block text-slate-500 text-[15px] font-medium hover:text-blue-600 transition-colors">Support</a>
                    </div>

                    <div className="space-y-5">
                        <h3 className="font-bold text-slate-900 text-[18px] mb-4">Company</h3>
                        <a href="#" className="block text-slate-500 text-[15px] font-medium hover:text-blue-600 transition-colors">About</a>
                        <a href="#" className="block text-slate-500 text-[15px] font-medium hover:text-blue-600 transition-colors">Contact</a>
                        <a href="#" className="block text-slate-500 text-[15px] font-medium hover:text-blue-600 transition-colors">Support</a>
                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;
