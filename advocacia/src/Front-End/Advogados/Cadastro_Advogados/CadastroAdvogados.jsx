import React from 'react'
import './CadastroAdvogados.css'
function CadastroAdvogados() {
  return (
    <div className='container-all-cadastro-advogados'>
     
<div className='div-imagem-cadastro-advogados'>
<img className='imagem-cadastro-advogado' src="foto-cadastro.jpg" alt="" />
</div>

<div className='div-conteudo-cadastro-advogado'>
<h1 className='h1-cadastro-advogados'>Cadastro de Advogados</h1>
<div className='div-inputs-cadastro-advogado'>



<div className='inputs-teste-cadastro-advogados-um'>
<p>Nome:</p>
<input type="text" name="" id="" />
</div>
<div className='inputs-teste-cadastro-advogados-dois'>
<p>Telefone:</p>
<input type="text" name="" id="" />
</div>
<div className='inputs-teste-cadastro-advogados-treis'>
<p>Email:</p>
<input type="Email" />
</div>
<div className='inputs-teste-cadastro-advogados-quatro'>
<p>OAB:</p>
<input type="text" />
</div>
<div className='inputs-teste-cadastro-advogados-cinco'>
<p>Senha:</p>
<input type="password" />
</div>

<div className='div-button-cadastro-ad'>
  <button className='button-cadastro-advogado' >
    Cadastrar
  </button>
</div>

</div>

</div>

    </div>
  )
}

export default CadastroAdvogados
