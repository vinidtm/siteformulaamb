import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container-rodape'>
        <div className='informacoes'>
          <p>Sobre nós:</p>
          <p>Razão social: LUVARD MARKETING DIGITAL LTDA</p>
          <p>CNPJ: 27.472.997/0001-39</p>
          <p>E-mail: contato@luvard.com</p>
          <div className='footer-links'>
            <a href='Termos_de_Uso'>Termos de Uso</a> |{' '}
            <a href='Politica_de_Privacidade'>Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
