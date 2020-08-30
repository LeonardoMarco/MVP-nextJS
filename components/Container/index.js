import React, { useEffect } from 'react'
import HeadLinks from '../HeadLinks'
import Navbar from '../Navbar'
import Footer from '../Footer'

import './styles.scss'

function Container({ children }) {
  useEffect(() => {
    let queryString = document.location.search
    let params = new URLSearchParams(queryString);

    document.cookie = "partner=" + params.get('partner');
  }, [])

  return (
    <div>
      <HeadLinks />
      <Navbar />
      <main className='body'>{children}</main>
      <Footer />
    </div>
  )
}

export default Container
