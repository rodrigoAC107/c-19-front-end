import { showConfirmation, showError, showSuccess } from "../utils/Alerts";
import useAuth from './useAuth';

const useUser = () => {
  const { editUser, setLocalStorage } = useAuth();
  
  const putUser = async (user) => {
    console.log(user);
    try {
      const response = await showConfirmation({
          title: '¿Desea guardar los cambios?',
          text: 'Una vez que guarde los cambios no podrá retroceder.',
          showConfirmation: 'Guardar'
      });
      if (response.isConfirmed) {
          let editData = {
              'uid': user.uid,
              'name': user.name,
              'email': user.email,
              'password': user.password
          };
          const { data } = await editUser(editData);
          user.password = '';
          user.confirmPassword = '';
          setLocalStorage('user', data);
          await showSuccess({ title: 'Cambio exitoso.', text: 'El cambio se realizo de forma correcta.' });
      }
  } catch (error) {
      console.log(error);
      await showError({ title: 'Lo siento no pudimos procesar la info', text: 'Vuelvo a intentarlo más tarde.' });
  }
  }


  return {
    putUser
  }
}

export default useUser;