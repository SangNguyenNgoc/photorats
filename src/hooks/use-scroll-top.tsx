import { useEffect } from 'react';

/**
 * useScrollStop
 * @param  callback   – Hàm được gọi khi dừng cuộn
 * @param  delay      – Thời gian “im lặng” (ms) mới tính là dừng (mặc định 200 ms)
 */
export function useScrollStop(callback: () => void, delay = 200) {
    useEffect(() => {
        let timer: number | undefined;
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Chỉ xử lý nếu cuộn xuống
            if (currentScrollY > lastScrollY) {
                if (timer) clearTimeout(timer);
                timer = window.setTimeout(() => {
                    callback();
                }, delay);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (timer) clearTimeout(timer);
        };
    }, [callback, delay]);

}
