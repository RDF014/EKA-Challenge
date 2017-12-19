import axios from 'axios';

export function addData (type, data) {
  return {
    type: `ADD_${type}`,
    payload: { ...data }
  };
};

export function requestAddData (type) {
  return {
    type: `REQUEST_ADD_${type}`,
  };
};

export function invalidRequest (type) {
  return {
    type: `INVALID_${type}`,
  };
};

export function asyncRequest (type, data) {
  return (dispatch, getState) => {

    let endpoint = '/';
    if (type === 'USER_INFO') {
      endpoint += 'information';
    }
    if (type === 'USER_ADDRESS') {
      endpoint += 'addresses';
    }

    dispatch( requestAddData(type) );
    axios.post(`http://localhost:1337/users/${endpoint}`,
      { 
        ...data
      })
      .then(res => dispatch( addData(type, { ...res.data }) ) )
      .catch(err => dispatch( invalidRequest(type) ) );
  }
}
