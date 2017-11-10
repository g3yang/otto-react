
import API from '../services/API';
import * as types from './actionTypes';

export function loadTodos(){
    return function(dispatch){
        API.getTodos().then((res)=>{
            if(res.ok){
                res.json().then(todos=>{
                    dispatch(loadTodosSuccess(todos));    
                })
            }
        });
    }
}

export function deleteTodoSuccess(id){
    return {
        type: types.DEL_TODO_SUCCESS,
        id
    }
}

export function deleteTodo(id){
    return function(dispatch){
        API.deleteTodo(id).then((res)=>{
            if(res.ok){
                dispatch(deleteTodoSuccess(id));
            }
        });
    }
}


export function loadTodosSuccess(todos){
    return {
        type: types.LOAD_TODOS_SUCCESS,
        todos
    }
}

export function addTodo(description){
    return function(dispatch){
        API.addTodo(description).then((res)=>{
            if(res.ok){
                res.json().then((newTodo)=>{
                    dispatch(addTodoSuccess(newTodo));
                })
            }
        })
    }
}

export const addTodoSuccess = newTodo =>{
    return {
        type: types.ADD_TODO_SUCCESS,
        newTodo
    }
}

export const toggleTodo = id => {
    return {
        type: types.TOGGLE_TODO,
        id
    }
}