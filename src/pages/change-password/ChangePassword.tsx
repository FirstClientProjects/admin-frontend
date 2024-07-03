import React, { useEffect, useState } from 'react';
import './ChangePassword.scss';
import AuthParagraph from '../../components/auth-paragraph/AuthParagraph';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Section from '../../components/section/Section';
import AuthButton from '../../components/auth-btn/AuthButton';
import TextField from '../../components/textfield/TextField';
import Lable from '../../components/lable/Lable';
import AuthSubHeader from '../../components/auth-subheader/AuthSubHeader';
import AuthHeader from '../../components/auth-header/AuthHeader';
import Logo from '../../components/logo/Logo';
import axios from 'axios';
import { adminServiceBaseURL } from '../../api/baseURL';
import LoadingPage from '../../components/loadingPage/LoadingPage';
import Alert from '../../components/alert/Alert';

const ChangePassword = () => {

  const { userEmail } = useParams<{ userEmail: string | undefined }>();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [statusCode, setStatusCode] = useState(0);
  const [message, setMessage] = useState('');

  const resetCredentials = () => {
    setPassword('');
    setConfirmPassword('');
  }

  const changePassword = () => {
    try {
      if(password.trim().length === 0 || confirmPassword.trim().length === 0) {
        setError(true);
        setMessage('Fill all the required fields');
        setStatusCode(400);
        setTimeout(() => {
          setError(false);
        }, 5000);
      }else {
        if (password === confirmPassword) {
          setLoading(true);
          axios.post(`${adminServiceBaseURL}/admin/change-password`, {
            email: userEmail,
            password: password,
          })
          .then((res) => {
            console.log(res.data);
            if (res.status === 200) {
              setLoading(false);
              resetCredentials();
              setError(true);
              setMessage(`${res.data.data}`);
              setStatusCode(200);
              setTimeout(() => {
                setError(false);
              }, 5000);
            }
          })
          .catch((error) => {
            console.log(error);
            setError(true);
            setMessage('Change password request internal server error');
            setStatusCode(500);
            setTimeout(() => {
              setError(false);
            }, 5000);
          });
        } else {
          console.log('Passwords should be matched');
          setError(true);
          setMessage('Passwords should be matched');
          setStatusCode(400);
          setTimeout(() => {
            setError(false);
          }, 5000);
        }
      }
    } catch (error) {
      console.log(error);
      setError(true);
      setMessage('Change password internal server error');
      setStatusCode(400);
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
  }

  useEffect(() => {
    try {
      if (userEmail) {
        setEmail(userEmail);
        console.log("user-email" + userEmail);
        console.log("email" + email);
      }
    } catch (error: any) {
      console.log(error);
    }
  }, [userEmail]);

  return (
    <div className='test changepassword'>
      <div className='test changepassword-inner'>
        <div className="test changepassword-inner-left">
          <div className='test form-container'>

            {
              loading && <LoadingPage />
            }

            {
              error && <Alert 
                icon='s'
                statusCode={statusCode}
                message={message}
                borderColor='black'
                bgColor='white'
              />
            }

            <div className='test logo-container'>
              <Link to='/'>
                <Logo />
              </Link>
            </div>

            <Section marginTop='10px'>
              <AuthSubHeader paragraph='Set a new password that’s long, strong, and'/>
              <AuthSubHeader paragraph='memorable. Like a good superhero movie.'/>
            </Section>

            <Section>
              <AuthParagraph paragraph={email}/>
            </Section>

            <div className='test changepassword-form'>
              <Section marginBottom='10px' marginTop='50px'>
                <div className='test field'>
                  <Lable title='Password'/>
                  <TextField value={password} type='password' placeholder='*********************' onChange={setPassword} />
                </div>
              </Section>
              <Section marginBottom='10px'>
                <div className='test field'>
                  <Lable title='Confirm Password'/>
                  <TextField value={confirmPassword} type='text' placeholder='*********************' onChange={setConfirmPassword} />
                </div>
              </Section>
              <Section marginBottom='50px'>
                <AuthButton title='Change Password' onClick={changePassword}/>
              </Section>
            </div>

            <Section marginBottom='25px'>
              <Link to='/login'>
                <AuthParagraph paragraph='Return to login'/>
              </Link>
            </Section>

          </div>
        </div>
        <div className="test changepassword-inner-right"></div>
      </div>
    </div>
  );

}

export default ChangePassword;