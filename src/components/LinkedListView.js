import {Component} from "react";
import {LinkedList, Node} from "../data-strucutres/LinkedList";
import LinkedListNodeView from "./LinkedListNodeView";
import Button from 'react-bootstrap/Button';
import * as arrowLine from 'arrow-line';

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

    componentDidUpdate(prevProps, prevState, snapshot) {
        const length = this.state.linkedList.length();
        for (let i = 0; i < length - 1; i++) {
            arrowLine("#node" + i, "#node" + (i + 1));
        }
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
                {nodes.map((node, index) => <LinkedListNodeView node={node} index={index}/>)}
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
