"use client";

import useCanvasCursor from '@/hooks/use-canvasCursor';

const CustomCursor = () => {
    useCanvasCursor();

    return <canvas className='pointer-events-none fixed inset-0 z-[10000]' id='canvas' />;
};

export default CustomCursor;
