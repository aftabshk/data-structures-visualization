import {Component} from "react";
import {LinkedList, Node} from "../data-strucutres/LinkedList";
import LinkedListNodeView from "./LinkedListNodeView";
import Xarrow from "react-xarrows";

class LinkedListView extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.setState({
            linkedList: new LinkedList()
                .insert(new Node(100))
                .insert(new Node(90))
                .insert(new Node(80))
        });
    }

    render() {
        const nodes = this.state ? this.state.linkedList.getAllNodes() : [];
        console.log(nodes);

        if (nodes.length === 0) return <div></div>;

        return <div className={"linked-list"}>
            {nodes.reduce((acc, node, index) => {
                const newAcc = acc.concat(<LinkedListNodeView node={node} index={index}/>)

                if (index === 0 || index === nodes.length) return newAcc;

                const startIndex = "node" + (index - 1)
                const endIndex = "node" + index

                return newAcc.concat(<Xarrow
                    start={startIndex} end={endIndex}/>);
            }, [])}
        </div>
    }
}

export default LinkedListView;
