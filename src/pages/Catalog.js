import React from 'react';
import ItemCardC from "../Item/CatalogItem/ItemCardC";
import DataItemCatalog from "../Item/CatalogItem/DataItemCatalog";

function Catalog() {
    return(
        <div className="FourPhotoCatalog">
            {DataItemCatalog.productDataCatalog.map((item, index)=>{
                return(
                    <ItemCardC img={item.img} title={item.title} link={item.link} key={index}/>   
                )
            })}
        </div>
    )
}

export default Catalog;
