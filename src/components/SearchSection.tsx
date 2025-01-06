import { FaSearch } from "react-icons/fa"




const SearchSection = () => {
  return (
    <div className="p-6 border shadow-md space-y-4 rounded-md mt-6 ">

       <div className="">
       <button className="px-11 py-2 bg-black text-white rounded-full
        hover:bg-gray-700 transition duration-200">Get Unlimited Access</button>
       </div>

       <div className=" flex items-center py-2 px-3 rounded-full border border-gray-200 max-w-md ">

        <FaSearch className="text-2xl mr-2 text-gray-600" />
       <input type="text" placeholder="Search" className="w-full  bg-transparent outline-none " />
       </div>
    </div>
  )
}

export default SearchSection