import * as ActionsTypes from './actionsTypes';

const addTODO = (todos) => ({
    type: ActionsTypes.ADD_TODO,
    todos
});

export const getTODOs = () => async (dispatch) => {
    try {
        const todos = await fetchTODOs();
        dispatch(addTODO(todos));
    } catch (e) {
        console.error(e);
    }

};

const fetchTODOs = () => {
    return new Promise(resolve =>
        resolve(
            [
                {
                    text: "Came from fetcher",
                    completed: false
                }
            ]
        ));
}