"use client"

import React, {createContext, useContext, useEffect, useState} from "react";
import {viewSize} from "@/constants/size";
import {
    getImage,
    reSplitArrayByVerticalMerge,
    splitArrayEvenlyRandom,
    splitArrayEvenlyRandomBaseResult
} from "@/services/image";

interface IDisplayContextType {
    data: string[][] | undefined
    colNumber: number | null
    colWith: number | null
    loadMoreImage: () => void
}

const DisplayContext = createContext<IDisplayContextType | undefined>(undefined)

export function DisplayProvider({children}: {
    children: React.ReactNode
}) {

    const [columns, setColumns] = useState<number | null>(null)
    const [columnWidth, setColumnWidth] = useState<number | null>(null)
    const [data, setData] = useState<string[][] | undefined>(undefined)
    const [page, setPage] = useState(0)

    useEffect(() => {
        const updateSize = () => {
            const winWidth = window.innerWidth

            // Tính phần width có thể sử dụng cho cột
            const availableWidth = winWidth - viewSize.PADDING

            // Ước lượng số cột ban đầu
            let colCount = Math.floor((availableWidth) / (viewSize.MAX_WIDTH + viewSize.GAP))

            // Tính lại chiều rộng mỗi cột
            let totalGap = (colCount - 1) * viewSize.GAP
            let columnWidth = (availableWidth - totalGap) / colCount

            // Nếu vượt quá MAX_WIDTH, thử tăng số cột lên để thu hẹp lại
            while (columnWidth > viewSize.MAX_WIDTH) {
                colCount++
                totalGap = (colCount - 1) * viewSize.GAP
                columnWidth = (availableWidth - totalGap) / colCount
            }

            setColumns(colCount)
            setColumnWidth(columnWidth)

            setData(prev => {
                if (prev && prev.length === colCount) return prev
                return prev ? reSplitArrayByVerticalMerge(prev, colCount) : splitArrayEvenlyRandom(getImage(0), colCount)
            })
        }

        updateSize()
        window.addEventListener("resize", updateSize)
        return () => window.removeEventListener("resize", updateSize)
    }, [])


    const loadMoreImage = () => {
        const offSet = page + 1
        const newImgs = getImage(offSet);

        console.log(newImgs)

        if (newImgs.length > 0) {
            const newData = data ? splitArrayEvenlyRandomBaseResult(newImgs, data) : [];
            setData(newData);
            setPage(prev => prev + 1);
        }
    };


    return (
        <DisplayContext.Provider
            value={{
                data,
                colNumber: columns,
                colWith: columnWidth,
                loadMoreImage
            }}
        >
            {children}
        </DisplayContext.Provider>
    )
}

export const useDisplay = () => {
    const context = useContext(DisplayContext)
    if (!context)
        throw new Error('useDisplay phải được sử dụng trong DisplayProvider')
    return context
}