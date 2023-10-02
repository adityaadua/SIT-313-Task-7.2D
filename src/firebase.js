import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  getFiretore,
  doc,
  getDoc,
  setDoc,
  getFirestore,
} from "firebase/firestore";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBiUbiy-wwziJ7ASga5u3is68e6jvOCOjE",
  authDomain: "task7-2d-7b778.firebaseapp.com",
  projectId: "task7-2d-7b778",
  storageBucket: "task7-2d-7b778.appspot.com",
  messagingSenderId: "408590578518",
  appId: "1:408590578518:web:b70cbfa19377da747b9cf7",
  measurementId: "G-HBLPPNSYP2",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export function SignInWithGooglePopup() {
  return signInWithPopup(auth, provider);
}
export const db = getFirestore();

export const createUserDocFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth.email) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error in creating", error.message);
    }
    return userDocRef;
  }
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
export const storage = getStorage(firebaseApp);