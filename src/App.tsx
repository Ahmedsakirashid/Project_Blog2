import React, { useState } from 'react'
import Navigation from './components/Navigation'
import SearchSection from './components/SearchSection'
import Trends from './components/Trends'
import ReccomendedTopic from './components/ReccomendedTopic'
import LatestTopic from './components/LatestTopic'
import { Blog } from './components/Blog'
import { FaPlus } from 'react-icons/fa'
import ArticleList from './components/ArticleList'
import { BlogProvider } from './shared/BlogContext'
import Modal from './components/Modal'
import BlogForm from './components/BlogForm'

const App = () => {

  const [isModelOpen, setIsModelOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);


  const openModalForNewBlog =()=> {
    setIsModelOpen(true);
    setEditingBlog(null)
  }

  const openModalForEdit = (blog: Blog) =>{
    setIsModelOpen(true);
    setEditingBlog(blog);
  }




  return (
    <div>
    <BlogProvider >

    <Navigation/>


<div className="flex justify-center">

 <div className="flex items-center flex-col mx-auto p-6 ">

     <LatestTopic />

     <div className=" ">
     <button className=' space-x-5 bg-black flex justify-center items-center
        text-white px-4 py-2 rounded mb-4 ' onClick={openModalForNewBlog}>Add Blog <FaPlus className=' text-[13px] ml-[2rem]' /></button> 


        <ArticleList onEdit={openModalForEdit} />    

        {
          isModelOpen && <Modal onClose={()=> setIsModelOpen(false)}>
            <BlogForm exsistingBlog={editingBlog} onClose={()=> setIsModelOpen(false)} />
              
          </Modal>
        }     
     </div>


 </div>

<div className="w-30% border-l-2 border-l-gray-200 h-screen pl-6">
   <SearchSection />
   <Trends />
   <ReccomendedTopic />
 </div>
 
</div>



    </BlogProvider>
    </div>
  )
}

export default App