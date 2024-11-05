import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router'
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/actions'


const ProductDetail = () => {
  const {id} = useParams([]);
  const [product, setProduct] = useState([]);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  }
  
  useEffect(() => {
    const getProduct = async () => {
        // setLoading(true);
        const response = await fetch(`https://sarahaisku.pythonanywhere.com/${id}`);
        setProduct(await response.json());
        // setLoading(false);
    }
    getProduct();
  }, [id]);


  return (
    <div className="Product-Container">
        <div className="Product-Container-ImgDiv">
            <img className="Product-Container-Img"src={product.image} alt={product.title}/>
        </div>
        <div className="Product-Container-Info">
            <h1 className="Product-Container-InfoTitle">{product.title}</h1>
            <h2 className="Product-Container-InfoProba">Проба: {product.proba}</h2>
            <h2 className="Product-Container-InfoMini">{product.material} {product.insert} {product.lenght}</h2>
            <h2 className="Product-Container-InfoPrice">{product && product.price && product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} тг</h2>
            <button onClick={()=>addProduct(product)} className="Product-Container-AddCart">Добавить в корзину</button>
        </div>
    </div>
  );
};

export default ProductDetail;
