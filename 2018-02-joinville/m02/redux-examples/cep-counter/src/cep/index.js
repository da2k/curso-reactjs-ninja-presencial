import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import { connect } from 'react-redux'
import { fetchAddress } from '../reducers/cep'

const Cep = ({ code, state, city, district, address, errorMessage, isFetching, handleSubmit }) => (
  <div>
    <form onSubmit={handleSubmit}>
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

const mapStateToProps = (state) => {
  return state.cep
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: async (e) => {
      e.preventDefault()
      const cep = e.target.cep.value.replace(/\D+/, '')
      dispatch(fetchAddress(cep))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cep)
