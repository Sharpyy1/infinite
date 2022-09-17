import React from "react";
import {useEffect,useState} from "react"
import './App.css'
import {Heading} from "./Components/Heading"
import {Loader} from "./Components/loader"
import {Unsplashimage} from "./Components/Unsplashimage"
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
const App=()=>{
    const [Images, setImages]=useState([])
    useEffect(()=>{
        fetchimages();

    },[])
    const fetchimages=()=>{
        axios
        .get(`https://api.unsplash.com/photos/random?client_id=gCCznKGMTi46gLKT7RswxlZ7R4YLhqcyvun2fT-oMbo&count=15`)
        .then(res=> setImages([...Images,...res.data]))
    }
    return (
        <div className="App">
            <Heading/>
            <InfiniteScroll
            dataLength={Images.length}
            next={fetchimages}
            hasMore={true}
            loader={<Loader/>}
            >
                <div className="image">
                    {Images.map(image=>(
                        <Unsplashimage url={image.urls.regular} key={image.id}/>
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    )
};
export default App;