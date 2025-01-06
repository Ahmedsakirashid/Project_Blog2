import { Blog } from "./Blog"
import { useBlog } from "../shared/BlogContext";
import { useEffect, useState } from "react";


  interface BlogFormProps {
    exsistingBlog?: Blog;
    onClose: ()=> void;
  }


const BlogForm: React.FC<BlogFormProps> = ({exsistingBlog, onClose}) => {

  const {addBlog, updateBlog} = useBlog();
  const [title, setTitle] = useState(exsistingBlog?.title || '');

  const [name, setName] = useState(exsistingBlog?.name || '')
  const [description, setDescription] = useState(exsistingBlog?.description || '');

  const [ image, setImage] = useState(exsistingBlog?.image || '');
  const [time, setTime] = useState(exsistingBlog?.time || '');



      useEffect(()=>{
        if(exsistingBlog){
          setTitle(exsistingBlog.title);
          setTime(exsistingBlog.time);
          setImage(exsistingBlog.image);
          setName(exsistingBlog.name);
          setDescription(exsistingBlog.description);
        }
      },[exsistingBlog]);



      const handleSubmit = ()=>{
        const blog : Blog ={
          id: exsistingBlog ? exsistingBlog.id : Date.now(),
          title, description, image, name, time
        }

        if(exsistingBlog){
          updateBlog(blog)
        }
        else{
          addBlog(blog)
        }
        onclose();
       
      }





  return (
    <div className="bg-white p-6 rounded-lg w-[30rem] mx-auto">
        <h3 className="font-semibold text-gray-800 text-3xl">
          {exsistingBlog ? "Edit" : "addBlog"}
        </h3>

        <div className="space-y-4">
          <input type="text" value={name} onChange={(e)=> setName(e.target.value)} placeholder="Name" className="text-[1.3rem] py-2 px-4 block border
                 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 w-full focus:ring-black" />
          
          <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} placeholder="Title" className="py-2 px-5 w-full bg-transparent rounded-lg border border-l-gray-600
          focus:outline-none focus:ring-2 focus:ring-black" />

          <input type="text" placeholder="Link URL" value={image} onChange={(e)=> setImage(e.target.value)} className="py-2 px-5 w-full bg-transparent rounded-lg border border-l-gray-600
          focus:outline-none focus:ring-2 focus:ring-black" />

          <textarea value={description} onChange={(e)=> setDescription(e.target.value)} className="py-2 px-5 bg-transparent w-full h-32 rounded-lg border border-l-gray-600
          focus:outline-none focus:ring-2 focus:ring-black" />

          <input type="date" value={time} onChange={(e)=> setTime(e.target.value)} className="py-2 px-5 w-full bg-transparent rounded-lg border border-l-gray-600
                  focus:outline-none focus:ring-2 focus:ring-black" />


        </div>

        <div className=" flex justify-center items-center mt-6 space-x-3">
          <button className="py-3 px-6 bg-black text-white hover:text-white  rounded-md hover:shadow-lg  hover:bg-gray-600 transition
           duration-300" onClick={handleSubmit}>{exsistingBlog ? "Update" : "ADD"}</button>

          <button className="py-3 px-6 bg-red-600 hover:text-white  text-white rounded-md hover:shadow-lg hover:bg-gray-600 transition
           duration-300" onClick={onClose}>Close</button>
        </div>


    </div>
  )
}

export default BlogForm