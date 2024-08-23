import { combineReducers } from "redux";


const initialCountState = 0;

function count (state = initialCountState, action) {
    switch(action.type){
        case "increment" : 
            return state + 1;
        case "decrement" : 
            return state - 1;  
         default : 
            return state;
    }
}

const todoListState = [];

function todoList (state = todoListState, action) {
    switch(action.type){
        case "add" :
            return [...state, action.payload];
        case "remove" :
            return state.filter((_, index) => index !== action.payload)
        case "modifyTask" :
            if((action.payload.newTask).trim() !== "")
            return state.map((item, index) => index === action.payload.index? action.payload.newTask : item)
        default : 
            return state
    }
}

const RootReducer = combineReducers({
    count,
    todoList
});

export default RootReducer;