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

const ForgotPassword = () => {

  const [email, setEmail] = useState('');

  return (
    <div className='test forgotpassword'>
      <div className='test forgotpassword-inner'>
        <div className="test forgotpassword-inner-left">
          <div className='test form-container'>

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
                  <TextField value={email} type='text' placeholder='youremail@example.com' onChange={() => {}} />
                </div>
              </Section>
              <Section marginBottom='50px'>
                <AuthButton title='Send reset link' onClick={() => {}}/>
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