import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBQq7nIol60BHgQWpBJ0H2xdTE8Es9ZofU',
  authDomain: 'commerce-db-d023c.firebaseapp.com',
  projectId: 'commerce-db-d023c',
  storageBucket: 'commerce-db-d023c.appspot.com',
  messagingSenderId: '590755075937',
  appId: '1:590755075937:web:d5b278541b4af9f1671720'
}

const firebaseApp = initializeApp(firebaseConfig)


const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account'
})
export const db = getFirestore()
export const auth = getAuth()

export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
// export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider)

export const createUserDocumentFromAuth = async (authToken) => {
  const userDocRef = doc(db,'users', authToken.uid)
  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = authToken
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, { displayName, email,createdAt })
    } catch (err) {
      console.log(err)
    }
  }
  return userDocRef
}

