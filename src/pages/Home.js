import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Ads from '../components/Ads';
import ProductSection from '../components/ProductSection';

function Home() {
  let productArray= ['iphone','samsung','oneplus','oppo']
  return (
    <div className='container-fluid'>
      <Navbar />
      <Carousel />
      <div className='row'>
        {productArray.map(el=> <Ads name={el} />)}
      </div>
      <ProductSection/>
    </div>
  );
}

export default Home;
