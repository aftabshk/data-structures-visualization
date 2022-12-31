import {Component} from "react";
import Stack from "../data-strucutres/Stack";
import StackFrameView from "./StackFrameView";

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
        this.setState({stack: this.state.stack.pop()})
    }

    render() {
        const allElements = this.state ? this.state.stack.data.reverse() : [];

        if (allElements.length === 0) return <div></div>;

        return <div className={"stack-container"}>
            {allElements.map((e) => <StackFrameView element={e}></StackFrameView>)}
        </div>
    }
}

export default StackView;
