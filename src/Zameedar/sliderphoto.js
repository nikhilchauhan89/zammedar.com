import React, { useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Button } from '@mui/material';

function AutoPlay() {
  const [slider, setSlider] = useState([
    {
      id: 1,
      title: "Commercial Showroom Place ",
      price: "₹80 Lakh | 100 yds",
      location: "Sector 7,Panchkula",
      status: "New",
      type: "For Lease",
      image: require("../image/banner1.jpg")

    },
    {
      id: 2,
      title: "Luxury Office Space",
      price: "₹90 Lakh | 150 yds",
      location: "Sector 17 ,Chandigarh",
      status: "Old",
      type: "For Rent",
      image: require("../image/h2.jpg")
    },
    {
      id: 3,
      title: "Shop For Lease",
      price: "₹50 Lakh | 500 yds",
      location: "Sector 17 ,Mohali",
      status: "New",
      type: "For Buy",
      image: require("../image/h3.jpg")
    },
    {
      id: 4,
      title: "Luxury Office Space",
      price: "₹65 Lakh | 250 yds",
      location: "Sector 17 ,Zirakpur",
      status: "Old",
      type: "For Lease",
      image: require("../image/h5.jpg")
    },
    {
      id: 5,
      title: "Commercial Showroom Place ",
      price: "₹70 Lakh | 180 yds",
      location: "Sector 15 ,Lalru,Punjab",
      status: "New",
      type: "For Sale",
      image: require("../image/h4.jpg")
    }
  ]);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slider.map((item, index) => (
          <div className='slide' key={index}>
            <div className='card2'>
              <img src={item.image} alt={item.title} />
              <p className='p'>{item.type}</p>
              <div className='card3'>
                <p className='new'>{item.status}</p>
                <p className='com'>{item.title}</p>
                <p>{item.price}</p>
                <p className='sect'>
                  <LocationOnIcon style={{ height: "15px", marginBottom: "-2px" }} />
                  {item.location}
                </p>
                <a href='/details'><Button>View Details</Button></a>
              </div>
            </div>
          </div>
        ))}
      </Slider>

    </div>
  );
}

// export default AutoPlay;
