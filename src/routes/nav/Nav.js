import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import './nav.scss'
import { UserContext } from '../../contexts/user'

const Nav = () => {
  const { currentUser } = useContext(UserContext)
  console.log(currentUser)
  return (
    <div className='navigation'>
      <Link className='logo-container' to='/'>
        <CrwnLogo className='crown-logo'/>
      </Link>
      <div className='nav-links-container'>
        <Link className='nav-link' to='/shop'>SHOP</Link>
        <Link className='nav-link' to='/auth'>SIGN IN</Link>
      </div>
    </div>
  )
}
export default Nav