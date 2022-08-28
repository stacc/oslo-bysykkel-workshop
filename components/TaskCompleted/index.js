import { useCallback, useEffect, useRef } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";

function getAnimationSettings() {
    return {
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 0,
      particleCount: 150,
      origin: {
        x: Math.random() - 0.2,
        y: Math.random() - 0.2,
      },
    };
  }
  const canvasStyles = {
    position: "fixed",
    pointerEvents: "none",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
  };

  
export default function TaskCompleted({ isCompleted, children }) {
  const refAnimationInstance = useRef(null);
  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  useEffect(() => {
    if (isCompleted) {
      let counter = 0;
      let intervalId = setInterval(() => {
        refAnimationInstance.current(getAnimationSettings());
        refAnimationInstance.current(getAnimationSettings());

        if (counter++ >= 4) {
          clearInterval(intervalId);
        }
      }, 250);
    }
    window.sessionStorage.setItem("CompletedTask1", true);
}, [isCompleted]);

  return (
    <div>
      {children}
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
    </div>
  );
}

//&& !window.sessionStorage.getItem("CompletedTask1")
