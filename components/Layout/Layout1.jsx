import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Nav from './Nav'

const Layout = ({ children }) => {
   return (
      <body className=' h-screen flex flex-col'>
         <Header />
         <Nav />
         <div className='container mx-auto'>
            <main className='relative   py-4 px-4   flex-grow h-screen'>
               {children}
            </main>
            <Footer />
         </div>
      </body>
   )
}

export default Layout
