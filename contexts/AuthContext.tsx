import React, { createContext, useState, useEffect, ReactNode } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { RegistrationFormType } from "@/Services/Firebase/authentication";
import { auth } from "../Services/Firebase/firebaseConfig";
import { useRouter } from "expo-router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Services/Firebase/firebaseConfig";

export type AuthContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  loading: boolean;
  userData: RegistrationFormType | null;
};

export const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProp {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProp) => {
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<RegistrationFormType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDocRef = doc(db, "users", user.uid);
        const userDocSnap = await getDoc(userDocRef);
        setUserData(userDocSnap.data() as RegistrationFormType);
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading, userData }}>
      {children}
    </AuthContext.Provider>
  );
};
