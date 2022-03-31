import React from 'react';
import './style.scss';

import {AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram, AiFillLinkedin} from 'react-icons/ai'

export function Copy() {
  return(
    <section>
      <div className="copy-background">
        <div className="copy-container">
          <div>
            <p>Atlas © todos os direitos reservados.</p>
          </div>
          
          <div className='copy-icons'>
            <AiFillFacebook />
            <AiOutlineTwitter />
            <AiOutlineInstagram />
            <AiFillLinkedin />  
          </div>
        </div>
      </div>
    </section>
  )
}