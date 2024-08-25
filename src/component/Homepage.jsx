import React, { act, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, inputSetCount, add, remove, modifyTask } from "../action/action";


function Homepage () {
    //For counter
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    const [putCount, setPutCount] = useState();

    const handleCountAction = (e, action) => {
        e.preventDefault();
        dispatch(action())
    }

    const handleCountInput = (e, action) => {
        e.preventDefault();
        const numberPutCount = Number(putCount.trim());
        if(!numberPutCount) return setPutCount("");
        dispatch(action(numberPutCount, action));
        setPutCount("");
    }

    //For todoList
    const [todoListInput, setTodoListInput] = useState("");
    const [modifyTodoListInput, setModifyTodoListInput] = useState({})
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
        dispatch(modifyTask(modifyTodoListInput[index], index));
        setModifyTodoListInput(prevState => ({
            ...prevState,
            [index] : ""
        }))
    }

    const handelModifyInputChange = (e, index) => {
        setModifyTodoListInput({
            ...modifyTodoListInput,
            [index] : e.target.value
        })
    }

    return (
        <div>
            <h1>Tong</h1>
            <h1>{count.count}</h1>
            <form action="" >
                <button type="button" onClick={(e) => handleCountAction(e, increment)}>+</button>
                <button type="button" onClick={(e) => handleCountAction(e, decrement)}>-</button>
                <br /><br />
            </form>
            <form action="" onSubmit={(e) => handleCountInput(e, inputSetCount)}>
            <input type="text" value={putCount} onChange={(e) => setPutCount(e.target.value)} placeholder="Try to put number..."/>
                <br /><br />
                <button type="button" onClick={(e) => handleCountInput(e, inputSetCount)}>Change count</button> 
            </form>
            <br />
            {count.picture? <img src={count.picture} alt="" /> : "Loading....."}
            <h1>Please add your task</h1>
            <form action="" onSubmit={handleAddTodoList}>
                <input type="text" value={todoListInput} onChange={(e) => setTodoListInput(e.target.value)} placeholder="Add your task..." />
                <br /><br />
                <button type="submit">Add new task..</button>
                <hr />
            </form>
            <ul>
                {todoList.map((item, index) => (
                    <li key={index}>
                        Task {index+1} : {item}
                        <br />
                        <button onClick={() => handleRemoveTodoList(index)}>Remove</button>
                        <br />
                        <input type="text" value={modifyTodoListInput[index]} onChange={(e) => handelModifyInputChange(e, index)} placeholder="Modify your task.." />
                        <br />
                        <button onClick={() => handleModifyTask(index)}>Modify</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Homepage;
