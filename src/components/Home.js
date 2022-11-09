import React from 'react' ;
import './Home.css';

const Home = () => {
  return (
    <div>
    <div className="add-to-cart">
    <img src="https://www.clipartmax.com/png/middle/41-410284_add-to-cart-comments-add-to-cart-icon-png.png" alt="Add-to-Cart" />
    </div>

    <h1>Home component</h1>

    <div className="cart-wrapper">
    <div className="image-wrapper item ">
   <img src="https://media.croma.com/image/upload/v1664009609/Croma%20Assets/Communication/Mobiles/Images/243463_0_qtsxpd.png" alt="Iphone 13 Max"  />
    </div>
    
    <div className="text-wrapper item ">
    <span> <h5>I Phone 14 Max </h5></span>
    <span><h5>Price : $2000 </h5></span>
     </div>

     <div className="btn-wrapper item ">
      <button>Add to Cart</button>
      </div>

    </div>
    
    
    </div>

  )
}

export default Home ;