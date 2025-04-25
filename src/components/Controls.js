import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { moveDown, moveLeft, moveRight, rotate } from '../features/gameSlice';


export default function Controls() {
  const dispatch = useDispatch();
  const { isRunning, speed, gameOver} = useSelector((state) => state);
  
  // Track animation frame timing
  const requestRef = useRef();
  const lastUpdateTimeRef = useRef(0);
  const progressTimeRef = useRef(0);
  const update = (time) => {
    requestRef.current = requestAnimationFrame(update);
  
    if (!isRunning) return;
  
    if (!lastUpdateTimeRef.current) {
      lastUpdateTimeRef.current = time;
    }
  
    const deltaTime = time - lastUpdateTimeRef.current;
    progressTimeRef.current += deltaTime;
  
    if (progressTimeRef.current > speed) {
      dispatch(moveDown());
      progressTimeRef.current = 0;
    }
  
    lastUpdateTimeRef.current = time;
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(requestRef.current);
  }, [isRunning]);
  return (
    <div className="controls">
   <button
  disabled={!isRunning || gameOver}
  className="control-button"
  onClick={() => dispatch(moveLeft())}
  >
  Left
</button>
  
 
  {/* Right */}
  <button
    disabled={!isRunning}
    className="control-button"
    onClick={() => dispatch(moveRight())}
  >
    Right
  </button>

  {/* Rotate */}
  <button
    disabled={!isRunning}
    className="control-button"
    onClick={() => dispatch(rotate())}
  >
    Rotate
  </button>

  {/* Down */}
  <button
    disabled={!isRunning}
    className="control-button"
    onClick={() => dispatch(moveDown())}
  >
    Down
  </button>
  
</div>
  );
}