import { combineReducers } from "redux";


const initialCountState = {
    count : 0,
    picture : null
};

function count (state = initialCountState, action) {
    switch(action.type){
        case "increment" : 
            return {...state,
                count : state.count+1,
                picture : action.payload.picture
            };
        case "decrement" : 
            return {...state,
                count : state.count-1,
                picture : action.payload.picture
            };  
        case "setCount" :
            return {
                ...state,
                count : action.payload.number,
                picture : action.payload.picture
            };  
         default : 
            return state;
    }
}

const todoListState = [];

function todoList (state = todoListState, action) {
    switch(action.type){
        case "add" :
            if((action.payload).trim() !== "")
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