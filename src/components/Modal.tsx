import React from "react"




const Modal: React.FC<{children: React.ReactNode; onClose:()=> void}> = ({children, onClose}) => {
  return (
    <div className="fixed inset-0  flex justify-center items-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg p-7 relative shadow">
            {children}
            <button className="absolute top-2 right-2 text-3xl text-gray-600" onClick={onClose}>X</button>
        </div>
    </div>
  )
}

export default Modal