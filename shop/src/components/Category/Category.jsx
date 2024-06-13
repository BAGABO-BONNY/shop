import React from 'react'
import Button from '../shared/Button'
import Image1 from'../hero/cupBoard.png'

const Category = () => {
  return (
    <div className='py-8'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='py-10 pl-5 bg-gradient-to-br from-black to-black/70 text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div>
                        <div className='mb-4'>
                            <p>Enjoy</p>
                            <p>With</p>
                            <p>Cupboards</p>
                            <Button
                            text="Browse"
                            bgColor={"bg-primary"}
                            textColor={"text-white"}
                            />
                        </div>
                    </div>
                    <img src={Image1} alt="" className="w-[120px] absolute top-0 "/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category;