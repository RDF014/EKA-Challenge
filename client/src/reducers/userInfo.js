const initialState = {
  id: null,
  first_name: '',
  last_name: '',
  phone_number: ''
};

const initalPost = {
  data: initialState,
  isFetching: false,
  invalidReq: false
};

function userInfo (state = initalPost, action) {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_USER_INFO':
      return {
        ...state,
        isFetching: false,
        data: { ...state.data, ...payload }
      };
    case 'REQUEST_ADD_USER_INFO':
      return {
        ...state,
        isFetching: true
      };
    case 'INVALID_USER_INFO_REQUEST':
      return {
        ...state,
        isFetching: false,
        invalidReq: true
      };
    default:
      return state;
  }
}

export default userInfo;
