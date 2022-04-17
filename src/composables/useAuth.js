import { login, meUser } from "../services/user";

const useAuth = () => {
  const loginUser = async (email, password) => {
    const resp = await login(email, password);
    return resp;
  };

  const getUser = async() => {
    const resp = await meUser();
    return resp;
  } 

  const setLocalStorage = (key, value) => {
      localStorage.setItem(key, JSON.stringify(value));
  };
  
  const getLocalStorage = (key) => {
    localStorage.getItem(key);
  };

  const clearLocalStorage = () => {
    localStorage.clear();
  }

  return {
    loginUser,
    getUser,
    setLocalStorage,
    getLocalStorage,
    clearLocalStorage
  };
};

export default useAuth;
