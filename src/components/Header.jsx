import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux'

import header1 from '../media/Header/header1.jpg'
import header2 from '../media/Header/header2.jpg'
import header3 from '../media/Header/header3.jpg'

const Header = () => {
  const [data, setData] = useState([]);
  const [selectedCategory,  setSelectedCategory] = useState("");

  useEffect(() => {
    const getProduct = async () => {
        const response = await fetch("https://sarahaisku.pythonanywhere.com/");
        setData(await response.clone().json());
    };
    getProduct();
  }, []);

  const SelectedCategoryPage = (category) => {
    setSelectedCategory(category);
    window.location.href = `/catalog/${category}`;
    window.scrollTo(0, 0);
  };



  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const location = useLocation();

    useEffect(() => {
      setIsMenuVisible(false);
    }, [location]);

    const handleLogoClick = () => {
      setIsMenuVisible(!isMenuVisible);
    };
  
    useEffect(() => {
      if (isMenuVisible) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }, [isMenuVisible]);

  

  const [isScrolled, setIsScrolled] = useState(false);
  const locationtwo = useLocation();

  useEffect(() => {
    if (locationtwo.pathname === '/') {
      
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    } else if(locationtwo.pathname !== '/'){
      setIsScrolled(window.scrollY >= 0);
    }
  }, [locationtwo]);

  const handleClickLogo = () => {
    if(window.scrollY === 0){
      setIsScrolled(false);
    }
    else {
      setIsScrolled(true);
    }
    window.scrollTo(0, 0);
  };

  const ClickPage = () => {
    window.scrollTo(0, 0);
  };

  const headerStyles = {
    position: locationtwo.pathname === '/' ? 'fixed' : 'sticky',
  };

  const state = useSelector((state)=> state.addItem)

  return (
    <header className={isScrolled ? 'header scrolled' : 'header'} style={headerStyles}>
      <div className='header_wrapper'>

        <div className='header_logo'>
          <div id="span-burger" className="header-burger" onClick={handleLogoClick}>
              <span className="header-burger"></span>
          </div>
          <div className="currency"><p className={isScrolled ? 'currency scrolled' : 'currency'} style={{color: 'transparent'}}>$</p></div>
          <Link to="/" className="logo" onClick={handleClickLogo}>
            <h1 className={isScrolled ? 'logo scrolled' : 'logo'}>Exclusive Gold</h1>
          </Link>
          <Link to="/cart" className="cart-icon" onClick={ClickPage}><i className="fas fa-shopping-cart"></i><span className="cart-count">{state.length}</span></Link>
        </div>
        
        <div className='header_navigation'>
          <div className="dropdown">
            <Link to="/catalog" className={isScrolled ? 'dropbtn scrolled' : 'dropbtn'} onClick={ClickPage}>Каталог</Link>
                            
              <div className="dropdown-content-over">
              <div className="dropdown-content">
                  <div className="dropdown-div">
                      <Link to="/catalog/collection/new" className="dropdown-div-a" onClick={ClickPage}>Новинки</Link>
                      <Link to="/catalog/rings" className="dropdown-div-a" onClick={() => SelectedCategoryPage("rings")}>Кольца</Link>
                      <Link to="/catalog/earrings" className="dropdown-div-a" onClick={() => SelectedCategoryPage("earrings")}>Серьги</Link>
                      <Link to="/catalog/bracelets" className="dropdown-div-a" onClick={() => SelectedCategoryPage("bracelets")}>Браслеты</Link>
                      <Link to="/catalog/necklaces" className="dropdown-div-a" onClick={() => SelectedCategoryPage("necklaces")}>Колье</Link>
                      <Link to="/catalog/chains" className="dropdown-div-a" onClick={() => SelectedCategoryPage("chains")}>Цепи</Link>
                      <Link to="/catalog/suspensions" className="dropdown-div-a" onClick={() => SelectedCategoryPage("suspensions")}>Подвески</Link>
                      <Link to="/catalog/sets" className="dropdown-div-a" onClick={() => SelectedCategoryPage("sets")}>Комплекты</Link>
                  </div>
                  <div className="dropdown-content-photo">
                    <Link to="/catalog/earrings" className="dropdown-content-photo-1" onClick={() => SelectedCategoryPage("earrings")}>
                      <img className="dropdown-content-photo-1-img" src={header1} alt="idyl" style={{objectPosition: '25% center'}} />
                      <span className="dropdown-div-a-photo">Серьги</span>
                    </Link>
                    <Link to="/catalog/necklaces" className="dropdown-content-photo-1" onClick={() => SelectedCategoryPage("necklaces")}>
                      <img className="dropdown-content-photo-1-img" src={header2} alt="idyl" style={{objectPosition: '50% center'}} />
                      <span className="dropdown-div-a-photo">Колье</span>
                    </Link>
                    <Link to="/catalog/bracelets" className="dropdown-content-photo-1" onClick={() => SelectedCategoryPage("bracelets")}>
                      <img className="dropdown-content-photo-1-img" src={header3} alt="idyl" style={{objectPosition: '35% center'}} />
                      <span className="dropdown-div-a-photo">Браслеты</span>
                    </Link>
                  </div>
              </div>
              </div>
                       
          </div>
          <div className="dropdown">
            <Link to="/contact" className={isScrolled ? 'dropbtn scrolled' : 'dropbtn'} onClick={ClickPage}>Контакты</Link>
          </div>
          <div className="dropdown">
            <Link to="/about" className={isScrolled ? 'dropbtn scrolled' : 'dropbtn'} onClick={ClickPage}>О нас</Link>
          </div>
          <div className="dropdown">
            <Link to="/delivery" className={isScrolled ? 'dropbtn scrolled' : 'dropbtn'} onClick={ClickPage}>Доставка</Link>
          </div>
          <div className="dropdown">
            <Link to="/cart" className={isScrolled ? 'dropbtn scrolled' : 'dropbtn'} onClick={ClickPage}>Корзина ({state.length})</Link>
          </div>
        </div>

          <div id="burger" className={`burger ${isMenuVisible ? 'showburger' : ''}`} >
              <div className="close" onClick={handleLogoClick}>
                  <span>&times;</span>
              </div>
              <div id="okno">
                  <Link to="/catalog" className="header-okno" onClick={ClickPage}>Каталог</Link>
                  <Link to="/contact" className="header-okno" onClick={ClickPage}>Контакты</Link>
                  <Link to="/about" className="header-okno" onClick={ClickPage}>О нас</Link>
                  <Link to="/delivery" className="header-okno" onClick={ClickPage}>Доставка</Link>
                  <Link to="/cart" className="header-okno" onClick={ClickPage}>Корзина ({state.length})</Link>
              </div>
          </div>
          <div className={`rectangle ${isMenuVisible ? 'showrectangle' : ''}`}></div>

      </div>
    </header>
  );
};

export default Header;