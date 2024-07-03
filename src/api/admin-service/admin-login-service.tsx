// authHelpers.ts
import axios from 'axios';
import { NavigateFunction } from 'react-router-dom';
import { adminServiceBaseURL } from '../baseURL';

interface HandleSubmitProps {
  email: string;
  password: string;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setStatusCode: React.Dispatch<React.SetStateAction<number>>;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  resetCredentials: () => void;
  navigate: NavigateFunction;
}

export const handleLogin = async ({
  email,
  password,
  setError,
  setLoading,
  setStatusCode,
  setMessage,
  resetCredentials,
  navigate
}: HandleSubmitProps) => {
  if (email.trim().length === 0 || password.trim().length === 0) {
    console.log('Please enter details');
    setError(true);
    setMessage('Please enter all the details');
    setStatusCode(400);
    setTimeout(() => {
      setError(false);
    }, 5000);
    return;
  } else {
    console.log(`Loading : ${setLoading}`);
    await axios.post(`${adminServiceBaseURL}/admin/login`, {
      email: email,
      password: password
    })
      .then((response) => {
        console.log(response.data.data);
        resetCredentials();
        setLoading(true);

        if (response.status === 200) {
          setMessage(`Login successful. ${response.data.message}`);
          setStatusCode(200);
          setTimeout(() => {
            setLoading(false);
            navigate('/dashboard');
          }, 5000);
        }
      })
      .catch((error) => {
        console.log(error.response.data);
        setError(true);
        setMessage(`Please retry. ${error.response.data.data}`);
        setStatusCode(400);
        setTimeout(() => {
          setError(false);
        }, 5000);
      });
  }
  console.log(email, password);
};
