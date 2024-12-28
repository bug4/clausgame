import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Update progress every 30ms to create smooth animation over 3 seconds
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30); // 3000ms / 100 steps = 30ms per step

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-blue-400 flex items-center justify-center flex-col gap-4 z-50">
      <div className="text-4xl font-bold text-white mb-4">Frost Game | Solana</div>
      <div className="w-16 h-16 relative">
        <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      </div>
      <div className="w-64 h-2 bg-white/30 rounded-full overflow-hidden mt-4">
        <div 
          className="h-full bg-white rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="text-white text-xl">Loading your adventure...</div>
    </div>
  );
};

export default LoadingScreen;