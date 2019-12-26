import React from 'react';
import { connect } from 'react-redux'
import { getTODOs } from '../../../state/todo/actions/actions';

const classes = require('./homeScreen.scss');

class TODOList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(classes);
        return (
            <div className={"container"}>
                <button onClick={() => this.props.getMoreTodos()}>
                    Get More TODOS
                </button>
                {`num of current todos is ${this.props.todos.length}`}
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        todos: state.todoApp.todos
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getMoreTodos: () => dispatch(getTODOs())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TODOList);