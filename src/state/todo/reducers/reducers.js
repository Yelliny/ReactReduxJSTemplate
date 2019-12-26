import { ADD_TODO } from "../actions/actionsTypes";

const initialState = {
    todos: [{
        text: 'Study For Job Interviews!!',
        completed: false
    }]
};

export const todoApp = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                todos: state.todos.concat(action.todos)
            };
			
        default:
            return state;
    }
}