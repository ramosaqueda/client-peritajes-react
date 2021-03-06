import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { Layout } from "antd";
import { createPerito, removePerito , getPeritos } from "../../../functions/perito";
 
import {
  Card,
  Table,
  Popconfirm,
  Form,
  Input,
  Button,
  message  
} from 'antd';
import { SaveOutlined  } from '@ant-design/icons';
const { Content } = Layout;
const PeritoCreate  = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [peritos, setPeritos] = useState([]);

 
  
  useEffect(() => {
    loadPeritos();
  },[]);

  // estructura tabla Peritos

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
          
            <Popconfirm title="Seguro de eliminar?"  onConfirm={() => deletePerito(index._id)}>
              <a href="#">Delete</a>
            </Popconfirm> 
         
        ) 
      }  
         
    },
  ];

  const deletePerito = (id) => {
    removePerito(id, user.token)
      .then((res)=> {
        loadPeritos();
        message.success(`"${res.data.name}" ha sido eliminado`);
      })
      .catch((err)=> {
        message.success(`"Error al tratar de eliminar: ${err}"`);
      })

  }

  const loadPeritos = () => {
    getPeritos()
    .then((res)=> {
      setPeritos(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }
  // redux
  const { user } = useSelector((state) => ({ ...state }));
  const onFinish = (e) => {
    setLoading(true);
    createPerito({ name, email }, user.token)
    .then((res) => {
      setLoading(false);
      setName("");
      loadPeritos();
      message.success(`"${res.data.name}" ha sido creado con ??xito`);
  
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
             <Card  title="Peritos" >
                <Form
                  labelCol={{ span: 4 }}
                  wrapperCol={{ span: 14 }}
                  layout="horizontal"
                  title="Ingreso Fiscal"
                  onFinish={onFinish}
                  
                >
                  
                  <Form.Item label="Perito" name="name"  value={name}  onChange={(e) => setName(e.target.value)}>
                    <Input />
                  </Form.Item>
                
                  <Form.Item name="email" label="Email" rules={[{ type: 'email' }]}  value={email}  onChange={(e) => setEmail(e.target.value)}>
                      <Input />
                  </Form.Item>
              
                  <Form.Item>
                  <Button type="primary" htmlType="submit" icon={ <SaveOutlined/> } >
                      Submit
                    </Button>
                  </Form.Item>
                </Form>

                <div className="row">
                    <Table dataSource={peritos} columns={columns}                         
                    />
                </div>
              </Card>
         </Content>
  </div>
  );
};

export default PeritoCreate;