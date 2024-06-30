import React, { useState } from 'react';
import './ChangePassword.scss';
import AuthParagraph from '../../components/auth-paragraph/AuthParagraph';
import { Link } from 'react-router-dom';
import Section from '../../components/section/Section';
import AuthButton from '../../components/auth-btn/AuthButton';
import TextField from '../../components/textfield/TextField';
import Lable from '../../components/lable/Lable';
import AuthSubHeader from '../../components/auth-subheader/AuthSubHeader';
import AuthHeader from '../../components/auth-header/AuthHeader';
import Logo from '../../components/logo/Logo';

const ChangePassword = () => {

  const [email, setEmail] = useState('jeral.sandeeptha1@gmail.com');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className='test changepassword'>
      <div className='test changepassword-inner'>
        <div className="test changepassword-inner-left">
          <div className='test form-container'>

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
                  <TextField value={password} type='text' placeholder='*********************' onChange={() => {}} />
                </div>
              </Section>
              <Section marginBottom='10px'>
                <div className='test field'>
                  <Lable title='Confirm Password'/>
                  <TextField value={confirmPassword} type='text' placeholder='*********************' onChange={() => {}} />
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
        <div className="test changepassword-inner-right"></div>
      </div>
    </div>
  );

}

export default ChangePassword;