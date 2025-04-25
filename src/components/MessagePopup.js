import React from 'react';
import { useSelector } from 'react-redux';

export default function MessagePopup() {
  const { isRunning, gameOver } = useSelector((state) => state);

  let message = '';
  let isHidden = 'hidden';

  if (gameOver) {
    message = 'Game Over';
    isHidden = '';
  } else if (!isRunning) {
    message = 'Paused';
    isHidden = '';
  }

  return (
    <div className={`message-popup ${isHidden}`}>
      <h1>{message}</h1>
    </div>
  );
}