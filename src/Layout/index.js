import { Layout } from 'antd';
import Headerx from './header';
import Footerx from './footer';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {GithubOutlined } from '@ant-design/icons';
const { Header, Content } = Layout;


  

const index = () =>{


    return(
        <div>
            <Layout>
        <Headerx />
        
        <Layout>
          
          <Header className="site-layout-sub-header-background" style={{ padding: 0, backgroundColor:'white' }} >
          
          
            <a href="https://github.com/MToqeer904/React_App_Assesment_Task" style={{ display:'block', textAlign:'right', padding:7, marginRight:10, float: 'right'   }}><GithubOutlined  style={{ fontSize:30 }}/></a>
          </Header>
          
          <Content style={{ margin: '24px 16px 0' }} className='content'>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <div style={{width:600}}>              
              </div>
            </div>
          </Content>
          <Footerx/>
        </Layout>
        </Layout>
        </div>
        );
}

export default index;

