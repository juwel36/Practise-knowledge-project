import { useState } from "react"
import Blogs from "./blogs/Blogs"
import Bookmarks from "./bookmarks/Bookmarks"


function App() {
  const [bookmarks,setBookmarks]=useState([])
  const [addtime,setAddtime]=useState(0)

  const handleAddToBokmark= blog=>{
const newBookmark=[...bookmarks,blog]
setBookmarks(newBookmark)
console.log("adding book");
  }

const handleAddToTime=(addToTime)=>{
setAddtime(addtime+addToTime)

// const remaining=bookmarks.filter(bookmark=> bookmark.id !== id)
// setBookmarks(remaining)
}

  return (
    <>
      <h1 className="text-4xl text-center">Knodelege Cafe</h1>
    <div className="flex">
    <Blogs handleAddToBokmark={handleAddToBokmark}  handleAddToTime={handleAddToTime}></Blogs>
  
<Bookmarks bookmarks={bookmarks} addtime={addtime}></Bookmarks>
    </div>


    </>
  )
}

export default App
