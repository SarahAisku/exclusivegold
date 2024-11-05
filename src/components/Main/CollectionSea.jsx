import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';

import ItemCard from "../../Item/ProductItem/ItemCard";
import DataItemCard from "../../Item/ProductItem/DataItemCard";

const CollectionSea = () =>{
    const [data, setData] = useState([]);
    const [selectedCategory, setSelectedCollection] = useState("");
    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch("https://sarahaisku.pythonanywhere.com/");
            setData(await response.clone().json());
        };
        getProduct();
    }, []);

    const SelectedCollectionPage = (collection) => {
        setSelectedCollection(collection);
        window.location.href = `/catalog/collection/${collection}`;
        window.scrollTo(0, 0);
    };

    return (
        
        <div className="CollectionSea">
            
            <p className="p-light">Поприветсвуем,</p>
            <p className="p-title-book">Морская Коллекция</p>

            <div className="CollectionSeaCards">
                {DataItemCard.productData.map((item, index)=>(
                    <ItemCard link={item.link} img={item.img} title={item.title} price={item.price} key={index}/>   
                ))}             
            </div>
            <div className="CollectionSeaButton">
                <Link to="/catalog/collection/sea" className="CollectionSeaAHref" onClick={() => SelectedCollectionPage("sea")}>Просмотреть Морскую Коллекцию</Link>
            </div>
        </div>
    )
}

export default CollectionSea;