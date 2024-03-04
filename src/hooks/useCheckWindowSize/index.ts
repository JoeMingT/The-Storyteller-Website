import { useEffect, useState } from "react";

interface WindowSizeParams {
    width: number;
    height: number;
}

export default function useWindowSize(): WindowSizeParams {
    const [size, setSize] = useState<WindowSizeParams>({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return size;
}
