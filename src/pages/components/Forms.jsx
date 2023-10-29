import React from 'react'
import { Link } from 'react-router-dom'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Formstyles } from '../../styles/Login.styled.';

const Forms = () => {
    const[showtext, setShowText] = React.useState(false)

    const showPasswordToogle = () => {
      setShowText(!showtext);
    }

  return (
    <div className='FormContainer'>
        <h1>Login</h1>

        <Formstyles>
          <div className='Formgroup'>
            <span>LoginID</span>
            <div className='input'>
              <input type='text' name='userid' id='userid' placeholder='Enter Login ID' />
            </div>
          </div>
          <div className='Formgroup'>
            <span>Password</span>
            <div className='input'>
              <input type='password' name='password' id='password' placeholder='Enter Password' />
             {showtext?<FaEyeSlash size={20} className='eyetoggle' onClick={showPasswordToogle}/>:<FaEye size={20} className='eyetoggle' onClick={showPasswordToogle}/>}
            </div>
          </div>
          <div className='Formgroup'>
            <div className='Checkboxgroup'>
              <div className='Checkbox'>
                <input type='checkbox' id='rememberme'/>
                <label for="rememberme">Remember me</label>
              </div>
              <Link to="/changepassword" className='link'>Change password</Link>
            </div>
          </div>
          <div className='Formgroup'>
            <div className='Checkbox'>
              <input type='checkbox' id='agreements'/>
              <label for="agreements">Agree to <Link to="/termsofuse" className='link decorated'>Terms & Conditions</Link></label>
            </div>
          </div>

          <div className='Formgroup'>
           <input type='submit' value="Login"/>
          </div>

          <div className='Formgroup'>
           <p className='creataccount'>Don't have an account? <Link to="/createaccount" className='link decorated'>Register Here</Link></p>
          </div>
        </Formstyles>

      </div>
  )
}

export default Forms
