
        const Topics = [
            "Football",
            "Basketball",
            "Baseball",
            "Teniss",
            "Volleybll"
        ]

const ReccomendedTopic = () => {
  return (
    <div className=" p-6 rounded-md shadow-md mt-6">
        <h3 className="font-semibold text-[1.2rem] pb-5">Reccomended Topics</h3>

        <div className="flex flex-wrap space-x-3">
            {
                Topics.map((topic, index)=>(
                    <span key={index} className="rounded-full px-3 py-1 text-white  bg-gray-700 hover:bg-gray-500
                    cursor-pointer">{topic}</span>
                ))
            }
        </div>
    </div>
  )
}

export default ReccomendedTopic