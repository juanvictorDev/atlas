import React from 'react';
import './style.scss';

export function LastFeature() {
  return(
    <section>
      <div className='last-feature-background'>
        
        <div className='last-feature-container'>

          <div className='last-feature-img'>
            <img src='assets/feature-2.png' />
          </div>
            
          <div className='last-feature-info'>
            <h2>Seguro e confiável</h2>
            <p>
              Duo suas detracto maiestatis ad, commodo lucilius invenire nec ad,
              eum et oratio disputationi. Falli lobortis his ad
            </p>
            <button><a href='#'>Saber mais</a></button>
          </div>
                
        </div>
      
      </div>
    </section>
  )
}