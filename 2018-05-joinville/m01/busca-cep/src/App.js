import React, { PureComponent } from 'react'
import axios from 'axios'

class BuscaCEP extends PureComponent {
  state = {
    code: '--',
    state: '--',
    city: '--',
    district: '--',
    address: '--',
    isFetching: false,
    errorMessage: null
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    console.log(e.target.cep.value)
    const { value } = e.target.cep
    this.setState({ isFetching: true, errorMessage: null })

    const [error, result] = await to(axios.get(`http://apps.widenet.com.br/busca-cep/api/cep/${value}.json`))

    if (error) {
      return console.log(error)
    }

    console.log('result:', result)
    this.setState({ isFetching: false })
    if (typeof result.data !== 'object') {
      return this.setState({ errorMessage: result.data })
    }
    if (result.data.status === 0) {
      return this.setState({ errorMessage: result.data.message })
    }
    this.setState(result.data)
  }

  render () {
    const { isFetching } = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <input
            id='cep'
            name='cep'
            ref={this.ref}
            defaultValue={this.state.cepValue}
          />

          <button type='submit'>Buscar CEP</button>
        </form>

        {isFetching && <div>Buscando CEP...</div>}
        {!isFetching && <List {...this.state} />}

        {this.state.errorMessage && <div>Erro: {this.state.errorMessage}</div>}
      </div>

    )
  }
}

const List = ({ code, state, city, district, address }) => (
  <ul>
    <li>CEP: {code}</li>
    <li>Estado: {state}</li>
    <li>Cidade: {city}</li>
    <li>Bairro: {district}</li>
    <li>Endereço: {address}</li>
  </ul>

)

function to (promise) {
  return promise.then((r) => [null, r]).catch((e) => [e])
}

export default BuscaCEP
