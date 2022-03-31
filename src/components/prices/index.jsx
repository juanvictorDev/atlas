import React from 'react';
import './style.scss';

export function Prices() {
  return(
    <section>
      <h2 className="prices-title">Consulte nossos preços</h2>
      
      <div className="prices-container">
        
        <div className='aside-card-price'>
          <h3>STARTUP</h3>
          <p><span>R$</span>0,00</p>
          <ul>
            <li>Até 5 documentos</li>
            <li>Até 3 avaliações</li>
            <li>5 membros da equipe</li>
            <li>Suporte limitado</li>
          </ul>
          <button><a href='#'>Adquirir</a></button>
        </div>
        
        <div className='main-card-price'>
          <h3>PREMIUM</h3>
          <p><span>R$</span>15,00</p>
          <ul>
            <li>Até 15 documentos</li>
            <li>Até 10 avaliações</li>
            <li>25 membros da equipe</li>
            <li>Suporte limitado</li>
          </ul>
          <button><a href='#'>Adquirir</a></button>
        </div>
        
        <div className='aside-card-price'>
          <h3>PROFESSIONAL</h3>
          <p><span>R$</span>30,00</p>
          <ul>
            <li>Documentos ilimitados</li>
            <li>Avaliações ilimitadas</li>
            <li>Membros ilimitados</li>
            <li>Suporte Ilimitado</li>
          </ul>
          <button><a href='#'>Adquirir</a></button>
        </div>
      
      </div>
    </section>
  )
}