import React from "react";
import App from "./App"

export default class FetchIncome extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            range: null,
            badInput: false
        };
        this.handleClick = this.handleClick.bind(this)
    }

    async handleClick() {
        try {
        this.setState({range: {major: "Calculating...", location:"", industry:""}})
        const url = "https://edith-delta-api.herokuapp.com/test/" + document.getElementById("school").value + "/" + document.getElementById("major").value + "/" + document.getElementById("year").value;
        const response = await fetch(url, {headers: {"accept": "application/json",'Access-Control-Allow-Origin':'*'}});
        const data = await response.json();
        console.log(data);
        this.setState({range: data, loading: false, badInput: false});
        console.log(document.getElementById("school").value)
        }
        catch(error) {
            this.setState({badInput: true});
        }
        // var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        // targetUrl = 'https://edith-delta-api.herokuapp.com/test/this/will/work'
        // fetch(proxyUrl + targetUrl, {headers: {"accept": "application/json","Access-Control-Allow-Origin": "*"}})
        //     .then(blob => blob.json())
        //     .then(data => {
        //         console.table(data);
        //         document.querySelector("pre").innerHTML = JSON.stringify(data, null, 2);
        //         this.setState({range: data, loading: false});
        //         return data;
        //     })
        //     .catch(e => {
        //         console.log(e);
        //         return e;
        //     });
    };

    render() {
        return (
            <div>
                <br></br>
                <button onClick={this.handleClick}>Submit</button>
                <br></br>
                <br></br>
                <br></br>
                {this.state.badInput ? <div><b>Please make sure to fill in all fields before submitting</b></div>:
                    this.state.loading ? <div><b>Please enter your information</b></div> : 
                    <div>
                        {this.state.range.major}
                        {this.state.range.location}
                        {this.state.range.industry}
                    </div>
                    }
            </div>
        )
    };

}
