
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../Zameedar/index.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Select from 'react-select';
import { Button } from '@mui/material';
import "tailwindcss"
import imgi from "../image/p1.jpg"
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import ReactPlayer from 'react-player';
import axios from 'axios';
import "tailwindcss"


const opti = [
  { value: "Residential", label: "Residential" },
  { value: "Commercial", label: "Commercial" },
  { value: "Industrial", label: "Industrial" }
];
const optics = [
  { value: "Residential", label: "Residential" },
  { value: "Commercial", label: "Commercial" },
  { value: "Industrial", label: "Industrial" }
];
const options = [

  { value: "For sale", label: "For sale" },
  { value: "For rent", label: "For rent" },
  { value: "For lease", label: "For lease" }
];
const optio = [

  { value: "For sale", label: "For sale" },
  { value: "For rent", label: "For rent" },
  { value: "For lease", label: "For lease" }
];
const optic = [
  { value: "zirakpur", label: "zirakpur" },
  { value: "chandigarh", label: "chandigarh" },
  { value: "Panchkula", label: "Panchkula" },
  { value: "Mohali", label: "Mohali" },
  { value: "Derabassi", label: "Derabassi" },
  { value: "Lalru,Punjab", label: "Lalru,Punjab" }
];

const opt = [
  { value: "zirakpur", label: "zirakpur" },
  { value: "chandigarh", label: "chandigarh" },
  { value: "Panchkula", label: "Panchkula" },
  { value: "Mohali", label: "Mohali" },
  { value: "Derabassi", label: "Derabassi" },
  { value: "Lalru,Punjab", label: "Lalru,Punjab" }
];
const Home = () => {
  const location = useLocation();
  const { selectedO } = location.state || {};
  const [selectedOption, setSelectedOption] = useState(selectedO || null);
  const [Option, setOption] = useState(null)
  const [select, setSelect] = useState(null)
  const [selected, setSelected] = useState(null)
  const [data, setData] = useState([])


  const [openModal, setOpenModal] = useState(false)

  const getData = async () => {
    let res = await axios.get("http://localhost:3200/data")
      .then((res) => {
        setData(res.data.user)
      })
  }
  // console.log(data)




  const [filterd, setFilterd] = useState({
    sale: false,
    lease: false,
    rent: false
  })
  const handlebutton = (e) => {
    const { name } = e.target;
    setFilterd((prev) => (
      { [name]: !prev[name], }
    ));
  };

  const filteredCard = (data || []).filter((item) => {
    if (!filterd.sale && !filterd.rent && !filterd.lease && !select && !selectedOption && !selected && !selectedO) {
      return true;
    }
    if (filterd.sale && item.type.toLowerCase() === "for sale") return true;
    if (filterd.lease && item.type.toLowerCase() === "for lease") return true;
    if (filterd.rent && item.type.toLowerCase() === "for rent") return true;
    if (selectedO && item.location.toLowerCase().includes(selectedO.value.toLowerCase())) return true;

    return false;
  })
  const navigate = useNavigate();

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };



  const goSee = () => {
    navigate("/seeall")
  }

  const handleIn = (selected) => {
    setSelected(selected)
  }

  const hand = (select) => {
    setSelect(select)
  }

  const handle = (selectedOption) => {
    setSelectedOption(selectedOption)
  }



  const handleS = () => {
    navigate("/properties", {
      state: {
        select,
        selected,
        selectedOption
      }

    });
  };



  const handleX = () => {
    setOpenModal(prev => !prev)
  }

  // const handleCopy = () => {

  // }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>

      {
        openModal && <div className='modalUi-frame'>

          <div className='modalUi-card1'>
            <div className='modal-x1' onClick={handleX}>
              X
            </div>

            <div className='reactplay' style={{ width: "94%", height: "300px" }}>
              <ReactPlayer

                src="https://www.youtube.com/watch?v=mJVuZiK9a6I"
                width="97%"
                height="100%"
                controls={true}
                playing={true}
              />

            </div>
          </div>
        </div>
      }
      <div className='banner'>
        <img />
        <h1>Making buying, selling, and renting easier than ever!</h1>
        <div className='imgInput'>
          <Select
            placeholder="Select Listing Type"
            className='sale'
            options={optio}
            value={select}
            onChange={hand}
            styles={{
              placeholder: (defaultStyles) => ({
                ...defaultStyles,
                fontSize: "14px"
              })
            }}
          />
          <Select
            placeholder="Select City"
            options={opt}
            value={selectedOption}
            onChange={handle}
            className='sale'
            styles={{
              placeholder: (defaultStyles) => ({
                ...defaultStyles,
                fontSize: "14px"
              })
            }}
          />
          <Select
            placeholder="Select property Type"
            options={optics}
            value={selected}
            onChange={handleIn}
            className='sale'
            styles={{
              placeholder: (defaultStyles) => ({
                ...defaultStyles,
                fontSize: "14px"
              })
            }}
          />
          <button
            onClick={handleS}
          >Search</button>
        </div>
      </div>
      <div className='card'>
        <div className='carda'>
          <div className='card1'>
            <button
              type="button"
              name="sale"
              onClick={handlebutton}

            >Sale</button>
            <button
              type="button"
              onClick={handlebutton}
              name='rent'
            >Rent</button>
            <button
              onClick={handlebutton}
              type="button"
              name='lease'
            >Lease</button>
          </div>
        </div>
        <div className='slider'>
          <div className="slider-container">
            <Slider {...settings}>
              {filteredCard.map((item, index) => (
                <div className='slide' key={index}>
                  <div className='card2'>
                    <img src={item.filePath} alt={item.title} />
                    <p className='p'>{item.type}</p>
                    <div className='card3'>
                      <p className='new'>{item.status}</p>
                      <p className='com'>{item.title}</p>
                      <p className='sect'>
                        <LocationOnIcon />
                        {item.location}
                      </p>
                      <div className='style' >
                        <a href={item.link}><Button>View Details</Button></a>
                        <button  className='whatsapp'>
                          <a >Whatsaap</a>
                          <br />
                          <a href='/details'>Click to chat</a>
                        </button></div>

                    </div>
                  </div>
                </div>
              ))}
            </Slider>

          </div>
        </div>

      </div>
      <div className='your'>
      <p >Your Property Guide</p>
      </div>
      <div className='video'>
        <div className='video1'>
          <p style={{fontSize:"25PX"}}>Locality Videos</p>
          <div className='p2'>
            <div className='p1'>
              <div className='play'>
                {/* <a href='https://youtu.be/mJVuZiK9a6I?si=hcZBZts5TYRcf9-l'><PlayCircleIcon className='stop' style={{ color: "white" }} /></a> */}
                <PlayCircleIcon className='stop' style={{ color: "white", cursor: "pointer" }} onClick={handleX} />
                <img src={imgi} />


                <p>Premium Gated Community Villa Tour with Clubhouse Access,
                  Swimming Pool and 24x7 Security Features</p>
              </div>
            </div>
            <div className='p1'>
              <div className='play'>


                <PlayCircleIcon className='stop' style={{ color: "white", cursor: "pointer" }} onClick={handleX} />
                <img src={imgi} />
                <a><button className='btn' onClick={goSee}>See all</button></a>
                <p>Premium Gated Community Villa Tour with Clubhouse Access,
                  Swimming Pool and 24x7 Security Features</p>
              </div>
            </div>

          </div>
        </div>
           
        <div className='video2'>
        </div>
        <div className='video3'>
        </div>
      </div>
    </>
  )
}

export default Home