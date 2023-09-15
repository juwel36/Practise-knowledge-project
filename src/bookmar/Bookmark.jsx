
const Bookmark = ({bookmark}) => {
  console.log(bookmark);
  // const {title}=bookmark;
  return (
    <div>
     

     <div>
     <h1 className="text-xl bg-slate-200 p-3 m-3 rounded-lg"> {bookmark} </h1>
     </div>
    </div>
  );
};

export default Bookmark;

