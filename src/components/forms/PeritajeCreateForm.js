import React from "react";
import {
  Form,
  Input,
  Button,
 
  Select,
 
  DatePicker,
  InputNumber,
 
} from 'antd';
import { SaveOutlined  } from '@ant-design/icons';
import PeritajeCreate from "../../pages/admin/peritaje/peritajes";
const validateMessages = {
  required: "'El campo ${name}' es requerido!",
  // ...
};

const PeritajeCreateForm = ({values, onFinish,handleChange}
  
)  => {
const {
  ruc,
  fecha,
  fiscales,
  peritos,
  plazo,
  nue,
  obs,

} = values;
 
return (
    <>
    <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                    title="Ingreso solicitud peritaje"
                    validateMessages={validateMessages}
                    validateFirst={true}
                    validateTrigger="onBlur"
                    onFinish={onFinish}
                    
                    
                  >

                              
                    
                    <Form.Item label="RUC" name="ruc"  rules={[{ required: true } ]}  >
                      <Input maxLength="12" value={ruc}  />
                    </Form.Item>
                  
                    <Form.Item name="fiscal" label="Fiscal">
                    <Select value="fiscal"  onChange={handleChange}>
                          
                          {fiscales.length > 0 &&
                              fiscales.map((f) => (
                              <Select.Option value={f._id}>
                                  {f.name}
                              </Select.Option>
                              ))}
                          
                      </Select>
                    </Form.Item>

                    <Form.Item label="Plazo">
                      <InputNumber/>
                      </Form.Item>

                      <Form.Item label="Fecha Solicutd">
                          <DatePicker />
                      </Form.Item>

              
                  <Form.Item label="NUE" name="nue"   >
                      <Input />
                  </Form.Item>

                  <Form.Item name="perito" label="Perito Asignado" >
                  <Select value="perito"  onChange={handleChange}>
                          
                          {peritos.length > 0 &&
                              peritos.map((p) => (
                              <Select.Option value={p._id}>
                                  {p.name}
                              </Select.Option>
                              ))}
                          
                      </Select>
                     
                    </Form.Item>


                    <Form.Item name="obs"label="Detalle solicitud">
                      <Input.TextArea name="obs"   />
                  </Form.Item>
                
                    <Form.Item>
                    <Button type="primary" htmlType="submit" icon={ <SaveOutlined/> } >
                        Submit
                      </Button>
                    </Form.Item>
                  </Form>
  </>

  );
};

export default PeritajeCreateForm;