"use client";

import { useState, useEffect } from "react";

export function usePreloadImages(imageUrls: string[]) {
    const [loadedRatio, setLoadedRatio] = useState(0);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        if (!imageUrls || imageUrls.length === 0) return;

        let loadedCount = 0;
        const loadedArray: HTMLImageElement[] = new Array(imageUrls.length);

        const handleProgress = () => {
            loadedCount++;
            setLoadedRatio(loadedCount / imageUrls.length);
            if (loadedCount === imageUrls.length) {
                setImages(loadedArray);
                setIsComplete(true);
            }
        };

        imageUrls.forEach((url, i) => {
            const img = new window.Image();
            img.src = url;
            img.onload = () => {
                loadedArray[i] = img;
                handleProgress();
            };

            img.onerror = () => {
                console.warn(`[Scrollytelling Engine] Missing frame at: ${url}`);
                loadedArray[i] = img;
                handleProgress();
            };
        });
    }, [imageUrls]);

    return { loadedRatio, images, isComplete };
}
