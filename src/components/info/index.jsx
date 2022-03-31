import React from 'react';
import './style.scss';

export function Info() {
  return(
    <section>
      <div className="info-container">
        <h2>Proteção mais inteligente para o seu site</h2>
        
        <div className="info-imgs-container">
          <div className="info-img-container">
            <img src='assets/smart-protect-1.jpg'/>
            <h3>Anti-spam</h3>
            <p>Lorem ipsum dolor sit amet porro his no his deleniti</p>
          </div>
          
          <div className="info-img-container">
            <img src='assets/smart-protect-2.jpg'/>
            <h3>Phishing Detect</h3>
            <p>Ne error antiopam usu. Sed vocen concludaturque ea</p>
          </div>
          
          <div className="info-img-container">
            <img src='assets/smart-protect-3.jpg'/>
            <h3>Smart Scan</h3>
            <p>Et usu ocurreret elaboraret doctus prodesse assueverit.</p>
          </div>
        </div>
      
      </div>
    </section>
  )
}