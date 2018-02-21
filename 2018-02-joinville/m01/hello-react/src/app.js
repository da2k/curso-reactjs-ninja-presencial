import React, { PureComponent } from 'react'
import styled, { injectGlobal } from 'styled-components'
import ajax from '@fdaciuk/ajax'

class App extends PureComponent {
  state = {
    isFetching: false,
    status: null,
    code: '',
    state: '',
    city: '',
    district: '',
    address: '',
    errorMessage: null
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const cep = e.target.cep.value.replace(/\D+/, '')
    this.setState({ isFetching: true })
    const result = await ajax().get(`http://apps.widenet.com.br/busca-cep/api/cep/${cep}.json`)
    console.log(result)
    this.setState({ isFetching: false })
    if (typeof result !== 'object') {
      return this.setState({ errorMessage: result })
    }
    this.setState({
      ...result,
      errorMessage: result.message
    })
  }

  render () {
    const { code, state, city, district, address, errorMessage, isFetching } = this.state

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input type='text' name='cep' id='cep' />
          <button type='submit' disabled={isFetching}>{isFetching ? 'Buscando...' : 'Buscar'}</button>
        </form>

        {errorMessage && <span>{errorMessage}</span>}

        {!errorMessage && (
          <Ul>
            <li>CEP: {code}</li>
            <li>Estado: {state}</li>
            <li>Cidade: {city}</li>
            <li>Bairro: {district}</li>
            <li>Endereço: {address}</li>
          </Ul>
        )}
      </div>
    )
  }
}

injectGlobal`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
  }
`

const Input = styled.input`
  width: 100%;
  font-size: 30px;
`

const Ul = styled.ul`
  & li + li {
    border-top: 1px solid #ccc;
    padding: 10px 0;
  }
`

export default App
