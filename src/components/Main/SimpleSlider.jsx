import React from "react";
import { Link } from 'react-router-dom';

import Slider from "react-slick";
import ItemCardS from "../../Item/SliderItem/ItemCardS";

import img1 from '../../media/SimpleSlider/241314371_1568008253552277_586338201094393550_n.jpg'
import img2 from '../../media/SimpleSlider/241691284_4079047638873129_911859711673036803_n.jpg'
import img3 from '../../media/SimpleSlider/242188959_443856290309886_7965248656260764288_n.jpg'
import img4 from '../../media/SimpleSlider/242392843_567311217906615_4668597451669527740_n.jpg'
import img5 from '../../media/SimpleSlider/242709399_555850932349462_3438329036471046059_n.jpg'
import img6 from '../../media/SimpleSlider/246255458_944249893108841_3507876465650561165_n.jpg'
import img7 from '../../media/SimpleSlider/246646680_307068827542950_2623028839693238389_n.jpg'
import img8 from '../../media/SimpleSlider/246939835_126112089782527_1751890235992984874_n.jpg'
import img9 from '../../media/SimpleSlider/249258241_1589108568098734_5872253334208876064_n.jpg'
import img10 from '../../media/SimpleSlider/255260801_245618604132614_6142817693847869845_n.jpg'
import img11 from '../../media/SimpleSlider/255527568_2865832720373941_9113786885021672264_n.jpg'
import img12 from '../../media/SimpleSlider/257494094_3122412931327460_3444971575074792210_n.jpg'

const SimpleSlider = () => {

    var settings = {
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 4000,

        responsive: [
          {
            breakpoint: 1138,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 1007,
            settings: {
              arrows:false,
              centerMode: true,
              infinite: true,
              speed: 500,
              slidesToShow: 2,
              slidesToScroll: 1,
              autoplay: false,
            }
          },{
            breakpoint: 630,
            settings: {
              arrows:false,
              centerMode: true,
              infinite: false,
              speed: 500,
              slidesToShow: 1,
              slidesToScroll: 1,  
              autoplay: false,
            }
          }
        ]
    }

    return (
      <div className="NewProducts-Slider">  
            <div>
              <Slider {...settings}>
                <div><ItemCardS link='/catalog/collection/new/24' img={img1} title='Браслет с тремя видами золота' price='300 000 тг'/></div>
                <div><ItemCardS link='/catalog/collection/new/22' img={img2} title='Подвеска в желтом золоте с фианитами' price='100 000 тг'/></div>
                <div><ItemCardS link='/catalog/collection/new/20' img={img3} title='Шикарный браслет' price='500 000 тг'/></div> 
                <div><ItemCardS link='/catalog/collection/new/21' img={img4} title='Браслет выполнен из желтого золота' price='200 000 тг'/></div>
                <div><ItemCardS link='/catalog/collection/new/23' img={img5} title='Нежное колечко с танцующим фианитом в желтом золоте' price='300 000 тг'/></div>
                <div><ItemCardS link='/catalog/collection/new/19' img={img6} title='Нежный браслет выполнен из желтого золота' price='80 000 тг'/></div>
                <div><ItemCardS link='/catalog/collection/new/18' img={img7} title='Нежный браслет выполнен из желтого золота с перламутром' price='95 000 тг'/></div>
                <div><ItemCardS link='/catalog/collection/new/26' img={img8} title='Стильные серьги в желтом золоте' price='130 000 тг'/></div>
                <div><ItemCardS link='/catalog/collection/new/25' img={img9} title='Оригинальный комплект выполнен в желтом золоте с белой керамикой' price='500 000 тг'/></div>
                <div><ItemCardS link='/catalog/collection/new/17' img={img10} title='Серьги - конго' price='100 000 тг'/></div>
                <div><ItemCardS link='/catalog/collection/new/16' img={img11} title='Браслет в желтом золоте' price='250 000 тг'/></div>
                <div><ItemCardS link='/catalog/collection/new/15' img={img12} title='Золотой комплект из лимонного золота' price='500 000 тг'/></div>
              </Slider>
            </div>
        <div className="NewProducts-Slider-AHref-div"><Link to="/catalog/collection/new" className="NewProducts-Slider-AHref">Просмотреть новые модели</Link></div>
      </div>
    );
  }

  export default SimpleSlider;