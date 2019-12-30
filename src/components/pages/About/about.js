import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { getTODOs } from '../../../state/todo/actions/actions';

function About() {

    const hist = useHistory();
    const [count, setCount] = useState(0);
    const numOfTodos = useSelector(state => state.todoApp.todos.length);
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => hist.push('/')}>Back</button>
            <button onClick={() => setCount(count + 1)}>{`Increment local state with hook ${count}`}</button>
            <button onClick={() => dispatch(getTODOs())}>add todo with hooks as well</button>
            <span>{`About knows what is TODOs count by hooks: ${numOfTodos}`}</span>
        "About"
      </div>      
        );
      }
      
      export default About;
