import {Component} from "react";
import {LinkedList, Node} from "../data-strucutres/LinkedList";
import LinkedListNodeView from "./LinkedListNodeView";
import Xarrow from "react-xarrows";
import Button from 'react-bootstrap/Button';

class LinkedListView extends Component {

    constructor(props) {
        super(props);
        this.newElement = "";
    }

    componentDidMount() {
        this.setState({
            linkedList: new LinkedList()
                .insert(new Node(100))
                .insert(new Node(90))
                .insert(new Node(80))
        });
    }

    handleChange(event) {
        this.newElement = event.target.value;
    }

    addToLinkedList() {
        this.setState({linkedList: this.state.linkedList.insert(new Node(this.newElement))})
    }

    removeFromLinkedList() {
        this.setState({linkedList: this.state.linkedList.remove()})
    }

    render() {
        const nodes = this.state ? this.state.linkedList.getAllNodes() : [];

        if (nodes.length === 0) return <div></div>;

        return <div className={"linked-list-container"}>
            <div className={"linked-list"}>
                {nodes.reduce((acc, node, index) => {
                    const newAcc = acc.concat(<LinkedListNodeView node={node} index={index}/>)

                    if (index === 0 || index === nodes.length) return newAcc;

                    const startIndex = "node" + (index - 1)
                    const endIndex = "node" + index

                    return newAcc.concat(<Xarrow
                        start={startIndex} end={endIndex}/>);
                }, [])}
            </div>
            <div className={"add-node"}>
                <input type="text" placeholder="Enter element" onChange={this.handleChange.bind(this)}/>
                <Button variant="primary" onClick={this.addToLinkedList.bind(this)} type="submit">Add</Button>
            </div>
            <Button variant="primary" onClick={this.removeFromLinkedList.bind(this)} type="submit">Remove</Button>
        </div>
    }
}

export default LinkedListView;
