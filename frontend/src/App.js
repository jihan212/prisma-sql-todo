import React from "react";
import Todo from "./Todo";
import { Paper, TextField } from "@material-ui/core";
import { Checkbox, Button } from "@material-ui/core";
import "./App.css";

class App extends Todo {
    state = { todo: [], currentTodo: "" };
    render() {
        const { todo } = this.state;
        return (
            <div className="App flex">
                <Paper elevation={3} className="container">
                    <div className="heading">TO-DO</div>
                    <form
                        onSubmit={this.handleSubmit}
                        className="flex"
                        style={{ margin: "20px 5px" }}
                    >
                        <TextField
                            variant="outlined"
                            size="small"
                            style={{ width: "80%" }}
                            value={this.state.currentTodo}
                            required={true}
                            onChange={this.handleChange}
                            placeholder="Add New TO-DO"
                        />
                        <button
                            type="submit"
                            className="button"
                        >
                            Add Todo
                        </button>
                    </form>
                    <div>
                        {todo.map((todo) => (
                            <Paper
                                key={todo.id}
                                className="flex todo_container"
                            >
                                <Checkbox
                                    checked={todo.completed}
                                    onClick={() => this.handleUpdate(todo.id)}
                                    color="primary"
                                />
                                <div
                                    className={
                                        todo.completed
                                            ? "todo line_through"
                                            : "todo"
                                    }
                                >
                                    {todo.todo}
                                </div>
                                <Button
                                    onClick={() => this.handleDelete(todo._id)}
                                    color="secondary"
                                >
                                    delete
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