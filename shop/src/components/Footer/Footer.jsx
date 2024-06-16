import React from 'react'

const Footer = () => {
  return (
    <div className=' bg-gray-300 dark:bg-gray-950'>
        <div className='container'>
            <div className='grid grid-cols-3 pb-20 pt-5'>
                <div className='py-8 px-4'>
                    <a href="#" className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>FSHOP</a>
                    <p className='text-gray-600 lg:pr-24 pt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga hic est soluta? Debitis sunt itaque error eius dolore ut, dicta ducimus reiciendis ad! Accusantium illum maiores deleniti labore similique praesentium.</p>
                    <p className=''>Made with software Developer  Bagabo Bonny</p>
                    <a href="https://github.com/BAGABO-BONNY" target='-blank' className='inline-block bg-primary'></a>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Footer;