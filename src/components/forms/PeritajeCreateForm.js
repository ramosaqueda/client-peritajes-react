import React from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from 'antd';
 
const FiscalCreateForm = () => (
  <>
  <Form
    labelCol={{ span: 4 }}
    wrapperCol={{ span: 14 }}
    layout="horizontal"
 
    
  >
    <Form.Item label="Registro Solicitud Pericial" name="size">
    
    </Form.Item>
    <Form.Item label="RUC">
      <Input />
    </Form.Item>
    <Form.Item label="Fiscal">
      <Select>
        <Select.Option value="demo">Demo</Select.Option>
      </Select>
    </Form.Item>

    <Form.Item label="Fecha Solicitud">
      <DatePicker />
    </Form.Item>

    <Form.Item name={['user', 'introduction']} label="Detalle de la solcitud">
        <Input.TextArea />
      </Form.Item>
   
    <Form.Item label="Plazo solicitud">
      <InputNumber />
    </Form.Item>

    <Form.Item label="NUE">
      <Input />
    </Form.Item>


    <Form.Item label="Perito Asignado">
      <Select>
        <Select.Option value="demo">Demo</Select.Option>
      </Select>
    </Form.Item>



    <Form.Item label="Ubicación">
      <Select>
        <Select.Option value="demo">Demo</Select.Option>
      </Select>
    </Form.Item>

     

    <Form.Item label="Causa Formalizada" valuePropName="checked">
      <Switch />
    </Form.Item>
    <Form.Item >
      <Button>Grabar</Button>
      <Button>Cancelar</Button>
    </Form.Item>
  </Form>
</>

);

export default FiscalCreateForm;