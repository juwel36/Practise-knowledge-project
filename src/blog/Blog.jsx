

const Blog = ({blog,handleAddToBokmark,handleAddToTime}) => {
  const {id,title,cover,reading_time}=blog;
  return (
    <div>
      <img className="mt-6" src={cover} alt="" />
      <h1>{reading_time} min read</h1>
      <button onClick={()=>handleAddToBokmark(title)} className="bg-pink-600 p-2 rounded-xl text-white my-3">Add</button>
      <h1>Title {title}</h1>
      <button onClick={()=>handleAddToTime(reading_time,id)} className='font-bold text-purple-800 underline my-5 text-lg'>Mark as read</button>
      
    </div>
  );
};

export default Blog;