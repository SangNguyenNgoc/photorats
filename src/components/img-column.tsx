import ImageItem from "@/components/img-item";
import React from "react";
import {getRndInteger} from "@/services/image";

interface ImageColumnProps {
    imgs: string[]
    colWith: number
}

export default function ImageColumn({imgs, colWith}: ImageColumnProps) {
    return (
        <>
            {imgs.map((item, index) => <ImageItem key={index} img={item} imgWith={colWith}/>)}
            <div style={{width: `${colWith - 2}px`, height: `${getRndInteger(250, 400)}px`}} className={`bg-gray-300 rounded-2xl`}></div>
        </>
    )
}