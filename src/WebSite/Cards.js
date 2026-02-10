import { current } from "@reduxjs/toolkit";
import React from "react";

const Cards = ({data})=>{

    const readMore=(url)=>{
        window.open(url)
    }
    return( 
        <div className="image1">
            {data.map((curItem,index)=>{
                if(!curItem.urlToImage){
                   return null
                }else{
                      return(
                    <div className="image" key={index}>
                    <img src={curItem.urlToImage} />
                        <div className="title">
                            <a className="tag"  onClick={()=>window.open(curItem.url)}>{curItem.title}</a>
                            <p>{curItem.description}</p>
                            <button onClick={()=>window.open(curItem.url)}>Read More</button>
                        </div>
                    </div>
                )

                }
              
            })}

        </div>
    )
}

export default Cards
