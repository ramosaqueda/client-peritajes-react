import React from "react";
import { Layout, Menu} from "antd";
import { Link } from "react-router-dom";
import {
  DesktopOutlined,
  DeploymentUnitOutlined ,
  UserOutlined,
  DatabaseOutlined,
  TeamOutlined ,
  IdcardOutlined,
  MonitorOutlined,
  SettingOutlined, 
  ExperimentTwoTone
} from '@ant-design/icons';
 
const { SubMenu } = Menu; 
const { Sider } = Layout;

 
const AdminNav = () => (
 
 
  <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
      collapsible = {true}
    >
    <Menu
    mode="inline"
    theme="dark" >
      <SubMenu title="Peritajes"  icon={<DeploymentUnitOutlined />}>
    
            <Menu.Item key="1" icon={<DeploymentUnitOutlined />} >Ingreso</Menu.Item>
            <Menu.Item key="2" icon={<DatabaseOutlined />} >Lista</Menu.Item>
            <Menu.Item key="3" icon={<DesktopOutlined />} >Actividades</Menu.Item>
        

      </SubMenu>

      <SubMenu title="Administarción" icon={<SettingOutlined />}>
    
            <Menu.Item key="4" icon={<TeamOutlined />}  >Fiscales</Menu.Item>
            <Menu.Item key="5" icon ={<IdcardOutlined />} >Peritos</Menu.Item>
            <Menu.Item key="6" icon = {<MonitorOutlined />}>Estados</Menu.Item>
        

      </SubMenu>

    </Menu>

  </Sider>
 
 
);

export default AdminNav;