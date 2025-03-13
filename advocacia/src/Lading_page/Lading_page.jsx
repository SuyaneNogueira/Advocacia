import React from 'react'
import './Lading_page.css'

function Lading_page() {
  return (
    <div className='conteiner-lading'>
    <div className='lading-entrada'>
      <div className='logo-lading'>
        <img src="lawofdefense2.jpg" alt="" className='logo-page'/>
        <div className='button-lading1'>
        <button className='button-login-lading'>Login</button>
        </div>
      </div>
      <div className='container-info'>
      <div className='bem-vindo-lading'>
        <h1 className='h1-bem-vindo'>Bem vindo(a)!</h1>
        <div className='text-bem-vindo'>
        <p className='p-bem-vindo'>Entendemos que questões jurídicas podem gerar incertezas e preocupações. Por isso, oferecemos uma consultoria jurídica humanizada, com foco em entender suas necessidades e encontrar as melhores soluções para você. Nosso objetivo é transformar o complexo em simples, oferecendo suporte e orientação em cada etapa do processo.</p>
        </div>
      </div>
      <div className='foto-profissional'>
        <div className='container-foto'></div>
      </div>
      </div>
    </div>

    <div className='lading-areas-atuacao'>
    <div className='espaco-areas'>

      <div className='container-areas-atuacao'>
        <div className='container-um'>
          <div className='elemento-container-um'>
            <div className='img-advogado-digital'>
              <img className='adv-digital' src="foto-advogado-digital.png" alt="" />
              <p className='p-adv-digital'>Advogado digital</p>
              </div>
            <div className='img-advogado-previdenciario'>
              <img className='adv-previdenciario' src="foto-advogado-previdenciario.png" alt="" />
              <p className='p-adv-previdenciario'>Advogado previdenciario</p>
              </div> 
          </div>
        </div>
        <div className='container-dois'>
          <div className='elemento-container-dois'></div>
        </div>
        <div className='container-tres'>
          <div className='elemento-container-tres'></div>
        </div>
      </div>
      <div className='detalhe-areas-atuacao'>
        <div className='elemento-detalhes'></div>
      </div>
      <div className='titulo-areas-atuacao'>
        <h1 className='h1-areas'>Áreas de</h1>
        <h1 className='h1-atuacao'>Atuação</h1>
      </div>
    
    </div>



    </div>
    </div>
  )
}

export default Lading_page
