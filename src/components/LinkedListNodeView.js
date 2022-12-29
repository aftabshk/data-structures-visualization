import {Component} from "react";

class LinkedListNodeView extends Component {

    render() {
        return <div id={"node" + this.props.index} className={"linked-list-node-container"}>
            <div className={"linked-list-node-data"}>{this.props.node.data}</div>
            <div className={"linked-list-node-next"}/>
        </div>;
    }
}

export default LinkedListNodeView;