import { FaTwitter, FaGithub, FaYoutube, FaInstagram } from 'react-icons/fa';
import { Copyright } from "lucide-react";
import Grid99 from './Grid99';

const Footer = () => {
    return (
        <footer className="relative bg-[#EAEEF2] dark:bg-[#06080E] pt-12 md:pt-24 pb-8 md:pb-12 px-4 md:px-10 font-sans overflow-hidden transition-colors duration-500">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-between gap-10 md:gap-20 mb-10 md:mb-20 text-black dark:text-white">

                    <div className="flex flex-col max-w-sm relative">
                        <h2 className="text-4xl font-black text-black dark:text-white tracking-tighter mb-8  relative z-10">
                            COIN<span className="text-blue-600">99</span>
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 text-[16px] leading-relaxed mb-12 font-medium relative z-10">
                            Coin99 brings together token creation, launchpads, trading, payments, and
                            blockchain infrastructure into a single powerful ecosystem.
                        </p>

                        <div className="flex gap-4 relative z-10 mb-8">
                            <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-slate-800 dark:text-slate-200 shadow-sm hover:shadow-md cursor-pointer transition-all">
                                <FaTwitter size={18} />
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-slate-800 dark:text-slate-200 shadow-sm hover:shadow-md cursor-pointer transition-all">
                                <FaGithub size={18} />
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-slate-800 dark:text-slate-200 shadow-sm hover:shadow-md cursor-pointer transition-all">
                                <FaYoutube size={18} />
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-slate-800 dark:text-slate-200 shadow-sm hover:shadow-md cursor-pointer transition-all">
                                <FaInstagram size={18} />
                            </div>
                        </div>

                        <div className="opacity-[0.25] dark:opacity-[0.15] md:hidden ">
                            <Grid99 className="scale-90 -mb-10"/>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-28 lg:pr-10 md:mt-[-90px]">
                        <div className="space-y-4">
                            <h3 className="font-bold text-slate-900 dark:text-white text-[18px] mb-4">Products</h3>
                            <a href="#" className="block text-slate-500 dark:text-slate-400 text-[15px] font-medium hover:text-blue-600 transition-colors">C99 Token</a>
                            <a href="#" className="block text-slate-500 dark:text-slate-400 text-[15px] font-medium hover:text-blue-600 transition-colors">FundMe</a>
                            <a href="#" className="block text-slate-500 dark:text-slate-400 text-[15px] font-medium hover:text-blue-600 transition-colors">Business</a>
                            <a href="#" className="block text-slate-500 dark:text-slate-400 text-[15px] font-medium hover:text-blue-600 transition-colors">Exchange</a>
                            <a href="#" className="block text-slate-500 dark:text-slate-400 text-[15px] font-medium hover:text-blue-600 transition-colors">99 Pay</a>
                            <a href="#" className="block text-slate-500 dark:text-slate-400 text-[15px] font-medium hover:text-blue-600 transition-colors">Blockchain</a>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-bold text-slate-900 dark:text-white text-[18px] mb-4">Resources</h3>
                            <a href="#" className="block text-slate-500 dark:text-slate-400 text-[15px] font-medium hover:text-blue-600 transition-colors">Documentation</a>
                            <a href="#" className="block text-slate-500 dark:text-slate-400 text-[15px] font-medium hover:text-blue-600 transition-colors">Blog</a>
                            <a href="#" className="block text-slate-500 dark:text-slate-400 text-[15px] font-medium hover:text-blue-600 transition-colors">Support</a>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-bold text-slate-900 dark:text-white text-[18px] mb-4">Company</h3>
                            <a href="#" className="block text-slate-500 dark:text-slate-400 text-[15px] font-medium hover:text-blue-600 transition-colors">About</a>
                            <a href="#" className="block text-slate-500 dark:text-slate-400 text-[15px] font-medium hover:text-blue-600 transition-colors">Contact</a>
                            <a href="#" className="block text-slate-500 dark:text-slate-400 text-[15px] font-medium hover:text-blue-600 transition-colors">Support</a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-dashed border-slate-400/50 dark:border-white/10 pt-8 flex flex-col md:mt-[-70px] md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-1.5 text-slate-400 text-[13px] font-medium tracking-tight">
                        <Copyright size={13} />
                        <p>2026 — Copyright. All Rights reserved</p>
                    </div>

                    <div className="flex items-center gap-8">
                        <a href="#" className="text-slate-500 dark:text-slate-400 text-[14px] font-medium hover:text-blue-600 underline transition-colors">Privacy policy</a>
                        <a href="#" className="text-slate-500 dark:text-slate-400 text-[14px] font-medium hover:text-blue-600 underline transition-colors">Terms of service</a>
                        <a href="#" className="text-slate-500 dark:text-slate-400 text-[14px] font-medium hover:text-blue-600 underline transition-colors">Cookie Settings</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
