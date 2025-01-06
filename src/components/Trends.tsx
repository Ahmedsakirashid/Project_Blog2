import { FaCircle } from "react-icons/fa6"


    const Trend = [
       {
        title: "Your portfolio is stopping you from geting that job",
        author: "Reece James",
       },
       {
        title: "Hate NTFs? I have some bad news...",
        author: "Leo Messi",
       },
       {
        title: "The Real impact of Dark UX patterns",
        author: "Ahmed Saki"
       },
    ]

const Trends = () => {
  return (
    <div className="p-6 shadow-md rounded-md mt-6 ">

        <h3 className="font-semibold flex items-center pb-5 space-x-3 text-[1.2rem]"> 
        <FaCircle className="text-[7px] text-green-600 "/>
            <span> What We’re Reading Today</span></h3>


            <ul className="space-y-4">
                {
                    Trend.map((trend, index)=>(
                        <li className="flex flex-col" key={index}>
                            <span className="">{trend.title}</span>
                            <span className="text-[1rem] text-gray-600">~ {trend.author}</span>
                        </li>
                    ))
                }
            </ul>

    </div>
  )
}

export default Trends