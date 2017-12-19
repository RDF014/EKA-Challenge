import React from 'react';
import { Link } from 'react-router-dom';

const Form3 = (props) => {
  const {
    address,
    state,
    city,
    zip,
    onChange,
    onSubmit
  } = props;
  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        Address<br/>
        <input onChange={(e) => onChange(e, 'address')} type="text" name="address" placeholder="123 Sesame St" value={address}/><br/>
        City<br/>
        <input onChange={(e) => onChange(e, 'city')} type="text" name="city" placeholder="New York" value={city}/><br/>
        State<br/>
        <input onChange={(e) => onChange(e, 'state')} type="text" name="state" placeholder="NY" value={state}/><br/>
        Zip<br/>
        <input onChange={(e) => onChange(e, 'zip')} type="text" name="zip" placeholder="45678" value={zip}/><br/>
        <input type="submit" value="Submit"/>
      </form> 
    </div>
  )
}

export default Form3;
