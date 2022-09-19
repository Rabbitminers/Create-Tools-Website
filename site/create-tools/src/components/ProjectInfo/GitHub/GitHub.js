import React, { Component } from 'react';
import "../ProjectInfo.css"

class GitHubData extends Component{

    constructor(props) {
        super(props)

        this.state = {
            data: "",
        }
    }

    componentDidMount() {
        fetch('https://api.github.com/repos/rabbitminers/create-tools')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    data: data
                })
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                <p class="tldr">
                    Last Pushed
                    <br/>
                </p>
                <br/>
                {this.state.data.pushed_at}
                <p class="tldr">
                    Stars: ⭐{this.state.data.stargazers_count}
                </p>
                <p class="tldr">Open Issues: {this.state.data.open_issues_count}</p>
                <br/>
                {this.state.data.full_name}
                <p class="tldr">Active Forks: {this.state.data.forks_count}</p>
            </div>
        )
    }
}

export default GitHubData;