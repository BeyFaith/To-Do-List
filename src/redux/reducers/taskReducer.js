import {GET_TASKS, DELETE_TASKS, CREATE_TASKS } from "../actions/action.types";
import { fulfilled,rejected } from "../../utils/action.util";
 

const initialState = {
    tasks: [],
    index: undefined
}
const taskReducer = (state=initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case fulfilled(GET_TASKS):
        
            return {
                ...state,
                tasks: payload.data.tasks
            }
            
        case  fulfilled(DELETE_TASKS):
            console.log(state, '>>>>>>>>');

            return {
                ...state,
                tasks: payload
            }
        case 'LOAD_INDEX': 
            return {
             ...state,
             tasks: state.tasks.tasks,
             index: payload   
        }
        case fulfilled(CREATE_TASKS):
            console.log(payload);
            return {
                ...state,
                tasks: [payload.data.tasks].concat(state.tasks)
            }
        default:
        return state;
    }
}

export default taskReducer;