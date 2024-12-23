import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import Buttons from './Buttons';
import LoadingScreen from './LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [splineLoaded, setSplineLoaded] = useState(false);

  function onLoad(spline) {
    console.log('Spline scene loaded');
    setSplineLoaded(true);
  }

  useEffect(() => {
    // Start a 3-second timer when the component mounts
    const timer = setTimeout(() => {
      // Only hide loading screen if Spline has also loaded
      if (splineLoaded) {
        setIsLoading(false);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [splineLoaded]); // Re-run effect when splineLoaded changes

  // When Spline loads, wait for the timer if it hasn't finished
  useEffect(() => {
    if (splineLoaded && !isLoading) {
      setIsLoading(false);
    }
  }, [splineLoaded]);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {isLoading && <LoadingScreen />}
      <Spline 
        scene="https://prod.spline.design/Cbo3eLNUxsA5uWxL/scene.splinecode"
        onLoad={onLoad}
        style={{
          width: '100%',
          height: '100%'
        }}
      />
      {!isLoading && <Buttons />}
    </div>
  );
}

export default App;