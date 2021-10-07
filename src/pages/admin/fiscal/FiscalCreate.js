import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { Layout } from "antd";
<<<<<<< HEAD
import { createFiscal, getFiscales} from "../../../functions/fiscal";
=======
import { createFiscal, getFiscales, removeFiscal} from "../../../functions/fiscal";
 
>>>>>>> 136c43501ce6c36bc5c222dbdedcf5fb94e79f5a
 
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
const FiscalCreate  = () => {
   
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
<<<<<<< HEAD
  const [fiscales, setFiscales] = useState([]);


  useEffect(() => {
    setLoading(true);
    getFiscales().then((res) => {
      setFiscales(res.data.fiscales);
      setLoading(false);
    });
  }, []);
=======
  const [fiscales, setFiscales] =  useState([]);

  //estrutura de la tabla de fiscales d
 
 
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
          
            <Popconfirm title="Seguro de eliminar?"  onConfirm={() => deleteFiscal(index._id)}>
              <a href="#">Delete</a>
            </Popconfirm> 
         
        ) 
      }  
         
    },
  ];

 
  


  useEffect(() => {
      loadFiscales();
  },[]);
 
  const loadFiscales = () => {
    getFiscales()
      .then((res)=> {
        setFiscales(res.data);
      })
      .catch((err)=> {
        console.log(err);
      })
  }

  const deleteFiscal = (id) => {
    removeFiscal(id, user.token)
      .then((res)=>{
        loadFiscales();
      })
      .catch((err) => {
        alert(err);
      })
  }
  
  
>>>>>>> 136c43501ce6c36bc5c222dbdedcf5fb94e79f5a
  // redux
  const { user } = useSelector((state) => ({ ...state }));
  const onFinish = (e) => {
   
    setLoading(true);
    createFiscal({ name, email }, user.token)
    .then((res) => {
      setLoading(false);
      setName("");
      toast.success(`"${res.data.name}" is created`);
      loadFiscales();
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
             <Card  title="FISCALES" >
                <Form
                  labelCol={{ span: 4 }}
                  wrapperCol={{ span: 14 }}
                  layout="horizontal"
                  title="Ingreso Fiscal"
                  onFinish={onFinish}
                  
                >
                  
                  <Form.Item label="Fiscal" name="name"  value={name}  onChange={(e) => setName(e.target.value)}>
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
<<<<<<< HEAD

                <div>
                {fiscales.map((f) => (
                    <div className="col" key={f._id}>
                     <li>{f}</li>
                    </div>
                  ))}
=======
                <div className="row">

                <Table dataSource={fiscales} columns={columns} 
                     
                />

                   
>>>>>>> 136c43501ce6c36bc5c222dbdedcf5fb94e79f5a
              </div>
              </Card>
         </Content>
  </div>
  );
};

export default FiscalCreate;