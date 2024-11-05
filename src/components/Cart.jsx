import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { delCart, updateCartQuantity } from '../redux/actions/index';
import { Link } from 'react-router-dom'


const Cart = () => {
    const state = useSelector((state)=> state.addItem)
    const dispatch = useDispatch()

    const handleClose = (item) => {
        dispatch(delCart(item))
    }

    const handleMinus = (product) => {
        if (product.qty > 1) {
          dispatch(updateCartQuantity(product.id, product.qty - 1));
        }
      };
      
    const handlePlus = (product) => {
        dispatch(updateCartQuantity(product.id, product.qty + 1));
    };

    const calculateTotal = () => {
        let total = 0;
            state.forEach((item) => {
                total += item.qty * item.price;
            });
        return total;
    };

    const cartItems = (cartItem) => {
        return(
            <div className="Cart-Media" key={cartItem.id}>
                <div className="Cart-Product">
                    <img className="Cart-Product-img" src={cartItem.image} alt={cartItem.title} />
                    <div className="Cart-Product-Info">
                        <div className="Cart-Product-Info-info">
                            <h1 className="Cart-Product-Info-h1">{cartItem.title}</h1>
                            <p className="Cart-Product-Info-p">{cartItem.price} тг</p>
                        </div>
                        <div className="Cart-Plus-Minus-Remove-div-none">
                            <div className="Cart-Plus-Minus-Remove-div-PM">
                                <button className="Cart-Plus-Minus-Remove-div-PM-button-m" onClick={() => handleMinus(cartItem)}>-</button>
                                <p className="Cart-Plus-Minus-Remove-div-PM-p">{cartItem.qty}</p>
                                <button className="Cart-Plus-Minus-Remove-div-PM-button-p" onClick={() => handlePlus(cartItem)}>+</button>
                            </div>
                        <div className="Cart-Plus-Minus-Remove-div-Remove" onClick={()=>handleClose(cartItem)}>Удалить</div>
                    </div>

                    </div>
                </div>
                <div className="Cart-Plus-Minus-Remove">
                    <div className="Cart-Plus-Minus-Remove-div">
                        <div className="Cart-Plus-Minus-Remove-div-PM">
                            <div className="Cart-Plus-Minus-Remove-div-PM-button-m" onClick={() => handleMinus(cartItem)}>-</div>
                            <p className="Cart-Plus-Minus-Remove-div-PM-p">{cartItem.qty}</p>
                            <div className="Cart-Plus-Minus-Remove-div-PM-button-p" onClick={() => handlePlus(cartItem)}>+</div>
                        </div>
                        <div className="Cart-Plus-Minus-Remove-div-Remove" onClick={()=>handleClose(cartItem)}>Удалить</div>
                    </div>
                </div>
                <div className="Cart-Total">
                    <p className='Cart-Total-p'>{cartItem.qty * cartItem.price} тг</p>
                </div>
            </div>
        );
    }

    const emptyCart = () => {
        return (
            <div className="Cart-empty">
                <h3 className='Carttext'>Твоя корзина пуста</h3>
                <Link to="/catalog" className="Product-Container-AddCart">Перейти в каталог</Link>
            </div>
        );
    }
    const fullCart = () => {
        return (
            <div className="Cart">
                <h1 className='Care-h1'>Корзина</h1>
                <div className="Cart-Container">
                    <div className="Cart-Container-Table">
                        <p className="Cart-Container-Table-Product">Изделие</p>
                        <p className="Cart-Container-Table-Quantity">Количество</p>
                        <p className="Cart-Container-Table-Total">Итого</p>
                    </div>
                    {state.length !== 0 && state.map(cartItems)}
                    <div className="Cart-Total-Total">
                        <p className="Cart-Total-Tota-p">Общая сумма:  {calculateTotal()} тг</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && fullCart()}
        </>
    )
}

export default Cart
