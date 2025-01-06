import { FaPlusCircle } from "react-icons/fa"



const LatestTopic = () => {
  return (
    <div className="flex flex-col mt-3  w-full">

        <div className="p-12 w-full ">
            <h3 className="  text-[1.2rem] text-gray-400 flex items-center space-x-5 hover:text-gray-800
            transition duration-300">
              <FaPlusCircle className="text-[1.7rem] " />
               <span> Keep up with the latest in any topic</span>
            </h3>
            <div className="w-full border-b-2 border-b-gray-300 mt-10 flex space-x-14 text-[1.3rem]">
              <h2 className="text-gray-700">Friends</h2>
              <h2 className="text-gray-900">Recommended</h2>
            </div>
        </div>



        
    </div>
  )
}

export default LatestTopic