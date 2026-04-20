"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, circIn } from "framer-motion";
import { useBranding } from "./BrandingContext";
import { useTheme } from "next-themes";

const cardList = [
  { id: 1, title: "TOKEN", image: "/Token.svg", darkImage: "/DarkToken.png" },
  { id: 2, title: "BUSINESS", image: "/BUSS.svg", darkImage: "/DarkBUSS.png" },
  { id: 3, title: "EXCHANGE", image: "/CEX.svg", darkImage: "/DarkCEX.png" },
  { id: 4, title: "FUND ME", image: "/Fundme.svg", darkImage: "/DarkFundme.png" },
  { id: 5, title: "COIN99 PAY", image: "/PAY.svg", darkImage: "/DarkPAY.png" },
  { id: 6, title: "BLOCKCHAIN", image: "/BLK.svg", darkImage: "/DarkBLK.png" },
];

export const HeroCard = () => {
  const [index, setIndex] = useState(0);
  const { setActiveTitle } = useBranding();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setActiveTitle(cardList[index].title);
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % cardList.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [index, setActiveTitle]);

  if (!mounted) return (
    <div className="relative w-full max-w-[800px] h-[350px] md:h-[300px] md:w-[400px] lg:h-[350px] lg:w-[500px] lg:mt-[-30px] mx-auto flex items-center justify-center pt-4 md:pt-20">
      <div className="w-full h-full opacity-0" />
    </div>
  );

  return (
    <div className="relative w-full max-w-[800px] h-[350px] md:h-[300px] md:w-[400px] lg:h-[350px] lg:w-[500px] lg:mt-[-30px] mx-auto flex items-center justify-center pt-4 md:pt-20">
      <AnimatePresence mode="popLayout" initial={false}>
        {cardList.map((card, i) => {
          const offset = (i - index + cardList.length) % cardList.length;
          if (offset > 2) return null;
          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{
                opacity: 1 - offset * 0.3, 
                scale: 1 - offset * 0.05, 
                zIndex: cardList.length - offset,
                y: offset * -28,
              }}
              exit={{ 
                opacity: 1, 
                y: 400, 
                scale: 0.9,
                zIndex: 100,
                transition: { duration: 0.8, ease: "circIn" } 
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 25,
                mass: 1
              }}
              className="absolute w-full h-full flex items-center justify-center pointer-events-none"
            >
              <img
                src={resolvedTheme === "dark" ? card.darkImage : card.image}
                alt={card.title}
                className="w-full h-full object-contain filter drop-shadow-2xl"
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};


export default HeroCard;
