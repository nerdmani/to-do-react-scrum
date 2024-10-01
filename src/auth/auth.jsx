import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Inicializar como null

  useEffect(() => {
    const userToken = localStorage.getItem("user_token");
    const usersStorage = localStorage.getItem("users_bd");

    if (userToken && usersStorage) {
      const currentUser = JSON.parse(userToken);
      const hasUser = JSON.parse(usersStorage)?.find(
        (user) => user.email === currentUser.email
      );

      if (hasUser) setUser(hasUser);
    }
  }, []);

  const signin = (email, password) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd")) || [];

    const hasUser = usersStorage.find((user) => user.email === email);

    if (hasUser) {
      if (hasUser.password === password) {
        const token = Math.random().toString(36).substring(2);
        localStorage.setItem("user_token", JSON.stringify({ email, token }));
        setUser({ email, password });
        return; // Indica sucesso
      } else {
        return "E-mail ou senha incorretos";
      }
    } else {
      return "Usuário não cadastrado";
    }
  };

  const signup = (email, password) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd")) || [];

    const hasUser = usersStorage.find((user) => user.email === email);

    if (hasUser) {
      return "Já tem uma conta com esse E-mail";
    }

    const newUser = [...usersStorage, { email, password }];
    localStorage.setItem("users_bd", JSON.stringify(newUser));

    return; // Indica sucesso
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem("user_token");
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, signin, signup, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
