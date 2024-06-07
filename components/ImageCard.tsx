import React from 'react'
import Image from 'next/image'
const ImageCard:React.FC<Props> = ({imgsrc}) => {
    return (
        <div className="sm:mb-2 sm:w-full pt-2 pl-2 pr-2 pb-8 bg-white rounded-lg">
            <Image loading="lazy" src={imgsrc} alt={"besties"} height={1000} width={1200} />
        </div>
    )
}

export default ImageCard