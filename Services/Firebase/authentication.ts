import React, { SetStateAction, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { signInWithEmailAndPassword, signOut, AuthErrorCodes } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword, Auth, User } from "firebase/auth";
import { auth, db } from "../../Services/Firebase/firebaseConfig";
import { Router } from "expo-router";
import { useErrorWarning } from '@/contexts/ErrorWarningContext';
import {AuthContextType} from "../../contexts/AuthContext";

type RegistrationFormType = {
  name: string;
  phone: string;
  email: string;
  password: string;
  router: Router;
};

export const handleLoginFB = async (router: any, email: string, password: string) => {
    try{
      const result = await signInWithEmailAndPassword(auth, email, password);
      router.replace("/(tabs)");
      console.log("user logged in successfully " + result.user.email);
    }catch(error: any){
      const errorCode = error.code;
      switch (errorCode) {
        case AuthErrorCodes.INVALID_EMAIL:
          console.log("Invalid email");
          return "Invalid email";
          break;
        case AuthErrorCodes.USER_DISABLED:
          console.log("User disabled");
          return "Your account has been disabled. Contact admin";
          break;
        case AuthErrorCodes.OPERATION_NOT_ALLOWED:
          console.log("Operation not allowed");
          return "Logins are currently disabled. Contact admin";
          break;
        case AuthErrorCodes.INVALID_PASSWORD:
          console.log("Invalid password");
          return "Invalid password";
          break;
          case AuthErrorCodes.USER_MISMATCH:
            console.log("User mismatch");
            return "User mismatch";
            break;
            case AuthErrorCodes.INVALID_LOGIN_CREDENTIALS:
              console.log("Invalid login credentials");
              return "Email or password is incorrect";
              break;
          default:
            console.log("Could not login due to: "+error);
            return "Could not login. Please try again later";
      }

    };
}

export const handleLogout = async () => {
  try{
    await signOut(auth);
    console.log("User logged out successfully");
  }catch(e){
    console.log("Could not log out due to: "+e);
  }
}

export const handleRegisterFB = async ({name, phone, email, password, router}: RegistrationFormType) => {
    try{

      const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredentials.user;
  
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name,
        phone,
        email,
        createdAt: new Date(),
      });
      console.log("User registered successfully");
      router.replace("/(tabs)");
    }catch(e: any){
      const errorCode = e.code;
      switch (errorCode) {
        case AuthErrorCodes.EMAIL_EXISTS:
          console.log("Email exists");
          return "Email already exists";
          break;
          case AuthErrorCodes.INVALID_EMAIL:
            console.log("Invalid email");
            return "Invalid email. Please enter a valid email";
            break;
            case AuthErrorCodes.OPERATION_NOT_ALLOWED:
              console.log("Operation not allowed");
              return "Registrations are currently disabled. Contact admin";
              break;
            case AuthErrorCodes.WEAK_PASSWORD:
              console.log("Weak password");
              return "Password must be atleast 6 characters long";
              break;
              default:
                console.log("Could not register due to: "+e);
                return "Could not register. Please try again later";
      }
    }
  }