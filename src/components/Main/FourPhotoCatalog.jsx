import React from "react";

import ItemCardC from "../../Item/CatalogItem/ItemCardC";
import DataItemCardС from "../../Item/CatalogItem/DataItemCardC";

const FourPhotoCatalog = () =>{
    // console.warn(DataItemCardС.productDataC);
    return(
        <div className="FourPhotoCatalog">
            {DataItemCardС.productDataC.map((item, index)=>{
                return(
                    <ItemCardC img={item.img} title={item.title} link={item.link} key={index}/>   
                )
            })}
        </div>
    )
}

export default FourPhotoCatalog;