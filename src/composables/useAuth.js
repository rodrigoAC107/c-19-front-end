import { login, meUser, putUser } from "../services/UserServices";

const useAuth = () => {
  const loginUser = async (email, password) => {
    const resp = await login(email, password);
    return resp;
  };

  const getUser = async() => {
    const resp = await meUser();
    return resp;
  } 

  const editUser = async (data) => {
    const resp = await putUser(data);
    return resp;
  }

  const setLocalStorage = (key, value) => {
      localStorage.setItem(key, JSON.stringify(value));
  };
  
  const getLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
  };

  const clearLocalStorage = () => {
    localStorage.clear();
  }

  return {
    loginUser,
    getUser,
    editUser,
    setLocalStorage,
    getLocalStorage,
    clearLocalStorage
  };
};

export default useAuth;
