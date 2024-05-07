import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
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

export const provider = new GoogleAuthProvider()
export const db = getFirestore()
export const auth = getAuth()

provider.setCustomParameters({
  prompt: 'select_account'
})

export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const createUserDocumentFromAuth = async (authToken, info = {}) => {
  const userDocRef = doc(db,'users', authToken.uid)
  const userSnapshot = await getDoc(userDocRef)
  if (!userSnapshot.exists()) {
    const { displayName, email } = authToken
    const createdAt = new Date()
    try {
      await setDoc(userDocRef, { displayName, email,createdAt, ...info })
    } catch (err) {
      console.log(err)
    }
  }
  return userDocRef
}

export const createEmailPassword = async( email ,password) => {
  if (!email || !password) return
  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInEmailPassword = async( email ,password) => {
  if (!email || !password) return
  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = () => signOut(auth)