import React from "react";

function Clock() {

    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    const styles = {
        color: "lightyellow",
        backgroundColor: "lightgreen",
        padding: "1.5rem"
    }

    if (hours < 12) {
        timeOfDay = "morning";
        styles.color = "green";
    } else if (hours >= 12 && hours < 18) {
        timeOfDay = "afternoon";
    } else {
        timeOfDay = "evening";
        styles.color = "darkblue";
    }


    return (
        <div className="clock">
            <h1 style={styles}> Have a nice {timeOfDay}! </h1>
        </div>
    )

}

export default Clock;