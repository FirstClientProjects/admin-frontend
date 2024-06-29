import React from 'react';
import './Login.scss';
import Logo from '../../components/logo/Logo';
import AuthHeader from '../../components/auth-header/AuthHeader';
import AuthParagraph from '../../components/auth-paragraph/AuthParagraph';
import { Link } from 'react-router-dom';
import AuthSubHeader from '../../components/auth-subheader/AuthSubHeader';
import Loading from '../../components/loading/Loading';
import LoadingPage from '../../components/loadingPage/LoadingPage';
import Section from '../../components/section/Section';
import Lable from '../../components/lable/Lable';
import TextField from '../../components/textfield/TextField';
import AuthButton from '../../components/auth-btn/AuthButton';

const Login = () => {

  return (
    <div className='test login'>
      <div className='test login-inner'>
        <div className="test login-inner-left">
          <div className='test form-container'>

            <div className='test logo-container'>
              <Link to='/'>
                <Logo />
              </Link>
            </div>

            <AuthHeader title='Welcome Back!'/>

            <AuthSubHeader paragraph='Please enter your details'/>

            <div className='test login-form'>
              <Section marginBottom='10px' marginTop='50px'>
                <div className='test field'>
                  <Lable title='Email Address'/>
                  <TextField type='text' placeholder='youremail@example.com' onChange={() => {}} />
                </div>
              </Section>
              <Section marginBottom='20px'>
                <div className='test field'>
                  <Lable title='Password'/>
                  <TextField type='password' placeholder='*********************' onChange={() => {}} />
                </div>
              </Section>
              <Section marginBottom='50px'>
                <AuthButton title='Login' onClick={() => {}}/>
              </Section>
            </div>

            <div className='test'>
              <Section marginBottom='25px'>
                <Link to='/forgot-password'>
                  <AuthParagraph paragraph='Forgot Your Password ?'/>
                </Link>
              </Section>
              <AuthParagraph paragraph='By continuing, you agree to uptech Terms of Services and Privacy Policy'/>
            </div>

          </div>
        </div>
        <div className="test login-inner-right"></div>
      </div>
    </div>
  );

}

export default Login