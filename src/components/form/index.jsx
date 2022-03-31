import React from 'react';
import './style.scss';

export function Form() {
  return(
    <section>
      <div className="form-background">
        
        <div className="form-container">
          <div className="form-contact">
            <h2>Contato</h2>
            
            <p>
              Te iisque labitur eos, nec sale argumentum scribentur,
              augue disputando in vim. Erat fugit sit at, ius lorem.
            </p>

            <ul>
              <li>Email : contato@atlas.com</li>
              <li>Telefone : 4002-8922</li>
              <li>Endereço : Rua do Silício nº 999, Recife-PE</li>
            </ul>
          </div>
          
          <form>
            
            <div>
              <label>Seu Nome <br/>
                <input type="text"/>
              </label>
              
              <label>Seu Email <br/>
                <input type="email"/>
              </label>
            </div>
            
            <label> Mensagem 
              <textarea/> 
            </label>

            <button type="submit">Enviar</button>
          </form>
        </div>
      
      </div>
    </section>
  )
}