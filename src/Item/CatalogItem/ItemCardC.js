import React from "react";
import { Link } from 'react-router-dom';

const ItemCardC = (props) =>{

    return (
        <div className="FourPhotoCatalog-Card">
            <img className="FourPhotoCatalog-Img" src={props.img} alt=""></img>
            <div className="FourPhotoCatalog-Texts">
                <h2 className="FourPhotoCatalog-h2">{props.title}</h2>
                <Link className="FourPhotoCatalog-AHref" to={props.link}>Посмотреть</Link>
            </div>
        </div>
    )
}

export default ItemCardC;