import axios from "axios"

//Action for counter
export const increment = () => changeCount(1, "increment");
export const decrement = () => changeCount(1, "decrement");
export const inputSetCount = (number) => changeCount(number, "setCount");

const changeCount = (number, action) => {
    return async(dispatch) => {
        try{
            const respone = await axios.get(`https://api.thecatapi.com/v1/images/search`);
            const picture = respone.data[0].url;
            dispatch({
                type : action,
                payload : {
                    number,
                    picture
                }
            })}
        catch(err){
            console.log(`Error : ${err}`);
        }
    }
}

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