import React, { useState } from 'react';
import {
    UnorderedListOutlined,
    UserOutlined,
    HomeOutlined,
    FileTextOutlined,
    ImportOutlined
} from "@ant-design/icons";
import { Layout, Menu, theme } from 'antd';
import state from '../Store/state';
import { useSnapshot } from 'valtio';

import Customers from './Customer'
import Inventory from './Inventory'
import Suppliers from './Suppliers'
import Home from './Home';
import Orders from './Orders';
import Reports from './Reports';

const { Header, Content, Sider } = Layout;

const ShopDashBoard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleClick = (index) => {
    state.activeIndex = index;
  };

  const snap = useSnapshot(state);

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        {/* Logo Section */}
        <div
          style={{
            height: 64,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '18px',
            fontWeight: 'bold',
            background: '#001529',
            marginBottom: 16, // Add spacing below the logo
          }}
        >
          My Shop Logo
        </div>
        <Menu 
          theme="dark" 
          defaultSelectedKeys={['1']} 
          mode="inline"
          style={{ padding: '10px 0' }} // Add vertical padding
        >
          <Menu.Item
            onClick={(e) => {
              handleClick(1);
            }}
            key='1'
            icon={<UnorderedListOutlined />}
            style={{ marginBottom: 16 }} // Add gap between items
          >
            Home
          </Menu.Item>
          <Menu.Item
            onClick={(e) => {
              handleClick(2);
            }}
            key='2'
            icon={<HomeOutlined />}
            style={{ marginBottom: 16 }} // Add gap between items
          >
            Orders
          </Menu.Item>
          <Menu.Item
            onClick={(e) => {
              handleClick(3);
            }}
            key='3'
            icon={<UserOutlined />}
            style={{ marginBottom: 16 }} // Add gap between items
          >
            Customers
          </Menu.Item>
          <Menu.Item
            onClick={(e) => {
              handleClick(4);
            }}
            key='4'
            icon={<FileTextOutlined />}
            style={{ marginBottom: 16 }} // Add gap between items
          >
            Reports
          </Menu.Item>
          <Menu.Item
            onClick={(e) => {
              handleClick(5);
            }}
            key='5'
            icon={<FileTextOutlined />}
            style={{ marginBottom: 16 }} // Add gap between items
          >
            Suppliers
          </Menu.Item>
          <Menu.Item
            onClick={(e) => {
              handleClick(6);
            }}
            key='6'
            icon={<FileTextOutlined />}
            style={{ marginBottom: 16 }} // Add gap between items
          >
            Inventory
          </Menu.Item>
          <Menu.Item
            onClick={(e) => {
              localStorage.removeItem('email');
              state.currentUser = null;
            }}
            key='7'
            icon={<ImportOutlined />}
          >
            Log Out
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        > 
          <div
            style={{
              marginTop: '10px',
              padding: 24,
              minHeight: '560px',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {snap.activeIndex === 1 && <Home />}
            {snap.activeIndex === 2 && <Orders/>}
            {snap.activeIndex === 3 && <Customers/>}
            {snap.activeIndex === 4 && <Reports/>}
            {snap.activeIndex === 5 && <Suppliers/>}
            {snap.activeIndex === 6 && <Inventory/>}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default ShopDashBoard;
