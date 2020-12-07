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
        this.setState({range: "Calculating predicted income...", loading: false});
        const school = document.getElementById("school").value;
        const major1 = document.getElementById("major1").value;
        const major2 = document.getElementById("major2").value;
        const education = document.getElementById("education").value;
        const year = document.getElementById("year").value;
        const gender = document.getElementById("gender").value;
        const state = document.getElementById("state").value;
        const industry = document.getElementById("industry").value;
        var url = "https://edith-delta-api.herokuapp.com/api/" + school + "/" + major1 + "/" + major2 + "/" + education + "/" + year + "/" + gender + "/" + state + "/" + industry;
        const use = url.replaceAll(" ", "%20");
        console.log(use);
        const response = await fetch(url, {headers: {"accept": "application/json",'Access-Control-Allow-Origin':'*'}});
        const data = await response.json();
        console.log(data);
        this.setState({range: "Your predicted annual salary is: $" + data, badInput: false});
        console.log(this.state.range.data);
        console.log(document.getElementById("school").value);
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
                {this.state.badInput ? <div><b>An error occurred, please try again.</b></div>:
                    this.state.loading ? <div><b>Please enter your information.</b></div> : 
                    <div><b>
                        {this.state.range}
                        </b>
                    </div>
                    }
            </div>
        )
    };

}
