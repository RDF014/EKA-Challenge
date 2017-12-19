import React from 'react';
import { Link } from 'react-router-dom';

const Form1 = (props) => {
  const {
    username,
    password,
    email,
    onChange,
    onSubmit
  } = props;
  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        <input onChange={(e) => onChange(e, 'username')} type="text" name="username" placeholder="Username" value={username}/><br/>
        <input onChange={(e) => onChange(e, 'password')} type="password" name="password" placeholder="Pa" value={password}/><br/>
        <input onChange={(e) => onChange(e, 'email')} type="text" name="email" placeholder="JohnDoe@gmail.com" value={email}/><br/>
        <input type="submit" value="Submit"/>
      </form> 
    </div>
  )
}

export default Form1;
