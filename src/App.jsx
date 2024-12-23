import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import Buttons from './Buttons';

function App() {
  const [splineApp, setSplineApp] = useState(null);

  function onLoad(spline) {
    setSplineApp(spline);
    console.log('Spline scene loaded');
  }

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Spline 
        scene="https://prod.spline.design/Cbo3eLNUxsA5uWxL/scene.splinecode"
        onLoad={onLoad}
        style={{
          width: '100%',
          height: '100%'
        }}
      />
      <Buttons />
    </div>
  );
}

export default App;