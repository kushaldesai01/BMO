import { Layout, Menu } from "antd";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "../../../assets/styles/Home/home.css";
import { UserOutlined } from '@ant-design/icons';
import { checkToken, logout } from "../../../apis/Auth";
import { Profile } from "../../modules/Dashboard/Profile";

export const Dashboard: React.FC = () => {

  const navigate = useNavigate();

  useEffect(() => {
    checkToken()
    .then((res) => {
      if(res?.success === false){ navigate('/') }
    })
  }, []);

  const handleLogout = () => {
    logout()
    .then(() => {
      navigate('/')
    })
  }

  return(
    <>
      <Layout className="layout">
      <Layout.Header style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(5px)' }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" style={{backgroundColor: 'rgba(255, 255, 255, 0)'}}>
          {/* <Menu.Item key="1" className='logo'></Menu.Item> */}
          {/* <Menu.Item key="2" style={{ marginLeft: 'auto' }}><UserOutlined /></Menu.Item> */}
          <Menu.SubMenu key="3" title={<UserOutlined/>} style={{marginLeft: 'auto'}}>
            <Menu.Item key="3.1" onClick={() => navigate('/dashboard/profile')}>Profile</Menu.Item>
            <Menu.Item key="3.2" onClick={handleLogout}>Logout</Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </Layout.Header>
      
      <Layout.Content style={{ padding: '0 50px', marginTop: 64 }}>
        <Outlet />
      </Layout.Content>
    </Layout>
    </>
  );
};