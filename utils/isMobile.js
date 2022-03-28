import { useState, useEffect } from "react";
export default function isMobile() {
    const [width, setWidth] = useState(0);
    if (typeof window !== "undefined") {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
    
     
    return width <= 768;
}

