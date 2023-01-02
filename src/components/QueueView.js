import {Component} from "react";
import Button from "react-bootstrap/Button";
import Queue from "../data-strucutres/Queue";
import QueueElementView from "./QueueElementView";
import * as arrowLine from 'arrow-line';
import * as d3 from "d3"

class QueueView extends Component {

    constructor(props) {
        super(props);
        this.newElement = "";
    }

    componentDidMount() {
        this.setState({queue: new Queue().enqueue(1).enqueue(2).enqueue(3)});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        d3
            .selectAll("path")
            .remove()

        const length = this.state.queue.length();
        if (length > 0) {
            arrowLine("#element" + (length - 1), "#indicator")
        }
    }

    handleChange(event) {
        this.newElement = event.target.value;
    }

    addToQueue() {
        this.setState({queue: this.state.queue.enqueue(this.newElement)})
    }

    removeFromQueue() {
        this.state.queue.dequeue();
        this.setState({queue: this.state.queue})
    }

    render() {
        const allElements = this.state ? this.state.queue.getAllElements() : [];

        let queue = <div></div>;

        if (allElements.length !== 0) {
            queue = <div className={"queue"}>
                {allElements.map((e, index) => {
                    if (index === allElements.length - 1) {
                        return <div className={"queue-last-element-container"}>
                            <div className={"indicator"} id={"indicator"}>tail</div>
                            <QueueElementView index={index} className={"queue-last-element"}
                                              element={e}></QueueElementView>
                        </div>
                    }

                    return <QueueElementView index={index} element={e}></QueueElementView>
                })}
            </div>;
        }

        return <div className={"queue-container"}>
            {queue}
            <div className={"buttons-container"}>
                <div className={"add-node"}>
                    <input type="text" placeholder="Enter element" onChange={this.handleChange.bind(this)}/>
                    <Button className={"add-node-button"}
                            variant="primary"
                            onClick={this.addToQueue.bind(this)}
                            type="submit">Enqueue</Button>
                </div>
                <Button className={"remove-node-button"}
                        variant="primary"
                        onClick={this.removeFromQueue.bind(this)}
                        type="submit">Dequeue</Button>
            </div>
        </div>
    }
}

export default QueueView;
