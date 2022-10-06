import React from 'react';
import Todo from './Todo';
import './App.css'
import { Paper, TextField, Checkbox, Button } from '@material-ui/core';

class App extends Todo {
    state = {todos:[], currentTodo:""}
    render() {
        const { todos } = this.state;
        console.log(todos);
        return (
            <div className='App flex'>
                <Paper elevation={3} className="container">
                    <div className='heading'>To-Do</div>
                    <form
                    onSubmit={this.handleSubmit}
                    className="flex"
                    style={{ marging: "15px 0" }}
                    >
                        <TextField
                            variant='outlined'
                            size='small'
                            style={{ width: "80%" }}
                            value={ this.state.currentTodo }
                            required={true}
                            onChange={this.hendleChange}
                            placeholder="Add New To-Do"
                        />
                        <Button
                            style={{ height: "40px" }}
                            color="primary"
                            variant='outlined'
                            type='submit'
                        >
                            Add Task
                        </Button>
                    </form>
                    <div>
                        {todos.map((todo) => (
                            <Paper key={todo.id} className="flex todo_container">
                                <Checkbox
                                    checked={todo.completed}
                                    onClick={() => this.handleUpdate(todo.id)}
                                    color="primary"
                                />
                                <div
                                className={todo.completed ? "todo line_through" : "todo"}
                                >
                                {todo.todo}
                                </div>
                                <Button
                                    onClick={() => this.handleDelete(todo.id)}
                                    color="secondary"
                                >
                                    Delete
                                </Button>
                            </Paper>
                        ))}
                    </div>
                </Paper>
            </div>
        );
    }
}

export default App;