import React, { useState } from 'react';
import './PerfilUsuario.css';

function PerfilUsuario() {
  const [profileImage, setProfileImage] = useState(
    "https://img.freepiicone-de-perfil-de-avatar-padrao-imagem-de-usuario-de-midia-social-icone-de-avatar-cinza-silhueta-de-perfil-em-branco-ilustracao-vetorial_561158-3407.jpg?semt=ais_hybrid"
  ); // Estado da imagem de perfil

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result); // Atualiza a imagem com base na pré-visualização
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="div-background">
      
<div className='teste'>
  <img className='logo-logo' src="Logo Advocacia.png" alt="" />
</div>

      <div className="inputs-perfil-usuario">

<div>
<h1>Seu perfil</h1>
</div>
    

        <label>Nome:</label>
        <input type="text" />

        <label>Email:</label>
        <input type="text" />

        <label>Senha:</label>
        <input type="password" />

        <label>Telefone:</label>
        <input type="text" />


   <div className='butons-do-perfil'>

<button className='botaozinho-perfil'>Redefinir senha</button>
<button className='botaozinho-perfil-dos'>Salvar Mudanças</button>

  </div>
      
      </div>

      <div className="div-imagem-usuario">
        <img
          src={profileImage}
          alt="Imagem de Perfil"
          onClick={() => document.getElementById("imageInput").click()}
          className="imagem-perfil-usuario"
        />
        <input
          id="imageInput"
          type="file"
          style={{ display: 'none' }}
          onChange={handleImageChange}
          accept="image/*"
        />
      </div>
    </div>
  );
}

export default PerfilUsuario;
