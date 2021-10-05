import React from "react";
import { Card } from 'antd';
import {
  Form,
  Input,
  Button  
} from 'antd';
import { SaveOutlined  } from '@ant-design/icons';

 

const FiscalCreateForm = ({onFinish, name,setName}) => (
  <>

  <Card  title="FISCALES" >
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      title="Ingreso Fiscal"
      onFinish={onFinish}
    >
      
      <Form.Item label="Fiscal" name={'name'}>
        <Input />
      </Form.Item>
    
      <Form.Item name={'email'} label="Email" rules={[{ type: 'email' }]}>
          <Input />
      </Form.Item>
  
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  </Card>
</>

);

export default FiscalCreateForm;