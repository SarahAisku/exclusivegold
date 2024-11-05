import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from "react-router-dom";
import '../../styles/Main.css'

const ImageSlider = ({ images }) => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const [disableNext, setDisableNext] = useState(false);
  const [disablePrev, setDisablePrev] = useState(true);
  const timeoutRef = useRef(null);

  const [showText, setShowText] = useState(false);
  const [showTextButtom, setTextButtom] = useState(true);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => {
      const newSlide = prevSlide === 0 ? images.length - 2 : prevSlide - 2;
      setDisableNext(false);
      setDisablePrev(true);

      setShowText(false);
      setTimeout(() => {
        setShowText(true);
      }, 7000);

      setTextButtom(true);
      setTimeout(() => {
        setTextButtom(false);
      }, 7000);

      return newSlide;
    });
  }, [images.length]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => {
      const newSlide = (prevSlide + 2) % images.length;
      setDisableNext(true);
      setDisablePrev(false);

      setShowText(true);
      setTimeout(() => {
        setShowText(false);
      }, 7000);

      setTextButtom(false);
      setTimeout(() => {
        setTextButtom(true);
      }, 7000);

      return newSlide;
    });
  }, [images.length]);


  const startnextAutoplay = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      nextSlide();
    }, 7000);
    timeoutRef.current = setTimeout(() => {
      prevSlide();
      startnextAutoplay();
    }, 14000);
  }, [nextSlide, prevSlide]);

  const stopAutoplay = () => {
    clearTimeout(timeoutRef.current);
  };


  const handleTouchStart = (e) => {
    const touchStartX = e.touches[0].clientX;
    const touchStartY = e.touches[0].clientY;

    const handleTouchEnd = (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const dx = touchEndX - touchStartX;
      const dy = touchEndY - touchStartY;
      const absDx = Math.abs(dx);
      const absDy = Math.abs(dy);

      if (absDx > absDy && absDx > 30) {
        // Horizontal swipe detected
        if (dx > 0) {
          // Swipe from left to right
          prevSlide();
        } else {
          // Swipe from right to left
          nextSlide();
        }
      }
    };

    e.currentTarget.addEventListener('touchend', handleTouchEnd);
  };



  useEffect(() => {
    startnextAutoplay();

    return () => {
      stopAutoplay();
    };
  }, [startnextAutoplay]);


  return (
    <div className="mainImageSlider" onTouchStart={handleTouchStart}>

      <div className="ImageSlider">
          <img className="ImageSliderImgHide" src={images[currentSlide]} alt={`Slide ${currentSlide}`} />
          <img className="ImageSliderImg" src={images[currentSlide+1]} alt={`Slide ${currentSlide+1}`} />
          <div className="ImageSlider-Prev-Next">
            <button className="ImageSlider-Button-Prev-Next" onClick={prevSlide} disabled={disablePrev} style={{marginRight: "3px"}}>.</button>
            <button className="ImageSlider-Button-Prev-Next" onClick={nextSlide} disabled={disableNext}>.</button>
          </div>
      </div>

      <div id="element"></div>
      <div className={`ImageSlider-Text-Buttom ${showText ? 'visible' : ''}`}>
          <p className="ImageSlider-p">Морская колекция</p>
          <Link to="/catalog/collection/sea" className="ImageSlider-Button"><p className="ImageSlider-Button-p">Посмотреть коллекцию</p></Link>
      </div>
      <div className={`ImageSlider-Text-Buttom-1 ${showTextButtom ? 'visible1' : ''}`}>
          <p className="ImageSlider-p">Новая продукция</p>
          <Link to="/catalog/collection/new" className="ImageSlider-Button"><p className="ImageSlider-Button-p">Посмотреть Новинки</p></Link>
      </div>

    </div>
  );
};

export default ImageSlider;