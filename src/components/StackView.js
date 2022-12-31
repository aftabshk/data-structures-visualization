import {Component} from "react";
import Stack from "../data-strucutres/Stack";
import StackFrameView from "./StackFrameView";
import Button from "react-bootstrap/Button";

class StackView extends Component {

    constructor(props) {
        super(props);
        this.newElement = "";
    }

    componentDidMount() {
        this.setState({stack: new Stack().push(1).push(2)});
    }

    handleChange(event) {
        this.newElement = event.target.value;
    }

    pushToStack() {
        this.setState({stack: this.state.stack.push(this.newElement)})
    }

    popFromStack() {
        this.state.stack.pop();
        this.setState({stack: this.state.stack})
    }

    render() {
        const allElements = this.state ? this.state.stack.getAllElements().reverse() : [];

        let stack = <div></div>;

        if (allElements.length !== 0) {
            stack = <div className={"stack"}>
                {allElements.map((e) => <StackFrameView element={e}></StackFrameView>)}
            </div>;
        }

        return <div className={"stack-container"}>
            {stack}
            <div>
                <div className={"add-node"}>
                    <input type="text" placeholder="Enter element" onChange={this.handleChange.bind(this)}/>
                    <Button variant="primary" onClick={this.pushToStack.bind(this)} type="submit">Push</Button>
                </div>
                <Button variant="primary" onClick={this.popFromStack.bind(this)} type="submit">Pop</Button>
            </div>
        </div>
    }
}

export default StackView;
