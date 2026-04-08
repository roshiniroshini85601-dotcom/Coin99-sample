const FIU = () => {
    return (
        <section className="relative bg-gradient-to-br from-[#808C9F] via-[#657388] to-[#4F5B6E] py-24 md:py-32 text-center text-white overflow-hidden shadow-inner w-full">

            <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center justify-center">
                <svg className="w-full h-full object-cover" viewBox="0 0 1000 400" preserveAspectRatio="none">
                    {Array.from({ length: 25 }).map((_, i) => (
                        <path
                            key={i}
                            d={`M0 ${50 + i * 15} Q 250 ${-50 + i * 25} 500 ${50 + i * 15} T 1000 ${50 + i * 15}`}
                            stroke="white"
                            strokeWidth="1"
                            fill="none"
                        />
                    ))}
                </svg>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center">
                <h1 className="text-3xl md:text-[42px] font-bold uppercase tracking-wide mb-4 drop-shadow-md text-white">
                    FIU COMPLIANCE IN BANGALORE
                </h1>

                <p className="text-gray-200 text-[13px] md:text-[14px] leading-relaxed max-w-2xl mb-8 font-medium">
                    Expert FIU compliance services to keep your business secure, transparent, and<br className="hidden md:block" /> fully aligned with regulatory standards.
                </p>

                <button className="bg-white text-blue-700 font-bold text-[14px] px-8 py-2.5 rounded-[10px] shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                    Sign Up
                </button>
            </div>

        </section>
    );
};

export default FIU;