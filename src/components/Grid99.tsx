import React from "react";

const Nine = ({ color = "bg-slate-300 dark:bg-slate-700" }: { color?: string }) => {
  const pattern = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 1, 1, 1],
    [0, 0, 1, 1],
    [0, 1, 1, 1],
  ];
  return (
    <div className="grid grid-cols-4 gap-[4px] shrink-0">
      {pattern.flatMap((row, rowIndex) =>
        row.map((cell, cellIndex) => (
          <div
            key={`${rowIndex}-${cellIndex}`}
            className={`w-[13px] h-[13px] rounded-[1.5px] ${
              cell ? color : "bg-transparent"
            }`}
          />
        ))
      )}
    </div>
  );
};

export const Grid99 = ({ className, color }: { className?: string; color?: string }) => {
  return (
    <div className={`flex gap-8 select-none pointer-events-none transition-all duration-500 ${className}`}>
      <Nine color={color} />
      <Nine color={color} />
    </div>
  );
};

export default Grid99;
