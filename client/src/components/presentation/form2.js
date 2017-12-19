import React from 'react';
import { Link } from 'react-router-dom';

const Form2 = (props) => {
  const {
    first_name,
    last_name,
    phone_number,
    onChange,
    onSubmit
  } = props;
  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        First Name<br/>
        <input onChange={(e) => onChange(e, 'first_name')} type="text" name="first_name" placeholder="John" value={first_name}/><br/>
        Last Name<br/>
        <input onChange={(e) => onChange(e, 'last_name')} type="text" name="last_name" placeholder="Doe" value={last_name}/><br/>
        Phone Number<br/>
        <input onChange={(e) => onChange(e, 'phone_number')} type="text" name="phone_number" placeholder="818 123 4567" value={phone_number}/><br/>
        <input type="submit" value="Submit"/>
      </form> 
    </div>
  )
}

export default Form2;
