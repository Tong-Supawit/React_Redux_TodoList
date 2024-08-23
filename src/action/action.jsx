//Action for counter
export const increment = () => ({
    type : "increment"
})

export const decrement = () => ({
    type : "decrement"
})

//Action for todoList
export const add = (task) => ({
    type : "add",
    payload : task
})

export const remove = (index) => ({
    type : "remove",
    payload : index
})

export const modifyTask = (newTask, index) => ({
    type : "modifyTask",
    payload : {
        newTask,
        index
    }
})