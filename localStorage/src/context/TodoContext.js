import { createContext, useContext } from "react";


export const TodoContext=createContext({
    todos:[
        {
            id: 1,
            msg: "todo msg",
            isCompleted: false
        }
    ],
    addTodo : (todo)=>{},
    updateTodo: (id, todo)=>{},
    deleteTodo: (id)=>{},
    completeTodo: (id)=>{}

});

export const TodoProvider=TodoContext.Provider
export const useTodo=()=>{
    return useContext(TodoContext);
}