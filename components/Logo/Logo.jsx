import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href="/">
         <div className="logo">
          <h3>shoes<span>fit</span></h3>
        </div>
    </Link>
  )
}

export default Logo