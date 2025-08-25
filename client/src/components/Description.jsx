import React from 'react'
import { assets } from '../assets/assets'
import {motion} from 'framer-motion'

const Description = () => {
  return (
    <motion.div 
    initial={{opacity:0.2,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    className='flex flex-col items-center justify-center
     my-24 p-6 md:px-28'>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'> Create AI Images</h1>
      <p className='text-gray-500 mb-8'>Turn your imagination into visuals</p>

      <div className='flex flex-col gap-5 md:gap-14 md:flex-row
      items-center'>
        <img src={assets.sample_img_1}  alt="" className='w-80 xl:w-96 rounded-lg' />
        <div >
            <h2 className='text-3xl font-medium max-w-lg 
        mb-4 '>Intoducing the AI-Powered Text to Image Generator</h2>
            <p className='text-gray-600 mb-4'>Easily bring your ideas to life with our free AI image generator. 
              Whether you're crafting stunning visuals, unique illustrations, or concepts that exist only in your imagination,
               our tool turns your text into eye-catching images in seconds. Simply imagine it, describe it, 
               and watch as it comes to life instantly. With advanced AI technology at your fingertips, the possibilities for creativity are endless
            </p>
            <p className='text-gray-600'>Just type in your idea, and our AI will turn it into stunning, 
              high-quality images in seconds. From detailed product visuals and character designs to lifelike portraits 
              and concepts that exist only in your imagination, anything can be brought to life effortlessly. 
              Powered by cutting-edge AI technology, you can explore limitless creative possibilities 
              and bring your vision to reality like never before.
            </p>
        </div>
      </div>
    </motion.div>
  )
}

export default Description
