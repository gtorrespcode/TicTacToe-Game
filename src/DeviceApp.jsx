import React from 'react'
import App from './App';
import MobileWarning from './MobileWarning';
import { useState, useEffect } from 'react';

const DeviceApp = () => {
    const [isDesktop, setIsDesktop] = useState(true);
  
    useEffect(() => {
      const updateMediaQuery = () => {
        setIsDesktop(window.matchMedia('(min-width: 768px)').matches);
      };
  
      updateMediaQuery(); // Atualiza o estado inicial
  
      window.addEventListener('resize', updateMediaQuery);
  
      return () => {
        window.removeEventListener('resize', updateMediaQuery);
      };
    }, []);
  
    return (
      <>
        {isDesktop ? <App /> : <MobileWarning />}
      </>
    );
  };

export default DeviceApp

