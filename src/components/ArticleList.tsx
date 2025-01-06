import React from "react";
import { Blog } from "./Blog"
import { useBlog } from "../shared/BlogContext";
import ArticleCard from "./ArticleCard";


    interface ArticleListProps {
        onEdit: (blog : Blog)=> void;
    }


const ArticleList: React.FC<ArticleListProps> = ({onEdit}) => {

    const {blogs , deleteBlog} = useBlog(); 
   

  return (

    <div className="ml-[5rem]">
        {
            blogs.map((blog, index)=>(
                <ArticleCard  article={blog} onDelete ={()=> deleteBlog(blog.id)} onEdit={()=> onEdit(blog)} />
            ))
        }
    </div>
  )
}

export default ArticleList