import {Component} from "react";

class QueueElementView extends Component {

    render() {
        const className = this.props.className ? this.props.className : "queue-element"

        return <div id={"element" + this.props.index} className={className}>{this.props.element}</div>
    }
}

export default QueueElementView;