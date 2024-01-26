 import React, { useState } from 'react'
 import './form.css'

 import user_icon from './Assets/person.png'
 import email_icon from './Assets/email.png'
 import password_icon from './Assets/password.png'

 const Form = () => {

  const [action, setAction]  = useState("SignUp");

 

   return (
    <form>
       <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>

      <div className='inputs'>
        {action==="Login"?<div></div>:
         <div className='input'>
         <img src={user_icon} alt='' />
            <input type='text'placeholder='name' />
         </div>
        }
        

        <div className='input'>
          <img src={email_icon} alt='' />
          <input type='email' placeholder='email'/>
        </div>

        <div className='input'>
          <img src={password_icon} alt='' />
          <input type='password' placeholder='password'/>
        </div>
      </div>

      {action==="SignUp"?<div></div>:
      <div className='forgot-password'>Lost Password? <span>Click Here!</span></div>}
       <div className='submit-container'>
        <div className={action==="Login"?"submit gray":"submit"}
        onClick={()=> {setAction("SignUp")}}
        >SignUp</div>
        <div className={action==="SignUp"?"submit gray":"submit"}
        onClick={()=> {setAction("Login")}}
        >Login</div>
      </div>
     </div>
    </form>
   )
 }
 
 export default Form