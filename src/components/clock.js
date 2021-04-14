import React from "react";

function Clock() {

    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    if (hours < 12) {
        timeOfDay = "morning";
    } else if (hours >= 12 && hours < 18) {
        timeOfDay = "afternoon";
    } else {
        timeOfDay = "evening";
    }

    return (
        <div className="clock">
            <h1>Have a nice {timeOfDay}! </h1>
        </div>
    )

}

export default Clock;