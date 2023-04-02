import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Subscribe from './Subscribe';


import Head from 'next/head'

const Layout = ({children}) => {
  return (
    <div className="layout">
      <Head>
        <title>Desco Store</title>
      </Head>
      <nav>
        <header>
          <Navbar />
        </header>
      </nav>
        <main className="main-container">
          {children}
        </main>
        <Subscribe />
        <footer>
          <Footer />
        </footer>
    </div>
  )
}

export default Layout