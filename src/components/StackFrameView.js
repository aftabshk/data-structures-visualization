import {Component} from "react";

class StackFrameView extends Component {

    render() {
        return <div className={"stack-frame"}>{this.props.element}</div>
    }
}

export default StackFrameView;