import React from "react";
import { Card } from 'antd';
import {
  Form,
  Input,
  Button  
} from 'antd';
import { SaveOutlined  } from '@ant-design/icons';

const onFinish = (values) => {
  console.log("Success:", values);
  //Can directly call props here
};

const FiscalCreateForm = () => (
  <>

  <Card  title="FISCALES" >
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      title="Ingreso Fiscal"
      onFinish={onFinish}
    >
      
      <Form.Item label="Fiscal">
        <Input />
      </Form.Item>
    
      <Form.Item name={['fiscal', 'email']} label="Email" rules={[{ type: 'email' }]}>
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