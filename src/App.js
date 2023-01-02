import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import StackView from "./components/StackView";
import LinkedListView from "./components/LinkedListView";
import QueueView from "./components/QueueView";

function App() {
  return (
    <div className="App">
        <LinkedListView className={".linked-list"}/>
        {/*<StackView/>*/}
        {/*<QueueView/>*/}
    </div>
  );
}

export default App;
