import React from 'react';
import { Link } from 'react-router-dom'

function Delivery() {
    return (
        <div className='Care'>
            <h1 className='Care-h1'>Доставка</h1>
            <div className='Care-Info' style={{textAlign: 'center'}}>
                <p className='Care-Info-p'>При сумме заказа от 200 000 тенге доставка бесплатная.</p>
                <p className='Care-Info-p'style={{marginBottom: '40px'}}>Доставка заказа до 200 000 тенге. платная, уточните у менеджера стоимость доставки.</p>
                <Link to="/catalog" className="Product-Container-AddCart">Перейти в каталог</Link>
            </div>
        </div>
    );
}

export default Delivery;
