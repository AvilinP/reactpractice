import React, {Component} from "react";


class ClassComp extends React.Component {
    
    render() {

        const styles = {
            color: "lightgreen",
            backgroundColor: "lightyellow",
            padding: "0.5rem",
            margin: 0,
            textAlign: "center"
        }

        return (
            <div>
                <p style={styles}>{this.props.whatever} Love you!</p>
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
            question: "Is state important?",
            answer: "Ofc!"
        }
    }

    render() {

        return(
            <div> 
                <h1>{this.state.question} {this.state.answer} </h1>
            </div>
        )
    }
}




export {ClassComp, Above};
