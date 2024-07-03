import React from 'react';
import './Landing.scss';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import AuthButton from '../../components/auth-btn/AuthButton';
import AuthHeader from '../../components/auth-header/AuthHeader';
import AuthSubHeader from '../../components/auth-subheader/AuthSubHeader';
import Section from '../../components/section/Section';

const Landing = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  }

  return (
    <div className='landing'>
      <div className="landing-inner">
        <img src={logo} alt="logo" className="logo" />
        {/* <AuthHeader title='Track Client Help'/> */}
        <AuthHeader title='Client Help'/>
        <Section>
          <AuthSubHeader paragraph='Track Client Help system'/>
        </Section>
        <Section marginTop='-50px'>
          <AuthSubHeader paragraph='Manage issues, projects and clients'/>
        </Section>
        <AuthButton title='Login' onClick={handleClick}/>
      </div>
    </div>
  );

}

export default Landing;