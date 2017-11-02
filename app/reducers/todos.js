import * as types from '../actions/actionTypes';


const todos = (state=[],action) =>{
    switch (action.type){
        case types.ADD_TODO:
            return [
                ...state,
                {
                    description: action.description,
                    completed: false
                }
            ];
        case types.TOGGLE_TODO:
            return state.map(todo=>{
                if (todo.id == action.id){
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo;
            });
        case types.LOAD_TODOS_SUCCESS:
            return action.todos;
        case types.DEL_TODO_SUCCESS:
            let index=state.findIndex(todo=>todo._id == action.id);
            state.splice(index,1);
            return state;
        default:
            return state;
    }
}

export default todos;