import React from 'react';
import development from '../assets/development.gif';

export default function DevMode() {
  return (
    <div className="development-container">
      <img src={ development } alt="development" className="development-img" />
      <p className="development-tag">Em desenvolvimento</p>
    </div>
  );
}
