import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//  import React, { Component } from "react";

// function AutoPlay() {
    // import React, { Component } from "react";
// import Slider from "react-slick";

function SwipeToSlide() {
//         const [slider, setSlider]= useState([
//         {img:"https://api.zameedar.com/storage/222/HLP-Palmillas.jpg"},
//          {img:"https://api.zameedar.com/storage/223/aura.jpg"},
//           {img:"https://api.zameedar.com/storage/221/central.jpg"},
//            {img:"https://api.zameedar.com/storage/219/vision-homes.PNG"},
//             {img:"https://api.zameedar.com/storage/222/HLP-Palmillas.jpg"},
//              {img:"https://api.zameedar.com/storage/222/HLP-Palmillas.jpg"},
// ])
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange: function(index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
        <div>
          <h3>9</h3>
        </div>
      </Slider>
    </div>
  );
}

export default SwipeToSlide;


//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 2000,
//     autoplaySpeed: 2000,
//     cssEase: "linear"
//   };
//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         {slider.map((slide)=>
//             <div key={slide}><img src={slide.img}/></div>
//         )}
   
//       </Slider>
//     </div>
//   );
// }

// export default AutoPlay;
