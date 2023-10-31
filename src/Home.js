import {useState, useEffect} from 'react';
import Bloglist from './Bloglist';
const Home = () => {

    const [blogs,setBlogs]=useState([
        {title:"My new Website",body:"lorem ipsum",author:"Daniel",id:1},
        {title:"Birthday Invitation", body:"lorem ipsum",author:"Natnael",id:2},
        {title:"Wedding Ceremony",body:"lorem ipsum",author:"Dawit",id:3}
    ])

    useEffect(()=>{
        console.log("hello");
    });
    useEffect(()=>{
        console.log("danssinia");
    },[])
    return ( 
        <div className="home">
            <Bloglist blogs={blogs}/>
        </div>
     );
}
 
export default Home;