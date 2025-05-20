import React from "react";

interface ImageItemProps {
    img: string,
    imgWith: number
}

export default function ImageItem({img, imgWith}: ImageItemProps) {
    return (
        <div style={{ width: `${imgWith-2}px` }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={img}
                alt="Preview"
                className="w-full h-auto rounded-2xl shadow"
            />
        </div>
    );
}