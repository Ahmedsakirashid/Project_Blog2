import React from "react";
import { Blog } from "./Blog"
import { FaEdit, FaOptinMonster, FaSave, FaTrash } from "react-icons/fa";


        interface ArticleCardProps {
            article: Blog;
            onDelete: ()=> void;
            onEdit: ()=> void;
        }


const ArticleCard: React.FC<ArticleCardProps> = ({article, onEdit, onDelete}) => {
  return (
    <div className="flex mb-6 ml-[2rem] shadow-md w-full p-7 rounded-lg hover:shadow-xl 
    transition-shadow duration-200 ease-in-out">

        <img src={article.image} alt="" className="w-52 object-cover h-48 rounded-lg" />

        <div className="flex flex-col flex-1 ml-6">
            <p className="text-[13px] text-gray-500">{article.name}</p>
            <h3 className="font-mono font-semibold text-3xl pb-6">{article.title}</h3>
            <p className="text-gray-600 w-96">{article.description}</p>

            <div className="flex justify-between text-gray-900 mt-6">
                <p>{article.time}</p>

                <div className="flex space-x-4">
                    <FaSave  className="text-gray-500 hover:text-gray-700 transition-colors duration-200 
                    cursor-pointer"/>
                    <FaOptinMonster  className="text-gray-500 hover:text-gray-700 transition-colors duration-200 
                    cursor-pointer" />
                    

                     <FaEdit onClick={onEdit} className="text-blue-500 hover:text-blue-600 transition-colors duration-200 cursor-pointer" />
                     <FaTrash onClick={onDelete} className="text-red-500 hover:text-red-600 transition-colors duration-200 cursor-pointer" />
                </div>
            </div>
            

        </div>
        
    </div>
  )
}

export default ArticleCard