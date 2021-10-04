import React from "react";
import { Card } from 'antd';
import {
  Form,
  Input,
  Button,
 
  Select,
 
  DatePicker,
  InputNumber,
  
  Switch,
} from 'antd';
 
const FiscalCreateForm = () => (
  <>

  <Card  title="FISCALES" >
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      title="Ingreso Fiscal" 
    >
      
      <Form.Item label="Fiscal">
        <Input />
      </Form.Item>
    
      <Form.Item name={['fiscal', 'email']} label="Email" rules={[{ type: 'email' }]}>
          <Input />
      </Form.Item>
    

      
  
      <Form.Item >
        <Button>Grabar</Button>
        <Button>Cancelar</Button>
      </Form.Item>
    </Form>
  </Card>
</>

);

export default FiscalCreateForm;