import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom';

const Footer = () =>{
    const [email, setEmail] = useState("");

    const handleChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setEmail("");
    };

    const ClickPage = () => {
        window.scrollTo(0, 0);
      };
    return(
        <div className="Footer">
            <div className="FooterContainer">
                <div className="FooterInner">
                    <div className="FooterInnerTwoBLocks">
                        <div className="FooterInner_Social">
                            <a href="https://m.facebook.com/p/Exclusive-Gold-Almaty-100075449067899/?locale=ms_MY"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://www.instagram.com/exclusive_gold_kaz/"><i className="fab fa-instagram"></i></a>
                            <a href="https://wa.me/+77027924000?text=%D0%AF%20%D1%85%D0%BE%D1%87%D1%83%20%D0%BA%D1%83%D0%BF%D0%B8%D1%82%D1%8C%20%D0%B1%D0%B8%D0%B6%D1%83%D1%82%D0%B5%D1%80%D0%B8%D1%8E%20%D0%B2%20Exclusive%20Gold"><i className="fab fa-whatsapp"></i></a>
                        </div>
                        <div className="FooterInner_Info">
                            <h2 className="FooterInner_Info-h2">Информация</h2>
                            <Link className="FooterInner_Info-link" to="/contact" onClick={ClickPage}>Контакты</Link>
                            <Link className="FooterInner_Info-link" to="/about" onClick={ClickPage}>О нас</Link>
                            <Link className="FooterInner_Info-link" to="/delivery"onClick={ClickPage}>Доставка</Link>
                            <Link className="FooterInner_Info-link" to="/care" onClick={ClickPage}>Уход за изделиями</Link>
                        </div>
                    </div>
                    <div className="FooterInner_SignIn">
                        <p className="FooterInner_SignIn-p">Подпишитесь и получи доступ к частным распродажам и обновлениям на изделия, выпущенные ограниченным тиражом. ~ скидка 10% не распространяется на изысканные ювелирные изделия ~</p>
                        <input className="FooterInner_SignIn-Input" type="text" placeholder="Введите электронную почту" value={email} onChange={handleChange}></input>
                        <Link className="FooterInner_SignIn-Button" to="/regist" onClick={handleSubmit}>Подписаться</Link>
                    </div>
                </div>
                <div className="FooterAside">
                    <p className="FooterAside-p">© Exclusive Gold</p>
                </div>
            </div>
        </div>
    )
}
export default Footer;