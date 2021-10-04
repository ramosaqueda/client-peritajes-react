import React from 'react';
import AdminNav from "../../components/nav/AdminNav";
import { Layout } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
  } from '@ant-design/icons';
const { Header, Sider, Content } = Layout;

 
const AdminDashboard = () => {
    return (
      <Layout>
       
         

              <AdminNav/>
         

          <Layout className="site-layout">
        
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>

      </Layout>
    );
};

export default AdminDashboard;