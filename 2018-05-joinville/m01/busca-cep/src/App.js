import React, { PureComponent } from 'react'
import axios from 'axios'

class BuscaCEP extends PureComponent {
  state = {
    code: '123123',
    state: 'SP',
    city: 'São Paulo',
    district: 'Piratininga',
    address: 'Rua Paula Rodrigues',
    isFetching: false
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.cep.value)
    const { value } = e.target.cep
    if (!value) {
      return
    }
    this.setState({ isFetching: true })
    axios.get(`http://apps.widenet.com.br/busca-cep/api/cep/${value}.json`)
      .then((result) => {
        console.log(result.data)
        this.setState({ isFetching: false })
        this.setState(result.data)
      })
  }

  render () {
    const { code, state, city, district, address, isFetching } = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input id='cep' name='cep' />
          <button type='submit'>Buscar CEP</button>
        </form>
        {isFetching && <div>Buscando CEP...</div>}
        {!isFetching && (
          <ul>
            <li>CEP: {code}</li>
            <li>Estado: {state}</li>
            <li>Cidade: {city}</li>
            <li>Bairro: {district}</li>
            <li>Endereço: {address}</li>
          </ul>
        )}
      </div>

    )
  }
}

export default BuscaCEP
