import React from 'react';
import { WhatsAppIcon, GlobeIcon, StarIcon, LinkedInIcon, InstagramIcon } from './Icons';
import GoldButton from './GoldButton';

const ProfileView: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center">
      
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(3px)',
        }}
      />
      
      {/* Overlay to ensure text legibility slightly (though image in source is bright) */}
      <div className="absolute inset-0 bg-white/20 z-0"></div>

      {/* Content Layer */}
      <div className="relative z-10 w-full h-full flex flex-col items-center pt-24 pb-10 px-6">
        
        {/* Profile Image */}
        <div className="mb-6 relative">
          <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg border-4 border-teal-800/20 bg-[#0f3d3e]">
             {/* Using a placeholder that looks like a professional woman doctor/aesthetician */}
             <img 
               src="https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg" 
               alt="Paula Rojas"
               className="w-full h-full object-cover"
             />
          </div>
        </div>

        {/* Name and Title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-[#1a1a1a] mb-1">
            Paula Rojas
          </h1>
          <p className="text-lg text-gray-600 font-normal">
            Estetica y laser
          </p>
        </div>

        {/* Buttons Section */}
        <div className="w-full flex flex-col items-center space-y-4">
          
          {/* WhatsApp Button - Icon Only as per image */}
          <GoldButton 
            icon={<WhatsAppIcon className="w-full h-full" />}
            fullWidthIcon={true}
          />

          {/* Website Button */}
          <GoldButton 
            icon={<GlobeIcon className="w-full h-full" />}
            text="Visit Website"
          />

          {/* Reviews Button */}
          <GoldButton 
            icon={<StarIcon className="w-full h-full" />}
            text="Reviews"
          />

        </div>

        {/* Footer Socials */}
        <div className="mt-auto pt-10 flex items-center gap-6">
          <a href="#" className="text-[#134e4a] hover:text-[#0f3d3e] transition-colors">
            <LinkedInIcon className="w-8 h-8" />
          </a>
          <a href="#" className="text-[#134e4a] hover:text-[#0f3d3e] transition-colors">
            <InstagramIcon className="w-8 h-8" />
          </a>
        </div>
        
      </div>
    </div>
  );
};

export default ProfileView;