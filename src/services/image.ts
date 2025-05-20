import {imagesList} from "@/data/image";

export function splitArrayEvenlyRandom<T>(array: T[], parts: number): T[][] {
    if (parts <= 0) throw new Error("Số phần phải lớn hơn 0");
    if (parts > array.length) throw new Error("Không thể chia nhiều phần hơn số phần tử");

    // Bước 1: Trộn ngẫu nhiên mảng
    const shuffled = [...array].sort(() => Math.random() - 0.5);

    // Bước 2: Tính kích thước trung bình mỗi phần
    const result: T[][] = [];
    const baseSize = Math.floor(shuffled.length / parts);
    const remainder = shuffled.length % parts;

    let start = 0;
    for (let i = 0; i < parts; i++) {
        const extra = i < remainder ? 1 : 0; // các phần đầu nhận thêm 1 phần tử nếu có dư
        const end = start + baseSize + extra;
        result.push(shuffled.slice(start, end));
        start = end;
    }

    return result;
}

export function reSplitArrayByVerticalMerge<T>(oldResult: T[][], parts: number): T[][] {
    if (parts <= 0) throw new Error("Số phần phải lớn hơn 0");

    // Bước 1: Gộp oldResult theo chiều dọc (transpose rồi flatten)
    const maxLength = Math.max(...oldResult.map(col => col.length));
    const merged: T[] = [];

    for (let i = 0; i < maxLength; i++) {
        for (let j = 0; j < oldResult.length; j++) {
            if (i < oldResult[j].length) {
                merged.push(oldResult[j][i]);
            }
        }
    }

    // Bước 2: Chia theo kiểu chia bài (round-robin)
    const result: T[][] = Array.from({ length: parts }, () => []);
    merged.forEach((item, index) => {
        result[index % parts].push(item);
    });

    return result;
}


export function splitArrayEvenlyRandomBaseResult<T>(array: T[], result: T[][]): T[][] {
    if (result.length === 0) throw new Error("Mảng kết quả phải có ít nhất một phần");
    console.log(array.length)
    console.log(result.flatMap(item => item).length)
    // Duyệt qua array và phân phối từng phần tử theo kiểu chia bài
    array.forEach((item, index) => {
        const targetIndex = index % result.length;
        result[targetIndex].push(item);
    });

    console.log(result.flatMap(item => item).length)

    return result;
}

export function getRndInteger(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) ) + min;
}

export function getImage(page: number) {
    const left = page * 30
    const right = page * 30 + 30
    if (left > imagesList.length) {
        return []
    }
    if (right > imagesList.length) {
        return imagesList.slice(left + 1, imagesList.length - 1)
    }
    return imagesList.slice(left + 1, right)
}

