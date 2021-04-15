import React, {Component} from "react";


class ClassComp extends React.Component {
    
    render() {

        const styles = {
            color: "lightgreen",
            backgroundColor: "lightyellow",
            padding: "0.2rem",
            margin: 0,
            textAlign: "center"
        }

        return (
            <div>
                <p style={styles}>{this.props.whatever} You're the best!</p>
            </div>
        )
    }
}

class Above extends React.Component {

    render() {

        return(
            <div className="header">
                <Header username= "Ada"/>
                <Greetings />
                <State />
            </div>
        )
    }

}

  class Header extends React.Component {
    render() {
        return(
            <header>
                <h3>Welcome, {this.props.username}</h3>
            </header>
        ) 
    }
}


class Greetings extends Component {
    render() {

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
            <h1>Good {timeOfDay} to you, sir or madam!</h1>
        )
    


    }
}

class State extends Component {

    constructor() {
        super();
        this.state = {
            isLoggedIn: true
        }
    }

    render() {

        let wordDisplay
        if(this.state.isLoggedIn == true) {
            wordDisplay = "in";
        } else {
            wordDisplay = "out";
        }
        return(
            <div> 
                <h3>You are currently logged {wordDisplay} </h3>
            </div>
        )
    }
}




export {ClassComp, Above};
