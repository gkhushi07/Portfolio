import { useState, useEffect } from 'react';

const StatusIndicator = () => {
  const [isOn, setIsOn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsOn(prev => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "space-around",maxWidth: "fit-content"}}>
      <div
        className={`flex items-center gap-2
          w-15 h-15   /* Increased size from 7px to 15px */
          rounded-full 
          ${isOn ? 'bg-green-500' : 'bg-green-900'}
        `}
        style={{
          width: "7px", 
          height: "7px", 
          borderRadius: "50%",
          backgroundColor: isOn ? "rgb(34, 197, 94)" : "rgb(34, 197, 94)",
          boxShadow: isOn 
            ? '0 0 20px 10px rgba(34, 197, 94, 0.6), 0 0 40px 10px rgba(0, 255, 0, 0.3)' 
            : 'none', 
          transition: 'all 0.2s ease-in-out',
          animation: isOn ? 'ripple 1.5s infinite' : 'none'  // Add the ripple animation
        }}
      />

      {/* Add the keyframes for ripple effect with transparency changes */}
      <style>
        {`
          @keyframes ripple {
            0% {
              box-shadow: 0 0 10px 5px rgba(34, 197, 94, 0.6), 0 0 20px 5px rgba(0, 255, 0, 0.3);
            }
            20% {
              box-shadow: 0 0 15px 7px rgba(34, 197, 94, 0.5), 0 0 30px 7px rgba(0, 255, 0, 0.25);
            }
            40% {
              box-shadow: 0 0 20px 10px rgba(34, 197, 94, 0.4), 0 0 40px 10px rgba(0, 255, 0, 0.2);
            }
            60% {
              box-shadow: 0 0 25px 12px rgba(34, 197, 94, 0.3), 0 0 50px 12px rgba(0, 255, 0, 0.15);
            }
            80% {
              box-shadow: 0 0 30px 15px rgba(34, 197, 94, 0.2), 0 0 60px 15px rgba(0, 255, 0, 0.1);
            }
            100% {
              box-shadow: 0 0 35px 20px rgba(34, 197, 94, 0.1), 0 0 70px 20px rgba(0, 255, 0, 0.05);
            }
          }
        `}
      </style>
      <p style={{marginLeft: "10px"}}> Available for Work</p>
    </div>
  );
};

export default StatusIndicator;
