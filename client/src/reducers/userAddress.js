const initialState = {
  address: '',
  state: '',
  city: '',
  zip: ''
};

const initalPost = {
  data: initialState,
  isFetching: false,
  invalidReq: false
};

function userAddress (state = initalPost, action) {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_USER_ADDRESS':
      return {
        ...state,
        isFetching: false,
        data: { ...state.data, ...payload }
      };
    case 'REQUEST_ADD_USER_ADDRESS':
      return {
        ...state,
        isFetching: true
      };
    case 'INVALID_USER_ADDRESS':
      return {
        ...state,
        isFetching: false,
        invalidReq: true
      };
    default:
      return state;
  }
}

export default userAddress;
