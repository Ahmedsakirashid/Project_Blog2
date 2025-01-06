import { FaBell, FaHome, FaUserCircle } from "react-icons/fa"
import { FaBookBookmark,  } from "react-icons/fa6"
import { PiNotebook } from "react-icons/pi"



const Navigation = () => {


  return (


    <div className="flex-col space-y-52 items-center align-middle fixed h-full p-3 w-20 border-r-2 border-b-gray-800">
        <div className="space-y-12 items-center mt-10">
            <FaHome className="text-2xl text-gray-700 " />
            <FaBell className="text-2xl text-gray-700 " />
            <FaBookBookmark className="text-2xl text-gray-700 " />
        </div>

        <div className="justify-evenly space-y-24 ">
            <PiNotebook className="text-2xl text-gray-700" />
            <FaUserCircle className="text-2xl text-gray-700"  />
        </div>
    </div>
  )
}

export default Navigation