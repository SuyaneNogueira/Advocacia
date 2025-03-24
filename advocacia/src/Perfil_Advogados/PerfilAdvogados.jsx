import React from 'react'
import './PerfilAdvogados.css'

function PerfilAdvogados() {
  return (
    <div class="div-all-advogados">
      
      
  <div class="div-conteudo">
  
    <div class="div-perfil-advogados">
     
    <div className='teste-logo-advogado'>
  <img className='teste-img-logo' src="Logo Advocacia.png" alt="" />
</div>
      
<div className='div-titulo-advogado'>
      <h1>Perfil do Advogado </h1>
        </div>
      <div class="div-nome-advogado">
        <p>Nome:</p>
        <input type="text" name="" id="" />
      </div>
      <div class="div-oab-advogado">
        <p>OAB:</p>
        <input type="text" name="" id="" />
      </div>
      <div class="div-especialidades-advogado">
        <p>Especialidades:</p>
        <input type="text" name="" id="" />
      </div>
      <div class="div-descrição-advogado">
        <p>Descrição breve:</p>
        <input type="text" name="" id="" />
      </div>
      <div class="div-botao-advogado">
        <button className='button-advogados'>Salvar</button>
      </div>
    </div>
    <div class="img-advogado">
      <img className='img-teste-advogado' src="Logo Advocacia.png" alt="imagem" />
    </div>
  </div>
</div>

  )
}

export default PerfilAdvogados

