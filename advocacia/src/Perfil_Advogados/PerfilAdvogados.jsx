import React from 'react'
import './PerfilAdvogados.css'

function PerfilAdvogados() {
  return (
    <div class="div-all-advogados">
  <div class="div-conteudo">
    <div class="div-perfil-advogados">
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
        <button>Salvar</button>
      </div>
    </div>
    <div class="img-advogado">
      <img src="img" alt="imagem" />
    </div>
  </div>
</div>

  )
}

export default PerfilAdvogados

