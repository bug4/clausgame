import React from 'react';
import { Gamepad2 } from 'lucide-react';
import MusicPlayer from './MusicPlayer';

const Buttons = () => {
  const customStyles = {
    backgroundColor: '#FFA500',
    '--hover-color': '#FF8C00',
  };

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Buy Now Button */}
      <div className="absolute top-6 right-6 pointer-events-auto">
        <a 
          href="https://pump.fun" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white font-bold py-3 px-8 rounded-xl transition-all text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          style={customStyles}
        >
          Buy Now
        </a>
      </div>

      {/* Social Media Buttons */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-6 pointer-events-auto">
        <a 
          href="https://x.com/ClausGameSOL" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white font-bold py-3 px-8 rounded-xl transition-all text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          style={customStyles}
        >
          Twitter
        </a>
        <a 
          href="https://telegram.org" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white font-bold py-3 px-8 rounded-xl transition-all text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          style={customStyles}
        >
          Telegram
        </a>
      </div>

      {/* Game Controls */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 pointer-events-auto">
        <div className="p-6 rounded-2xl shadow-xl" style={{
          backgroundColor: '#FFA500',
          border: '4px solid #FF8C00'
        }}>
          <div className="flex items-center gap-3 mb-4">
            <Gamepad2 size={28} className="text-white" />
            <h3 className="font-bold text-2xl text-white">Controls</h3>
          </div>
          <div className="space-y-4">
            <div className="flex gap-4 items-center">
              <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center font-bold text-2xl shadow-inner" style={{ color: '#FFA500', borderColor: '#FF8C00', borderWidth: '2px' }}>
                A
              </div>
              <span className="text-white font-medium">Move Left</span>
            </div>
            <div className="flex gap-4 items-center">
              <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center font-bold text-2xl shadow-inner" style={{ color: '#FFA500', borderColor: '#FF8C00', borderWidth: '2px' }}>
                D
              </div>
              <span className="text-white font-medium">Move Right</span>
            </div>
          </div>
        </div>
      </div>

      {/* Music Player */}
      <MusicPlayer />
    </div>
  );
};

export default Buttons;