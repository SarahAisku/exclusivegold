import React from "react";
import { Link } from 'react-router-dom';

const ItemCardS = (props) =>{
    return (
        <Link className="SimpleSliderCard" to={props.link}>
            <img className="SimpleSliderCard-Img" src={props.img} alt="" />
                <h5 className="SimpleSliderCard-h5">{props.title}</h5>
                <p className="SimpleSliderCard-p">{props.price}</p>
        </Link>
    )
}

export default ItemCardS;