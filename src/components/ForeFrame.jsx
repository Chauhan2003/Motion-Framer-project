import React, { useRef } from 'react';
import Card from './Card';

function ForeFrame() {
    const data = [
        {
            desc: "Updated description for the first item.",
            size: "1.5mb",
            isIcon: false,
            buttonColor: "blue",
        },
        {
            desc: "Another updated description for the second item.",
            size: "2.0mb",
            isIcon: true,
            buttonColor: "green",
        },
        {
            desc: "Updated description for the third item.",
            size: "1.2mb",
            isIcon: false,
            buttonColor: "green",
        },
        {
            desc: "Yet another updated description for the fourth item.",
            size: "0.8mb",
            isIcon: true,
            buttonColor: "blue",
        },
        {
            desc: "Brand new description for the fifth item.",
            size: "3.5mb",
            isIcon: false,
            buttonColor: "blue",
        },
        {
            desc: "Exciting description for the sixth item.",
            size: "1.8mb",
            isIcon: true,
            buttonColor: "green",
        },
    ];
    
    console.log(data);
    

    const containerRef = useRef(null);

    return (
        <div ref={containerRef} className='absolute top-0 w-full h-screen z-[3] flex flex-wrap gap-3 p-5'>
            {data.map((item, index) => (
                <Card key={index} data={item} reference={containerRef} />
            ))}
        </div>
    );
}

export default ForeFrame;
