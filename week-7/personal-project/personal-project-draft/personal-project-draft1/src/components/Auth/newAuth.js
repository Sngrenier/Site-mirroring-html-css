import {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
// import axios from 'axios'
import './Auth.css'
import {AuthContext} from '../../context/newAuthContext'
// import {connect} from 'react-redux'
// import {updateUser} from './../../redux/reducer'

const Auth = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    const values = useContext(AuthContext)

    const closeErrorMessage = () => {
        setErrorMsg(false)
    }

    return(
        <section>
        <div className="navbar fixed-top">
        <div className="container-fluid">
          <nav>
            <ul>
              <div>
              <Link to='/'>
                <img src="https://img.icons8.com/small/32/000000/home.png" alt='store' className="nav-brand" />
                </Link>
              </div>
            </ul>
          </nav>
        </div>
        </div>
      <div className='auth'>
        <div className='auth-container'>
          {/* <div className='auth-img'>
          <img src={logo} alt='logo' />
          </div> */}
          <h3 className='auth-title'>Welcome!</h3>
          {errorMsg && <h3 className='auth-error-msg'>{errorMsg} <span onClick={closeErrorMessage}>X</span></h3>}
          <div className='auth-input-box'>
            <p>Username:</p>
            <input value={username} onChange={e => setUsername(e.target.value)} />
          </div>
          <div className='auth-input-box'>
            <p>Password: </p>
            <input value={password} type='password' onChange={e => setPassword(e.target.value)} />
          </div>
          <div className='auth-button-container'>
            <button className='dark-button' onClick={()=> values.login(username, password, setErrorMsg)}> Login </button>
            <button className='dark-button' onClick={()=> values.register(username, password, setErrorMsg)}> Register </button>
          </div>
        </div>
      </div>
      </section>
    )

}
export default Auth