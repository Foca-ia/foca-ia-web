"use client";

import React, { createContext, useEffect, useState } from "react";
import { IAuthProvider, IContext, IUser } from "./types";
import { getUserLocalStorage, setUserLocalStorage } from "./utils";
import { ApiManager } from "@/services/api";

export const AuthContext = createContext<IContext>({} as IContext);

const apiManager = new ApiManager();

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null>();

  useEffect(() => {
    const user = getUserLocalStorage();

    if (user) {
      setUser(user);
    }
  }, []);

  async function authenticate(email: string, password: string) {
    const response = await apiManager
      .authenticate(email, password)
      .then((response) => {
        return response.data;
      });

    const payload = { token: response.token, email };

    setUser(payload);
    setUserLocalStorage(payload);
    console.log(payload);
  }

  function logout() {
    setUser(null);
    setUserLocalStorage(null);
  }

  return (
    <AuthContext.Provider value={{ ...user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
