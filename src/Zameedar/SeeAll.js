import React, { useEffect, useState } from 'react'
import img from "../image/banner1.jpg";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

import axios from 'axios';


const SeeAll = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([])
  const cardsPerPage = 8;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCard = data.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(data.length / cardsPerPage);

  const getData = async () => {
    let res = await axios.get("http://localhost:3200/datas")
      .then((res) => {
        setData(res.data.user)
      })
  }
  console.log(data)

  const GoNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const GoPrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleClick = (currentPage) => {
    setCurrentPage(currentPage)
  }



  useEffect(() => {
    getData()
  }, [])

  return (
    <>

      <div className='about'>
        <img src={img} alt="banner" />
        <h1 className='hee'>Locality Video List</h1>
      </div>
      <div className='see'>
        {currentCard.map((item, index) => (
          <div className='see1' key={index}>
            <div className='img localtylist' >
              <img src={item.filePath}></img>
              <a href={item.link}>< PlayCircleIcon style={{ color: "white" }} className='icon' /></a>
              <p>Premium Gated Community Villa Tour with Clubhouse Access, Swimming Pool and 24x7 Security Features</p>
            </div>
          </div>
        ))}
      </div>
      <div className='paginationDiv'>
        <div className='goBtn'>
          <div>
            <button className='Gopre'
              onClick={GoPrev}>{"<"}</button>
          </div>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`Gopre ${currentPage === index + 1 ? "activeBtn" : ""}`}
              onClick={() => handleClick(index + 1)}>{index + 1}
            </button>
          ))}

          <div>
            <button className='Gopre' onClick={GoNext}>{">"}</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SeeAll

