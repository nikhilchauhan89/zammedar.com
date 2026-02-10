import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const Web = () => {
    const [search, setSearch] = useState("india");
    const [newsData, setNewsData] = useState(null);
    const API_KEY = '6b295a82649b478f9c511a9535ea7200';


    const getData = async () => {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
        const jsonData = await response.json();
        console.log(jsonData.articles);
        setNewsData(jsonData.articles);
        // setSearch(jsonData);
    }

    const handleInput = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value)
    }

    const handle = (e) => {
     setSearch(e.target.value)
    }

    useEffect(()=>{
        getData()
    },[])
    return (
        <div className="outer">
            <nav className="nav">
                <div>
                    <p>Trendy News</p>
                </div>
                <div>
                    <a>All News</a>
                    <a>Top Headlines</a>

                </div>
                <div>
                    <input type="text" placeholder="search" value={search} onChange={handleInput}></input>
                    <button onClick={getData}>Search</button>
                </div>

            </nav>
            <div className="stay">
                <h2>Stay Update with TrendyNews!</h2>
            </div>
            <div className="btn">
                <button onClick={handle} value="sports">Sports</button>
                <button onClick={handle} value="politics">Politics</button>
                <button onClick={handle} value="health">Health</button>
                <button onClick={handle} value="entertainment">Entertainment</button>
                <button onClick={handle} value="technology">Technology</button>


            </div>
            <div>
                {newsData? <Cards data={newsData} /> :null}
               
            </div>

        </div>
    )
}

export default Web

