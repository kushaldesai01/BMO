import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import "../../../assets/styles/Home/home.css";
import { HomeModalContext } from '../../../context/HomeContext';
import { Signup } from '../../modules/Auth/Signup';
import { Login } from '../../modules/Auth/Login';

export const Home: React.FC = () => {

  const [signupModal, setSignupModal] = useState<boolean>(false);
  const [loginModal, setLoginModal] = useState<boolean>(false);

  return (
    <Layout className="layout">
      <Layout.Header style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(5px)' }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" style={{backgroundColor: 'rgba(255, 255, 255, 0)'}}>
          {/* <Menu.Item key="1" className='logo'></Menu.Item> */}
          <Menu.Item key="2" onClick={() => {setLoginModal(true)}}>Login</Menu.Item>
          <Menu.Item key="3" onClick={() => {setSignupModal(true)}}>Signup</Menu.Item>
        </Menu>
      </Layout.Header>
      
      <Layout.Content style={{ padding: '0 50px', marginTop: 64 }}>
        <HomeModalContext.Provider value={[signupModal, setSignupModal]}>
          <Signup />
        </HomeModalContext.Provider>
        <HomeModalContext.Provider value={[loginModal, setLoginModal]}>
          <Login />
        </HomeModalContext.Provider>
      </Layout.Content>
    </Layout>
  );
};

