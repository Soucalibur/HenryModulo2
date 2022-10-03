import React, {useState} from 'react';
import style from "./Form.css";

export function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  } 
  
  
  if (!input.password){
      errors.password = "Password is required";
  } else if((!/(?=.*[0-9])/.test(input.password))){
      errors.password = "Password is invalid"
  } 
  

  return errors;
};


export default function  Form() {


  const [input,setInput] = useState({
    username : "",
    password : "",
  })

  const [errors, setErrors] = useState({});


  /////////////////////////////////////////////
  // const cambiarEstadoUser = (evento)=>{
  //   const valor = evento.target.value;
  //   setInput({...input,userName:valor})
  //
  // }
  // const cambiarEstadoPass = (evento)=>{
  //   const contraseña = evento.target.value;
  //   setInput({...input,password:contraseña})
  // }
  /////////////////////////////////////////////


  const cambiarEstado = (evento) =>{
    const valorcillo = evento.target.value;
    
    setErrors(validate({
      ...input,
      [evento.target.name]:valorcillo,
    }))

    setInput({
      ...input,
      [evento.target.name]:valorcillo,
    });
    
  }

  


  return (
      
      <div>
        <h1>Componente Form</h1>
        
        <form>

          <div>
          <label>Username:</label>
          <input className={errors.username && "danger"} type="text" name="username"  value={input.username} onChange ={cambiarEstado} />
          {errors.username && <p className="danger">{errors.username}</p>}

          </div>

        <br />

          <div>
          <label>Password:</label>
          <input className={errors.password && "danger"} type="password" name="password" value={input.password} onChange= {cambiarEstado} />
          {errors.password && <p className="danger">{errors.password}</p>}
          </div>
        
        <button >Submit</button>

        </form>
        
      </div>
  )
}
