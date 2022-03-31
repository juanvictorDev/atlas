import React from 'react';
import './style.scss';

export function FirstFeature() {
  return(
    <section>
      <div className='first-feature-background'>
        
        <div className='first-feature-container'>
          
          <div className='first-feature-info'>
            <h2>Dê uma olhada dentro</h2>
            <p>
              Te iisque labitur eos, nec sale argumentum scribentur no,
              augue disputando in vim. Erat fugit sit at, ius lorem deserunt deterruisset no.
            </p>
            <button><a href='#'>Saber mais</a></button>
          </div>
          
          <div className='first-feature-img'>
            <img src='assets/feature-1.png' />
          </div>
        
        </div>
      
      </div>
    </section>
  )
}