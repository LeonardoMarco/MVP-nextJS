import React from 'react'

import './style.scss'

const Footer = ()  => {
  return (
      <footer className="comp_footer">
        <div className="container-footer">
          <div className="img-top">
            <img src="https://www.segurospromo.com.br/shared/images/home/logo_sp_cor.svg" />
          </div>
          <div className="text-footer">
            BELVITUR | CNPJ: 17219734/0001-69 | Rua Antonio Aleixo , 604 - Belo Horizonte - MG <br />
            © 2020 Seguros Promo | By - Amopromo
          </div>
        </div>
      </footer>
  )
}

export default Footer