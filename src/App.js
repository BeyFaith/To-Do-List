import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.scss';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <div className="ui menu">
        <h4 className="App__head">To Do List</h4>
      </div>
      <div className="App__content">
        <Router>
          <Switch>
            <Route exact path = "/add" component={TodoForm} />
            <Route exact path ="/" component ={TodoList} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
