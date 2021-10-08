import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { Layout } from "antd";
import { createEstado, getEstados, removeEstado } from "../../../functions/estados";
 
 
import { Card } from 'antd';
import {
  Table,
  Popconfirm,
  Form,
  Input,
  Button  
} from 'antd';
import { SaveOutlined  } from '@ant-design/icons';
 

const { Content } = Layout;
const EstadoCreate  = () => {
   
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Estados, setEstados] =  useState([]);

  //estrutura de la tabla de Estadoes d
 
 
  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },

    {
      title: 'operation',
      dataIndex: '_id',
      render: (record, index) => {
        return (
          
            <Popconfirm title="Seguro de eliminar?"  onConfirm={() => deleteEstado(index._id)}>
              <a href="#">Delete</a>
            </Popconfirm> 
         
        ) 
      }  
         
    },
  ];

 
  


  useEffect(() => {
      loadEstados();
  },[]);
 
  const loadEstados = () => {
    getEstados()
      .then((res)=> {
        setEstados(res.data);
      })
      .catch((err)=> {
        console.log(err);
      })
  }

  const deleteEstado = (id) => {
    removeEstado(id, user.token)
      .then((res)=>{
        loadEstados();
      })
      .catch((err) => {
        alert(err);
      })
  }
  
  
  // redux
  const { user } = useSelector((state) => ({ ...state }));
  const onFinish = (e) => {
   
    setLoading(true);
    createEstado({ name, email }, user.token)
    .then((res) => {
      setLoading(false);
      setName("");
      toast.success(`"${res.data.name}" is created`);
      loadEstados();
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
      if (err.response.status === 400) toast.error(err.response.data);
    });
  };

  return (
    <div>
        <div>
          <AdminNav />
          </div>        
          <Content style={{ padding: '10px 210px ' }}>
          {loading ? (
            <h4 className="text-danger">Loading...</h4>
          ) : (
            <h4>:::</h4>
          )}
             <Card  title="EstadoES" >
                <Form
                  labelCol={{ span: 4 }}
                  wrapperCol={{ span: 14 }}
                  layout="horizontal"
                  title="Ingreso Estado"
                  onFinish={onFinish}
                  
                >
                  
                  <Form.Item label="Estado" name="name"  value={name}  onChange={(e) => setName(e.target.value)}>
                    <Input />
                  </Form.Item>
                
                  <Form.Item name="email" label="Email" rules={[{ type: 'email' }]}  value={email}  onChange={(e) => setEmail(e.target.value)}>
                      <Input />
                  </Form.Item>
              
                  <Form.Item>
                  
                   <Button type="primary" htmlType="submit" icon={ <SaveOutlined/> } >
                      Grabar
                    </Button>
                  </Form.Item>
                </Form>
                <div className="row">

                <Table dataSource={Estados} columns={columns} 
                     
                />

                   
              </div>
              </Card>
         </Content>
  </div>
  );
};

export default EstadoCreate;