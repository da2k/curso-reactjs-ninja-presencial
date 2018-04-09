import React, { PureComponent } from 'react'
import Link from 'next/link'

class About extends PureComponent {
  static async getInitialProps ({ req }) {
    const isServer = `${!!req}`
    return { isServer }
  }

  render () {
    return (
      <div>
        <h1>Sobre</h1>
        <h2>server? {this.props.isServer}</h2>
        <Link href='/'>
          <a>Voltar para Home</a>
        </Link>
      </div>
    )
  }
}

export default About
