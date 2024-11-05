import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
        setLoading(true);
        const response = await fetch("https://sarahaisku.pythonanywhere.com/");
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (<div className="col-md-3">Loading...</div>)
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="CollectionSeaCards">
          {filter.map((product) => {
            return (
              <Link className="CollectionSeaCard" key={product.id}>
                  <img className="CollectionSeaCard-Img" src={product.image} alt={product.title} />
                      <h5 className="CollectionSeaCard-h5">{product.title}</h5>
                      <p className="CollectionSeaCard-p">{product.price} тг</p>
              </Link>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div>
      {loading ? <Loading /> : <ShowProduct />}
    </div>
  );
};

export default Products;
