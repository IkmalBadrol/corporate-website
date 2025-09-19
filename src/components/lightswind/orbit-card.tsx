"use client";

import React from "react";

type OrbitCardProps = {
  children: React.ReactNode;
  className?: string;
};

const OrbitCard: React.FC<OrbitCardProps> = ({ children, className }) => {
  return (
    <div className={`relative ${className} p-3`}> {/* Reduced padding from p-4 to p-3 */}
      {/* Glowing shadow background */}
      <div className="absolute inset-[-4px] z-0 flex items-center justify-center rounded-xl">
            <div className="absolute h-full w-full animate-orbit-glow rounded-xl">
                <div className="h-full w-full rounded-xl bg-[#171e24]"></div>
            </div>
        </div>

      {/* Card Content */}
      <div className="relative z-10 rounded-xl bg-[#171e24] p-4 h-full">
            {children}
      </div>

      {/* Keyframes for glowing effect */}
      <style jsx>{`
        @keyframes orbit-glow {
          0% {
            transform: scale(1);
            box-shadow: 0 0 12px 4px rgba(17, 229, 163, 0.5); /* Slightly reduced glow */
          }
          50% {
            transform: scale(1.03); /* Reduced from 1.05 to 1.03 */
            box-shadow: 0 0 16px 8px rgba(17, 229, 163, 0.6); /* Reduced glow */
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 12px 4px rgba(17, 229, 163, 0.5);
          }
        }
        .animate-orbit-glow {
          animation: orbit-glow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default OrbitCard;