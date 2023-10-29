import React from 'react'
import { Loginwindowstyles, Contentstructure } from '../styles/Login.styled.'
import Forms from './components/Forms'

const Login = () => {

  return (
    <Loginwindowstyles>
    <Contentstructure>
      <div className='Loginimage'>
      {/* Sample image >> left login page */}
       <img src={process.env.PUBLIC_URL+'/images/loginimage.jpg'} alt="description"/>
      </div>
    </Contentstructure>
     <Contentstructure>
      <Forms />
     </Contentstructure>
    </Loginwindowstyles>
  )
}

export default Login
