import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/nav/AdminNav";

import { useSelector } from "react-redux";
 
import  PeritajeCreateForm  from '../../../components/forms/PeritajeCreateForm';

import {  getFiscales } from "../../../functions/fiscal";
import { getPeritos } from "../../../functions/perito";
import { createPeritajes } from "../../../functions/peritajes";


 

import { Layout } from "antd";
import {
    Card,
    message  
  } from 'antd';
  
const { Content } = Layout;

const initialState = {
    ruc: "",
    fecha: "",
    plazo: "",
    nue:"",
    obs:"",
    fiscales:[],
    peritos:[],
  };
const PeritajeCreate  = () => {

    const [values, setValues] = useState(initialState);
    const [loading, setLoading] = useState(false);


    // redux
    const { user } = useSelector((state) => ({ ...state }));


    useEffect(() => {
        loadPeritos();
        loadFiscales();
        
    },[]);

 

    const loadFiscales = () =>
        getFiscales().then((f) => {
         setValues({ ...values, fiscales: f.data }); 
        });

     
     const loadPeritos = () =>
        getPeritos().then((p) => {
         setValues({ ...values, peritos: p.data }); 
        });

    const handleChange = (e) => {
     //setValues({ ...values, [e.target.value]: e.target.value });
    // console.log(e)
        //console.log(e.target.value, " ---- ", e.target.value);
        console.table(e.target.values);
        };
 

    const onFinish = (e) => {
        setLoading(true);
        createPeritajes(values, user.token)
        .then((res) => {
                setLoading(false);
                message.success(`"${res.data.ruc}" creado con éxito`);
                window.location.reload();
        })
        .catch((err) => {
        console.log(err);
        setLoading(false);
        if (err.response.status === 400) message.error( `"${err.response.data}" error`);
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
                <Card  title="Peritajes" >
                <PeritajeCreateForm
                onFinish={onFinish}
                values={values}
                handleChange={handleChange}
            />
                

                    
                </Card>
            </Content>
    </div>
    );
};

export default PeritajeCreate;




