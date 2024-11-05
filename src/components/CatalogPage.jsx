import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";


const CatalogPage = () => {
  const [data, setData] = useState([]);
  const { category } = useParams();
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://sarahaisku.pythonanywhere.com/');
      const responseData = await response.json();
      setData(responseData);
    };

    fetchData();
  }, []);

  const filteredData = data.filter((product) => product.catalog === category);


  const ClickPage = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="CollectionSeaCards">
      {filteredData.map((product) => {
        return (
          <Link className="CollectionSeaCard" key={product.id} to={`/catalog/${category}/${product.id}`} onClick={ClickPage}>
              <img className="CollectionSeaCard-Img" src={product.image} alt={product.title} />
                  <h5 className="CollectionSeaCard-h5">{product.title}</h5>
                  <p className="CollectionSeaCard-p">{product && product.price && product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} тг</p>
          </Link>
        );
      })}
    </div>
  );
};

export default CatalogPage;