import React, { useCallback, useEffect, useRef, useState } from "react";
import {ClipLoader} from 'react-spinners';

const LoaderWeb = ()=>{
    const [data,setData]=useState([]);
    const [page,setPage]=useState(2);
    const [loading,setLoading]=useState(false);
    const loaderRef = useRef();


    const getData = async (page)=>{
      const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=10`);
      const data = await response.json();
      return data
    } 

    const loadMore = useCallback( async()=>{
        if(loading)
            return
        setLoading(true);
        const datas = await getData(page)
        setData((preData)=>[...preData, ...datas])
        setLoading(false)
        setPage((prePage)=> prePage+1)

    },[page,loading])

    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0]
            if(entry.isIntersecting){
                loadMore()
            }
        })
      if(loaderRef.current){
        observer.observe(loaderRef.current)
      }
      return()=>{
        if(loaderRef.current){
        observer.unobserve(loaderRef.current)
        }
      }
    },[])

    const firstData = async()=>{
        const datas = await getData(1);
        console.log(datas)
        setData(datas)
    }

   useEffect(()=>{
    firstData();
   },[])

    return(
        <div className="lodI">
        <div className="lod">
            {data.map((curItem,index)=>{
                return <img key={index} src={curItem.download_url}/>
            })}

        </div>
        <div ref={loaderRef}>{loading? <ClipLoader loading={true} color="blue" size="48px"/>:""}

        </div>
        </div>
    )
}

export default LoaderWeb;