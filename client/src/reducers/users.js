const initialState = {
  id: null,
  username: '',
  password: '',
  email: ''
};

const initalPost = {
  data: initialState,
  isFetching: false,
  invalidReq: false
};

function users (state = initalPost, action) {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_USER':
      return {
        ...state,
        isFetching: false,
        data: { ...state.data, ...payload }
      };
    case 'REQUEST_ADD_USER':
      return {
        ...state,
        isFetching: true
      };
    case 'INVALID_USER':
      return {
        ...state,
        isFetching: false,
        invalidReq: true
      };
    default:
      return state;
  }
}

export default users;
