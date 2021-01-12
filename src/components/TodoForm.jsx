import React, {useState, useEffect} from "react";
import { Form, Button, Message  } from "semantic-ui-react";
import {createTasks} from "../redux/actions/task.actions";
import {useSelector, useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";

const TodoForm = () => {
  const newState = useSelector(state => state);
  const dispatch = useDispatch();
  const [item, setItem] = useState('');
  const { push } = useHistory()

 useEffect(() => {
     
 }, []);
 
const handleAdd = (e) => {
  console.log(item);
  e.preventDefault();


  dispatch(createTasks(item));
  push({pathname: '/'})
}


  return (
    <Form success className="todoForm" onSubmit={handleAdd}>
    <Form.Input  placeholder='Enter a task...' className="input" onChange={(e) => {setItem(e.target.value)}}/>
    <Message
      success
      content="Successful"
    />
    <Button basic color='green' className="btn-submit">
      Add Task
    </Button>
  </Form>
  );
};

export default TodoForm;
