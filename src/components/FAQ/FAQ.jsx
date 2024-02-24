import React, { useState } from 'react'

const FAQ = ({ title, desc }) => {
    const [toggle, setToggole] = useState(false)

    const handleToggle = () => {
        setToggole(!toggle)
    }
    return (
        <div className='bg-[#E2E3E6] my-3 p-5'>
            <div className='flex justify-between '>
                <h3 className='font-bold'>{title}</h3>
                <button onClick={handleToggle} className='bg-white ml-2 p-3'>
                    {toggle ? "-" : "+"}
                </button>
            </div>
            {toggle && <p>{desc}</p>}
        </div>
    )
}

export default FAQ
