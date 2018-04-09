import ajax from '@fdaciuk/ajax'

const initialState = {
  isFetching: false,
  status: null,
  code: '',
  state: '',
  city: '',
  district: '',
  address: '',
  errorMessage: null
}

const UPDATE_ADDRESS = 'cep:UPDATE_ADDRESS'
const FETCHING = 'cep:FETCHING'

const cep = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        isFetching: true
      }
    case UPDATE_ADDRESS:
      return {
        ...state,
        ...action.payload,
        isFetching: false
      }
  }
  return state
}

export const updateAddress = (address) => {
  return {
    type: UPDATE_ADDRESS,
    payload: address
  }
}

export const fetchAddress = (cep) => async (dispatch) => {
  dispatch({ type: FETCHING })
  const result = await ajax().get(`http://apps.widenet.com.br/busca-cep/api/cep/${cep}.json`)
  if (typeof result !== 'object') {
    return dispatch(updateAddress({ errorMessage: result }))
  }

  dispatch(updateAddress({
    ...result,
    errorMessage: result.message
  }))
}

export default cep
