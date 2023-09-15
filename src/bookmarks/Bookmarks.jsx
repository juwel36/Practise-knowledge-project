import Bookmark from "../bookmar/Bookmark";


const Bookmarks = ({bookmarks,addtime}) => {
  
  return (
    <div className="w-1/4">
       <div>
        <p className="text-2xl bg-purple-700 text-white m-2 rounded-lg p-3"> Reading Time: {addtime} </p>
      </div>
      <div>
      <h1 className='text-3xl'>BookMarks {bookmarks.length} </h1>
      </div>
     
      
      {
        bookmarks.map((bookmark,idx)=> <Bookmark key={idx}
       bookmark={bookmark} 
        ></Bookmark> )
      }
    </div>
  );
};

export default Bookmarks;
