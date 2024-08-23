import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, add, remove, modifyTask } from "../action/action";


function Homepage () {
    //For counter
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    const handleCountAction = (e, action) => {
        e.preventDefault();
        dispatch(action());
    }

    //For todoList
    const [todoListInput, setTodoListInput] = useState("");
    const [modifyTodoListInput, setModofyTodoListInput] = useState("")
    const todoList = useSelector(state => state.todoList);

    const handleAddTodoList = (e) => {
        e.preventDefault();
        dispatch(add(todoListInput));
        setTodoListInput("")
    }

    const handleRemoveTodoList = (index) => {
        dispatch(remove(index));
    }

    const handleModifyTask = (index) => {
        dispatch(modifyTask(modifyTodoListInput, index));
        setModofyTodoListInput("");
    }

    return (
        <div>
            <h1>Tong</h1>
            <h1>{count}</h1>
            <form action="">
                <button type="button" onClick={(e) => handleCountAction(e, increment)}>+</button>
                <button type="button" onClick={(e) => handleCountAction(e, decrement)}>-</button>
            </form>
            <h1>Please add your task</h1>
            <form action="" onSubmit={handleAddTodoList}>
                <input type="text" value={todoListInput} onChange={(e) => setTodoListInput(e.target.value)} placeholder="Add your task..." />
                <br /><br />
                <button type="submit">Add new task..</button>
            </form>
            <ul>
                {todoList.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => handleRemoveTodoList(index)}>Remove</button>
                        <input type="text" value={modifyTodoListInput} onChange={(e) => setModofyTodoListInput(e.target.value)} placeholder="Revise your task.." />
                        <button onClick={() => handleModifyTask(index)}>Revise</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Homepage;