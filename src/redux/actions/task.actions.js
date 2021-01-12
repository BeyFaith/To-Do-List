import {GET_TASKS, DELETE_TASKS, CREATE_TASKS} from "./action.types";
import TaskServices from "../../services/todos.services";

export const getTasks = () => ({
    type: GET_TASKS,
    payload: TaskServices.getTasks()
});
export const deleteTasks = (id) => ({
    type: DELETE_TASKS,
    payload: TaskServices.deleteTask(id)
})

export const createTasks = (item) => ({
    type: CREATE_TASKS,
    payload: TaskServices.createTask(item)
})