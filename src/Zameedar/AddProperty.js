import { Button } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import LocationOnIcon from '@mui/icons-material/LocationOn';

const AddProperty = ()=>{

    const [data,setData]=useState([])
   
      const getData = async () => {
    let res = await axios.get("http://localhost:3200/data")
      .then((res) => {
        setData(res.data.user)
      })
  }

  useEffect(()=>{
    getData()
  },[])
    return(
        <>
        <div className="propertyC">
      
        {data.map((item, index) => (
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
      </div>
        
        </>
    )
}

export default AddProperty