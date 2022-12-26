import { Component } from "react";


export default class LifecycleClassComponent extends Component {

    constructor (props) {
        super(props)

        this.state = {
            counter : 10
        }

        console.log("LifecycleClassComponent => constructor")
    }
    
    componentDidMount() {
        console.log("LifecycleClassComponent => componentDidMount")
    }
    componentWillUnmount() {
        console.log("LifecycleClassComponent => componentWillUnmount")
    }

    Increment = () => {
        console.log("increment")
        this.setState((state) => ({
            counter : state.counter + 10
        }))
    }

    render() {

        console.log("LifecycleClassComponent => render")
         
        return <div>
            <hr />
            Class Component
            <br />
            counter : {this.state.counter}

            <br />
            <button
                onClick={this.Increment}
            >Increment</button>
        </div>
    }
}