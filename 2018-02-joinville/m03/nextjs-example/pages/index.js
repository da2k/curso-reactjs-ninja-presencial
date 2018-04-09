import React from 'react'
import Link from 'next/link'

const Home = () => (
  <div>
    <h1>Home</h1>
    <Link href='/sobre'>
      <a>Sobre</a>
    </Link>
  </div>
)

export default Home
