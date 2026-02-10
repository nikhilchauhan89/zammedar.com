import React, { useEffect, useState } from 'react'
import video from '../Zameedar/VideoData';

const Pagination = () => {
    const [data, setData] = useState([]);
    const [pageNo, setPageNo] = useState(1)

    const nextButtons = Array.from({length:4}, (_,index)=> pageNo+index)

    const preButtons = Array.from({length:3}, (_,index)=> pageNo-1-index).filter((value)=>{
       return value>0;
    }).reverse();

    const mergeArr = [...preButtons, ...nextButtons];
    console.log(mergeArr)

    const getImages = async () => {
        const response = await fetch(`https://picsum.photos/v2/list?page=${pageNo}&limit=6`)
        const jsonData = await response.json();
        console.log(jsonData);
        setData(jsonData);
    }

   

    useEffect(() => {
        getImages();
    }, [pageNo])

     const handlePrev = () => {
        setPageNo(pageNo - 1)
    }

    const handleNext = () => {
        setPageNo(pageNo + 1)
    }

    return (
        <div>
            <div className='imageContainer'>
                {data.map((curItem, index) => {
                    return <img key={index} src={curItem.download_url} />
                })}
            </div>
            <div className='buttons'>
               
              {pageNo>1 ?<button onClick={handlePrev}>Prev</button>:""}
              {mergeArr.map((curValue)=>{
                return(
                <button onClick={()=>setPageNo(curValue)} className={curValue==pageNo? "active":""}>{curValue}</button>

                )
              })}
               <button onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}

export default Pagination