import React from 'react';

interface GoldButtonProps {
  icon: React.ReactNode;
  text?: string;
  onClick?: () => void;
  fullWidthIcon?: boolean;
}

const GoldButton: React.FC<GoldButtonProps> = ({ icon, text, onClick, fullWidthIcon }) => {
  return (
    <button 
      onClick={onClick}
      className={`
        relative group w-full max-w-[280px] h-[64px] rounded-full 
        flex items-center justify-center 
        bg-white
        transition-transform duration-150 active:scale-95
        my-3
      `}
      style={{
        // Replicating the "Gold" double-border/bevel effect
        boxShadow: `
          0 0 0 2px #FFFFFF, 
          0 0 0 5px #C5A065, 
          0 10px 15px -3px rgba(0, 0, 0, 0.1), 
          inset 0 2px 4px rgba(255, 255, 255, 0.5)
        `
      }}
    >
      <div className="flex items-center justify-center w-full">
        {fullWidthIcon ? (
          <div className="text-[#134e4a] w-8 h-8">
             {icon}
          </div>
        ) : (
          <div className="flex items-center space-x-3">
             <div className="text-[#134e4a] w-7 h-7">
              {icon}
             </div>
             {text && (
              <span className="text-[#134e4a] text-lg font-medium tracking-wide">
                {text}
              </span>
             )}
          </div>
        )}
      </div>
    </button>
  );
};

export default GoldButton;