import React from 'react';
import { Header } from '../header';
import './style.scss';

export function Banner() {
  return(
    <>
      <div className='banner-background'>  
        <Header />
        
        <section>
          <div className='text-container'>
            <h1>Um novo caminho Para iniciar negócios</h1>
            <p>
              Lorem ipsum dolor sit amet, id nec enim autem oblique, ei dico mentitum duo.
              Illum iusto laoreet his te. Lorem partiendo mel ex. Ad vitae admodum voluptatum per.
            </p>
            <button type='button'><a href='#'>Iniciar</a></button>
          </div>
        </section>  
      </div>
    </>
  )
}