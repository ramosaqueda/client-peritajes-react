import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { Layout } from "antd";
import FiscalCreateForm from "../../../components/forms/FiscalCreateForm";
import { createFiscal} from "../../../functions/fiscal";
 

const { Content } = Layout;
const FiscalCreate  = () => {
  const [loading, setLoading] = useState(false);

  // redux
  const { user } = useSelector((state) => ({ ...state }));

  const handleSubmit = (e) => {
    e.preventDefault();    
  };

  return (
    <div>
        <div>
          <AdminNav />
          </div>        
          <Content style={{ padding: '10px 210px ' }}>
            <FiscalCreateForm/>
         </Content>
  </div>
  );
};

export default FiscalCreate;