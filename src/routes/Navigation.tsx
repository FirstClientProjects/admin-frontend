import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/login/Login';
import ForgotPassword from '../pages/forgot-password/ForgotPassword';
import ChangePassword from '../pages/change-password/ChangePassword';
import Dashboard from '../pages/dashboard/Dashboard';
import Landing from '../pages/landing/Landing';
import NotFound from '../pages/not-found/NotFound';

const Navigation = () => {
    
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Landing}/>
        <Route path='/login' Component={Login}/>
        <Route path='/forgot-password' Component={ForgotPassword}/>
        <Route path='/change-password/:userEmail' Component={ChangePassword}/>
        <Route path='/dashboard' Component={Dashboard}/>
        <Route path='*' Component={NotFound}/>
      </Routes>
    </BrowserRouter>
  );

}

export default Navigation;