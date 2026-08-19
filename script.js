document.addEventListener("pointermove", (event) => {
    document.documentElement.style.setProperty(
        "--cursor-x",
        `${event.clientX}px`
    );

    document.documentElement.style.setProperty(
        "--cursor-y",
        `${event.clientY}px`
    );
});

const clock = document.querySelector("#clock");

function updateClock() {
    const easternTime = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/New_York",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    }).format(new Date());

    clock.textContent = easternTime;
}

updateClock();
setInterval(updateClock, 1000);