import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { getProduct, updateProduct } from "../../../functions/product";
import { getCategories, getCategorySubs } from "../../../functions/category";
import FileUpload from "../../../components/forms/FileUpload";
import { LoadingOutlined } from "@ant-design/icons";
import ProductUpdateForm from "../../../components/forms/ProductUpdateForm";
//import { useParams } from "react-router-dom";

const initialState = {
  title: "",
  description: "",
  price: "",
  categories: [],
  category: "",
  subs: [],
  shipping: "",
  quantity: "",
  images: [],
  colors: ["Black", "Brown", "Silver", "White", "Blue"],
  brands: ["Apple", "Samsung", "Microsoft", "Lenovo", "HP", "ASUS"],
  color: "",
  brand: "",
};

const ProductUpdate = ({ history, match }) => {
  const [values, setValues] = useState(initialState);
  const [categories, setCategories] = useState([]);
  const [subOptions, setSubOptions] = useState([]);
  const [arrayOfSubs, setArrayOfSubs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const { user } = useSelector((state) => ({ ...state }));

  // router with hook
  //const { slug } = useParams();
  const { slug } = match.params;

  useEffect(() => {
    loadProduct();
    loadCategories();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadProduct = () => {
    getProduct(slug).then((p) => {
      // 1 load single product
      setValues({ ...values, ...p.data });
      // 2 load single product category-subs
      getCategorySubs(p.data.category._id).then((res) => {
        setSubOptions(res.data); // on first load, show default subs
      });
      // 3 prepare arra of subs ids to show as default sub values in antd design
      let arr = [];
      p.data.subs.map((s) => {
        arr.push(s._id);
        return arr;
      });
      console.log("ARR", arr);
      setArrayOfSubs((prev) => arr); // required for ant design select to work
    });
  };

  const loadCategories = () =>
    getCategories().then((c) => {
      console.log("GET CATEGORIES IN UPDATE PRODUCT", c.data);
      setCategories(c.data);
    });

  return <p>Product Update</p>;
};

export default ProductUpdate;
