'use client'

import ImageColumn from "@/components/img-column";
import {useDisplay} from "@/contexts/display-context";
import {useScrollStop} from "@/hooks/use-scroll-top";

export default function ImgDisplay() {

    const {data, colNumber, colWith, loadMoreImage} = useDisplay()

    useScrollStop(() => {
        console.log('Đã dừng cuộn!');
        loadMoreImage()
    }, 250);

    console.log("Leng" + data?.flatMap(item => item).length)

    if (colNumber === null || colWith === null || data === undefined) return null

    return (
        <>
            {data.map((col, index) => {
                return (
                    <div key={index} className="space-y-4">
                        <ImageColumn imgs={col} colWith={colWith} />
                    </div>
                )
            })}
        </>
    )
}