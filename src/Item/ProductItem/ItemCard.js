import React from "react";
import { Link } from 'react-router-dom';

const ItemCard = (props) =>{
    return (
        <>
        <Link className="CollectionSeaCard" to={props.link}>
            <img className="CollectionSeaCard-Img" src={props.img} alt="" />
                <h5 className="CollectionSeaCard-h5">{props.title}</h5>
                <p className="CollectionSeaCard-p">{props.price}</p>
        </Link>
        </>
    )
}   

export default ItemCard;