import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";

const Blogs = ({handleAddToBokmark,handleAddToTime}) => {
const [blogs,setBlogs]=useState([])

useEffect(()=>{
fetch('Public.json')
.then(res=> res.json())
.then(data=> setBlogs(data))

},[])


  return (
    <div className="w-3/4">
      {/* <h1 className="text-3xl">h1</h1> */}
{
  blogs.map((blog,idx)=> <Blog key={idx} 
  handleAddToBokmark={handleAddToBokmark} 
  handleAddToTime={handleAddToTime}
  blog={blog}></Blog> )
}

    </div>
  );
};

export default Blogs;