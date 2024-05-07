import React, { useContext } from 'react'
import { Await, Link } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import './nav.scss'
import { UserContext } from '../../contexts/user'
import { signOutUser } from '../../utils/firebase/firebase'

const Nav = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)

  const signOutHandler = async () => {
    await signOutUser()
    setCurrentUser(null)
  }

  return (
    <div className="navigation">
      <Link className="logo-container" to="/">
        <CrwnLogo className="crown-logo" />
      </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
          SHOP
        </Link>
        
        {currentUser ?
          <span className='nav-link' onClick={signOutHandler}>SIGN OUT</span> :
          <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
        }
      </div>
    </div>
  )
}
export default Nav
