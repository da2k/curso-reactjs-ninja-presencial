import React, { PureComponent } from 'react'

class About extends PureComponent {
  render () {
    return <h1>Sobre is server? {this.props.isServer}</h1>
  }
}

About.getInitialProps = async ({ req }) => {
    return {
      isServer: `${!!req}`
    }
  }


export default About
