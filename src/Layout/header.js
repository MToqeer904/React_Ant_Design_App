import React from 'react';
import { Layout, Menu } from 'antd';
import { EyeOutlined, AreaChartOutlined } from '@ant-design/icons';
import './layout.css';

const { Sider } = Layout;

const Headers = () =>{
    
  return(
    
<Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1" icon={<AreaChartOutlined />}>
                <a href='/data'>Statistics</a>
            </Menu.Item>
            <Menu.Item key="2" icon={<EyeOutlined />}>
            <a href='/table'>View Data</a>
            </Menu.Item>
          </Menu>
        </Sider>

    );
}

export default Headers;