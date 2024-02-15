import { useState, useEffect } from "react";

export const useWindowWidth = (): number => {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    const resize = (): void => setWindowWidth(window.innerWidth);

    useEffect(() => {
        const handleResize = (): void => {
            resize();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return windowWidth;
};