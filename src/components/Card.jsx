import React from 'react';
import { FaFileAlt } from 'react-icons/fa';
import { MdDownloadForOffline } from 'react-icons/md';
import { motion } from 'framer-motion';
import { MdCancel } from "react-icons/md";

function Card({ data, reference }) {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.1 }} dragElastic={0.1} className='relative w-[13rem] h-[15rem] bg-zinc-900/90 text-white rounded-[2rem] px-5 pt-8 pb-12 overflow-hidden'>
            <div className='flex flex-col justify-between h-full'>
                {/* File icon */}
                <span className='text-xl'>
                    <FaFileAlt />
                </span>
                {/* File description */}
                <div className='text-sm py-5 font-semibold'>
                    {data.desc}
                </div>
                {/* File size and download icon */}
                <div className='flex justify-between items-center'>
                    <span className='font-semibold text-[15px]'>
                        {data.size}
                    </span>
                    <span className='text-3xl'>
                        {data.isIcon ? <MdDownloadForOffline /> : <MdCancel />}
                    </span>
                </div>
            </div>
            {/* Download button */}
            <div className={`absolute bottom-0 left-0 w-full ${data.buttonColor === "blue" ? "bg-blue-600" : "bg-green-600"} py-2 text-center`}>
                <span className='text-lg font-semibold'>
                    Download
                </span>
            </div>

        </motion.div>
    );
}

export default Card;
