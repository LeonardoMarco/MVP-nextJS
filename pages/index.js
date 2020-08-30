import React, { useState } from 'react'

import Container from '../components/Container'

import './assets/scss/index.scss'

export default function Home() {
  const [couponApply, setCouponApply] = useState(false)

  const setCoupon = (e) => {
    document.cookie = "cupom=" + e.target.value;
    setCouponApply(true)
  }

  return (
    <Container>
      <div className="comp_frame">
        <button className="button-coupon" value="TRANQUILO" onClick={setCoupon}>
          {couponApply ? 'Cupom aplicado com sucesso!' : 'Pegar cupom de desconto'}
        </button>
        <div className="img-banner">
          <img 
            src="https://www.segurospromo.com.br/images/promocoes/cupom_tranquilo_d.svg" 
            alt="de promo pelo mundo" 
          />
        </div>
      </div>
      <div className="fullslider" />
    </Container>
  )
}
