import { useEffect } from "react";

function CursorSpotlight () {
    useEffect(() => {
        function handlePointerMove(event) {
            document.documentElement.style.setProperty(
                "--cursor-x",
                `${event.clientX}px`
            );

            document.documentElement.style.setProperty(
                "--cursor-y",
                `${event.clientY}px`
            );
        }

        document.addEventListener("pointermove", handlePointerMove);

        return () => {
            document.removeEventListener("pointermove", handlePointerMove);
        };
    }, []);

    return <div className="cursor-spotlight" aria-hidden="true" />;
}

export default CursorSpotlight;