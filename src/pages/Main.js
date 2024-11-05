import React from 'react';

import ImageSliderMain from '../components/Main/ImageSliderMain'
import CollectionSea from '../components/Main/CollectionSea'
import FourPhotoCatalog from '../components/Main/FourPhotoCatalog';
import SroteInfo from '../components/Main/StoreInfo';
import NewProducts from '../components/Main/NewProducts';

import SimpleSlider from '../components/Main/SimpleSlider';
function Main() {
    return (
        <div className='App'>
            <ImageSliderMain/>
            <CollectionSea/>
            <FourPhotoCatalog/>
            <SroteInfo/>

            <NewProducts/>
            <SimpleSlider/>
        </div>
    );
  }
  
export default Main;