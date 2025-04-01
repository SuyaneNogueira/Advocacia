import React from 'react'
import "./Tela_IAdvogado.css"
import NavBar_Advogados from '../NavBar_Advogado/NavBar_Advogados'

function Tela_IAdvogado() {
  return (
    
   <div className='container-tela-inicial-advogados'>
      <NavBar_Advogados/> 

    <div className='container-todos-inicial-a'>
      <div className='teste-inicial-advogados-um'>
        <button className='butão-teste-um-ad'>
          Agenda
        </button>
    </div > 

    <div className='container-dois-tela-i-ad'>
      <div className='teste-inicial-advogados-dois'>

       <button className='butão-teste-dois-ad'>
         Ultimos Processos Abertos
       </button>
     </div>

       <div className='teste-inicial-advogados-tres'>
      <button className='butão-teste-dois-ad'>
       Dashbord
      </button>
   </div>
 </div>
</div>
    </div>
  )
}

export default Tela_IAdvogado