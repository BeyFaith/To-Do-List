/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import {getTasks,deleteTasks} from "../redux/actions/task.actions";
import {useSelector, useDispatch} from "react-redux";
import { Message, Button } from "semantic-ui-react";

const TodoList = () => {
  const newState = useSelector(state => state);
  const dispatch = useDispatch();

 useEffect(() => {
     dispatch(getTasks());
 }, []);
    
  const handleDelete = (id) => {
    dispatch({type: 'LOAD_INDEX', payload: id})
    dispatch(deleteTasks(id))
  };

  return (
    <div className="todoList" >
      <h1 style={{ color: "#1d2d50" }}>Today's Tasks</h1>
      {newState?.tasks?.tasks?.map((task, index) => (
          <div key={task.id}>
            <Message >
                <p>{task.task}</p>
            </Message>
            <Button inverted color='blue'>Edit</Button>
            <Button inverted color='red' onClick={() => handleDelete(task.id)}>Delete</Button>
          </div>
      ))}
    </div>
  );
};

export default TodoList;
