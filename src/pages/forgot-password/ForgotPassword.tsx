import React, { useState } from 'react';
import './ForgotPassword.scss';
import AuthParagraph from '../../components/auth-paragraph/AuthParagraph';
import Logo from '../../components/logo/Logo';
import { Link } from 'react-router-dom';
import AuthHeader from '../../components/auth-header/AuthHeader';
import AuthSubHeader from '../../components/auth-subheader/AuthSubHeader';
import Section from '../../components/section/Section';
import Lable from '../../components/lable/Lable';
import TextField from '../../components/textfield/TextField';
import AuthButton from '../../components/auth-btn/AuthButton';
import axios from 'axios';
import { emailServiceBaseURL } from '../../api/baseURL';
import Alert from '../../components/alert/Alert';
import LoadingPage from '../../components/loadingPage/LoadingPage';

const ForgotPassword = () => {

  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [statusCode, setStatusCode] = useState(0);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmail = (value: string) => {
    setEmail(value);
  }

  const resetCredentials = () => {
    setEmail('');
  }

  const sendEmail = () => {
    if(email.trim().length === 0) {
      setError(true);
      setMessage('Please enter your correct email');
      setStatusCode(400);
      setTimeout(() => {
        setError(false);
      }, 5000);
    }else {
      if (!email.includes('@gmail.com')) {
        setError(true);
        setMessage('Please enter valid email address');
        setStatusCode(400);
        setTimeout(() => {
          setError(false);
        }, 5000);
      }else {
        try {
          setLoading(true);
          axios.post(`${emailServiceBaseURL}/email/nodemailer`, {
            email: email
          })
            .then((response) => {
              console.log(response.data);
              if (response.status === 200) {
                setLoading(false);
                resetCredentials();
                setError(true);
                setMessage(`${response.data.data}`);
                setStatusCode(200);
                setTimeout(() => {
                  setError(false);
                }, 5000);
              }
            })
            .catch((error) => {
              console.log(error.message);
            });
        } catch (error: any) {
          console.log(error.message);
        }
      }
    }
  }

  return (
    <div className='test forgotpassword'>
      <div className='test forgotpassword-inner'>
        <div className="test forgotpassword-inner-left">
          <div className='test form-container'>

            {
              error && <Alert
                icon='s'
                statusCode={statusCode}
                message={message}
                borderColor='black'
                bgColor='white'
              />
            }

            {
              loading && <LoadingPage />
            }


            <div className='test logo-container'>
              <Link to='/'>
                <Logo />
              </Link>
            </div>

            <AuthHeader title='Forgot Password?'/>

            <Section marginTop='10px'>
              <AuthSubHeader paragraph='All good . Enter your account email address and we
will send you a link to reset your password.'/>
            </Section>

            <div className='test forgotpassword-form'>
              <Section marginBottom='10px' marginTop='50px'>
                <div className='test field'>
                  <Lable title='Email Address'/>
                  <TextField value={email} type='text' placeholder='youremail@example.com' onChange={handleEmail} />
                </div>
              </Section>
              <Section marginBottom='50px'>
                <AuthButton title='Send reset link' onClick={sendEmail}/>
              </Section>
            </div>

            <Section marginBottom='25px'>
              <Link to='/login'>
                <AuthParagraph paragraph='Return to login'/>
              </Link>
            </Section>

          </div>
        </div>
        <div className="test forgotpassword-inner-right"></div>
      </div>
    </div>
  );

}

export default ForgotPassword;