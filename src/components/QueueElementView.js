import {Component} from "react";

class QueueElementView extends Component {

    render() {
        return <div className={"queue-element"}>{this.props.element}</div>
    }
}

export default QueueElementView;