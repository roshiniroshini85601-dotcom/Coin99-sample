"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, circIn } from "framer-motion";
import { useBranding } from "./BrandingContext";
const cardList = [
  { id: 1, title: "TOKEN", image: "/Token.svg" },
  { id: 2, title: "BUSINESS", image: "/BUSS.svg" },
  { id: 3, title: "EXCHANGE", image: "/CEX.svg" },
  { id: 4, title: "FUND ME", image: "/Fundme.svg" },
  { id: 5, title: "COIN99 PAY", image: "/PAY.svg" },
  { id: 6, title: "BLOCKCHAIN", image: "/BLK.svg" },
];
export const HeroCard = () => {
  const [index, setIndex] = useState(0);
  const { setActiveTitle } = useBranding();

  useEffect(() => {
    setActiveTitle(cardList[index].title);
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % cardList.length);
    }, 1500);
    return () => clearInterval(timer);
  }, [index, setActiveTitle]);

  return (
    <div className="relative w-full max-w-[800px] h-[350px] md:h-[300px] md:w-[400px] lg:h-[350px] lg:w-[500px] lg:mt-[-30px] mx-auto flex items-center justify-center pt-20">
      <AnimatePresence mode="popLayout">
        {cardList.map((card, i) => {
          const offset = (i - index + cardList.length) % cardList.length;
          if (offset > 3) return null;
          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, scale: 0.9, y: -40 }}
              animate={{
                opacity: 1 - offset * 0.3,
                scale: 1 - offset * 0.05,
                zIndex: cardList.length - offset,
                y: offset * -28,
              }}
              exit={{ opacity: 0, y: 500 }}
              transition={{ type: "spring"}}
              className="absolute w-full h-full flex items-center justify-center pointer-events-none"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-contain filter "
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default HeroCard;
