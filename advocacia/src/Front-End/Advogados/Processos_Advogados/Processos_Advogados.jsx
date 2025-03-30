import React from 'react'
import './Processos_Advogados.css'
import NavBar_Advogados from '../NavBar_Advogado/NavBar_Advogados'

function Processos_Advogados() {
  return (
    <div className='background-div-processos-ad'>
<NavBar_Advogados/>
<div className='all-container-processos-ad'>

<div className='container-um-processos-advogados'>

<h1>EM ABERTO</h1>
<div className='div-conteudo-um-processos-ad'>

</div>

</div>

<div className='container-dois-processos-advogados'>

<h1>Concluidos</h1>
    <div className='div-conteudo-dois-processos-ad'>

    </div>

</div>
</div>
    </div>
  )
}

export default Processos_Advogados