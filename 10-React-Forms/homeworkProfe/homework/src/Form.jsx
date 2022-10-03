import React, { useState } from 'react';

export const validate=(input)=>{
  let errors={};

  if(!input.username){
    errors.username="Username is required"
  }else if(!/\S+@\S+\.\S+/.test(input.username)){
    errors.username="Username is invalid";
  }

  if(!input.password){
    errors.password="Password is required"
  }else if(!/(?=.*[0-9])/.test(input.password)){
    errors.password="Password is invalid"
  }  

  return errors;
}


export default function  Form() {

  const [input,setInput] = useState({
    username:"",
    password:""
  });

  const [errors,setErrors] = useState({
    username:"",
    password:""
  });

  const handleInputChange=(event)=>{
    const value = event.target.value;
    const property = event.target.name;
    setInput({...input,[property]:value});
    setErrors(validate({...input,[property]:value}))
  }



  return (
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" 
          name="username" 
          value={input.username}
          onChange={handleInputChange}
          className={errors.username && "danger"} />
          {
          errors.username && <p className='danger'>{errors.username}</p>
        }
          
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" 
          name="password" 
          value={input.password}
          onChange={handleInputChange}
          className={errors.password && "danger"} />
        </div>
        {
          errors.password && <p className='danger'>{errors.password}</p>
        }
        <button type="submit">Submit</button>
      </form>
  )
}
