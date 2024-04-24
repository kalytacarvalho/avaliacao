import React from 'react'
import minha_foto from './assets/minha_foto.jpg'
import './SobreMim.css'


const SobreMim = () => {
  return (
    <div>
      <h1>Kályta de Carvalho Quintiliano</h1>
      <img src={minha_foto} alt="Minha Foto" tittle="Sobre Mim" width={200}/>
      <div className='texto'>
      <p>Sempre admirei programação, mas não imaginava que poderia ser uma profissão para mim... 
        <br />
        Sou Design de Moda por formação, a minha vida sempre foi direcionada para o lado da Arte, já estudei Web design, Design Grafico. 
        <br />
        Quando conheci o Front-End, me interessei bastante... pelo fato dele ser mais direcionado à parte visual.
        <br />
        Entrei de cabeça nesse novo mundo pra mim, foi desafiador, mas muito bom. Agora sei que essa carreira é a que quero seguir daqui para frente, carreira essa que quero para meu futuro. 
        <br />   
        </p>
      </div>
    </div>
  );
};

export default SobreMim;