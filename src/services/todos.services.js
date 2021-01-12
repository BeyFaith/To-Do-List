import axios from "axios"

class TodoServices {
    static getTasks() {
        const res = axios.get("http://localhost:5000/api/tasks")
        return res;
    }
    static deleteTask(id) {
        const res = axios.delete(`http://localhost:5000/api/tasks/${id}`)
        return res
    }
    static createTask(task) {
        const res = axios.post("http://localhost:5000/api/tasks", {task})
        return res;
    }
    
}

export default TodoServices;