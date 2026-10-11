import { useEffect, useState } from "react";


function LocalClock() {
    const [time, setTime] = useState("");

    useEffect(() => {
        function updateClock() {
            const easternTime = new Intl.DateTimeFormat("en-US", {
                timeZone: "America/New_York",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false,
            }).format(new Date());

            setTime(easternTime);
        }

        updateClock();

        const interval = setInterval(updateClock, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="local-time">
            <span className="status-dot"></span>
            <span id="clock">{time || "--:--:--"}</span>
            <span>ET</span>
        </div>
    );
}

export default LocalClock;