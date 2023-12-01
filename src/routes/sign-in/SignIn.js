/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React,{ useEffect } from 'react'
import { signInWithGooglePopup , signInWithGoogleRedirect, auth } from '../../utils/firebase/firebase'
import { createUserDocumentFromAuth } from '../../utils/firebase/firebase'
import SignUp  from './SignUp'
import { getRedirectResult } from 'firebase/auth'

const SignIn = () => {

  const signInPopUp = async () => {
    const { user } = await signInWithGooglePopup()
    createUserDocumentFromAuth(user)
  }

  // useEffect(() => {
  //   const redirect =  async () => {
  //     const res = await getRedirectResult(auth)
  //     if (res) {
  //       await  createUserDocumentFromAuth(res)
  //     }
  //   }
  //   redirect()
  // }, [])

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={signInPopUp}>Sing in with google Pop Up</button>
      <SignUp/>
      {/* <button onClick={signInWithGoogleRedirect}>Sing in with google Redirect</button> */}

    </div>
  )
}
export default SignIn